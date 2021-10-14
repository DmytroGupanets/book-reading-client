import React from "react";
import ReactDOM from "react-dom";
import GlogalFonts from "./fonts/fonts";
import "../node_modules/modern-normalize/modern-normalize.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <GlogalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
