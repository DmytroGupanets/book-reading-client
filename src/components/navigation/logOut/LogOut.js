import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import LogOutStyled from "./LogOutStyled";
import { ThemeContext } from "../../App";
import Modal from "../../modal/Modal";
import LogOutModal from "../logOutModal/LogOutModal";

const LogOut = () => {
  const { theme } = useContext(ThemeContext);
  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState((state) => !state);
  };

  const { t } = useTranslation();

  return (
    <LogOutStyled colors={theme}>
      <button className="logOutButton" type="button" onClick={toggleModal}>
        <span className="logOutWrapper">{t("Logout")}</span>
      </button>
      {modalState && (
        <Modal onClose={toggleModal}>
          <LogOutModal onClose={toggleModal} />
        </Modal>
      )}
    </LogOutStyled>
  );
};

export default LogOut;
