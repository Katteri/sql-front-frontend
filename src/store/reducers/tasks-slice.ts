import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { ExpectedResultType, TaskClueDtoType, TaskDataDtoType, TaskDataPayloadType } from "@/shared/types/task-type";

import { StateType } from "../store";
import { getTaskClueData, getTaskData, getTaskExpectedResultData } from "./actions/tasks-actions";

type TaskType = {
  taskId: number;
  missionId: number;
  title: string;
  description: string;
  isSolved: boolean;
  isUserHasClue: boolean;
  isUserHasExpectedResult: boolean;
  previous: {
    taskId: number | null;
    missionId: number | null;
  } | null;
  next: {
    taskId: number | null;
    missionId: number | null;
  } | null;
  clue?: TaskClueDtoType,
  expectedResult?: ExpectedResultType,
};

const tasksAdapter = createEntityAdapter<TaskType, string>({
  selectId: (task) => `${task.missionId}.${task.taskId}`,
});

const initialState = tasksAdapter.getInitialState({
  isLoading: false,
  error: null as string | null,
});

export const tasksSelectors = tasksAdapter.getSelectors<StateType>(
  (state) => state.tasks,
);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getTaskData
      .addCase(getTaskData.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(getTaskData.fulfilled.type, (state, action: PayloadAction<TaskDataDtoType>) => {
        state.isLoading = false;
        state.error = null;

        const task = {
          taskId: action.payload.task_id,
          missionId: action.payload.mission_id,
          title: action.payload.title,
          description: action.payload.description,
          isSolved: action.payload.is_solved,
          isUserHasClue: action.payload.has_clue1,
          isUserHasExpectedResult: action.payload.has_clue2,
          previous: {
            taskId: action.payload.previous.task_id,
            missionId: action.payload.previous.mission_id,
          },
          next: {
            taskId: action.payload.next.task_id,
            missionId: action.payload.next.mission_id,
          },
        };

        tasksAdapter.upsertOne(state, task);
      })
      .addCase(getTaskData.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //getTaskClueData
      .addCase(getTaskClueData.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(getTaskClueData.fulfilled.type, (state, action: PayloadAction<TaskDataPayloadType & { clue: TaskClueDtoType }>) => {
        state.isLoading = false;
        state.error = null;

        tasksAdapter.updateOne(state, {
          id: `${action.payload.missionId}.${action.payload.taskId}`,
          changes: {
            clue: action.payload.clue,
          }
        });
      })
      .addCase(getTaskClueData.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //getTaskExpectedResultData
      .addCase(getTaskExpectedResultData.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(getTaskExpectedResultData.fulfilled.type, (state, action: PayloadAction<TaskDataPayloadType & { expectedResult: ExpectedResultType }>) => {
        state.isLoading = false;
        state.error = null;

        tasksAdapter.updateOne(state, {
          id: `${action.payload.missionId}.${action.payload.taskId}`,
          changes: {
            expectedResult: action.payload.expectedResult,
          }
        });
      })
      .addCase(getTaskExpectedResultData.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default tasksSlice.reducer;
