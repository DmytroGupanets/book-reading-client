import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookInTrainingSuccess } from "../../../redux/target/targetActions";
import { getInProgressdBooks } from "../../../redux/books/booksSelectors";
import {
  getIdxOfReadedBooksInTraining,
  getPreplanningEndDate,
  getRecords,
  getTargetId,
} from "../../../redux/target/targetSelectors";

import { ThemeContext } from "../../App";
import StatisticListStyled from "./StatisticListStyled";
import useDate from "../../../hooks/useDate";

const StatisticList = ({
  showModal,
  toggleModal,
  toggleModalTimer,
  toggleModalTargetSuccess,
  toggleModalBookSuccess,
}) => {
  const { theme } = useContext(ThemeContext);
  const [pagesState, setQuantityPages] = useState(0);
  const [stateData, moment, chengeStartDataIdx] = useDate();

  const end = useSelector(getPreplanningEndDate);
  const records = useSelector(getRecords);
  const booksInProgress = useSelector(getInProgressdBooks);
  const b = useSelector(getIdxOfReadedBooksInTraining);
  const dispatch = useDispatch();

  const totalPagesOfBookInProgress = booksInProgress.reduce(
    (acc, book) => (acc += book.pages),
    0
  );

  useEffect(() => {
    if (totalPagesOfBookInProgress === 0) {
      return;
    }
    if (openModalByTimer() >= 0 && pagesState >= totalPagesOfBookInProgress) {
      toggleModalTargetSuccess();
    }
    if (openModalByTimer() < 0 && pagesState >= totalPagesOfBookInProgress) {
      toggleModal();
    }
    if (openModalByTimer() < 0 && pagesState < totalPagesOfBookInProgress) {
      toggleModalTimer();
    }
  }, [pagesState, totalPagesOfBookInProgress]);

  useEffect(() => {
    toggleModalBookSuccess();
  }, [b]);

  useEffect(() => {
    dispatch(setBookInTrainingSuccess(countIdxOfReadedBook(pagesState)));
  }, [pagesState]);

  useEffect(() => {
    countPages();
  }, [records]);

  const countIdxOfReadedBook = (statisticAmount) => {
    let result = -1;

    for (let i = 0; i < booksInProgress.length; i++) {
      if (statisticAmount >= booksInProgress[i].pages) {
        statisticAmount -= booksInProgress[i].pages;
        result = i;
      } else {
        return (result = i - 1);
      }
    }
    return result;
  };

  const countPages = () => {
    let pages = 0;

    records && records.forEach((el) => (pages += +el.pages));

    setQuantityPages(pages);
  };

  const openModalByTimer = () =>
    new Date(chengeStartDataIdx(end)) -
    new Date(chengeStartDataIdx(stateData.currentDate.split("-").join(".")));

  return (
    <StatisticListStyled colors={theme}>
      <h2 className="statisticTitle">Статистика</h2>

      <div className="listWrapper">
        {records &&
          records
            .slice(-10)
            .reverse()
            .map(({ date, time, pages, _id }) => (
              <ul key={_id} className="statisticList">
                <li className="statisticListItem">{date}</li>
                <li className="statisticListItemTime">{time}</li>
                <li className="statisticListItemWrapper">
                  {pages}
                  <p className="statisticListItemTime">стор.</p>
                </li>
              </ul>
            ))}
      </div>
    </StatisticListStyled>
  );
};

export default StatisticList;
