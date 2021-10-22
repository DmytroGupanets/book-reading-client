import React, { useEffect } from "react";
import ModalStyled from "./ModalStyled";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", onHandleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onHandleEsc);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const onHandleEsc = (e) => e.code === "Escape" && onClose();

  const onHandleClick = (e) => e.target === e.currentTarget && onClose();

  return (
    <ModalStyled>
      <div className="ModalOverlay" onClick={onHandleClick}>
        <div className="Modal">{children}</div>
      </div>
    </ModalStyled>
  );
};

export default Modal;
