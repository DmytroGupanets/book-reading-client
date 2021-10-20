import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmQ1MzQ1YzYzODYzYjZiNDRjZjQ1ZiIsImlhdCI6MTYzNDU1ODU5MywiZXhwIjoxNjM0NjQ0OTkzfQ.I2hcDVzE_RhAqvpBbpb8KeShJceu423p-Mu3KoonfZY";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const getTarget = async (ownerId) => {
  try {
    return await axios.get(`api/targets/${ownerId}`);
  } catch (error) {
    throw error;
  }
};

export const updateRecord = async (targetId, newRecords) => {
  try {
    return await axios.patch(`api/targets/records/${targetId}`, newRecords);
  } catch (error) {
    throw error;
  }
};

export const addTarget = async (target) => {
  try {
    return await axios.post(`api/targets`, target);
  } catch (error) {
    throw error;
  }
};
