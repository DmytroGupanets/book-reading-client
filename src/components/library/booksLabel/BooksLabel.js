import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../App";
import { BooksLabelStyled } from "./BooksLabelStyled";

const BooksLabel = ({ title, isPC }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const isCompleted = title === "Already read" || "Прочитано";

  return (
    <BooksLabelStyled isCompleted={isCompleted} colors={theme}>
      <h1 className="title">{title}</h1>
      <div className="labelWrapper">
        <span className="labelName">{t("Book title")}</span>
        <span className="labelAuthor">{t("Author m")}</span>
        <span className="labelYear">{t("Year m")}</span>
        <span className="labelPages">{t("Pages")}</span>
        {isCompleted && !isPC && (
          <span className="labelRating">{t("Rating m")}</span>
        )}
        {isCompleted && isPC && (
          <span className="labelRating">{t("Rating")}</span>
        )}
      </div>
    </BooksLabelStyled>
  );
};

export default BooksLabel;
