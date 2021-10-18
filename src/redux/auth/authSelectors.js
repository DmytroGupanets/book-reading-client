export const getError = (state) => state.auth.error;
export const getUserEmail = (state) => state.auth.user.email;
export const getAuthenticated = (state) => Boolean(state.auth.token);
export const getToken = (state) => state.auth.token;
export const getUserName = (state) => state.auth.user.name;
export const setToken = (state) => state.auth.token;
