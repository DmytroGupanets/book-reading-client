import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authReducer";
import booksReducer from "./books/booksReducer";
import targetReducer from "./target/targetReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["isAuthenticated", "token", "error"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  books: booksReducer,
  target: targetReducer,
});

export default rootReducer;
