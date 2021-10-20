import React, { useState } from "react";
import MyTrainingStyled from "./MyTrainingStyled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import sprite from "../../../images/sprite.svg";
// import { getBooks } from "../../../redux/books/booksSelectors";
import books from "../../library/booksList/books.json";
import Select from "react-select";
// import useDate from "../../../hooks/useDate";

const initialState = {
  startDate: null,
  endDate: null,
};

const selectedBooks = [];

const MyTraining = () => {
  const [startDate, setStartDate] = useState(initialState.startDate);
  const [endDate, setEndDate] = useState(initialState.endDate);
  const [selectedBooks, setSelectedBooks] = useState([]);

  // const [stateDate] = useDate();
  // const { currentDate } = stateDate;
  // console.log("currentDate :>> ", currentDate);

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const onChange = (e) => {
    const value = e.value;
    setSelectedBooks((state) => [...state, value]);
  };

  const options = books.map(({ name, author, year, pages }) => ({
    value: { name, author, year, pages },
    label: name,
  }));

  return (
    <MyTrainingStyled>
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
      <Select options={options} closeMenuOnSelect={false} onChange={onChange} />
      {selectedBooks.length > 0 && (
        <ul className="selectedBooksList">
          {selectedBooks.map(({ name, author, year, pages }) => (
            <li key={author} className="selectedBooksListItem">
              {/* <div className="selectedBooksListWrapper"> */}
              <svg className="navLibrarySvg">
                <use href={sprite + "#icon-library"} />
              </svg>
              <h2>{name}</h2>
              <svg className="iconDelete">
                <use href={sprite + "#icon-delete"} />
              </svg>
              <p>{author}</p>
              <p>{year}</p>
              <p>{pages}</p>
            </li>
          ))}
        </ul>
      )}
    </MyTrainingStyled>
  );
};

export default MyTraining;
