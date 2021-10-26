import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./authActions";

axios.defaults.baseURL = "http://localhost:5000";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (user) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post("api/auth/register", user);
    token.set(response.data.data.token);
    dispatch(registerSuccess(response.data.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const login = (user) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post("api/auth/login", user);
    token.set(response.data.data.token);
    dispatch(loginSuccess(response.data.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const googleAuth = (tokenId) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await axios.post("api/auth/google", { token: tokenId });
    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    console.log(error);
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await axios.get("api/auth/logout");
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.post("api/users/current");

    dispatch(getCurrentUserSuccess(response.data.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
