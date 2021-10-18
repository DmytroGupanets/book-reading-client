import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";

import booksReducer from "./books/booksReducer";
import targetReducer from "./target/targetReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
  target: targetReducer,
});

export default rootReducer;
