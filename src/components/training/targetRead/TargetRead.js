import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getInProgressdBooks } from "../../../redux/books/booksSelectors";
import {
  endDate,
  getIdxOfReadedBooksInTraining,
  startDate,
} from "../../../redux/target/targetSelectors";
import useDate from "../../../hooks/useDate";

import TargetReadStyled from "./TargetReadStyled";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next";

const TargetRead = ({ state }) => {

  const { t } = useTranslation();

  const { theme } = useContext(ThemeContext);

  const [
    stateData,
    moment,
    setCurrentData,
    setQuantityBetweenDays,
    rangeBetwenStartAndEndDates,
  ] = useDate();

  const start = useSelector(startDate);
  const end = useSelector(endDate);
  const booksInProgress = useSelector(getInProgressdBooks);
  const idxOfReadedBooksInTraining = useSelector(getIdxOfReadedBooksInTraining);

  useEffect(() => {}, []);

  const quantityDays = start && end && rangeBetwenStartAndEndDates(start, end);

  return (
    <TargetReadStyled colors={theme} state={state}>
      <div className="tabletWrapperStyled">
        <div className="titleWrapper">
          <h3 className="targetReadTitle">{t("My goals")}</h3>
        </div>
      </div>

      <ul className="targetReadlist">
        <li className="targetReadItem">
          <div className="targetReadDig">{booksInProgress.length}</div>
          <p className="targetReadItemDescription">{t("Amount of books")}</p>
        </li>
        <li className="targetReadItem">
          <div className="targetReadDig">{quantityDays}</div>
          <p className="targetReadItemDescription">{t("Amount of days")}</p>
        </li>
        {state && (
          <li className="targetReadItem">
            <div className="targetReadDigRemain">
              {idxOfReadedBooksInTraining === -1
                ? booksInProgress.length
                : booksInProgress.slice(
                    idxOfReadedBooksInTraining,
                    booksInProgress.length - 1
                  ).length}
            </div>
            <p className="targetReadItemDescription">{t("Books left")}</p>
          </li>
        )}
      </ul>
    </TargetReadStyled>
  );
};

export default TargetRead;
