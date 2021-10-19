export const getAllBooks = (state) => state.books.items;

export const getCompletedBooks = (state) =>
  state.books.items.filter((book) => book.status === "completed");
export const getInProgressdBooks = (state) =>
  state.books.items.filter((book) => book.status === "inProgress");
export const getPlannedBooks = (state) =>
  state.books.items.filter((book) => book.status === "planned");
