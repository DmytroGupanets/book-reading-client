import React from "react";
import ReactDOM from "react-dom";
import GlobalFonts from "./fonts/fonts";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
