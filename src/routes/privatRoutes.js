import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivatRoutes = ({ isAuth, path, exact, component }) =>
  isAuth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );

export default PrivatRoutes;
