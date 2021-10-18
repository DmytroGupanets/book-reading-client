import React from "react";
import ratingStars from "../../../images/rating-stars.svg";
import { RatingStarsStyled } from "./RatingStarsStyled";

const RatingStars = ({ book }) => {
  const starsAmount = 5;
  let resumeIsNull;
  const starsToRender = [];

  if (book.resume === null) {
    resumeIsNull = ratingStars + "#empty-star";
  } else {
    for (let i = 0; i < starsAmount; i++) {
      if (i < book.resume.rating) starsToRender.push(true);
      else starsToRender.push(false);
    }
  }

  return (
    <RatingStarsStyled>
      {resumeIsNull &&
        [...Array(starsAmount)].map((e, i) => (
          <svg className="ratingSvg" key={i}>
            <use className="icon" href={resumeIsNull} />
          </svg>
        ))}
      {starsToRender.map((star, i) =>
        star ? (
          <svg className="ratingSvg" key={i}>
            <use className="icon" href={ratingStars + "#star-active"} />
          </svg>
        ) : (
          <svg className="ratingSvg" key={i}>
            <use className="icon" href={ratingStars + "#star-active-empty"} />
          </svg>
        )
      )}
    </RatingStarsStyled>
  );
};

export default RatingStars;
