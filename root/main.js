import "./main.scss";
import Garfish from "garfish";

const localApps = [
  {
    name: "Form",
    entry: "http://localhost:3001",
    domGetter: "#form",
    sandbox: false,
  },
  {
    name: "List",
    entry: "http://localhost:3002",
    domGetter: "#list",
    sandbox: false,
  },
];

const loadApp = async (name, args) => {
  const app = await Garfish.loadApp(name, args);
  if (!app.mounted) await app.mount();
  app.show();
  return app;
};

let formApp;
let listApp;

const loadApps = async () => {
  const formDOM = document.getElementById("form");
  formApp = await loadApp("Form", {
    props: {
      height: formDOM.offsetHeight,
      width: formDOM.offsetWidth,
    },
  });

  const listDOM = document.getElementById("form");
  listApp = await loadApp("List", {
    props: {
      height: listDOM.offsetHeight,
      width: listDOM.offsetWidth,
    },
  });
};

const GarfishInit = async () => {
  const app = document.getElementById("app");

  console.log("Garfish start with apps: ", localApps);
  try {
    Garfish.registerApp(localApps);
    await loadApps();

    app.removeAttribute("hidden");
  } catch (err) {
    console.error(err);
  }
};
GarfishInit();
