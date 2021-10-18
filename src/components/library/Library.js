import React, { useEffect } from "react";
import { LibraryStyled } from "./LibraryStyled";
import BooksList from "./booksList/BooksList";
import { getAllBooksOperation } from "../../redux/books/booksOperations";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Library = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksOperation());
  }, [dispatch]);

  return (
    <LibraryStyled>
      <BooksList />

      <NavLink to="/training" className="trainingLink">
        Далі
      </NavLink>
    </LibraryStyled>
  );
};

export default Library;
