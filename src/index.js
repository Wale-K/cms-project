import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import printMe from "./print.js";

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

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
