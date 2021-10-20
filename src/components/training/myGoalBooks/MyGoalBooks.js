import MyGoalList from "./myGoalList/MyGoalList";
import MyGoalListDefault from "./myGoalListDefault/MyGoalListDefault";
import { getPlannedBooks } from "../../../redux/books/booksSelectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBooksOperation } from "../../../redux/books/booksOperations";

const MyGoalBooks = () => {
  const books = useSelector(getPlannedBooks);
  const dispatch = useDispatch();
  console.log(books);
  useEffect(() => {
    dispatch(getAllBooksOperation());
  }, [dispatch]);

  // const onDeleteBook = useCallback((_id=>{dispatch(booskOperations.deleteBook(_id))
  // }, [dispatch]);

  return (
    <>
      {books.length > 0 ? (
        <MyGoalList data={books} /* onDeleteBook={onDeleteBook} */ />
      ) : (
        <MyGoalListDefault />
      )}
    </>
  );
};

export default MyGoalBooks;
