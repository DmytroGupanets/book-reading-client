import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/authOperations";
import LogOutStyled from "./LogOutStyled";
import { ThemeContext } from "../../App";

const LogOut = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(logOut());
  };

  return (
    <LogOutStyled colors={theme}>
      <button className="logOutButton" type="button" onClick={onHandleClick}>
        Вихід
      </button>
    </LogOutStyled>
  );
};

export default LogOut;
