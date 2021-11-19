import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import printMe from "./print.js";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const title = "React with Webpack and Babel";

ReactDOM.render(<App title={title} />, document.getElementById("app"));

module.hot.accept();

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  //  Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "London"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  const myIcon = new Image(100, 100);
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
