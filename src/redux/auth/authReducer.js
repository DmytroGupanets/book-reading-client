import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  getCurrentUserError,
  getCurrentUserRequest,
  loginError,
  loginRequest,
  logoutError,
  logoutRequest,
  registerError,
  registerRequest,
  getCurrentUserSuccess,
  setGoogleToken,
} from "./authActions";

const setError = (_, { payload }) => payload;
const refreshError = () => null;

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, action) => action.payload.user,
  [loginSuccess]: (_, action) => action.payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, action) => action.payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, action) => action.payload.token,
  [loginSuccess]: (_, action) => action.payload.token,
  [logoutSuccess]: refreshError,
  [setGoogleToken]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [registerError]: setError,
  [getCurrentUserError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [registerRequest]: refreshError,
  [loginRequest]: refreshError,
  [logoutRequest]: refreshError,
  [getCurrentUserRequest]: refreshError,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const authReducer = combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});

export default authReducer;
