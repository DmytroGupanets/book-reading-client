import React, { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { ModalResumeStyled } from "./ModalResumeStyled";
import starsRating from "../../../images/rating-stars.svg";
import { useDispatch } from "react-redux";
import { addBookResumeByIdOperation } from "../../../redux/books/booksOperations";
import { ThemeContext } from "../../App";

const ModalResume = ({ onClose, bookId, openForm }) => {
  const emptyStar = starsRating + "#star-active-empty";
  const filledStar = starsRating + "#star-active";
  const [stars, setStars] = useState(0);
  const [textArea, setTextArea] = useState("");
  const [amountSymbols, setAmountSymbols] = useState(1000);
  const [warning, setWarning] = useState(false);

  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const onHandleClose = () => {
    openForm(true);
    onClose();
  };

  const onClickHandleSubmit = () => {
    const resume = {
      rating: stars,
      text: textArea,
    };

    dispatch(addBookResumeByIdOperation(bookId, resume));
    openForm(true);
    onClose();
  };

  const ratingChanged = (e) => {
    setStars(e);
  };

  const onTextInput = (e) => {
    const text = e.target.value;
    setTextArea(text);

    const symbolsRemaining = 1000 - text.length;

    if (symbolsRemaining <= 10) setWarning(true);
    if (symbolsRemaining > 10 && warning === true) setWarning(false);
    setAmountSymbols(symbolsRemaining);
  };

  return (
    <ModalResumeStyled colors={theme} warning={warning}>
      <p className="chooseRating">Обрати рейтинг книги</p>
      <ReactStars
        count={5}
        onChange={ratingChanged}
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

      <label className="resumeLabel" htmlFor="resumeText">
        Резюме
        <textarea
          className="ResumeTextArea"
          type="text"
          name="resumeText"
          value={textArea}
          placeholder="..."
          onChange={onTextInput}
          maxLength="1000"
        />
        <p className="symbolsAmount">Осталось {amountSymbols} символов</p>
      </label>

      <div className="buttonsWrapper">
        <button
          className="resumeModalBackBtn"
          type="button"
          onClick={onHandleClose}
        >
          Назад
        </button>
        <button
          className="resumeModalSubmitBtn"
          type="button"
          onClick={onClickHandleSubmit}
        >
          Зберегти
        </button>
      </div>
    </ModalResumeStyled>
  );
};

export default ModalResume;
