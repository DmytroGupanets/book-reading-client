import { useState } from "react";
import Select from "react-select";

import StatisticFormStyled from "./StatisticFormStyled";

const initialState = {
  date: "",
  countStr: "",
};

const data = [
  { value: "3.10.1991", label: "3.10.1991" },
  { value: "5.10.1991", label: "5.10.1991" },
  { value: "8.10.1991", label: "8.10.1991" },
];

const StatisticForm = () => {
  const [statistic, setStatistic] = useState(initialState);

  const onHandleChange = (e) => {
    const { value } = e.target;

    setStatistic((prev) => ({ ...prev, countStr: value }));
  };

  const onChangeSelect = (e) => {
    const value = e.value;

    setStatistic((prev) => ({ ...prev, date: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(statistic);
    setStatistic(initialState);
  };

  return (
    <StatisticFormStyled onSubmit={onHandleSubmit}>
      <h3 className="StatisticTitle">Результати</h3>
      <div className="inputWrapper">
        <label className="statisticFormLabel">
          Дата
          <Select
            options={data}
            classNamePrefix="reactSelect"
            placeholder={""}
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
