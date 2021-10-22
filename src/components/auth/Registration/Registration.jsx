import { useContext } from "react";
import { useTranslation } from "react-i18next";
import arrowIcon from "../../../images/auth/arrow.svg";
import { ThemeContext } from "../../App";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { RegistrationStyled } from "./RegistrationStyled";

const Registration = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="authContainer">
      <div className="leftSideContainer">
        <RegistrationForm />
      </div>
      <div className="rightSideContainer">
        <RegistrationStyled colors={theme}>
          <h2 className="title">Books Reading</h2>
          <p className="listTitle">{t("Will help you to")}</p>
          <ul className="list">
            <li className="listItem">
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              {t("Create your goal faster and proceed to read")}
            </li>
            <li className="listItem">
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              {t("Divide process proportionally for each day")}
            </li>
            <li className="listItem">
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              {t("Track your success")}
            </li>
          </ul>
          <p className="listTitle">{t("You may also")}</p>
          <ul className="list">
            <li className="listItem">
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              {t("Pose your own independent point of view")}
            </li>
            <li className="listItem">
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              {t("Improve your professional skills according to new knowledge")}
            </li>
            <li className="listItem">
              <svg className="arrowIcon" width="5" height="10">
                <use href={arrowIcon + "#icon-arrow"}></use>
              </svg>
              {t("Become an interesting interlocutor")}
            </li>
          </ul>
        </RegistrationStyled>
      </div>
    </div>
  );
};

export default Registration;
