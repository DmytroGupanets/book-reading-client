import React from "react";
import { LibraryStyled } from "./LibraryStyled";
import BooksList from "./booksList/BooksList";

const Library = () => {
  return (
    <LibraryStyled>
      <BooksList />
    </LibraryStyled>
  );
};

export default Library;
