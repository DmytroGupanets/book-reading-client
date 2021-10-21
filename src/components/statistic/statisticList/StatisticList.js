import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getInProgressdBooks } from "../../../redux/books/booksSelectors";
import { setBookInTrainingSuccess } from "../../../redux/target/targetActions";
// import {
//   getRecordOperation,
//   updateRecordOperation,
// } from "../../../redux/target/targetOperations";
import { getRecords } from "../../../redux/target/targetSelectors";
// import { getInProgressdBooks } from "../../../redux/books/booksSelectors";

import { ThemeContext } from "../../App";
import StatisticListStyled from "./StatisticListStyled";

const StatisticList = () => {
  const { theme } = useContext(ThemeContext);
  const [pagesState, setQuantityPages] = useState(0);


  console.log(pagesState);

  const records = useSelector(getRecords);
  const booksInProgress = useSelector(getInProgressdBooks);

  const dispatch = useDispatch();

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
    records.forEach((el) => {
      return (pages += +el.pages);
    });

    setQuantityPages(pages);
  };

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
