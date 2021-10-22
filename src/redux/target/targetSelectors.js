export const getTargetId = (state) => state.target.target._id;
export const getRecords = (state) => state.target.target.records;
export const startDate = (state) => state.target.target.startDate;
export const endDate = (state) => state.target.target.endDate;
export const getIdxOfReadedBooksInTraining = (state) =>
  state.target.bookInTraining;

export const getAllPlannedBooks = (state) =>
  state.target.preplanning.plannedBooks;

export const getAllSelectedBooks = (state) =>
  state.target.preplanning.selectedBooks;
