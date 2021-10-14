import React from "react";
import { BookMobileStyled } from "./BookMobileStyled";

const BookMobile = ({ book }) => {
  return (
    <BookMobileStyled>
      <div className="iconWrapper">
        <svg className="iconSvg">
          <use className="icon" href="" />
        </svg>
      </div>
      <div className="bookInfo">
        <h3 className="bookName">{book.name}</h3>
        <span>
          <span>Автор: </span>
          <p>{book.author}</p>
        </span>

        <span>
          <span>Рік:</span>
          <p>{book.year}</p>
        </span>

        <span>
          <span>Стор.:</span>
          <p>{book.pages}</p>
        </span>
      </div>
    </BookMobileStyled>
  );
};

export default BookMobile;
