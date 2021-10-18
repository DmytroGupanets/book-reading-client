import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecordOperation,
  updateRecordOperation,
} from "../../../redux/target/targetOperations";
import SelectDate from "../selectDate/SelectDate";

import StatisticFormStyled from "./StatisticFormStyled";
import colors from "../../../styles/colors";
import useDate from "../../../hooks/useDate";

const initialState = {
  date: "",
  pages: "",
};

const StatisticForm = () => {
  const [statistic, setStatistic] = useState(initialState);
  const { date, pages } = statistic;

  const [stateData, moment] = useDate();
  const { currentDate } = stateData;

  const tId = "61673b3d4a8e62f6385065e7";
  const dispatch = useDispatch();
  useEffect(() => {
    setStatistic((prev) => ({
      ...prev,
      date: currentDate.split("-").join("."),
    }));
  }, [currentDate]);

  const onHandleChange = (e) => {
    const { value } = e.target;
    setStatistic((prev) => ({
      ...prev,
      pages: value,
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
    dispatch(getRecordOperation(tId));
    // updateRecordOperation("616aef361dd4bfc94ee3684d", record);
    setStatistic(initialState);
  };

  return (
    <StatisticFormStyled onSubmit={onHandleSubmit} colors={colors}>
      <h2 className="StatisticTitle">Результати</h2>
      <div className="formWrapper">
        <div className="inputWrapper">
          <SelectDate setStatistic={setStatistic} date={date} />
          <label className="statisticFormLabel">
            Кількість сторінок
            <input
              type="text"
              value={pages}
              className="statisticInput"
              placeholder="*"
              onChange={onHandleChange}
              required
            />
          </label>
        </div>
        <button className="statisticBtn" type="submit">
          Додати результат
        </button>
      </div>
    </StatisticFormStyled>
  );
};

export default StatisticForm;
