import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../modal/Modal";
import TeamModal from "../teamModal/TeamModal";
import FooterStyled from "./FooterStyled";
import footerBookIcon from "./footerBookIcon.svg";
// import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import { ThemeContext } from "../App";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((state) => !state);
  };

  const { t } = useTranslation();

  return (
    <FooterStyled colors={theme}>
      <div className="FooterWrapper">
        <p className="FooterText">
          <svg className="FooterIcon" width="18" height="18">
            <use href={footerBookIcon + "#footerBookIcon"}></use>
          </svg>
          <b> Books Reading </b>© 2021 | {t("All Rights Reserved")} |{" "}
          {t("Developed by")}
          <button type="button" class="FooterButton" onClick={toggleModal}>
            {t("GoIT Students")}
          </button>
        </p>
        {/* <ThemeSwitcher /> */}
        {showModal && (
          <Modal onClose={toggleModal}>
            <TeamModal onClose={toggleModal} />
          </Modal>
        )}
      </div>
    </FooterStyled>
  );
}
