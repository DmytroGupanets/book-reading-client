import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { libraryValidationSchema } from "../validationLibrary/validationSchema";

import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next";
import { LibraryEmptyModalStyled } from "./LibraryEmptyModalStyled";
import backBtn from "../../../images/sprite.svg";
import { addNewBookOperation } from "../../../redux/books/booksOperations";
import { useSelector } from "react-redux";
import { getAllBooks } from "../../../redux/books/booksSelectors";

const LibraryEmptyModal = ({ toggleModal }) => {
  const books = useSelector(getAllBooks);
  const [firstBookWarning, setFirstBookWarning] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener("keydown", onHandleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("keydown", onHandleEsc);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const onHandleEsc = (e) => e.code === "Escape" && toggleModal();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      year: "",
      pages: "",
    },
    validationSchema: libraryValidationSchema,

    onSubmit: async ({ title, author, year, pages }) => {
      const newBook = {
        name: title,
        author,
        year,
        pages,
      };

      await dispatch(addNewBookOperation(newBook));

      toggleModal();
    },
  });

  const onHandleBackBtnClick = () => {
    if (books.length) toggleModal();
    else setFirstBookWarning(true);
  };

  return (
    <LibraryEmptyModalStyled onSubmit={formik.handleSubmit} colors={theme}>
      <div className="bookContainerModal">
        <button
          className="modalClose"
          type="button"
          onClick={onHandleBackBtnClick}
        >
          <svg className="closeAddBookModalSvg">
            <use href={backBtn + "#icon-back"} />
          </svg>
        </button>
        <label className="aboutBookModal aboutBook-titleModal" htmlFor="title">
          {t("Book title")}
          <input
            id="title"
            type="text"
            name="title"
            value={formik.values.title}
            placeholder="..."
            className="aboutBookInputModal aboutBookInput-titleModal"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.title && formik.touched.title && (
            <span className="inputErrorModal inputErrorTitleModal">
              {t([formik.errors.title])}
            </span>
          )}
        </label>
        <div className="aboutBookContainerModal">
          <label
            className="aboutBookModal aboutBook-authorModal"
            htmlFor="author"
          >
            {t("Author")}
            <input
              id="author"
              type="text"
              minLength="1"
              maxLength="50"
              name="author"
              value={formik.values.author}
              placeholder="..."
              className="aboutBookInputModal aboutBookInput-authorModal"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.author && formik.touched.author && (
              <span className="inputErrorModal inputErrorTitleModal">
                {t([formik.errors.author])}
              </span>
            )}
          </label>
          <label className="aboutBookModal aboutBook-yearModal" htmlFor="year">
            {t("Publication date")}
            <input
              id="year"
              type="text"
              name="year"
              value={formik.values.year}
              placeholder="..."
              className="aboutBookInputModal aboutBookInput-yearModal"
              onChange={(e) => {
                const testStr = e.target.value;
                const regExp = /^([0-9]{0,4})$/;
                if (testStr.length > 4 || !regExp.test(testStr)) return;
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
            />
            {formik.errors.year && formik.touched.year && (
              <span className="inputErrorModal inputErrorTitleModal">
                {t([formik.errors.year])}
              </span>
            )}
          </label>
          <label className="aboutBookModal aboutBook-pageModal" htmlFor="pages">
            {t("Amount of pages")}
            <input
              id="pages"
              type="number"
              name="pages"
              value={formik.values.pages}
              placeholder="..."
              className="aboutBookInputModal aboutBookInput-pageModal"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.pages && formik.touched.pages && (
              <span className="inputErrorModal inputErrorTitleModal">
                {t([formik.errors.pages])}
              </span>
            )}
          </label>
          {firstBookWarning && (
            <p className="warningText">
              Треба спочатку додати вашу першу книгу!
            </p>
          )}
        </div>
        <button type="submit" className="addButtonModal">
          {t("Add")}
        </button>
      </div>
    </LibraryEmptyModalStyled>
  );
};

export default LibraryEmptyModal;
