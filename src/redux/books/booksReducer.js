import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addBookError,
  addBookRequest,
  addBookResumeError,
  addBookResumeRequest,
  addBookResumeSuccess,
  addBookSuccess,
  getAllBooksError,
  getAllBooksRequest,
  getAllBooksSuccess,
  updateBookStatusError,
  updateBookStatusRequest,
  updateBookStatusSuccess,
} from "./booksActions";

const booksListReducer = createReducer([], {
  [getAllBooksSuccess]: (_, action) => action.payload.books,
  [addBookSuccess]: (state, action) => [...state, action.payload.book],
  [updateBookStatusSuccess]: (state, action) =>
    state.map((book) =>
      book.id === action.payload.result.id
        ? { ...book, status: action.payload.book.status }
        : book
    ),

  [addBookResumeSuccess]: (state, action) =>
    state.map((book) =>
      book._id === action.payload.result._id ? action.payload.result : book
    ),
});

const isLoadingReducer = createReducer(false, {
  [getAllBooksRequest]: () => true,
  [getAllBooksSuccess]: () => false,
  [getAllBooksError]: () => false,
  [addBookRequest]: () => true,
  [addBookSuccess]: () => false,
  [addBookError]: () => false,
  [addBookResumeRequest]: () => true,
  [addBookResumeSuccess]: () => false,
  [addBookResumeError]: () => false,
  [updateBookStatusRequest]: () => true,
  [updateBookStatusSuccess]: () => false,
  [updateBookStatusError]: () => false,
});

const errorReducer = createReducer("", {
  [getAllBooksRequest]: () => "",
  [getAllBooksError]: (_, { payload }) => payload,
  [addBookRequest]: () => "",
  [addBookError]: (_, { payload }) => payload,
  [addBookResumeRequest]: () => "",
  [addBookResumeError]: (_, { payload }) => payload,
  [updateBookStatusRequest]: () => "",
  [updateBookStatusError]: (_, { payload }) => payload,
});

const booksReducer = combineReducers({
  items: booksListReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default booksReducer;
