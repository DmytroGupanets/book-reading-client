import { useContext } from "react";
import arrowIcon from "../../../images/auth/arrow.svg";
import { ThemeContext } from "../../App";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { RegistrationStyled } from "./RegistrationStyled";

const Registration = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="authContainer">
      <div className="leftSideContainer">
        <RegistrationForm />
      </div>
      <div className="rightSideContainer">
        <RegistrationStyled colors={theme}>
          <h2 className="title">Books Reading</h2>
          <p className="listTitle">Допоможе вам</p>
          <ul className="list">
            <li className="listItem">
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              Швидше сформулювати свою ціль і розпочати читати
            </li>
            <li className="listItem">
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              Пропорційно розподілити навантаження на кожний день
            </li>
            <li className="listItem">
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              Відстежувати особистий успіх
            </li>
          </ul>
          <p className="listTitle">Також ви зможете</p>
          <ul className="list">
            <li className="listItem">
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              Формувати особисту думку незалежну від інших
            </li>
            <li className="listItem">
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              Підвищити свої професійні якості опираючись на нові знання
            </li>
            <li className="listItem">
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              Стати цікавим співрозмовником
            </li>
          </ul>
        </RegistrationStyled>
      </div>
    </div>
  );
};

export default Registration;
