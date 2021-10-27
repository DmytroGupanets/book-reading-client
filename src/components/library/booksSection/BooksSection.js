import React from "react";
import useWindowDimensions from "../../../hooks/resize";
import Book from "../book/Book";
import BookMobile from "../bookMobile/BookMobile";
import BooksLabel from "../booksLabel/BooksLabel";
import { BooksSectionStyled } from "./BooksSectionStyled";

const BooksSection = ({ title, books }) => {
  const isMobile = useWindowDimensions().width < 768;

  return (
    <BooksSectionStyled>
      {!isMobile && <BooksLabel title={title} />}
      {isMobile && <h2 className="title">{title} </h2>}

      {!isMobile && books.map((book) => <Book key={book._id} book={book} />)}
      {isMobile &&
        books.map((book) => <BookMobile key={book._id} book={book} />)}
    </BooksSectionStyled>
  );
};

export default BooksSection;
