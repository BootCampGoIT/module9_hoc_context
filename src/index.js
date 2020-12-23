import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

function getData() {
  const text = "Hello";
  return function () {
    console.log(text);
  };
}

const func = getData();
func()
