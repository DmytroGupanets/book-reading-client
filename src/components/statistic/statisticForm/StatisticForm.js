import Select from "react-select";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getRecordOperation,
//   updateRecordOperation,
// } from "../../../redux/target/targetOperations";
// import axios from "axios";
import colors from "../../../styles/colors";
import StatisticFormStyled from "./StatisticFormStyled";
import useDate from "../../../hooks/useDate";

const initialState = {
  date: "",
  pages: "",
  optionSelectData: [],
};

const StatisticForm = () => {
  const [statistic, setStatistic] = useState(initialState);

  const [stateData, getCurrentData, getCurrentTime, setQuantityDays] =
    useDate();
  const { currentDate, quantityDays } = stateData;
  console.log(stateData);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     // dispatch(getRecordOperation());
  //   }, []);

  const onHandleChange = (e) => {
    const { value } = e.target;

    setStatistic((prev) => ({ ...prev, pages: value }));
  };

  const onChangeSelect = (e) => {
    const value = e.value;

    setStatistic((prev) => ({ ...prev, date: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    setStatistic(initialState);
  };

  const exactDays = quantityDays.map((day) => ({
    value: day,
    label: day,
  }));

  const options = [{ value: "default", label: quantityDays[0] }, ...exactDays];

  return (
    <StatisticFormStyled onSubmit={onHandleSubmit} colors={colors}>
      <h3 className="StatisticTitle">Результати</h3>
      <div className="inputWrapper">
        <label className="statisticFormLabel">
          Дата
          <Select
            options={options}
            classNamePrefix="reactSelect"
            placeholder={currentDate}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            onChange={onChangeSelect}
            required
          />
        </label>
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
