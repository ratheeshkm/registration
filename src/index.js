import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/main.css";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
