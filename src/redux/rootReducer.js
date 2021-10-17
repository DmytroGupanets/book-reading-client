import { combineReducers } from "redux";

import booksReducer from "./books/booksReducer";

const rootReducer = combineReducers({
  //   auth: authReducer,
  books: booksReducer,
  // target: targetReducer,
});

export default rootReducer;
