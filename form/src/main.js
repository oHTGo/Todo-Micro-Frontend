import { vueBridge } from "@garfish/bridge";
import { createApp, h } from "vue";
import App from "./App.vue";

export const provider = vueBridge({
  createApp,
  rootComponent: App,
  loadRootComponent: ({ dom, props }) => {
    dom.style.width = props.width + "px";
    dom.style.height = props.height + "px";
    return Promise.resolve(App);
  },
  appOptions: () => ({
    el: "#form-app",
    render() {
      return h(App);
    },
  }),
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

  const vueInstance = createApp(App);
  vueInstance.mount(document.querySelector("#form-app"));
}
