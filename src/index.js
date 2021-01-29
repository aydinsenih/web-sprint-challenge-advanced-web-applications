import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./styles.scss";
const { worker } = require("./mocks/browser");

worker.start();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
