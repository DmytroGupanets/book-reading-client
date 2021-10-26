import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcherStyled } from "./LanguageSwitcherStyled";
import { ThemeContext } from "../App";
import { getAuthenticated } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const isAuth = useSelector(getAuthenticated);

  return (
    <>
      <LanguageSwitcherStyled isAuth={isAuth} colors={theme}>
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
