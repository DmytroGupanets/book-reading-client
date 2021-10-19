import axios from "axios";

export const registerUser = async (user) => {
  try {
    return await axios.post("api/auth/register", user);
  } catch (error) {
    throw error;
  }
};
