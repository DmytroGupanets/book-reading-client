import React, { useEffect, useState } from "react";
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

const SelectBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector(getPlannedBooks);
  const plannedBooks = useSelector(getAllPlannedBooks);
  const selectedBooks = useSelector(getAllSelectedBooks);

  const [value, setValue] = useState(books);
  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    dispatch(setPlannedBooksForSelect(books));
  }, []);

  useEffect(() => {
    setValue(plannedBooks);
  }, [plannedBooks]);

  const handleInputChange = (value, e) => {
    if (e.action === "input-change") {
      setSelectedBook((state) => [...state, { value }]);
    }
  };

  const onChange = (e) => {
    const value = e.value;
    setSelectedBook(value);
  };

  const onHandleClick = (e) => {
    dispatch(addSelectedBook(selectedBook));
  };

  const options = value.map(({ name, author, year, pages, _id }) => ({
    value: { name, author, year, pages, _id },
    label: name,
  }));

  const onHandleDelete = (e) => {
    const bookId = e.currentTarget.getAttribute("bookid");
    const bookToRemove = books.find((book) => book._id === bookId);

    dispatch(removeSelectedBook(bookToRemove));
  };

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
