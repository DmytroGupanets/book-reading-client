import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoutes = ({ isAuth, restricted, path, exact, component }) =>
  isAuth && restricted ? (
    <Redirect to="/" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );

export default PublicRoutes;
