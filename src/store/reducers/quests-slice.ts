import { EntityState, PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { QuestIdType, QuestProgressType, RunQuestQueryResponseType, SceneProgressType, SubmitQueryResultResponseType, SubmitQueryResultType } from "@/shared/types/quest-types";

import { getQuestProgress, runQuestQuery, submitQuestQuery } from "./actions/quest-action";
import { StateType } from "../store";
import { DefaultStateType } from "@/shared/types/state-manager-types";
import { ErrorRunngingQuery, TaskQueryRunType } from "@/shared/types/task-type";

type QuestStateType = {
  questId: QuestIdType;
  sceneId: string | null;
  sceneProgress: SceneProgressType;
  legend: string | null;
  task: string | null;
  isQuestHasClue: boolean;
  // isUserHasClue: boolean; // TODO: are we really need this?
  // clue?: ClueDtoType; //TODO: have we this?
};

type QuestsStateType = DefaultStateType &
  EntityState<QuestStateType, QuestIdType> &
  { queryRun: DefaultStateType & TaskQueryRunType } &
  { submission: DefaultStateType & SubmitQueryResultType };

const questsAdapter = createEntityAdapter<QuestStateType, QuestIdType>({
  selectId: (quest) => quest.questId,
});

const initialState: QuestsStateType = questsAdapter.getInitialState({
  queryRun: {
    query: null,
    result: null,
    queryError: null,
    isLoading: false,
    error: null,
  },
  submission: {
    is_correct: false,
    points: {
        earned: 0,
        penalty: 0,
    },
    is_quest_completed: false,
    awarded_achievements: [],
    isLoading: false,
    error: null,
  },
  isLoading: false,
  error: null,
});

export const questSlice = createSlice({
  name: "quest",
  initialState,
  reducers: {
    goToTask: (state, action: PayloadAction<QuestIdType>) => {
      questsAdapter.updateOne(state, {
        id: action.payload,
        changes: {
          sceneProgress: "task",
        },
      });
    },
  },
  extraReducers: (builder) => {
    builder
      //getQuestProgress
      .addCase(getQuestProgress.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestProgress.fulfilled.type, (state, action: PayloadAction<QuestProgressType & { questId: QuestIdType }>) => {
        state.isLoading = false;
        state.error = null;

        const quest: QuestStateType = {
          questId: action.payload.questId,
          sceneId: action.payload.scene_id,
          sceneProgress: "legend",
          legend: action.payload.legend,
          task: action.payload.task,
          isQuestHasClue: action.payload.has_clue,
        };

        questsAdapter.upsertOne(state, quest);
      })
      .addCase(getQuestProgress.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //runQuestQuery
      .addCase(runQuestQuery.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(runQuestQuery.fulfilled.type, (state, action: PayloadAction<RunQuestQueryResponseType>) => {
        state.isLoading = false;
        state.error = null;

        state.queryRun = {
          isLoading: false,
          error: null,
          query: action.payload.sql_query,
          result: action.payload.response,
          queryError: null,
        };
      })
      .addCase(runQuestQuery.rejected.type, (state, action: PayloadAction<string | ErrorRunngingQuery>) => {
        state.queryRun.isLoading = false;
        state.queryRun.result = null;

        const response = action.payload;
        if (typeof response !== "string" && "detail" in response) {
          state.queryRun.queryError = JSON.stringify(response.detail);
          state.queryRun.error = null;
        } else {
          state.error = typeof action.payload === "string" ? action.payload : "Unknown error";
        }
      })

      //submitQuestQuery
      .addCase(submitQuestQuery.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(submitQuestQuery.fulfilled.type, (state, action: PayloadAction<SubmitQueryResultResponseType>) => {
        state.isLoading = false;
        state.error = null;

        state.submission = {
          isLoading: false,
          error: null,
          ...action.payload.response,
        };
      })
      .addCase(submitQuestQuery.rejected.type, (state, action: PayloadAction<string | ErrorRunngingQuery>) => {
        state.queryRun.isLoading = false;
        state.queryRun.result = null;

        const response = action.payload;
        if (typeof response !== "string" && "detail" in response) {
          state.queryRun.queryError = JSON.stringify(response.detail);
          state.queryRun.error = null;
        } else {
          state.error = typeof action.payload === "string" ? action.payload : "Unknown error";
        }
      });
    }
});

export const questsSelectors = questsAdapter.getSelectors(
  (state: StateType) => state.quest,
);

export default questSlice.reducer;
