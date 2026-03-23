import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { QuestIdType, QuestProgressType, SceneProgressType } from "@/shared/types/quest-types";

import { getQuestProgress } from "./actions/quest-action";
import { StateType } from "../store";

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

const questsAdapter = createEntityAdapter<QuestStateType, QuestIdType>({
  selectId: (quest) => quest.questId,
});

const initialState = questsAdapter.getInitialState({
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
      // getQuestProgress
      .addCase(getQuestProgress.fulfilled.type, (state, action: PayloadAction<QuestProgressType & { questId: QuestIdType }>) => {
        const quest: QuestStateType = {
          questId: action.payload.questId,
          sceneId: action.payload.scene_id,
          sceneProgress: "legend",
          legend: action.payload.legend,
          task: action.payload.task,
          isQuestHasClue: action.payload.has_clue,
        };

        questsAdapter.upsertOne(state, quest);
      });
    }
});

export const questsSelectors = questsAdapter.getSelectors(
  (state: StateType) => state.quest,
);

export default questSlice.reducer;
