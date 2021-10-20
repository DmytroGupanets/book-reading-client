import React, { useState } from "react";
import { BookStyled } from "./BookStyled";

import bookIcon from "../../../images/books-sprite.svg";
import RatingStars from "../ratingStars/RatingStars";
import Modal from "../../modal/Modal";
import ModalResume from "../modalResume/ModalResume";

const Book = ({ book }) => {
  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState((state) => !state);
  };

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
          <RatingStars book={book} />
          <button className="resumeButton" type="button" onClick={toggleModal}>
            Резюме
          </button>
        </div>
      ) : null}
      {modalState && (
        <Modal onClose={toggleModal}>
          <ModalResume />
        </Modal>
      )}
    </BookStyled>
  );
};

export default Book;
