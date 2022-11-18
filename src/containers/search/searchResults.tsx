import React, { Component } from "react";
import queryString from 'query-string';
import SearchList from "../../components/resultList";
import { finnhubClient } from "../../api/finnhub/client";
import { withRouter } from "../../utils";


class SearchResults extends Component {
  state = {
    data: [],
  }

  constructor(props) {
    super(props);
  }

  getSymbolSearch(): void {
    const params = queryString.parse(this.props.location.search);
  
    if (!params.stock) {
      return;
    }

    finnhubClient.symbolSearch(params.stock, (e, symbolSearch, r) => {
      if (!e && symbolSearch) {
        console.log(symbolSearch)
        this.setState({
          data: symbolSearch.result
        });
      };
    });
  }

  componentDidMount(): void {
    this.getSymbolSearch();
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    const prevParams = queryString.parse(prevProps.location.search);
    const params = queryString.parse(this.props.location.search);
    if (params.stock !== prevParams.stock) {
      this.getSymbolSearch();
    }
  }

  render() {
    return (
      <section id="search-results" className="col-12 col-md-8 mx-auto">
        <h3 className="mb-4">Stocks Found</h3>
        <SearchList list={this.state.data} />
      </section>
    );
  }

}

export default withRouter(SearchResults);
