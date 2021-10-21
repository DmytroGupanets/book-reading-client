import React, { useState } from "react";
import MyTrainingStyled from "./MyTrainingStyled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import sprite from "../../../images/sprite.svg";

import SelectBooks from "./selectBooks/SelectBooks";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const initialState = {
  startDate: null,
  endDate: null,
};

const MyTraining = () => {
  const { theme } = useContext(ThemeContext);
  const [startDate, setStartDate] = useState(initialState.startDate);
  const [endDate, setEndDate] = useState(initialState.endDate);

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  return (
    <MyTrainingStyled colors={theme}>
      <h3 className="trainingTitle">Моє тренування</h3>
      <div className="datePickerWrapper">
        <DatePicker
          className="datePickerTraining"
          placeholderText="ПОЧАТОК"
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          minDate={startDate}
          startDate={startDate}
          endDate={endDate}
        />
        <svg className="datePickerIcon">
          <use href={sprite + "#icon-calendar"} />
        </svg>
        <svg className="datePickerIconPolygon">
          <use href={sprite + "#icon-polygon"} />
        </svg>
      </div>
      <div className="datePickerWrapper">
        <DatePicker
          className="datePickerTraining"
          dateFormat="dd.MM.yyyy"
          placeholderText="КІНЕЦЬ"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={addDays(startDate, 31)}
        />
        <svg className="datePickerIcon">
          <use href={sprite + "#icon-calendar"} />
        </svg>
        <svg className="datePickerIconPolygon">
          <use href={sprite + "#icon-polygon"} />
        </svg>
      </div>
      <SelectBooks />
    </MyTrainingStyled>
  );
};

export default MyTraining;
