import React, { Component } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SearchList from "../../components/resultList";
import { finnhubClient } from "../../api/finnhub/client";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} {...{location, navigate, params}} />;
  }

  return ComponentWithRouterProp;
}

class SearchResults extends Component {
  state = {
    data: [],
  }

  constructor(props) {
    super(props);
  }

  getSymbolSearch(): void {
    // const location = useLocation();
    const search = this.props.location.search;
    const symbol = search.replace('?stock=', '');

    finnhubClient.symbolSearch(symbol, (e, symbolSearch, r) => {
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
