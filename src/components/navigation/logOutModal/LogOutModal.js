import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/authOperations";
import { ThemeContext } from "../../App";
import { LogOutModalStyled } from "./LogOutModalStyled";

const LogOutModal = ({ onClose }) => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const onHandleCancelClick = () => {
    onClose();
  };

  const onHandleLogOutClick = () => {
    onClose();
    dispatch(logOut());
  };

  return (
    <LogOutModalStyled colors={theme}>
      <p className="attentionText">
        Якщо Ви вийдете з програми незбережені дані будуть втрачені
      </p>
      <div className="logOutButtonsWrapper">
        <button
          className="logOutCancelBtn"
          type="button"
          onClick={onHandleCancelClick}
        >
          Відміна
        </button>
        <button
          className="logOutConfirmBtn"
          type="button"
          onClick={onHandleLogOutClick}
        >
          Вийти
        </button>
      </div>
    </LogOutModalStyled>
  );
};

export default LogOutModal;
