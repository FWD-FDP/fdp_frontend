import React from "react";
import Navbar from "../components/navbar";
import bg from "../assets/images/header_bg.png";

function HeaderLayout(props) {
  return (
    <div
      className={"text-white"}
      style={{
        backgroundImage: `url(${bg})`,
        height: 393,
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className={"container"}>{props.children}</div>
    </div>
  );
}

export default HeaderLayout;
