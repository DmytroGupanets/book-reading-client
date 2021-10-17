import {
  addBookResumeById,
  addNewBook,
  getAllBooks,
  updateBookStatus,
} from "../../services/booksApi";
import {
  addBookError,
  addBookRequest,
  addBookResumeError,
  addBookResumeRequest,
  addBookResumeSuccess,
  addBookSuccess,
  getAllBooksError,
  getAllBooksRequest,
  getAllBooksSuccess,
  updateBookStatusError,
  updateBookStatusRequest,
  updateBookStatusSuccess,
} from "./booksActions";

export const getAllBooksOperation = () => async (dispatch, _) => {
  try {
    dispatch(getAllBooksRequest());
    const res = await getAllBooks();

    dispatch(getAllBooksSuccess(res.data.data));
  } catch (error) {
    dispatch(getAllBooksError(error.message));
  }
};

export const addNewBookOperation = (book) => async (dispatch, _) => {
  try {
    dispatch(addBookRequest());
    const res = await addNewBook(book);

    dispatch(addBookSuccess(res.data.data));
  } catch (error) {
    dispatch(addBookError(error.message));
  }
};

export const updateBookStatusOperation =
  (id, status) => async (dispatch, _) => {
    try {
      dispatch(updateBookStatusRequest());
      const res = await updateBookStatus(id, status);

      dispatch(updateBookStatusSuccess(res.data.data));
    } catch (error) {
      dispatch(updateBookStatusError(error.message));
    }
  };

export const addBookResumeByIdOperation =
  (id, resume) => async (dispatch, _) => {
    try {
      dispatch(addBookResumeRequest());
      const res = await addBookResumeById(id, resume);

      console.log(`res.data.data`, res.data.data);
      dispatch(addBookResumeSuccess(res.data.data));
    } catch (error) {
      dispatch(addBookResumeError(error.message));
    }
  };
