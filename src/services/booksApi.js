import axios from "axios";

const token = process.env.REACT_APP_TOKEN;

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const getAllBooks = async () => {
  try {
    return await axios.get("api/books");
  } catch (error) {
    throw error;
  }
};

// export const getBookById = async (id) => {
//   try {
//     return await axios.get(`api/books/${id}`);
//   } catch (error) {
//     throw error;
//   }
// };

export const addNewBook = async (book) => {
  try {
    return await axios.post("api/books", book);
  } catch (error) {
    throw error;
  }
};

export const updateBookStatus = async (id, status) => {
  try {
    return await axios.patch(`api/books/status/${id}`, status);
  } catch (error) {
    throw error;
  }
};

export const addBookResumeById = async (id, resume) => {
  try {
    return await axios.put(`api/books/resume/${id}`, { resume });
  } catch (error) {
    throw error;
  }
};
