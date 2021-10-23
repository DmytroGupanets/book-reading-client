import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addNewBookOperation } from "../../../redux/books/booksOperations";
import { libraryValidationSchema } from "../validationLibrary/validationSchema";

import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next";
import { LibraryEmptyModalStyled } from "./LibraryEmptyModalStyled";

const LibraryEmptyModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      year: "",
      pages: "",
    },
    validationSchema: libraryValidationSchema,

    onSubmit: ({ title, author, year, pages }) => {
      const newBook = {
        name: title,
        author,
        year,
        pages,
      };

      dispatch(addNewBookOperation(newBook));
    },
  });

  return (
    <LibraryEmptyModalStyled onSubmit={formik.handleSubmit} colors={theme}>
      <div className="bookContainer">
        <label className="aboutBook aboutBook-title" htmlFor="title">
          Назва книги
          <input
            id="title"
            type="text"
            name="title"
            value={formik.values.title}
            placeholder="..."
            className="aboutBookInput aboutBookInput-title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        <div className="aboutBookContainer">
          <label className="aboutBook aboutBook-author" htmlFor="author">
            Автор книги
            <input
              id="author"
              type="text"
              minLength="1"
              maxLength="50"
              name="author"
              value={formik.values.author}
              placeholder="..."
              className="aboutBookInput aboutBookInput-author"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.title && formik.touched.title && (
              <div className="inputError">{formik.errors.title}</div>
            )}
          </label>
          <label className="aboutBook aboutBook-year" htmlFor="year">
            Рік випуску
            <input
              id="year"
              type="number"
              name="year"
              value={formik.values.year}
              placeholder="..."
              className="aboutBookInput aboutBookInput-year"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          <label className="aboutBook aboutBook-page" htmlFor="pages">
            Кількість сторінок
            <input
              id="pages"
              type="number"
              name="pages"
              value={formik.values.pages}
              placeholder="..."
              className="aboutBookInput aboutBookInput-page"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
        </div>
        <button type="submit" className="addButton">
          Додати
        </button>
      </div>
    </LibraryEmptyModalStyled>
  );
};

export default LibraryEmptyModal;
