import React from "react";
import { BookMobileStyled } from "./BookMobileStyled";

import bookIcon from "../../../images/book.svg";

const BookMobile = ({ book }) => {
  return (
    <BookMobileStyled>
      <div className="iconWrapper">
        <svg className="iconSvg">
          <use className="icon" href={bookIcon + "#book"} />
        </svg>
      </div>
      <div className="bookInfo">
        <h3 className="bookName">{book.name}</h3>
        <div className="authorField">
          <span className="authorTitle">Автор: </span>
          <span className="authorName">{book.author}</span>
        </div>

        <div className="yearField">
          <span className="yearTitle">Рік:</span>
          <span className="year">{book.year}</span>
        </div>

        <div className="pagesField">
          <span className="pagesTitle">Стор.:</span>
          <span className="pages">{book.pages}</span>
        </div>
      </div>
    </BookMobileStyled>
  );
};

export default BookMobile;
