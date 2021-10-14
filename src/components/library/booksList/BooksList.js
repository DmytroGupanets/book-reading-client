import React from "react";
import BooksSection from "../booksSection/BooksSection";
import books from "./books.json";

const BooksList = () => {
  const completed = books.filter((book) => book.status === "completed");
  const inProgress = books.filter((book) => book.status === "inProgress");
  const planned = books.filter((book) => book.status === "planned");

  return (
    <>
      {completed.length && (
        <BooksSection title={"Прочитано"} books={completed} />
      )}

      {inProgress.length && <BooksSection title={"Читаю"} books={inProgress} />}
      {planned.length && (
        <BooksSection title={"Маю намір прочитати"} books={planned} />
      )}
    </>
  );
};

export default BooksList;
