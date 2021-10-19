import React from "react";
import ReactDOM from "react-dom";
import GlobalFonts from "./fonts/fonts";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import "./i18n";
import { PersistGate } from "redux-persist/es/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <GlobalFonts />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
