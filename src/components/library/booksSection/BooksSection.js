import React from "react";
import BookMobile from "../bookMobile/BookMobile";
import { BooksSectionStyled } from "./BooksSectionStyled";

const BooksSection = ({ title, books }) => {
  return (
    <BooksSectionStyled>
      <h2 className="title">{title}</h2>
      {books.map((book) => (
        <BookMobile key={book.id} book={book} />
      ))}
    </BooksSectionStyled>
  );
};

export default BooksSection;
