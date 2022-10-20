import React from "react";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand text-white">
        <div className="me-auto">FDP</div>
        <ul className="navbar-nav">
          <li className="nav-link">
            <a href="/home">HOME</a>
          </li>
          <li className="nav-link">
            <a href="/home">SEARCH</a>
          </li>
          <li className="nav-link">
            <a href="/home">CONTACTS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
