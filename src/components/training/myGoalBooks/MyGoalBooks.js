import MyGoalList from "./myGoalList/MyGoalList";
import MyGoalListDefault from "./myGoalListDefault/MyGoalListDefault";
// import { getPlannedBooks } from "../../../redux/books/booksSelectors";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getAllBooksOperation } from "../../../redux/books/booksOperations";
// import { useStickyState } from "../../../hooks";

function MyGoalBooks({ data, onClickDelete }) {
  return (
    <>
      {data.length > 0 ? (
        <MyGoalList data={data} onClickDelete={onClickDelete} />
      ) : (
        <MyGoalListDefault />
      )}
    </>
  );
}

export default MyGoalBooks;
