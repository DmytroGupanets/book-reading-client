import React from "react";
import StatisticModalStyled from "./StatisticModalStyled";
import sprite from "./sprite.svg";
import Modal from "../../modal/Modal";
import quotes from "../../quotes/ua/quotesUA.json";
import quotesIcon from "../../../images/auth/quotes.svg";

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
  return (
    <Modal>
      <StatisticModalStyled>
        <div className="StatisticModalWrapper">
          <svg className="StatisticModalIcon">
            <use href={sprite + "#icon-hand"} width="45"></use>
          </svg>
          <p className="StatisticModalText">
            Ти молодчина, <br /> але потрібно швидше! <br /> Наступного разу
            тобі все вдасться)
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
            onClick={onClose}
          >
            Ok
          </button>
        </div>
      </StatisticModalStyled>
    </Modal>
  );
};
export default StatisticModal;
