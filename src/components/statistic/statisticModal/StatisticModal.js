import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import StatisticModalStyled from "./StatisticModalStyled";
import sprite from "./sprite.svg";
import quotes from "../../quotes/en/quotesEN.json";
import quotesIcon from "../../../images/auth/quotes.svg";
import { ThemeContext } from "../../App";

const quotesArray = JSON.parse(JSON.stringify(quotes));
const min = 1; // включая
const max = 41; // исключая
const randomInt = Math.floor(Math.random() * (max - min) + min);
const quotesArrayElement = quotesArray[randomInt];
// console.log(`quotesArrayElement`, quotesArrayElement);
const randomQuote = Object.values(quotesArrayElement)[1];
const randomAuthor = Object.values(quotesArrayElement)[2];
// console.log(randomQuote);
// console.log(randomAuthor);

const StatisticModal = ({ onClose }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <StatisticModalStyled colors={theme}>
      <div className="StatisticModalWrapper">
        <svg className="StatisticModalIcon">
          <use href={sprite + "#icon-hand"} width="45"></use>
        </svg>
        <p className="StatisticModalText">
          {t("Well done,")} <br />{" "}
          {t("but you need to be a little bit faster!")} <br />{" "}
          {t("Next time you will succeed)")}
        </p>
        <div className="StatisticModalQuote">
          <svg className="quotesIcon" width="25" height="20">
            <use href={quotesIcon + "#icon-quotes"}></use>
          </svg>
          <p className="StatisticModalQuoteText">"{t(randomQuote)}"</p>
          <p className="StatisticModalAuthorText">{t(randomAuthor)}</p>
        </div>
        <button
          type="button"
          className="StatisticModalButton"
          onClick={onClose}
        >
          Ok
        </button>
      </div>
    </StatisticModalStyled>
  );
};
export default StatisticModal;
