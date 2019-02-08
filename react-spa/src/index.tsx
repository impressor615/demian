import "@/assets/styles/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Hello } from "@/components/Hello";
import configureStore from "@/configureStore";

const Store = configureStore();
ReactDOM.render(
  <Provider store={Store}>
    <Hello compiler="TypeScript" framework="React" />
  </Provider>,
  document.getElementById("app") as HTMLElement,
);
