import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   getRecordOperation,
//   updateRecordOperation,
// } from "../../../redux/target/targetOperations";
import { getRecords } from "../../../redux/target/targetSelectors";

import colors from "../../../styles/colors";
import StatisticListStyled from "./StatisticListStyled";

const initialState = {
  quantityPages: 0,
};

const StatisticList = () => {
  const [pagesState, setQuantityPages] = useState(initialState);


  const records = useSelector(getRecords);
  const copeRecords = JSON.parse(JSON.stringify(records)).slice(-10).reverse();


  console.log(pagesState);
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

    setQuantityPages(() => ({ quantityPages: pages }));
  };

  return (
    <StatisticListStyled colors={colors}>
      <h2 className="statisticTitle">Статистика</h2>

      <div className="listWrapper">
        {{copeRecords.map(({ date, time, pages, _id }) => (
          <ul key={_id} className="statisticList">
            <li className="statisticListItem">{date}</li>
            <li className="statisticListItemTime">{time}</li>
            <li className="statisticListItemWrapper">
              {pages}
              <p className="statisticListItemTime">стор.</p>
            </li>
          </ul>
        ))}}
      </div>
    </StatisticListStyled>
  );
};

export default StatisticList;
