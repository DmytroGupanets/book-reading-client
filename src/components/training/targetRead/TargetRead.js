import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getInProgressdBooks } from "../../../redux/books/booksSelectors";
import {
  endDate,
  getIdxOfReadedBooksInTraining,
  startDate,
} from "../../../redux/target/targetSelectors";
import useDate from "../../../hooks/useDate";

import TargetReadStyled from "./TargetReadStyled";
import colors from "../../../styles/colors";

const TargetRead = ({ state }) => {
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
    <TargetReadStyled colors={colors} state={state}>
      <div className="tabletWrapperStyled">
        <div className="titleWrapper">
          <h3 className="targetReadTitle">Моя мета прочитати</h3>
        </div>
      </div>

      <ul className="targetReadlist">
        <li className="targetReadItem">
          <div className="targetReadDig">{booksInProgress.length}</div>
          <p className="targetReadItemDescription">Кількість книжок</p>
        </li>
        <li className="targetReadItem">
          <div className="targetReadDig">{quantityDays}</div>
          <p className="targetReadItemDescription">Кількість днів</p>
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
            <p className="targetReadItemDescription">Залишилось книжок</p>
          </li>
        )}
      </ul>
    </TargetReadStyled>
  );
};

export default TargetRead;
