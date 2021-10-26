import { useSelector } from "react-redux";
import { getInProgressdBooks } from "../../../redux/books/booksSelectors";
import {
  getAllSelectedBooks,
  getIdxOfReadedBooksInTraining,
  getPreplanningEndDate,
  getPreplanningStartDate,
  getTargetEndDate,
  getTargetStartDate,
} from "../../../redux/target/targetSelectors";
import useDate from "../../../hooks/useDate";

import TargetReadStyled from "./TargetReadStyled";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next";

const TargetRead = ({ isActive }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [
    stateData,
    moment,
    chengeStartDataIdx,
    setQuantityBetweenDays,
    rangeBetwenStartAndEndDates,
  ] = useDate();

  const idxOfReadedBooksInTraining = useSelector(getIdxOfReadedBooksInTraining);
  const preplanningStartDate = useSelector(getPreplanningStartDate);
  const preplanningEndDate = useSelector(getPreplanningEndDate);
  const targetStartDate = useSelector(getTargetStartDate);
  const targetEndDate = useSelector(getTargetEndDate);

  const booksInProgress = useSelector(getInProgressdBooks);
  const booksInSelected = useSelector(getAllSelectedBooks);

  const addDateFromPreplanning = () => {
    const targetQuantytyDays =
      preplanningStartDate &&
      preplanningEndDate &&
      rangeBetwenStartAndEndDates(preplanningStartDate, preplanningEndDate);

    if (targetQuantytyDays === undefined) {
      return 0;
    }

    return targetQuantytyDays.length;
  };

  const addDateFromTarget = () => {
    const targetQuantytyDays =
      targetStartDate &&
      targetEndDate &&
      rangeBetwenStartAndEndDates(targetStartDate, targetEndDate);

    if (targetQuantytyDays === undefined) {
      return 0;
    }

    return targetQuantytyDays.length;
  };

  return (
    <TargetReadStyled colors={theme} isActive={isActive}>
      <div className="tabletWrapperStyled">
        <div className="titleWrapper">
          <h3 className="targetReadTitle">{t("My goals")}</h3>
        </div>
      </div>

      <ul className="targetReadlist">
        <li className="targetReadItem">
          <div className="targetReadDig">
            {!isActive ? booksInSelected.length : booksInProgress.length}
          </div>
          <p className="targetReadItemDescription">
            {!isActive ? t("Amount of books") : t("AmountOFBooks")}
          </p>
        </li>
        <li className="targetReadItem">
          <div className="targetReadDig">
            {!isActive ? addDateFromPreplanning() : addDateFromTarget()}
          </div>
          <p className="targetReadItemDescription">
            {!isActive ? t("Amount of days") : t("AmountOfDays")}
          </p>
        </li>
        {isActive && (
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
