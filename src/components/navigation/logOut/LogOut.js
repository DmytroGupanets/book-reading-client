import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/authOperations";
import LogOutStyled from "./LogOutStyled";

const LogOut = () => {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(logOut());
  };

  return (
    <LogOutStyled>
      <button className="logOutButton" type="button" onClick={onHandleClick}>
        Вихід
      </button>
    </LogOutStyled>
  );
};

export default LogOut;
