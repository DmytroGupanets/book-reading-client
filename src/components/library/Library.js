import React, { useContext, useEffect } from "react";
import { LibraryStyled } from "./LibraryStyled";
import BooksList from "./booksList/BooksList";
import LibraryEmpty from "../libraryEmpty/LibraryEmpty";
import AddBookModal from "../addBookModal/AddBookModal";
import { getAllBooksOperation } from "../../redux/books/booksOperations";
import { useDispatch, useSelector } from "react-redux";
import { getAuthenticated } from "../../redux/auth/authSelectors";
import { NavLink } from "react-router-dom";
import { getAllBooks } from "../../redux/books/booksSelectors";
import { ThemeContext } from "../App";
import Modal from "../modal/Modal";
import useWindowDimensions from "../../hooks/resize";
import { useState } from "react";
import LibraryEmptyModal from "../libraryEmpty/libraryEmptyModal/LibraryEmptyModal";

const Library = () => {
  const isAuth = useSelector(getAuthenticated);
  const books = useSelector(getAllBooks);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const isMobile = useWindowDimensions().width < 768;
  const [modalState, setModalState] = useState(true);
  const [addBookLibraryModal, setAddBookLibraryModal] = useState(true);

  const toggleModal = () => {
    setModalState((state) => !state);
  };

  const toggleAddBookModal = () => {
    setAddBookLibraryModal((state) => !state);
  };

  useEffect(() => {
    dispatch(getAllBooksOperation());
  }, [dispatch]);

  const isUserHaveAnyBooks = Boolean(books.length);

  return (
    <LibraryStyled colors={theme}>
      {isAuth && !isMobile && <LibraryEmpty />}
      {isAuth && isMobile && addBookLibraryModal && (
        <Modal onClose={toggleAddBookModal}>
          <LibraryEmptyModal onClose={toggleAddBookModal} />
        </Modal>
      )}
      {isAuth && !isUserHaveAnyBooks && !isMobile && <AddBookModal />}
      {isAuth && !isUserHaveAnyBooks && isMobile && modalState && (
        <Modal onClose={toggleModal}>
          <AddBookModal onClose={toggleModal} />
        </Modal>
      )}
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
