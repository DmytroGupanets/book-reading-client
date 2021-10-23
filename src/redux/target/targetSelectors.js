export const getTargetId = (state) => state.target.target._id;
export const getRecords = (state) => state.target.target.records;
export const startDate = (state) => state.target.preplanning.startDate;
export const endDate = (state) => state.target.preplanning.endDate;
export const getIdxOfReadedBooksInTraining = (state) =>
  state.target.bookInTraining;

export const getAllPlannedBooks = (state) =>
  state.target.preplanning.plannedBooks;

export const getAllSelectedBooks = (state) =>
  state.target.preplanning.selectedBooks;

export const getPreplaning = (state) => state.target.preplanning;

export const getTargetActiv = (state) => state.target.target.isActive;
