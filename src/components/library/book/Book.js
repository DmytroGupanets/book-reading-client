import React, { useContext, useState } from "react";
import { BookStyled } from "./BookStyled";
import bookIcon from "../../../images/books-sprite.svg";
import RatingStars from "../ratingStars/RatingStars";
import Modal from "../../modal/Modal";
import ModalResume from "../modalResume/ModalResume";
import ModalFilled from "../modalResume/modalFilled.js/ModalFilled";
import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next";

const Book = ({ book }) => {
  const [modalState, setModalState] = useState(false);
  const hasResume = Boolean(book.resume);
  const [modalForm, setModalForm] = useState(hasResume);

  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const toggleModal = () => {
    setModalState((state) => !state);
  };

  const onHandleChangeResume = (e) => {
    if (e === true) {
      return setModalForm(e);
    }
    setModalForm((state) => !state);
  };

  return (
    <BookStyled isCompleted={book.status === "completed"} colors={theme}>
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
            {t("Resume")}
          </button>
        </div>
      ) : null}
      {modalState && (
        <Modal onClose={toggleModal}>
          {modalForm ? (
            <ModalFilled
              book={book}
              onClose={toggleModal}
              openForm={onHandleChangeResume}
            />
          ) : (
            <ModalResume
              onClose={toggleModal}
              bookId={book._id}
              openForm={onHandleChangeResume}
            />
          )}
        </Modal>
      )}
    </BookStyled>
  );
};

export default Book;
