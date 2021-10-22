import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerTrainingStyled from "./DatePickerTrainingStyled";
import { ThemeContext } from "../../../App";
import { useContext } from "react";
import {
  addPreplanningEndtDate,
  addPreplanningStartDate,
} from "../../../../redux/target/targetActions";
import sprite from "../../../../images/sprite.svg";

import { useDispatch, useSelector } from "react-redux";

const initialState = {
  startDate: null,
  endDate: null,
};
const DatePickerTraining = () => {
  const [startDate, setStartDate] = useState(initialState.startDate);
  const [endDate, setEndDate] = useState(initialState.endDate);
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const onHandleStartDateChange = (date) => {
    setStartDate(date);
    dispatch(addPreplanningStartDate(date));
  };

  const onHandleEndDateChange = (date) => {
    setEndDate(date);
    dispatch(addPreplanningEndtDate(date));
  };
  return (
    <DatePickerTrainingStyled className="datePickerWrapper" colors={theme}>
      <h3 className="trainingTitle">Моє тренування</h3>
      <div className="datePickerWrapper">
        <DatePicker
          className="datePickerTraining"
          placeholderText="ПОЧАТОК"
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          onChange={onHandleStartDateChange}
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
          onChange={onHandleEndDateChange}
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
    </DatePickerTrainingStyled>
  );
};

export default DatePickerTraining;
