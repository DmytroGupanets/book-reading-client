import React from "react";
import ReactDOM from "react-dom";
import GlobalFonts from "./fonts/fonts";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  <GlobalFonts />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
