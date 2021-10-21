import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { logOut } from "../../../redux/auth/authOperations";
import LogOutStyled from "./LogOutStyled";

const LogOut = () => {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(logOut());
  };

  const { t } = useTranslation();

  return (
    <LogOutStyled>
      <button className="logOutButton" type="button" onClick={onHandleClick}>
        {t("Logout")}
      </button>
    </LogOutStyled>
  );
};

export default LogOut;
