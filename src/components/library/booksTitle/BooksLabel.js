import React from "react";
import { BooksLabelStyled } from "./BooksLabelStyled";

const BooksLabel = ({ title, isPC }) => {
  const isCompleted = title === "Прочитано";

  return (
    <BooksLabelStyled isCompleted={isCompleted}>
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
