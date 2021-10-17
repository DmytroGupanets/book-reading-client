import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcherStyled } from "./LanguageSwitcherStyled";
import colors from "../styles/colors";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <LanguageSwitcherStyled colors={colors}>
        {i18n.language === "en" && (
          <button className="langBtn" onClick={() => i18n.changeLanguage("ru")}>
            EN
          </button>
        )}
        {i18n.language === "ru" && (
          <button className="langBtn" onClick={() => i18n.changeLanguage("ua")}>
            RU
          </button>
        )}
        {i18n.language === "ua" && (
          <button className="langBtn" onClick={() => i18n.changeLanguage("en")}>
            UA
          </button>
        )}
      </LanguageSwitcherStyled>
    </>
  );
};

export default LanguageSwitcher;
