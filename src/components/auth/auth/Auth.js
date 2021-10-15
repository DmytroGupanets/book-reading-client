import React from "react";
import AuthStyled from "./AuthStyled";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import { useRouteMatch } from "react-router";

const Auth = () => {
  const { url } = useRouteMatch();
  return (
    <AuthStyled>{url === "/login" ? <Login /> : <Registration />}</AuthStyled>
  );
};

export default Auth;
