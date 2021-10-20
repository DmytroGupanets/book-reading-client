import React from "react";
import ReactStars from "react-rating-stars-component";
import { ModalResumeStyled } from "./ModalResumeStyled";

const ModalResume = () => {
  const ratingChanged = () => {};

  return (
    <ModalResumeStyled>
      <p className="chooseRating">Обрати рейтинг книги</p>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />

      <p>Резюме</p>

      <input type="textarea" />
    </ModalResumeStyled>
  );
};

export default ModalResume;
