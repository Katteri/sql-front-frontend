import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type QuestState = {
  questId: string | null;
  currentSceneId: string | null;
  choices: string[]; //TODO: is that necessary?
};

const initialState: QuestState = {
  questId: null,
  currentSceneId: null,
  choices: [],
};

export const questSlice = createSlice({
  name: "quest",
  initialState,
  reducers: {
    startQuest: (state, action: PayloadAction<{ questId: string }>) => {
      state.questId = action.payload.questId;
      state.currentSceneId = "";
    },
    goToScene: (state, action) => {
      state.currentSceneId = action.payload.sceneId;
    }
  },
  //TODO: add extraReducers for sending sql queries to backend
});

export default questSlice.reducer;
