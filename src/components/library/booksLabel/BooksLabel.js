import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { BooksLabelStyled } from "./BooksLabelStyled";

const BooksLabel = ({ title, isPC }) => {
  const { theme } = useContext(ThemeContext);

  const isCompleted = title === "Прочитано";

  return (
    <BooksLabelStyled isCompleted={isCompleted} colors={theme}>
      <h1 className="title">{title}</h1>
      <div className="labelWrapper">
        <span className="labelName">Назва книги</span>
        <span className="labelAuthor">Автор</span>
        <span className="labelYear">Рік</span>
        <span className="labelPages">Стор.</span>
        {isCompleted && !isPC && (
          <span className="labelRating">Рейтинг книги</span>
        )}
        {isCompleted && isPC && <span className="labelRating">Рейтинг</span>}
      </div>
    </BooksLabelStyled>
  );
};

export default BooksLabel;
