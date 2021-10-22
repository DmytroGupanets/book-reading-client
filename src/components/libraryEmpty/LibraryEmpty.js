import React, { useState } from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addNewBookOperation } from "../../redux/books/booksOperations";
import { LibraryEmptyStyled } from "./LibraryEmptyStyled";
import { ThemeContext } from "../App";

const initialState = {
  title: "",
  author: "",
  year: "",
  pages: "",
};

const LibraryEmpty = () => {
  const { theme } = useContext(ThemeContext);
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      name: state.title,
      author: state.author,
      year: state.year,
      pages: state.pages,
    };
    dispatch(addNewBookOperation(newBook));
    setState({ ...initialState });
  };

  return (
    <LibraryEmptyStyled onSubmit={onHandleSubmit} colors={theme}>
      <div className="bookContainer">
        <label className="aboutBook aboutBook-title">
          Назва книги
          <input
            required
            id="title"
            type="text"
            minLength="1"
            maxLength="50"
            name="title"
            value={state.title}
            placeholder="..."
            className="aboutBookInput aboutBookInput-title"
            onChange={onHandleChange}
          />
        </label>
        <div className="aboutBookContainer">
          <label className="aboutBook aboutBook-author">
            Автор книги
            <input
              required
              id="author"
              type="text"
              minLength="1"
              maxLength="50"
              name="author"
              value={state.author}
              placeholder="..."
              className="aboutBookInput aboutBookInput-author"
              onChange={onHandleChange}
            />
          </label>
          <label className="aboutBook aboutBook-year">
            Рік випуску
            <input
              required
              id="year"
              type="number"
              name="year"
              value={state.year}
              placeholder="..."
              className="aboutBookInput aboutBookInput-year"
              onChange={onHandleChange}
            />
          </label>
          <label className="aboutBook aboutBook-page">
            Кількість сторінок
            <input
              required
              id="pages"
              type="number"
              name="pages"
              value={state.pages}
              placeholder="..."
              className="aboutBookInput aboutBookInput-page"
              onChange={onHandleChange}
            />
          </label>
        </div>
        <button type="submit" className="addButton">
          Додати
        </button>
      </div>
    </LibraryEmptyStyled>
  );
};

export default LibraryEmpty;
