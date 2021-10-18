import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";

import booksReducer from "./books/booksReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
  // target: targetReducer,
});

export default rootReducer;
