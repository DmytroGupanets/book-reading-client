import { getTarget, updateRecord } from "../../services/targetApi";
import {
  getRecordRequest,
  getRecordSuccess,
  getRecordError,
  updateRecordRequest,
  updateRecordSuccess,
  updateRecordError,
} from "../../redux/target/targetActions";

export const getRecordOperation = (ownerId) => async (dispatch, getState) => {
  try {
    dispatch(getRecordRequest());

    const result = await getTarget(ownerId);

    dispatch(getRecordSuccess(result.data.data));
  } catch (error) {
    dispatch(getRecordError(error.message));
  }
};

export const updateRecordOperation =
  (targetId, newRecord) => async (dispatch) => {
    try {
      dispatch(updateRecordRequest());

      const result = await updateRecord(targetId, newRecord);

      dispatch(updateRecordSuccess(result.data.data));
    } catch (error) {
      dispatch(updateRecordError(error.message));
    }
  };
