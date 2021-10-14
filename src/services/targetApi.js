import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

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
