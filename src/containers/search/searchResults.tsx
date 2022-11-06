import React from "react";
import SearchList from "../../components/resultList";
import { useLocation } from "react-router-dom";

function SearchResults() {
  // check for search params
  const { search } = useLocation();
  // With search param from url
  // make Api call here
  // Set Use effect to make api when ever search param changes in url
  console.log("search params:", search);

  return (
    <section id="search-results" className="col-12 col-md-8 mx-auto">
      <h3 className="mb-4">Stock Found</h3>
      <SearchList list={mockData} />
    </section>
  );
}

export default SearchResults;

const mockData = [
  {
    id: "1",
    name: "Apple",
    symbol: "APPL",
    price: 454,
  },
  {
    id: "2",
    name: "Apple",
    symbol: "APPL",
    price: 454,
  },
  {
    id: "13",
    name: "Apple",
    symbol: "APPL",
    price: 454,
  },
  {
    id: "144",
    name: "Apple",
    symbol: "APPL",
    price: 454,
  },
  {
    id: "145",
    name: "Apple",
    symbol: "APPL",
    price: 454,
  },
  {
    id: "14545",
    name: "Apple",
    symbol: "APPL",
    price: 454,
  },
];
