import React, { useState } from "react";
import Select from "react-select";
import { getPlannedBooks } from "../../../../redux/books/booksSelectors";
import { useSelector } from "react-redux";
import MyGoalList from "../../myGoalBooks/myGoalList/MyGoalList";

const SelectBooks = () => {
  const books = useSelector(getPlannedBooks);
  const [value, setValue] = useState(books);
  const [selectedBook, setSelectedBook] = useState({});
  const [addTrainingBooks, setAddTrainingBooks] = useState([]);

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
    setAddTrainingBooks((state) => [...state, selectedBook]);

    setValue((state) => [
      ...state.filter((book) => book._id !== selectedBook._id),
    ]);
  };

  const options = value.map(({ name, author, year, pages, _id }) => ({
    value: { name, author, year, pages, _id },
    label: name,
  }));

  const onHandleDelete = (e) => {
    const bookId = e.currentTarget.getAttribute("bookid");

    setAddTrainingBooks((state) => [
      ...state.filter((book) => book._id !== bookId),
    ]);

    setValue((state) => [
      ...state,
      ...books.filter((book) => book._id === bookId),
    ]);
  };

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
