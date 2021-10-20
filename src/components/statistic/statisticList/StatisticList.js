import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInProgressdBooks } from "../../../redux/books/booksSelectors";
// import {
//   getRecordOperation,
//   updateRecordOperation,
// } from "../../../redux/target/targetOperations";
import { getRecords } from "../../../redux/target/targetSelectors";
// import { getInProgressdBooks } from "../../../redux/books/booksSelectors";

import colors from "../../../styles/colors";
import StatisticListStyled from "./StatisticListStyled";

// const initialState = {
//   quantityPages: 0,
//   pagesOfReadedBook: 0,
// };

const StatisticList = () => {
  const [pagesState, setQuantityPages] = useState(0);

  // console.log(pagesState);
  const records = useSelector(getRecords);
  const booksInProgress = useSelector(getInProgressdBooks);

  console.log(pagesState);

  const fn = (arr) => {
    let pagesOfReadedBook = 0;

    console.log(pagesOfReadedBook);

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

  console.log(fn(booksInProgress));

  // console.log();
  // console.log(booksInProgress);
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
    <StatisticListStyled colors={colors}>
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
