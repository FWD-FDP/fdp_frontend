import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchBar";
import { useLocation } from "react-router-dom";

function MainLayout({ children }) {
  // navlinks
  const navLinks = [
    { url: "home", label: "HOME" },
    { url: "search", label: "SEARCH" },
    { url: "contacts", label: "ABOUT" },
  ];

  // location
  const location = useLocation();
  console.log("main location::", location);

  return (
    <div id="main">
      <Header>
        <Navbar links={navLinks} />
        <SearchBar placeholder={"f.e APPl or Apple"} />
      </Header>
      <div id="main-content" className={"container p-4"}>
        {children}
      </div>
      <footer className="container bottom-0 py-4 border-top">
        <div className="row">
          <div className="col-12 col-md-6 fw-bold">FDP limited </div>
          <div className="col-12 col-md-6 text-end">
            All right reserved, &#169; copyright 2022
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
