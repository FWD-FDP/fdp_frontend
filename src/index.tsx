import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./styles/App.css";

import App from "./app";

export default () => <App />;

export const mount = (Component) => {
  ReactDom.render(<Component />, document.getElementById("app"));

  if (module.hot) {
    module.hot.accept("./app", () => {
      ReactDom.render(<App />, document.getElementById("app"));
    });
  }
};

export const unmount = () => {
  ReactDom.unmountComponentAtNode(document.getElementById("app"));
};
