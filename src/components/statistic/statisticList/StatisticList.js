import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookInTrainingSuccess } from "../../../redux/target/targetActions";
import { getInProgressdBooks } from "../../../redux/books/booksSelectors";
import { getRecords } from "../../../redux/target/targetSelectors";

import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next";
import StatisticListStyled from "./StatisticListStyled";


const StatisticList = ({ toggleModal }) => {
  const { theme } = useContext(ThemeContext);
  const [pagesState, setQuantityPages] = useState(0);



  const { t } = useTranslation();

  

  const records = useSelector(getRecords);
  const booksInProgress = useSelector(getInProgressdBooks);

  const dispatch = useDispatch();

  const totalPagesOfBookInProgress = booksInProgress.reduce(
    (acc, book) => (acc += book.pages),
    0
  );

  useEffect(() => {
    if (pagesState === totalPagesOfBookInProgress) {
      toggleModal();
    }

    return () => {
      if (pagesState === totalPagesOfBookInProgress) {
        toggleModal();
      }
    };
  }, [pagesState, totalPagesOfBookInProgress]);

  useEffect(() => {
    dispatch(setBookInTrainingSuccess(countIdxOfReadedBook(pagesState)));
    return () => {
      dispatch(setBookInTrainingSuccess(countIdxOfReadedBook(pagesState)));
    };
  }, [pagesState]);

  useEffect(() => {
    countPages();
    return () => {
      countPages();
    };
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

  // const result = ;
  // const fn = (arr) => {
  //   let pagesOfReadedBook = 0;
  //   return arr.reduce((acc, item, idx) => {
  //     console.log(pagesOfReadedBook);
  //     // console.log(acc[idx]);

  //     if (item.pages === pagesState - pagesOfReadedBook) {
  //       // console.log(pagesState.pagesOfReadedBook);
  //       acc = idx;
  //       pagesOfReadedBook += item.pages;
  //       // acc.accPages = p;
  //       return acc;
  //     }

  //     return acc;
  //   }, 0);
  // };

  const countPages = () => {
    let pages = 0;

    records.forEach((el) => (pages += +el.pages));

    setQuantityPages(pages);
  };

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
                  <p className="statisticListItemTime">{t("pages")}</p>
                </li>
              </ul>
            ))}
      </div>
    </StatisticListStyled>
  );
};

export default StatisticList;
