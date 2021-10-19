import axios from "axios";

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
