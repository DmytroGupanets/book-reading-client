import React from "react";
import ReactDOM from "react-dom";
import GlobalFonts from "./fonts/fonts";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./i18n";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalFonts />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
