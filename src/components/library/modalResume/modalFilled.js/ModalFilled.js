import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import starsRating from "../../../../images/rating-stars.svg";
import { ThemeContext } from "../../../App";
import { ModalFilledStyled } from "./ModalFilledStyled";

const ModalFilled = ({ book, onClose, openForm }) => {
  const { theme } = useContext(ThemeContext);
  const emptyStar = starsRating + "#star-active-empty";
  const filledStar = starsRating + "#star-active";

  const onHandleClose = () => {
    onClose();
  };

  const onHandleChangeResume = () => {
    openForm(false);
  };

  return (
    <ModalFilledStyled colors={theme}>
      <p className="yourRating">Рейтинг книги</p>
      <ReactStars
        value={book.resume.rating}
        count={5}
        size={16}
        activeColor="#FF6B08"
        emptyIcon={
          <i className="far fa-star">
            <svg className="resumeModalSvg">
              <use className="resumeModalIcon" href={emptyStar} />
            </svg>
          </i>
        }
        filledIcon={
          <i className="far fa-star">
            <svg className="resumeModalSvg">
              <use className="resumeModalIcon" href={filledStar} />
            </svg>
          </i>
        }
      />

      <span className="yourResume">Ваше резюме:</span>

      <p className="yourResumeText">{book.resume.text}</p>

      <div className="filledButtonsWrapper">
        <button
          className="filledResumeModalBackBtn"
          type="button"
          onClick={onHandleClose}
        >
          Назад
        </button>
        <button
          className="FilledResumeModalEditBtn"
          type="button"
          onClick={onHandleChangeResume}
        >
          Змінити
        </button>
      </div>
    </ModalFilledStyled>
  );
};

export default ModalFilled;
