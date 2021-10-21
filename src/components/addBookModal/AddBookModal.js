import React, { useContext } from "react";
import sprite from "../../images/sprite.svg";
import { ThemeContext } from "../App";
import { AddBookModalStyled } from "./AddBookModalStyled";

const AddBookModal = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <AddBookModalStyled colors={theme}>
      <p className="step">Крок 1.</p>
      <div className="stepContainer">
        <svg className="librarySvg">
          <use href={sprite + "#icon-library"} />
        </svg>
        <p className="stepOne">Створіть особисту бібліотеку</p>
      </div>
      <div className="aboutStep">
        <svg className="vectorSvg">
          <use href={sprite + "#icon-Vector"} />
        </svg>
        <p className="aboutStepOne">
          Додайте до неї книжки, які маєте намір прочитати.
        </p>
      </div>
      <p className="step">Крок 2.</p>
      <div className="stepContainer">
        <svg className="flagSvg">
          <use href={sprite + "#icon-flag"} />
        </svg>
        <p className="stepTwo">Сформуйте своє перше тренування</p>
      </div>
      <div className="aboutStep">
        <svg className="vectorSvg">
          <use href={sprite + "#icon-Vector"} />
        </svg>
        <p className="aboutStepTwo">
          Визначте ціль, оберіть період, розпочинайте тренування.
        </p>
      </div>
      <button type="button" className="btnOk">
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
