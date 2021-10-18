import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getRecordRequest,
  getRecordSuccess,
  getRecordError,
  updateRecordRequest,
  updateRecordSuccess,
  updateRecordError,
} from "./targetActions";

const targetsReducer = createReducer([], {
  [getRecordSuccess]: (_, { payload }) => payload.data,
});

const isLoadingReducer = createReducer(false, {
  [getRecordRequest]: () => true,
  [getRecordSuccess]: () => false,
  [getRecordError]: () => false,
  [updateRecordRequest]: () => true,
  [updateRecordSuccess]: () => false,
  [updateRecordError]: () => false,
});

const errorReducer = createReducer("", {
  [getRecordRequest]: () => "",
  [getRecordError]: (_, { payload }) => payload,
  [updateRecordRequest]: () => "",
  [updateRecordError]: (_, { payload }) => payload,
});

const targetReducer = combineReducers({
  target: targetsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default targetReducer;
