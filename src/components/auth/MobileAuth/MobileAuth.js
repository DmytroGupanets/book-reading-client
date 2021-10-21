import { useContext } from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../../images/auth/arrow.svg";
import { MobileAuthStyled } from "./MobileAuthStyled";
import { ThemeContext } from "../../App";

const MobileAuth = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <MobileAuthStyled colors={theme}>
      <h2 className="title">Books Reading</h2>
      <p className="listTitle">Допоможе вам</p>
      <ul className="list">
        <li className="listItem">
          <svg className="arrowIcon" width="5" height="10">
            <use href={arrowIcon + "#icon-arrow"}></use>
          </svg>
          <span className="listText">
            Швидше сформулювати свою ціль і розпочати читати
          </span>
        </li>
        <li className="listItem">
          <svg className="arrowIcon" width="5" height="10">
            <use href={arrowIcon + "#icon-arrow"}></use>
          </svg>
          <span className="listText">
            Пропорційно розподілити навантаження на кожний день
          </span>
        </li>
        <li className="listItem">
          <svg className="arrowIcon" width="5" height="10">
            <use href={arrowIcon + "#icon-arrow"}></use>
          </svg>
          <span className="listText">Відстежувати особистий успіх</span>
        </li>
      </ul>
      <p className="listTitle">Також ви зможете</p>
      <ul className="list">
        <li className="listItem">
          <svg className="arrowIcon" width="5" height="10">
            <use href={arrowIcon + "#icon-arrow"}></use>
          </svg>
          <span className="listText">
            Формувати особисту думку незалежну від інших
          </span>
        </li>
        <li className="listItem">
          <svg className="arrowIcon" width="5" height="10">
            <use href={arrowIcon + "#icon-arrow"}></use>
          </svg>
          <span className="listText">
            Підвищити свої професійні якості опираючись на нові знання
          </span>
        </li>
        <li className="listItem">
          <svg className="arrowIcon" width="5" height="10">
            <use href={arrowIcon + "#icon-arrow"}></use>
          </svg>
          <span className="listText">Стати цікавим співрозмовником</span>
        </li>
      </ul>
      <div className="linkContainer">
        <Link to="/auth/login" className="loginLink">
          Увійти
        </Link>
        <Link to="/auth/register" className="registerLink">
          Реєстрація
        </Link>
      </div>
    </MobileAuthStyled>
  );
};

export default MobileAuth;
