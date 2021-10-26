import React, { useContext } from "react";
import StatisticModalStyled from "./StatisticModalStyled";
import sprite from "./sprite.svg";
import quotes from "../../quotes/ua/quotesUA.json";
import quotesIcon from "../../../images/auth/quotes.svg";
import { ThemeContext } from "../../App";
import { getTargetId } from "../../../redux/target/targetSelectors";
import { useDispatch, useSelector } from "react-redux";
import { completeTargetOperation } from "../../../redux/target/targetOperations";
import { useTranslation } from "react-i18next";

const quotesArray = JSON.parse(JSON.stringify(quotes));
const min = 1; // включая
const max = 41; // исключая
const randomInt = Math.floor(Math.random() * (max - min) + min);
const quotesArrayElement = quotesArray[randomInt];
const randomQuote = Object.values(quotesArrayElement)?.[1];
const randomAuthor = Object.values(quotesArrayElement)?.[2];

const StatisticModal = ({ onClose }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const targetId = useSelector(getTargetId);
  const dispatch = useDispatch();

  const onHandleCloseModal = () => {
    onClose();
    dispatch(completeTargetOperation(targetId));
  };

  return (
    <StatisticModalStyled colors={theme}>
      <div className="StatisticModalWrapper">
        <svg className="StatisticModalIcon">
          <use href={sprite + "#icon-hand"} width="45"></use>
        </svg>
        <p className="StatisticModalText">
          {t("Well done!")} <br />
          {t("but you need to be a little bit faster!")} <br />
          {t("Next time you will succeed)")}
        </p>
        <div className="StatisticModalQuote">
          <svg className="quotesIcon" width="25" height="20">
            <use href={quotesIcon + "#icon-quotes"}></use>
          </svg>
          <p className="StatisticModalQuoteText">"{randomQuote}"</p>
          <p className="StatisticModalAuthorText">{randomAuthor}</p>
        </div>
        <button
          type="button"
          className="StatisticModalButton"
          onClick={onHandleCloseModal}
        >
          Ok
        </button>
      </div>
    </StatisticModalStyled>
  );
};
export default StatisticModal;
