import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import arrowIcon from "../../../images/auth/arrow.svg";
import { MobileAuthStyled } from "./MobileAuthStyled";
import colors from "../../../styles/lightColors";

const MobileAuth = () => {
  const { t } = useTranslation();

  return (
    <MobileAuthStyled colors={colors}>
      <h2 className="title">Books Reading</h2>
      <p className="listTitle">{t("Will help you to")}</p>
      <ul className="list">
        <li className="listItem">
          <svg className="arrowIcon" width="5" height="10">
            <use href={arrowIcon + "#icon-arrow"}></use>
          </svg>
          <span className="listText">
            {t("Create your goal faster and proceed to read")}
          </span>
        </li>
        <li className="listItem">
          <svg className="arrowIcon" width="5" height="10">
            <use href={arrowIcon + "#icon-arrow"}></use>
          </svg>
          <span className="listText">
            {t("Divide process proportionally for each day")}
          </span>
        </li>
        <li className="listItem">
          <svg className="arrowIcon" width="5" height="10">
            <use href={arrowIcon + "#icon-arrow"}></use>
          </svg>
          <span className="listText"> {t("Track your success")}</span>
        </li>
      </ul>
      <p className="listTitle">{t("You may also")}</p>
      <ul className="list">
        <li className="listItem">
          <svg className="arrowIcon" width="5" height="10">
            <use href={arrowIcon + "#icon-arrow"}></use>
          </svg>
          <span className="listText">
            {t("Pose your own independent point of view")}
          </span>
        </li>
        <li className="listItem">
          <svg className="arrowIcon" width="5" height="10">
            <use href={arrowIcon + "#icon-arrow"}></use>
          </svg>
          <span className="listText">
            {t("Improve your professional skills according to new knowledge")}
          </span>
        </li>
        <li className="listItem">
          <svg className="arrowIcon" width="5" height="10">
            <use href={arrowIcon + "#icon-arrow"}></use>
          </svg>
          <span className="listText">
            {t("Become an interesting interlocutor")}
          </span>
        </li>
      </ul>
      <div className="linkContainer">
        <Link to="/auth/login" className="loginLink">
          {t("Login")}
        </Link>
        <Link to="/auth/register" className="registerLink">
          {t("Registration")}
        </Link>
      </div>
    </MobileAuthStyled>
  );
};

export default MobileAuth;
