import React, { useEffect } from "react";
import Select from "react-select";
import { getPlannedBooks } from "../../../../redux/books/booksSelectors";
import { useDispatch, useSelector } from "react-redux";
import MyGoalList from "../../myGoalBooks/myGoalList/MyGoalList";
import {
  addSelectedBook,
  removeSelectedBook,
  setPlannedBooksForSelect,
  removePlannedBook,
  addPlaningBook,
} from "../../../../redux/target/targetActions";
import {
  getAllSelectedBooks,
  getAllPlannedBooks,
} from "../../../../redux/target/targetSelectors";
import { useStickyState } from "../../../../hooks";

const SelectBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector(getPlannedBooks);
  const plannedBooks = useSelector(getAllPlannedBooks);
  const selectedBooks = useSelector(getAllSelectedBooks);

  const [value, setValue] = useStickyState(books, "books");
  const [selectedBook, setSelectedBook] = useStickyState(
    selectedBooks,
    "selected"
  );
  const [addTrainingBooks, setAddTrainingBooks] = useStickyState(
    selectedBooks,
    "selectedBooks"
  );

  useEffect(() => {
    dispatch(setPlannedBooksForSelect(value));
  }, [dispatch, value]);

  // useEffect(() => {
  //   dispatch(setPlannedBooksForSelect(addTrainingBooks));
  // }, []);

  console.log(value);
  console.log(selectedBook);

  const handleInputChange = (value, e) => {
    if (e.action === "input-change") {
      setSelectedBook((state) => [...state, value]);
    }
  };

  const onChange = (e) => {
    const value = e.value;
    setSelectedBook(value);
  };

  const onHandleClick = () => {
    dispatch(addSelectedBook(selectedBook));

    dispatch(removePlannedBook(selectedBook));

    setAddTrainingBooks((state) => [...state, selectedBook]);
    setValue((state) => [
      ...state.filter((book) => book._id !== selectedBook._id),
    ]);
  };

  console.log(value);
  console.log(selectedBooks);

  const options = value.map(({ name, author, year, pages, _id }) => ({
    value: { name, author, year, pages, _id },
    label: name,
  }));

  const onHandleDelete = (e) => {
    const bookId = e.currentTarget.getAttribute("bookid");
    const bookToRemove = addTrainingBooks.find((book) => book._id === bookId);

    dispatch(removeSelectedBook(bookToRemove));
    dispatch(addPlaningBook(bookToRemove));

    setAddTrainingBooks((state) => state.filter((book) => book._id !== bookId));

    setValue(() => [
      ...value,
      ...addTrainingBooks.filter((book) => book._id === bookId),
    ]);
  };

  console.log(value);
  console.log(addTrainingBooks);
  return (
    <>
      <Select
        options={options}
        closeMenuOnSelect={true}
        onChange={onChange}
        onInputChange={handleInputChange}
      />
      <MyGoalList data={addTrainingBooks} onClickDelete={onHandleDelete} />
      <button onClick={onHandleClick}>Додати</button>
    </>
  );
};

export default SelectBooks;
