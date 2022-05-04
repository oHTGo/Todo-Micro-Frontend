import { reactBridge } from "@garfish/bridge";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const provider = reactBridge({
  React,
  ReactDOM,
  el: "#list-app",
  rootComponent: App,
  loadRootComponent: ({ dom, props }) => {
    dom.style.width = props.width + "px";
    dom.style.height = props.height + "px";
    return Promise.resolve(App);
  },
});

if (window.__GARFISH__ && typeof __GARFISH_EXPORTS__ !== "undefined") {
  __GARFISH_EXPORTS__.provider = provider;
}

if (!window.__GARFISH__) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css";
  document.querySelector("head").appendChild(link);

  const bodyDOM = document.querySelector("body");
  bodyDOM.style.width = "100vw";
  bodyDOM.style.height = "100vh";
  bodyDOM.style.background = "#3f3f3f";

  ReactDOM.render(<App />, document.querySelector("#list-app"));
}
