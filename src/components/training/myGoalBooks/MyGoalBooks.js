import MyGoalList from "./myGoalList/MyGoalList";
import MyGoalListDefault from "./myGoalListDefault/MyGoalListDefault";
import { getPlannedBooks } from "../../../redux/books/booksSelectors";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { getAllBooksOperation } from "../../../redux/books/booksOperations";

const MyGoalBooks = () => {
  const books = useSelector(getPlannedBooks);
  const [bookState, setsBooks] = useState(books);
  const dispatch = useDispatch();

  const onClickDelete = (e) => {
    e.preventDefault();
    const bookId = e.currentTarget.getAttribute("bookid");
    setsBooks(bookState.filter((item) => item._id !== bookId));
  };

  useEffect(() => {
    dispatch(getAllBooksOperation());
  }, [dispatch]);

  useEffect(() => {
    setsBooks(books);
  }, [books]);

  return (
    <>
      {books.length > 0 ? (
        <MyGoalList data={bookState} onClickDelete={onClickDelete} />
      ) : (
        <MyGoalListDefault />
      )}
    </>
  );
};

export default MyGoalBooks;
