import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { BookMobileStyled } from "./BookMobileStyled";
import colors from "../../../styles/colors";

import bookIcon from "../../../images/books-sprite.svg";
import RatingStars from "../ratingStars/RatingStars";
import Modal from "../../modal/Modal";
import ModalFilled from "../modalResume/modalFilled.js/ModalFilled";
import ModalResume from "../modalResume/ModalResume";
import { ThemeContext } from "../../App";

const BookMobile = ({ book }) => {
  const { t } = useTranslation();
  const [modalState, setModalState] = useState(false);
  const hasResume = Boolean(book.resume);
  const [modalForm, setModalForm] = useState(hasResume);

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
    <BookMobileStyled colors={theme}>
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
          <span className="bookFieldName">{t("Author")}:</span>
          <span className="bookFieldValue">{book.author}</span>
          <span className="bookFieldName">{t("Year")}:</span>
          <span className="bookFieldValue">{book.year}</span>
          <span className="bookFieldName">{t("Pages")}:</span>
          <span className="bookFieldValue">{book.pages}</span>
          {book.status === "completed" ? (
            <>
              <span className="bookFieldName">{t("Rating")}:</span>
              <RatingStars book={book} />
              <button
                className="resumeButtonMobile"
                type="button"
                onClick={toggleModal}
              >
                {t("Resume")}
              </button>
            </>
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
        </div>
      </div>
    </BookMobileStyled>
  );
};

export default BookMobile;
