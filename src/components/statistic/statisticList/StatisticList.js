import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getInProgressdBooks } from "../../../redux/books/booksSelectors";
// import {
//   getRecordOperation,
//   updateRecordOperation,
// } from "../../../redux/target/targetOperations";
import { getRecords } from "../../../redux/target/targetSelectors";
// import { getInProgressdBooks } from "../../../redux/books/booksSelectors";

import { ThemeContext } from "../../App";
import StatisticListStyled from "./StatisticListStyled";

// const initialState = {
//   quantityPages: 0,
//   pagesOfReadedBook: 0,
// };

const StatisticList = () => {
  const { theme } = useContext(ThemeContext);
  const [pagesState, setQuantityPages] = useState(0);

  // console.log(pagesState);
  const records = useSelector(getRecords);
  const booksInProgress = useSelector(getInProgressdBooks);

  const fn = (arr) => {
    let pagesOfReadedBook = 0;

    return arr.reduce((acc, item, idx) => {
      // console.log(acc[idx]);

      if (item.pages === pagesState - pagesOfReadedBook) {
        // console.log(pagesState.pagesOfReadedBook);
        acc = idx;
        pagesOfReadedBook += item.pages;
        // acc.accPages = p;
        // const a = pages;
        // const b = pages;
        // console.log(a);
        // console.log(b);
      }

      return acc;
    }, 0);
  };

  // console.log();
  console.log(booksInProgress);
  // console.log(pagesState);

  useEffect(() => {
    countPages();
    return () => {
      countPages();
    };
  }, [records]);

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
