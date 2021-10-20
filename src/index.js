import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";

function component() {
  const element = document.createElement("div");

  //  Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "London"], " ");
  element.classList.add("hello");

  const myIcon = new Image(100, 100);
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
