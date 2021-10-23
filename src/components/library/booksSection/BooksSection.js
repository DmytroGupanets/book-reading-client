import React, { useEffect, useState } from "react";
import Book from "../book/Book";
import BookMobile from "../bookMobile/BookMobile";
import BooksLabel from "../booksLabel/BooksLabel";
import { BooksSectionStyled } from "./BooksSectionStyled";

const BooksSection = ({ title, books }) => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const tabletBreakpoint = 768;
  const pcBreakpoint = 1280;

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const handleWindowResize = () => {
    setDeviceWidth(window.innerWidth);
  };

  const isMobile = tabletBreakpoint >= deviceWidth;
  const isPC = pcBreakpoint >= deviceWidth;

  return (
    <BooksSectionStyled>
      {!isMobile && <BooksLabel title={title} isPC={isPC} />}
      {isMobile && <h2 className="title">{title} </h2>}

      {!isMobile && books.map((book) => <Book key={book._id} book={book} />)}
      {isMobile &&
        books.map((book) => <BookMobile key={book._id} book={book} />)}
    </BooksSectionStyled>
  );
};

export default BooksSection;
