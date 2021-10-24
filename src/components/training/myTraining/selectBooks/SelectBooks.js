import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { useTranslation } from "react-i18next";
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

import SelectBooksStyled from "./SelectBooksStyled";

import sprite from "../../../../images/sprite.svg";
import useWindowDimensions from "../../../../hooks/resize";

const SelectBooks = ({ toggleModal }) => {
  const { t } = useTranslation();

  const clientsWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(clientsWidth < 768);
  }, [clientsWidth]);

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
    selectedBook,
    "selectedBooks"
  );

  useEffect(() => {
    dispatch(setPlannedBooksForSelect(value));
  }, []);

  // useEffect(() => {
  //   dispatch(setPlannedBooksForSelect(addTrainingBooks));
  // }, []);

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

    if (isMobile) toggleModal();
  };

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

  const CaretDownIcon = () => {
    return (
      <svg className="selectBooksIconPolygon">
        <use href={sprite + "#icon-polygon"} />
      </svg>
    );
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };

  return (
    <SelectBooksStyled>
      <Select
        options={options}
        closeMenuOnSelect={true}
        onChange={onChange}
        onInputChange={handleInputChange}
        components={{ DropdownIndicator }}
      />
      <button className="selectBooksButton" onClick={onHandleClick}>
        {t("Add")}
      </button>
    </SelectBooksStyled>
  );
};

export default SelectBooks;
