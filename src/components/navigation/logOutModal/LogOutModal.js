import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/authOperations";
import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next";
import { LogOutModalStyled } from "./LogOutModalStyled";

const LogOutModal = ({ onClose }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const onHandleCancelClick = () => {
    onClose();
  };

  const onHandleLogOutClick = () => {
    onClose();
    dispatch(logOut());
    localStorage.clear();
  };

  return (
    <LogOutModalStyled colors={theme}>
      <p className="attentionText">
        {t(
          "The changes you made will be lost if you navigate away from this application"
        )}
      </p>
      <div className="logOutButtonsWrapper">
        <button
          className="logOutCancelBtn"
          type="button"
          onClick={onHandleCancelClick}
        >
          {t("Сancel")}
        </button>
        <button
          className="logOutConfirmBtn"
          type="button"
          onClick={onHandleLogOutClick}
        >
          {t("Leave this app")}
        </button>
      </div>
    </LogOutModalStyled>
  );
};

export default LogOutModal;
