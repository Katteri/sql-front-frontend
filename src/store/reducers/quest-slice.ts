import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { SceneProgressType } from "@/shared/types/quest-types";
import { ClueDtoType } from "@/shared/types/task-type";

type QuestState = { //TODO: add questSceneData
  currentSceneId: string | null;
  sceneProgress: SceneProgressType;
  isUserHasClue: boolean;
  clue?: ClueDtoType;
};

const initialState: QuestState = {
  currentSceneId: null,
  sceneProgress: "legend",
  isUserHasClue: false,
};

export const questSlice = createSlice({
  name: "quest",
  initialState,
  reducers: {
    startQuest: (state) => {
      state.currentSceneId = "start";
      state.sceneProgress = "legend";
    },
    goToScene: (state, action: PayloadAction<{ sceneId: string }>) => {
      state.currentSceneId = action.payload.sceneId;
      state.sceneProgress = "legend";
    },
    goToTask: (state) => {
      state.sceneProgress = "task";
    },
  },
  //TODO: add extraReducers for sending sql queries to backend
});

export default questSlice.reducer;
