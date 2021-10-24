// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getInProgressdBooks } from "../../../redux/books/booksSelectors";
import {
  endDate,
  // getAllPlannedBooks,
  getAllSelectedBooks,
  getIdxOfReadedBooksInTraining,
  getPreplaning,
  startDate,
} from "../../../redux/target/targetSelectors";
import useDate from "../../../hooks/useDate";

import TargetReadStyled from "./TargetReadStyled";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const TargetRead = ({ isActive }) => {
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
  const booksInSelected = useSelector(getAllSelectedBooks);
  const preplaning = useSelector(getPreplaning);
  const idxOfReadedBooksInTraining = useSelector(getIdxOfReadedBooksInTraining);
  // console.log(idxOfReadedBooksInTraining);
  const trainingQuantityDays =
    start && end && rangeBetwenStartAndEndDates(start, end);

  // ? rangeBetwenStartAndEndDates(preplaning.startDate, preplaning.endDate)
  // : rangeBetwenStartAndEndDates(start, end);

  return (
    <TargetReadStyled colors={theme} isActive={isActive}>
      <div className="tabletWrapperStyled">
        <div className="titleWrapper">
          <h3 className="targetReadTitle">Моя мета прочитати</h3>
        </div>
      </div>

      <ul className="targetReadlist">
        <li className="targetReadItem">
          <div className="targetReadDig">
            {!isActive ? booksInSelected.length : booksInProgress.length}
          </div>
          <p className="targetReadItemDescription">Кількість книжок</p>
        </li>
        <li className="targetReadItem">
          <div className="targetReadDig">
            {trainingQuantityDays ? trainingQuantityDays : 0}
          </div>
          <p className="targetReadItemDescription">Кількість днів</p>
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
            <p className="targetReadItemDescription">Залишилось книжок</p>
          </li>
        )}
      </ul>
    </TargetReadStyled>
  );
};

export default TargetRead;
