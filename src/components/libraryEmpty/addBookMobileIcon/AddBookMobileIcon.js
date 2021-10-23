import React from "react";
import { AddBookMobileIconStyled } from "./AddBookMobileIconStyled";
import addIcon from "../../../images/sprite.svg";

const AddBookMobileIcon = () => {
  return (
    <AddBookMobileIconStyled>
      <svg className="resumeModalSvg">
        <use className="resumeModalIcon" href={addIcon + "icon-more"} />
      </svg>
    </AddBookMobileIconStyled>
  );
};

export default AddBookMobileIcon;
