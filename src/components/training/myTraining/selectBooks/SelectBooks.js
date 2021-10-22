import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
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

import SelectBooksStyled from "./SelectBooksStyled";

import sprite from "../../../../images/sprite.svg";

const SelectBooks = ({ toggleModal }) => {
  import { useTranslation } from "react-i18next";
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const books = useSelector(getPlannedBooks);
  const plannedBooks = useSelector(getAllPlannedBooks);
  // const selectedBooks = useSelector(getAllSelectedBooks);

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
    toggleModal();
  };

  const options = value.map(({ name, author, year, pages, _id }) => ({
    value: { name, author, year, pages, _id },
    label: name,
  }));

  // const onHandleDelete = (e) => {
  //   const bookId = e.currentTarget.getAttribute("bookid");
  //   const bookToRemove = books.find((book) => book._id === bookId);

  //   dispatch(removeSelectedBook(bookToRemove));
  // };
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

      {/* <MyGoalList data={selectedBooks} onClickDelete={onHandleDelete} /> */}
      <button className="selectBooksButton" onClick={onHandleClick}>
        {t("Add")}
      </button>
    </SelectBooksStyled>

  );
};

export default SelectBooks;
