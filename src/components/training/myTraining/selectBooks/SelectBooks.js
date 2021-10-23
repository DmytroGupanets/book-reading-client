import React, { useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { getPlannedBooks } from "../../../../redux/books/booksSelectors";
import { useDispatch, useSelector } from "react-redux";
import MyGoalList from "../../myGoalBooks/myGoalList/MyGoalList";
import {
  addSelectedBook,
  removeSelectedBook,
  setPlannedBooksForSelect,
} from "../../../../redux/target/targetActions";
import {
  getAllPlannedBooks,
  getAllSelectedBooks,
} from "../../../../redux/target/targetSelectors";
import { useStickyState } from "../../../../hooks";

const SelectBooks = () => {
  // const { t } = useTranslation();
  const dispatch = useDispatch();
  const books = useSelector(getPlannedBooks);
  const plannedBooks = useSelector(getAllPlannedBooks);
  const selectedBooks = useSelector(getAllSelectedBooks);

  const [value, setValue] = useStickyState(books, "book");
  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    dispatch(setPlannedBooksForSelect(books));
  }, []);

  useEffect(() => {
    setValue(plannedBooks);
  }, [plannedBooks, setValue]);

  const handleInputChange = useCallback((value, e) => {
    if (e.action === "input-change") {
      setSelectedBook((state) => [...state, value]);
    }
  }, []);

  const onChange = (e) => {
    const value = e.value;
    setSelectedBook(value);
  };

  const onHandleClick = useCallback(
    (e) => {
      dispatch(addSelectedBook(selectedBook));
    },
    [dispatch, selectedBook]
  );

  const options = value.map(({ name, author, year, pages, _id }) => ({
    value: { name, author, year, pages, _id },
    label: name,
  }));

  const onHandleDelete = useCallback(
    (e) => {
      const bookId = e.currentTarget.getAttribute("bookid");
      const bookToRemove = books.find((book) => book._id === bookId);

      dispatch(removeSelectedBook(bookToRemove));
    },
    [books, dispatch]
  );

  return (
    <>
      <Select
        options={options}
        closeMenuOnSelect={true}
        onChange={onChange}
        onInputChange={handleInputChange}
      />
      <MyGoalList data={selectedBooks} onClickDelete={onHandleDelete} />
      <button onClick={onHandleClick}>Додати</button>
    </>
  );
};

export default SelectBooks;
