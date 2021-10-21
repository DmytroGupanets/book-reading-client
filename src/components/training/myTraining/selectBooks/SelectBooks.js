import React, { useState } from "react";
import Select from "react-select";
import { getPlannedBooks } from "../../../../redux/books/booksSelectors";
import { useSelector } from "react-redux";
import MyGoalList from "../../myGoalBooks/myGoalList/MyGoalList";

const SelectBooks = () => {
  const [value, setValue] = useState("");
  const [selectedBook, setSelectedBook] = useState({});
  const [addTrainingBooks, setAddTrainingBooks] = useState([]);

  const books = useSelector(getPlannedBooks);

  const handleInputChange = (value, e) => {
    if (e.action === "input-change") {
      setSelectedBook((state) => [...state, { value }]);
    }
  };

  const onChange = (e) => {
    const value = e.value;
    setSelectedBook(value);
  };

  const onHandleClick = () => {
    setAddTrainingBooks((state) => [...state, selectedBook]);
  };

  const options = books.map(({ name, author, year, pages, _id }) => ({
    value: { bookName: name, author, year, pages, id: _id },
    label: name,
  }));

  return (
    <>
      <Select
        options={options}
        closeMenuOnSelect={false}
        onChange={onChange}
        onInputChange={handleInputChange}
      />
      <MyGoalList data={addTrainingBooks} />
      {/* <Select
        isMulti
        className="basic-multi-select"
        classNamePrefix="select"
        closeMenuOnSelect={true}
        onInputChange={handleInputChange}
        // inputValue={addValue}
        onChange={onChange}
        // setValue={addValue}
        options={options}
      /> */}
      <button onClick={onHandleClick}>Додати</button>
    </>
  );
};

export default SelectBooks;

// import React, { Component } from "react";
// import Select from "react-select";
// import { getAllBooks } from "../../../../redux/books/booksSelectors";
// import { useSelector } from "react-redux";

// let options = [];

// function MakeOption(x) {
//   return { value: x, label: x };
// }

// class Foo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "",
//     };
//   }

//   handleInputChange = (value, e) => {
//     if (e.action === "input-change") {
//       this.setState({ value });
//     }
//   };
//   render() {
//     return (
//       <Select
//         isMulti
//         name="colors"
//         options={options.map((x) => MakeOption(x))}
//         className="basic-multi-select"
//         classNamePrefix="select"
//         closeMenuOnSelect={false}
//         onInputChange={this.handleInputChange}
//         inputValue={this.state.value}
//       />
//     );
//   }
// }
// export default Foo;
