import React from "react";
import ModalMyTrainingStyled from "./ModalMyTrainingStyled";

const ModalMyTraining = ({ isOpened, children }) => {
  return (
    <ModalMyTrainingStyled
      className={`modalWrapper ${isOpened ? "open" : "close"}`}
    >
      <div className="modalBody">{children}</div>
    </ModalMyTrainingStyled>
  );
};

export default ModalMyTraining;
