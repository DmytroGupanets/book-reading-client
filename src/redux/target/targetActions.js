import { createAction } from "@reduxjs/toolkit";

export const getRecordRequest = createAction("targets/getRecordRequest");
export const getRecordSuccess = createAction("targets/getRecordSuccess");
export const getRecordError = createAction("targets/getRecordError");

export const updateRecordRequest = createAction("targets/updateRecordRequest");
export const updateRecordSuccess = createAction("targets/updateRecordSuccess");
export const updateRecordError = createAction("targets/updateRecordError");
