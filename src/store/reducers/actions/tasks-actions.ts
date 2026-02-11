import { isAxiosError } from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { TaskClueDtoType, TaskDataDtoType, TaskDataPayloadType } from "@/shared/types/task-type";
import api from "@/shared/config/axios";
import strings from "@/shared/strings";

export const getTaskData = createAsyncThunk(
  "tasks/get",
  async (payload: TaskDataPayloadType, { rejectWithValue }) => {
    try {
      const response = await api.get<TaskDataDtoType>(strings.api.task(payload));

      return response.data;
      
    } catch (err) {
      if (isAxiosError(err)) {
        return rejectWithValue(err.response?.data);
      }
      
      return rejectWithValue(strings.unexpectedError);
    }
  }
);

export const getTaskClueData = createAsyncThunk(
  "tasks/clue/get",
  async (payload: TaskDataPayloadType, { rejectWithValue }) => {
    try {
      const response = await api.get<TaskClueDtoType>(strings.api.clue(payload));

      return { clue: response.data, ...payload};
      
    } catch (err) {
      if (isAxiosError(err)) {
        return rejectWithValue(err.response?.data);
      }
      
      return rejectWithValue(strings.unexpectedError);
    }
  }
);

export const getTaskExpectedResultData = createAsyncThunk(
  "tasks/expectedResult/get",
  async (payload: TaskDataPayloadType, { rejectWithValue }) => {
    try {
      const response = await api.get(strings.api.expectedResult(payload));

      return { expectedResult: response.data, ...payload};
      
    } catch (err) {
      if (isAxiosError(err)) {
        return rejectWithValue(err.response?.data);
      }
      
      return rejectWithValue(strings.unexpectedError);
    }
  }
);
