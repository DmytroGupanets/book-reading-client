// import Select from "react-select";
import Select, { components, InputProps } from "react-select";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getRecordOperation,
//   updateRecordOperation,
// } from "../../../redux/target/targetOperations";
// import axios from "axios";
import SelectDate from "../selectDate/SelectDate";

import colors from "../../../styles/colors";
import StatisticFormStyled from "./StatisticFormStyled";
import useDate from "../../../hooks/useDate";

const initialState = {
  date: "",
  pages: "",
};

const StatisticForm = () => {
  const [statistic, setStatistic] = useState(initialState);
  console.log(statistic);
  const [stateData, setCurrentTime] = useDate();
  //   const { currentDate, quantityDays, currentTime } = stateData;

  //   useEffect(() => {

  //     // dispatch(getRecordOperation());
  //   }, []);

  const onHandleChange = (e) => {
    const { value } = e.target;

    setStatistic((prev) => ({ ...prev, pages: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setCurrentTime();

    setStatistic(initialState);
  };

  return (
    <StatisticFormStyled onSubmit={onHandleSubmit} colors={colors}>
      <h3 className="StatisticTitle">Результати</h3>
      <div className="inputWrapper">
        <SelectDate setStatistic={setStatistic} />
        <label className="statisticFormLabel">
          Кількість сторінок
          <input
            type="text"
            value={statistic.pages}
            className="statisticInput"
            onChange={onHandleChange}
            required
          />
        </label>
      </div>
      <button className="statisticBtn" type="submit">
        Додати результат
      </button>
    </StatisticFormStyled>
  );
};

export default StatisticForm;
