import React, { Component } from "react";
import FeedList from "../components/feed/feedList";
import { finnhubClient } from "../api/finnhub/client";

class HomePage extends Component {
  state = {
    data: []
  }

  constructor(props) {
    super(props);
  }

  getMarketNews(): void {
    finnhubClient.marketNews("general", {}, (e, marketNews, r) => {
      if (!e && marketNews) {
        this.setState({
          data: marketNews
        });
      };
    });
  }

  componentDidMount(): void {
    this.getMarketNews();
  }

  render() {
    return (
      <section id="feeds mb-3">
        <h3 className="mb-4">Recent News</h3>
        <FeedList list={this.state.data} />
      </section>
    );
  }

}

export default HomePage;
