import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import arrowIcon from "../../../images/auth/arrow.svg";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { RegistrationStyled } from "./RegistrationStyled";
import { useSelector } from "react-redux";
import { getConfirmEmail } from "../../../redux/auth/authSelectors";
import { useDispatch } from "react-redux";
import { registerReset } from "../../../redux/auth/authActions";
import { useCallback } from "react";
import { useHistory } from "react-router";
import colors from "../../../styles/lightColors";

const Registration = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const confirmEmail = useSelector(getConfirmEmail);
  const history = useHistory();

  useEffect(() => {
    return () => {
      dispatch(registerReset());
    };
  }, [dispatch]);

  const onConfirmEmailOk = useCallback(() => {
    history.push("/auth/login");
  }, [history]);

  return (
    <div className="authContainer">
      <div className="leftSideContainer">
        {confirmEmail ? (
          <div className="confirmContainer">
            <div className="confirmMassage">
              {t("Please confirm your email address")}
            </div>
            <button
              className="confirmButton"
              type="button"
              onClick={onConfirmEmailOk}
            >
              OK
            </button>
          </div>
        ) : (
          <RegistrationForm />
        )}
      </div>
      <div className="rightSideContainer">
        <RegistrationStyled colors={colors}>
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
