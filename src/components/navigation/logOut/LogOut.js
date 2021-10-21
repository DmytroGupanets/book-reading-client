import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { logOut } from "../../../redux/auth/authOperations";
import LogOutStyled from "./LogOutStyled";
import { ThemeContext } from "../../App";

const LogOut = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(logOut());
  };

  const { t } = useTranslation();

  return (
    <LogOutStyled colors={theme}>
      <button className="logOutButton" type="button" onClick={onHandleClick}>
        {t("Logout")}
      </button>
    </LogOutStyled>
  );
};

export default LogOut;
