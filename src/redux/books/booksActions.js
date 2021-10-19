import { createAction } from "@reduxjs/toolkit";

export const getAllBooksRequest = createAction("books/getAllBooksRequest");
export const getAllBooksSuccess = createAction("books/getAllBooksSuccess");
export const getAllBooksError = createAction("books/getAllBooksError");

export const addBookRequest = createAction("books/addBookRequest");
export const addBookSuccess = createAction("books/addBookSuccess");
export const addBookError = createAction("books/addBookError");

export const addBookResumeRequest = createAction("books/addBookResumeRequest");
export const addBookResumeSuccess = createAction("books/addBookResumeSuccess");
export const addBookResumeError = createAction("books/addBookResumeError");

export const updateBookStatusRequest = createAction(
  "books/updateBookStatusRequest"
);
export const updateBookStatusSuccess = createAction(
  "books/updateBookStatusSuccess"
);
export const updateBookStatusError = createAction(
  "books/updateBookStatusError"
);
