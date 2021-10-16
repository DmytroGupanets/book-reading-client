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

const StatisticList = () => {
  return (
    <StatisticListStyled colors={colors}>
      <h3 className="statisticTitle">Статистика</h3>

      {arr.map(({ date, time, str }) => (
        <ul key={date} className="statisticList">
          <li className="statisticListItem">{date}</li>
          <li className="statisticListItemTime">{time}</li>
          <li className="statisticListItemWrapper">
            {str}
            <p className="statisticListItemTime">стор.</p>
          </li>
        </ul>
      ))}
    </StatisticListStyled>
  );
};

export default StatisticList;
