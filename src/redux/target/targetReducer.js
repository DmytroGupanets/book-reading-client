import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { logoutSuccess } from "../auth/authActions";
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
  setPagesPerDay,
} from "./targetActions";

const targetsReducer = createReducer(null, {
  [getRecordSuccess]: (_, { payload }) => payload.result,
  [updateRecordSuccess]: (state, { payload }) => ({
    ...state,
    records: payload,
  }),
  [completeTargetSuccess]: (_, { payload }) => payload.target,
  [addTargetSucces]: (_, { payload }) => payload.result,
  [logoutSuccess]: () => null,
});

const bookInTrainingReducer = createReducer(-1, {
  [setBookInTrainingSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => -1,
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
  [logoutSuccess]: () => false,
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
  [logoutSuccess]: () => "",
});

const plannedBooksReducer = createReducer([], {
  [setPlannedBooksForSelect]: (_, { payload }) => payload,
  [removePlannedBook]: (state, { payload }) =>
    state.filter((book) => book._id !== payload._id),

  [addPlaningBook]: (state, { payload }) => [...state, payload],

  [resetPreplanning]: () => [],
  [logoutSuccess]: () => [],
});

const selectedBooksReducer = createReducer([], {
  [addSelectedBook]: (state, { payload }) => [...state, payload],
  [removeSelectedBook]: (state, { payload }) =>
    state.filter((book) => book._id !== payload._id),

  [resetPreplanning]: () => [],
  [logoutSuccess]: () => [],
});

const startDateReducer = createReducer("", {
  [addPreplanningStartDate]: (_, { payload }) => payload,
  [resetPreplanning]: () => "",
  [logoutSuccess]: () => "",
});

const endDateReducer = createReducer("", {
  [addPreplanningEndtDate]: (_, { payload }) => payload,
  [resetPreplanning]: () => "",
  [logoutSuccess]: () => "",
});

const numberOfPagesRemainingReducer = createReducer(0, {
  [setNumberOfPagesRemaining]: (_, { payload }) => payload,
});
const preplanningPersistConfig = {
  key: "preplanning",
  storage,
  whitelist: ["plannedBooks", "selectedBooks", "startDate", "endDate"],
};

const pagesPerDayReducer = createReducer(0, {
  [setPagesPerDay]: (_, { payload }) => payload,
});

const preplanningReducer = combineReducers({
  plannedBooks: plannedBooksReducer,
  selectedBooks: selectedBooksReducer,
  startDate: startDateReducer,
  endDate: endDateReducer,
});

const targetReducer = combineReducers({
  target: targetsReducer,
  bookInTraining: bookInTrainingReducer,
  pagesRemaining: numberOfPagesRemainingReducer,
  preplanning: persistReducer(preplanningPersistConfig, preplanningReducer),
  pagesPerDay: pagesPerDayReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default targetReducer;
