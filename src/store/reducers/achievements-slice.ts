import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getAchievements } from "./actions/achievements-action";
import { AchievementsType, AchievementsTypeDto } from"@/shared/types/achievements-types";

type AchievementsState = {
  achievements: AchievementsType | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: AchievementsState = {
  achievements: null,
  isLoading: false,
  error: null,
};

export const achievementsSlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getAchievements
      .addCase(getAchievements.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(getAchievements.fulfilled.type, (state, action: PayloadAction<AchievementsTypeDto>) => {
        state.isLoading = false;
        state.error = null;
        state.achievements = action.payload.categories;
      })
      .addCase(getAchievements.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default achievementsSlice.reducer;
