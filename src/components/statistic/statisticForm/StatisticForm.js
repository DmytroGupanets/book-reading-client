import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecordOperation,
  updateRecordOperation,
} from "../../../redux/target/targetOperations";
import axios from "axios";
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
  const { date, pages } = statistic;

  const [stateData, moment, setCurrentTime, setCurrentData] = useDate();
  const { currentDate, currentTime } = stateData;

  useEffect(() => {
    console.log(currentDate);
    setStatistic((prev) => ({
      ...prev,
      date: currentDate,
    }));
    // dispatch(getRecordOperation());
  }, []);

  const onHandleChange = (e) => {
    const { value } = e.target;
    setStatistic((prev) => ({
      ...prev,
      pages: value,
      time: setCurrentTime(),
    }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const record = {
      time: moment().toLocaleString().substr(16, 8),
      date: date,
      pages: pages,
    };
    console.log(record);
    // updateRecordOperation("616aef361dd4bfc94ee3684d", initialState);
    setStatistic(initialState);
  };

  return (
    <StatisticFormStyled onSubmit={onHandleSubmit} colors={colors}>
      <h3 className="StatisticTitle">Результати</h3>
      <div className="inputWrapper">
        <SelectDate setStatistic={setStatistic} date={date} />
        <label className="statisticFormLabel">
          Кількість сторінок
          <input
            type="text"
            value={pages}
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
