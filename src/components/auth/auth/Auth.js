import React from "react";
import AuthStyled from "./AuthStyled";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

const Auth = () => {
  return (
    <AuthStyled>
      <Login />
      <Registration />
    </AuthStyled>
  );
};

export default Auth;
