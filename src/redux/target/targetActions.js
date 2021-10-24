import { createAction } from "@reduxjs/toolkit";

export const getRecordRequest = createAction("targets/getRecordRequest");
export const getRecordSuccess = createAction("targets/getRecordSuccess");
export const getRecordError = createAction("targets/getRecordError");

export const updateRecordRequest = createAction("targets/updateRecordRequest");
export const updateRecordSuccess = createAction("targets/updateRecordSuccess");
export const updateRecordError = createAction("targets/updateRecordError");

export const completeTargetRequest = createAction(
  "target/completeTargetRequest"
);
export const completeTargetSuccess = createAction(
  "target/completeTargetSuccess"
);
export const completeTargetError = createAction("target/completeTargetError");

export const setBookInTrainingSuccess = createAction(
  "target/setBookInTrainingSuccess"
);

export const addTargetRequest = createAction("target/addTargetRequest");
export const addTargetSucces = createAction("target/addTargetSucces");
export const addTargetError = createAction("target/addTargetError");

export const removePlannedBook = createAction(
  "targets/preplanning/removePlannedBook"
);

export const setBookSelected = createAction(
  "targets/preplanning/setBookSelected"
);

export const setPlannedBooksForSelect = createAction(
  "targets/preplanning/setPlannnedBooksForSelect"
);

export const addPlaningBook = createAction(
  "targets/preplanning/addPlaningBook"
);

export const addSelectedBook = createAction(
  "targets/preplanning/addSelectedBook"
);
export const removeSelectedBook = createAction(
  "targets/preplanning/removeSelectedBook"
);

export const resetPreplanning = createAction(
  "targets/preplanning/resetPreplanning"
);

export const addPreplanningStartDate = createAction(
  "targets/preplanning/addPreplanningStartDate"
);
export const addPreplanningEndtDate = createAction(
  "targets/preplanning/addPreplanningEndDate"
);
