import React from "react";
import ModalMyTrainingStyled from "./ModalMyTrainingStyled";
import sprite from "../../../images/sprite.svg";

const ModalMyTraining = ({ isOpened, children, toggleModal }) => {
  return (
    <ModalMyTrainingStyled
      className={`modalWrapper ${isOpened ? "open" : "close"}`}
    >
      <button className="modalBackButton" onClick={toggleModal}>
        <svg className="modalBackIcon">
          <use href={sprite + "#icon-back"} />
        </svg>
      </button>
      <div className="modalBody">{children}</div>
    </ModalMyTrainingStyled>
  );
};

export default ModalMyTraining;
