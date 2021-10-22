import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import sprite from "../../images/sprite.svg";
import { ThemeContext } from "../App";
import { AddBookModalStyled } from "./AddBookModalStyled";

const AddBookModal = ({ onClose }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const onHadleClick = () => {
    onClose();
  };

  return (
    <AddBookModalStyled colors={theme}>
      <p className="step">{t("Step 1.")}</p>
      <div className="stepContainer">
        <svg className="librarySvg">
          <use href={sprite + "#icon-library"} />
        </svg>
        <p className="stepOne">{t("Create your own library.")}</p>
      </div>
      <div className="aboutStep">
        <svg className="vectorSvg">
          <use href={sprite + "#icon-Vector"} />
        </svg>
        <p className="aboutStepOne">
          {t("Add there books which you are going to read.")}
        </p>
      </div>
      <p className="step">{t("Step 2.")}</p>
      <div className="stepContainer">
        <svg className="flagSvg">
          <use href={sprite + "#icon-flag"} />
        </svg>
        <p className="stepTwo">{t("Create your first training.")}</p>
      </div>
      <div className="aboutStep">
        <svg className="vectorSvg">
          <use href={sprite + "#icon-Vector"} />
        </svg>
        <p className="aboutStepTwo">
          {t("Set a goal, choose a period, start training.")}
        </p>
      </div>
      <button type="button" className="btnOk" onClick={onHadleClick}>
        Ok
      </button>
    </AddBookModalStyled>
  );
};

export default AddBookModal;

// const AddBookModal = ({children, handleCloseModal}) => {

//     useEffect(() => {
//         window.addEventListener("keydown", handleEsc);
//         const body = document.querySelector("body");
//         body.style.overflow = "hidden";
//         return () => {
//           window.removeEventListener("keydown", handleEsc);
//           const body = document.querySelector("body");
//           body.style.overflow = "auto";
//         };
//       });

//       const handleEsc = (e) => e.code === "Escape" && handleCloseModal();

//       const handleClick = (e) => e.target === e.currentTarget && handleCloseModal();

//     return (
//         <div className="addBook" onClick={handleClick}>{children}</div>
//     );
// }

// export default AddBookModal;
