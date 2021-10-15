import React from "react";
import { BookMobileStyled } from "./BookMobileStyled";

import bookIcon from "../../../images/books-sprite.svg";

const BookMobile = ({ book }) => {
  return (
    <BookMobileStyled>
      <div className="iconWrapper">
        {book.status === "inProgress" ? (
          <svg className="iconSvg">
            <use className="icon" href={bookIcon + "#book-active"} />
          </svg>
        ) : (
          <svg className="iconSvg">
            <use className="icon" href={bookIcon + "#book"} />
          </svg>
        )}
      </div>
      <div className="bookInfoWrapper">
        <h3 className="bookName">{book.name}</h3>

        <div className="bookInfo">
          <span className="bookFieldName">Автор:</span>
          <span className="bookFieldValue">{book.author}</span>
          <span className="bookFieldName">Рік:</span>
          <span className="bookFieldValue">{book.year}</span>
          <span className="bookFieldName">Стор.:</span>
          <span className="bookFieldValue">{book.pages}</span>
          {book.status === "completed" ? (
            <>
              <span className="bookFieldName">Рейтинг:</span>
              <span className="bookFieldValue">*****</span>
              <span>РЕЗЮМЕ КНОПКА</span>
            </>
          ) : null}
        </div>
      </div>
    </BookMobileStyled>
  );
};

export default BookMobile;
