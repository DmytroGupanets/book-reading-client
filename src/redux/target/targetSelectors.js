export const getTargetId = (state) => state.target.target._id;
export const getTargetActiv = (state) => state.target.target.isActive;
export const getRecords = (state) => state.target.target.records;
export const getTargetEndDate = (state) => state.target.target.endDate;
export const getTargetStartDate = (state) => state.target.target.startDate;
export const getIdxOfReadedBooksInTraining = (state) =>
  state.target.bookInTraining;

export const getPreplaning = (state) => state.target.preplanning;
export const getAllPlannedBooks = (state) =>
  state.target.preplanning.plannedBooks;

export const getAllSelectedBooks = (state) =>
  state.target.preplanning.selectedBooks;

export const getPreplanningStartDate = (state) =>
  state.target.preplanning.startDate;
export const getPreplanningEndDate = (state) =>
  state.target.preplanning.endDate;


export const getNumberOfPagesRemaining = (state) => state.target.pagesRemaining;

export const getIndexOfReadedBooksInTraining = (state) =>
  state.target.bookInTraining;

