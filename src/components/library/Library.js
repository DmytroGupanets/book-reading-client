import React, { useEffect } from "react";
import { LibraryStyled } from "./LibraryStyled";
import BooksList from "./booksList/BooksList";
import LibraryEmpty from "../libraryEmpty/LibraryEmpty";
import AddBookModal from "../addBookModal/AddBookModal";
import { getAllBooksOperation } from "../../redux/books/booksOperations";
import { useDispatch, useSelector } from "react-redux";
import { getAuthenticated } from "../../redux/auth/authSelectors";
import { NavLink } from "react-router-dom";
import { getAllBooks } from "../../redux/books/booksSelectors";

const Library = () => {
  const isAuth = useSelector(getAuthenticated);
  const books = useSelector(getAllBooks);
  const dispatch = useDispatch();
  console.log(books);
  useEffect(() => {
    dispatch(getAllBooksOperation());
  }, [dispatch]);

  const isUserHaveAnyBooks = Boolean(books.length);

  return (
    <LibraryStyled>
      {isAuth && <LibraryEmpty />}
      {isAuth && !isUserHaveAnyBooks && <AddBookModal />}
      {isAuth && isUserHaveAnyBooks && <BooksList />}

      {isAuth && isUserHaveAnyBooks && (
        <NavLink to="/training" className="trainingLink">
          Далі
        </NavLink>
      )}
    </LibraryStyled>
  );
};

export default Library;
