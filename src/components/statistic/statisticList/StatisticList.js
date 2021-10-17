// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getRecordOperation,
//   updateRecordOperation,
// } from "../../../redux/target/targetOperations";

import colors from "../../../styles/colors";
import StatisticListStyled from "./StatisticListStyled";

const arr = [
  { date: "2.10.2021", time: "18:10:23", str: "32" },
  { date: "1.10.2021", time: "18:10:23", str: "32" },
  { date: "12.10.2021", time: "18:10:23", str: "32" },
  { date: "3.10.2021", time: "18:10:23", str: "32" },
  { date: "4.10.2021", time: "18:10:23", str: "32" },
  { date: "6.10.2021", time: "18:10:23", str: "32" },
  { date: "16.10.2021", time: "18:10:23", str: "32" },
  { date: "15.10.2021", time: "18:10:23", str: "32" },
  { date: "13.10.2021", time: "18:10:23", str: "32" },
  { date: "18.10.2021", time: "18:10:23", str: "32" },
];

const sortArrDate = () => {
  const newArrDate = arr.sort((a, b) => {
    const c = new Date(a.date);
    const d = new Date(b.date);
    return c - d;
  });

  return newArrDate;
};

const StatisticList = () => {
  return (
    <StatisticListStyled colors={colors}>
      <h2 className="statisticTitle">Статистика</h2>

      <div className="listWrapper">
        {sortArrDate().map(({ date, time, str }) => (
          <ul key={date} className="statisticList">
            <li className="statisticListItem">{date}</li>
            <li className="statisticListItemTime">{time}</li>
            <li className="statisticListItemWrapper">
              {str}
              <p className="statisticListItemTime">стор.</p>
            </li>
          </ul>
        ))}
      </div>
    </StatisticListStyled>
  );
};

export default StatisticList;
