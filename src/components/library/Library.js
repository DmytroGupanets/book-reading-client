import React, { useEffect } from "react";
import { LibraryStyled } from "./LibraryStyled";
import BooksList from "./booksList/BooksList";
import { getAllBooksOperation } from "../../redux/books/booksOperations";
import { useDispatch } from "react-redux";

const Library = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksOperation());
  }, [dispatch]);

  return (
    <LibraryStyled>
      <BooksList />
    </LibraryStyled>
  );
};

export default Library;
