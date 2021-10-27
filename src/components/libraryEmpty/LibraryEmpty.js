import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addNewBookOperation } from "../../redux/books/booksOperations";
import { LibraryEmptyStyled } from "./LibraryEmptyStyled";
import { libraryValidationSchema } from "./validationLibrary/validationSchema";

import { useContext } from "react";
import { ThemeContext } from "../App";
import { useTranslation } from "react-i18next";
// import { useSelector } from "react-redux";
// import { getErrorBooks } from "../../redux/books/booksSelectors";
// import { resetError } from "../../redux/books/booksActions";
// import { error } from "@pnotify/core/dist/PNotify.js";
// import "@pnotify/core/dist/BrightTheme.css";
// import "@pnotify/core/dist/PNotify.css";

const LibraryEmpty = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  // const isError = useSelector(getErrorBooks);

  // useEffect(() => {
  //   if (isError !== null) {
  //     error({
  //       text: "Поле не може починатися з пробілу або дефісу",
  //       delay: 3000,
  //       //  autoOpen: false,
  //     });
  //   }
  //   return dispatch(resetError());
  // }, [isError, dispatch]);


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
    <LibraryEmptyStyled onSubmit={formik.handleSubmit} colors={theme}>
      <div className="bookContainer">
        <div className="booGroup">
          <label className="aboutBook aboutBook-title" htmlFor="title">
            {t("Book title")}
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
            {formik.errors.title && formik.touched.title && (
              <div className="inputError inputErrorTitle">
                {t([formik.errors.title])}
              </div>
            )}
          </label>
        </div>
        <div className="aboutBookContainer">
          <div className="booGroup">
            <label className="aboutBook aboutBook-author" htmlFor="author">
              {t("Author")}
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
              {formik.errors.author && formik.touched.author && (
                <div className="inputError inputErrorAuthor">
                  {t([formik.errors.author])}
                </div>
              )}
            </label>
          </div>
          <div className="booGroup">
            <label className="aboutBook aboutBook-year" htmlFor="year">
              {t("Publication date")}
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
              {formik.errors.year && formik.touched.year && (
                <div className="inputError inputErrorYear">
                  {t([formik.errors.year])}
                </div>
              )}
            </label>
          </div>
          <div className="booGroup">
            <label className="aboutBook aboutBook-page" htmlFor="pages">
              {t("Amount of pages")}
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
              {formik.errors.pages && formik.touched.pages && (
                <div className="inputError inputErrorPages">
                  {t([formik.errors.pages])}
                </div>
              )}
            </label>
          </div>
        </div>
        <button type="submit" className="addButton">
          {t("Add")}
        </button>
      </div>
    </LibraryEmptyStyled>
  );
};

export default LibraryEmpty;

// const initialState = {
//        title: "",
//        author: "",
//        year: "",
//        pages: ""
// }
// const LibraryEmpty = () => {
//     const [state, setState] = useState(initialState);
//     const dispatch = useDispatch()

//     const onHandleChange = (e) => {
//         const { name, value } = e.target;
//         setState((prev) => ({ ...prev, [name]: value }));
//     }

//     const onHandleSubmit = (e) => {
//        e.preventDefault();
//        const newBook = {
//            name: state.title,
//            author: state.author,
//            year: state.year,
//            pages: state.pages
//        }
//        dispatch(addNewBookOperation(newBook))
//        setState({ ...initialState });
//     }

//     return (

//         <LibraryEmptyStyled  onSubmit={onHandleSubmit}>
//             <div className="bookContainer">
//             <label className="aboutBook aboutBook-title">
//             Назва книги
//             <input
//             required
//             id="title"
//             type="text"
//             minLength="1"
//             maxLength="50"
//             name="title"
//             value={state.title}
//             placeholder="..."
//             className="aboutBookInput aboutBookInput-title"
//             onChange={onHandleChange}
//             />
//             </label>
//             <div className="aboutBookContainer">
//             <label className="aboutBook aboutBook-author">
//             Автор книги
//             <input
//             required
//             id="author"
//             type="text"
//             minLength="1"
//             maxLength="50"
//             name="author"
//             value={state.author}
//             placeholder="..."
//             className="aboutBookInput aboutBookInput-author"
//             onChange={onHandleChange}
//             />
//             </label>
//             <label className="aboutBook aboutBook-year">
//             Рік випуску
//             <input
//             required
//             id="year"
//             type="number"
//             name="year"
//             value={state.year}
//             placeholder="..."
//             className="aboutBookInput aboutBookInput-year"
//             onChange={onHandleChange}
//             />
//             </label>
//             <label className="aboutBook aboutBook-page">
//             Кількість сторінок
//             <input
//             required
//             id="pages"
//             type="number"
//             name="pages"
//             value={state.pages}
//             placeholder="..."
//             className="aboutBookInput aboutBookInput-page"
//             onChange={onHandleChange}
//             />
//             </label>
//             </div>
//             <button type="submit" className="addButton">Додати</button>
//             </div>

//         </LibraryEmptyStyled>

//     );
// }

// export default LibraryEmpty;
