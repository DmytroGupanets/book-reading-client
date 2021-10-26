import MyProgresslList from "./myProgressBooks/MyProgressList";
import MyProgressListDefault from "./myProgressBooksDef/MyProgressListDefault";
// import { getPlannedBooks } from "../../../redux/books/booksSelectors";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getAllBooksOperation } from "../../../redux/books/booksOperations";
// import { useStickyState } from "../../../hooks";

function MyProgresslBooks({ data, onClickDelete }) {
  return (
    <>
      {data.length > 0 ? (
        <MyProgresslList data={data} onClickDelete={onClickDelete} />
      ) : (
        <MyProgressListDefault />
      )}
    </>
  );
}

export default MyProgresslBooks;
