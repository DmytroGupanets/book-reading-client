import { createSelector } from "@reduxjs/toolkit";

export const getAllBooks = (state) => state.books.items;
export const getErrorBooks = (state) => state.books.error;

export const getCompletedBooks = createSelector([getAllBooks], (items) =>
  items.filter((book) => book.status === "completed")
);
export const getInProgressdBooks = createSelector([getAllBooks], (items) =>
  items.filter((book) => book.status === "inProgress")
);
export const getPlannedBooks = createSelector([getAllBooks], (items) =>
  items.filter((book) => book.status === "planned")
);
