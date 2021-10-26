import { useSelector } from "react-redux";
import { getInProgressdBooks } from "../../../redux/books/booksSelectors";
import {
  getAllSelectedBooks,
  getIdxOfReadedBooksInTraining,
  getPreplanningEndDate,
  getPreplanningStartDate,
} from "../../../redux/target/targetSelectors";
import useDate from "../../../hooks/useDate";

import TargetReadStyled from "./TargetReadStyled";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next";

const TargetRead = ({ isActive }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [, , , , rangeBetwenStartAndEndDates] = useDate();

  const start = useSelector(getPreplanningStartDate);
  const end = useSelector(getPreplanningEndDate);
  const booksInProgress = useSelector(getInProgressdBooks);
  const booksInSelected = useSelector(getAllSelectedBooks);
  const idxOfReadedBooksInTraining = useSelector(getIdxOfReadedBooksInTraining);
  const trainingQuantityDays =
    start && end && rangeBetwenStartAndEndDates(start, end);

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
            {" "}
            {!isActive ? t("Amount of books") : t("AmountOFBooks")}
          </p>
        </li>
        <li className="targetReadItem">
          <div className="targetReadDig">
            {trainingQuantityDays ? trainingQuantityDays.length : 0}
          </div>
          <p className="targetReadItemDescription">
            {" "}
            {!isActive ? t("Amount of books") : t("AmountOFBooks")}
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
