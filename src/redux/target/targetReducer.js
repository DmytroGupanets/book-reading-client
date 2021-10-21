import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
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
} from "./targetActions";

const targetsReducer = createReducer([], {
  [getRecordSuccess]: (_, { payload }) => payload.result,
  [updateRecordSuccess]: (state, { payload }) => ({
    ...state,
    records: payload,
  }),
  [completeTargetSuccess]: (state, { payload }) => payload,
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
});

const errorReducer = createReducer("", {
  [getRecordRequest]: () => "",
  [getRecordError]: (_, { payload }) => payload,
  [updateRecordRequest]: () => "",
  [updateRecordError]: (_, { payload }) => payload,
  [completeTargetRequest]: () => "",
  [completeTargetError]: (_, { payload }) => payload,
});

const targetReducer = combineReducers({
  target: targetsReducer,
  bookInTraining: bookInTrainingReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default targetReducer;
