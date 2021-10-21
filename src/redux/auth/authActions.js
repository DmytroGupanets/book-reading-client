import { createAction } from "@reduxjs/toolkit";

export const setUserToken = createAction("auth/tokenSucess");
export const setGoogleToken = createAction("auth/setGoogleToken");

export const registerRequest = createAction("auth/registerRequest");
export const registerSuccess = createAction("auth/registerSuccess");
export const registerError = createAction("auth/registerError");

export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

export const logoutRequest = createAction("auth/logoutRequest");
export const logoutSuccess = createAction("auth/logoutSuccess");
export const logoutError = createAction("auth/logoutError");

export const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
export const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
export const getCurrentUserError = createAction("auth/getCurrentUserError");

export const resetError = createAction("auth/resetError");
