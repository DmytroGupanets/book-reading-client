import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import {
  getRecordRequest,
  getRecordSuccess,
  getRecordError,
  updateRecordRequest,
  updateRecordSuccess,
  updateRecordError,
  completeTargetRequest,
  completeTargetSuccess,
  completeTargetError,
  setBookInTrainingSuccess,
  addTargetRequest,
  addTargetSucces,
  addTargetError,
  addSelectedBook,
  removeSelectedBook,
  resetPreplanning,
  addPlaningBook,
  removePlannedBook,
  addPreplanningStartDate,
  addPreplanningEndtDate,
  setNumberOfPagesRemaining,
  setPlannedBooksForSelect,
} from "./targetActions";

const targetsReducer = createReducer([], {
  [getRecordSuccess]: (_, { payload }) => payload.result,
  [updateRecordSuccess]: (state, { payload }) => ({
    ...state,
    records: payload,
  }),
  [completeTargetSuccess]: (state, { payload }) => payload,
  [addTargetSucces]: (state, { payload }) => payload.result,
});

const bookInTrainingReducer = createReducer([], {
  [setBookInTrainingSuccess]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [getRecordRequest]: () => true,
  [getRecordSuccess]: () => false,
  [getRecordError]: () => false,
  [updateRecordRequest]: () => true,
  [updateRecordSuccess]: () => false,
  [updateRecordError]: () => false,
  [completeTargetRequest]: () => true,
  [completeTargetSuccess]: () => false,
  [completeTargetError]: () => false,
  [addTargetRequest]: () => true,
  [addTargetSucces]: () => false,
  [addTargetError]: () => false,
});

const errorReducer = createReducer("", {
  [getRecordRequest]: () => "",
  [getRecordError]: (_, { payload }) => payload,
  [updateRecordRequest]: () => "",
  [updateRecordError]: (_, { payload }) => payload,
  [completeTargetRequest]: () => "",
  [completeTargetError]: (_, { payload }) => payload,
  [addTargetRequest]: () => "",
  [addTargetError]: (_, { payload }) => payload,
});

const plannedBooksReducer = createReducer([], {
  [setPlannedBooksForSelect]: (_, { payload }) => payload,
  [removePlannedBook]: (state, { payload }) =>
    state.filter((book) => book._id !== payload._id),

  [addPlaningBook]: (state, { payload }) => [...state, payload],

  [resetPreplanning]: (_, __) => [],
});

const selectedBooksReducer = createReducer([], {
  [addSelectedBook]: (state, { payload }) => [...state, payload],
  [removeSelectedBook]: (state, { payload }) =>
    state.filter((book) => book._id !== payload._id),

  [resetPreplanning]: (_, __) => [],
});

const startDateReducer = createReducer("", {
  [addPreplanningStartDate]: (_, { payload }) => payload,
});

const endDateReducer = createReducer("", {
  [addPreplanningEndtDate]: (_, { payload }) => payload,
});

const numberOfPagesRemainingReducer = createReducer(0, {
  [setNumberOfPagesRemaining]: (_, { payload }) => payload,
});
const preplanningPersistConfig = {
  key: "preplanning",
  storage,
  whitelist: ["plannedBooks", "selectedBooks", "startDate", "endDate"],
};

const preplanningReducer = combineReducers({
  plannedBooks: plannedBooksReducer,
  selectedBooks: selectedBooksReducer,
  startDate: startDateReducer,
  endDate: endDateReducer,
});

const targetReducer = combineReducers({
  target: targetsReducer,
  bookInTraining: bookInTrainingReducer,
  preplanning: preplanningReducer,
  pagesRemaining: numberOfPagesRemainingReducer,
  preplanning: persistReducer(preplanningPersistConfig, preplanningReducer),
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default targetReducer;
