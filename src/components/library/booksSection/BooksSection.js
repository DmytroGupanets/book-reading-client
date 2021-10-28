import React, { useContext } from "react";
import useWindowDimensions from "../../../hooks/resize";
import { ThemeContext } from "../../App";
import Book from "../book/Book";
import BookMobile from "../bookMobile/BookMobile";
import BooksLabel from "../booksLabel/BooksLabel";
import { BooksSectionStyled } from "./BooksSectionStyled";

const BooksSection = ({ title, books }) => {
  const { theme } = useContext(ThemeContext);
  const isMobile = useWindowDimensions().width < 768;

  return (
    <BooksSectionStyled colors={theme}>
      {!isMobile && <BooksLabel title={title} />}
      {isMobile && <h2 className="title">{title} </h2>}

      {!isMobile && books.map((book) => <Book key={book._id} book={book} />)}
      {isMobile &&
        books.map((book) => <BookMobile key={book._id} book={book} />)}
    </BooksSectionStyled>
  );
};

export default BooksSection;
