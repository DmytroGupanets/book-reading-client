import React from "react";
import { useSelector } from "react-redux";
import {
  getCompletedBooks,
  getInProgressdBooks,
  getPlannedBooks,
} from "../../../redux/books/booksSelectors";
import BooksSection from "../booksSection/BooksSection";

const BooksList = () => {
  const completed = useSelector(getCompletedBooks);
  const inProgress = useSelector(getInProgressdBooks);
  const planned = useSelector(getPlannedBooks);

  const isAnyBookCompleted = Boolean(completed.length);
  const isAnyBookInProgress = Boolean(inProgress.length);
  const isAnyBookPlanned = Boolean(planned.length);

  return (
    <>
      {isAnyBookCompleted && (
        <BooksSection title={"Прочитано"} books={completed} />
      )}

      {isAnyBookInProgress && (
        <BooksSection title={"Читаю"} books={inProgress} />
      )}
      {isAnyBookPlanned && (
        <BooksSection title={"Маю намір прочитати"} books={planned} />
      )}
    </>
  );
};

export default BooksList;
