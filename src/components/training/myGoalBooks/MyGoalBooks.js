import MyGoalList from "./myGoalList/MyGoalList";
import MyGoalListDefault from "./myGoalListDefault/MyGoalListDefault";
import { getPlannedBooks } from "../../../redux/books/booksSelectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBooksOperation } from "../../../redux/books/booksOperations";
import { useStickyState } from "../../../hooks";

function MyGoalBooks() {
  const books = useSelector(getPlannedBooks);
  const [bookState, setsBooks] = useStickyState(books, "books");
  const dispatch = useDispatch();

  const onClickDelete = (e) => {
    e.preventDefault();
    const bookId = e.currentTarget.getAttribute("bookid");
    setsBooks(bookState.filter((item) => item._id !== bookId));
  };

  useEffect(() => {
    dispatch(getAllBooksOperation());
  }, [dispatch]);

  return (
    <>
      {books.length > 0 ? (
        <MyGoalList data={bookState} onClickDelete={onClickDelete} />
      ) : (
        <MyGoalListDefault />
      )}
    </>
  );
}

export default MyGoalBooks;
