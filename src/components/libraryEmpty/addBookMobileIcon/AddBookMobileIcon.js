import React, { useContext } from "react";
import { AddBookMobileIconStyled } from "./AddBookMobileIconStyled";
import addIcon from "../../../images/Training/sprite.svg";
import { ThemeContext } from "../../App";

const AddBookMobileIcon = ({ toggleModal }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <AddBookMobileIconStyled className="addBookMobile" colors={theme}>
      <button className="addBookBtn" type="button">
        <svg className="addBookModalSvg" onClick={toggleModal}>
          <use className="addBookModalIcon" href={addIcon + "#icon-plus"} />
        </svg>
      </button>
    </AddBookMobileIconStyled>
  );
};

export default AddBookMobileIcon;
