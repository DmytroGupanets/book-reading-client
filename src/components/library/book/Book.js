import React from "react";
import { BookStyled } from "./BookStyled";

import bookIcon from "../../../images/books-sprite.svg";

const Book = ({ book }) => {
  return (
    <BookStyled isCompleted={book.status === "completed"}>
      {book.status === "inProgress" ? (
        <svg className="iconSvg">
          <use className="icon" href={bookIcon + "#book-active"} />
        </svg>
      ) : (
        <svg className="iconSvg">
          <use className="icon" href={bookIcon + "#book"} />
        </svg>
      )}

      <h3 className="bookName">{book.name}</h3>

      <span className="bookAuthor">{book.author}</span>

      <span className="bookYear">{book.year}</span>

      <span className="bookPages">{book.pages}</span>
      {book.status === "completed" ? (
        <div className="resume">
          <span className="bookResume">***********</span>
          <button className="resumeButton" type="button">
            КНОПКА
          </button>
        </div>
      ) : null}
    </BookStyled>
  );
};

export default Book;
