import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBookInTrainingSuccess,
  setNumberOfPagesRemaining,
} from "../../../redux/target/targetActions";
import {
  getIdxOfReadedBooksInTraining,
  getRecords,
  getTargetEndDate,
} from "../../../redux/target/targetSelectors";
import { getInProgressdBooks } from "../../../redux/books/booksSelectors";

import { ThemeContext } from "../../App";
import StatisticListStyled from "./StatisticListStyled";
import { useTranslation } from "react-i18next";
import useDate from "../../../hooks/useDate";
const StatisticList = ({
  toggleModal,
  toggleModalTimer,
  toggleModalTargetSuccess,
  toggleModalBookSuccess,
}) => {
  const { theme } = useContext(ThemeContext);
  const [pagesState, setQuantityPages] = useState(0);
  const [, , chengeStartDataIdx] = useDate();

  const indexOfReadidBook = useSelector(getIdxOfReadedBooksInTraining);
  const booksInProgress = useSelector(getInProgressdBooks);
  const targetEndDate = useSelector(getTargetEndDate);
  const records = useSelector(getRecords);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const totalPagesOfBookInProgress = booksInProgress.reduce(
    (acc, book) => (acc += book.pages),
    0
  );

  useEffect(() => {
    dispatch(
      setNumberOfPagesRemaining(totalPagesOfBookInProgress - pagesState)
    );
    dispatch(setBookInTrainingSuccess(countIdxOfReadedBook(pagesState)));
  }, [pagesState, totalPagesOfBookInProgress]);

  useEffect(() => {
    if (indexOfReadidBook >= 0) {
      toggleModalBookSuccess();
    }
  }, [indexOfReadidBook]);

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

  // ======================================Open Modals======================================

  const openModalByTimer = () =>
    new Date(chengeStartDataIdx(targetEndDate)) - Date.now();

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

  // ======================================Open Modals======================================

  return (
    <StatisticListStyled colors={theme}>
      <h2 className="statisticTitle">{t("STATISTICS")}</h2>

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
                  <p className="statisticListItemTime">{t("str")}.</p>
                </li>
              </ul>
            ))}
      </div>
    </StatisticListStyled>
  );
};

export default StatisticList;
