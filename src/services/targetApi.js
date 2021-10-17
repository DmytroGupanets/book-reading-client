import axios from "axios";

const token = "";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const getTarget = async (targetId) => {
  try {
    return await axios.get(`api/targets/records/${targetId}`);
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
