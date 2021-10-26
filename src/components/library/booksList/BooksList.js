import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getCompletedBooks,
  getInProgressdBooks,
  getPlannedBooks,
} from "../../../redux/books/booksSelectors";
import BooksSection from "../booksSection/BooksSection";

const BooksList = () => {
  const { t } = useTranslation();
  const completed = useSelector(getCompletedBooks);
  const inProgress = useSelector(getInProgressdBooks);
  const planned = useSelector(getPlannedBooks);

  const isAnyBookCompleted = Boolean(completed.length);
  const isAnyBookInProgress = Boolean(inProgress.length);
  const isAnyBookPlanned = Boolean(planned.length);

  return (
    <>
      {isAnyBookCompleted && (
        <BooksSection title={t("Already read")} books={completed} />
      )}

      {isAnyBookInProgress && (
        <BooksSection title={t("Reading now")} books={inProgress} />
      )}
      {isAnyBookPlanned && (
        <BooksSection title={t("Going to read")} books={planned} />
      )}
    </>
  );
};

export default BooksList;
