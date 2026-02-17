import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth-slice";
import missionsSlice from "./reducers/missions-slice";
import achievementsSlice from "./reducers/achievements-slice";
import tasksSlice from "./reducers/tasks-slice";
import questSlice from "./reducers/quest-slice";

const rootReducer = combineReducers({
  auth: authReducer,
  missions: missionsSlice,
  achievements: achievementsSlice,
  tasks: tasksSlice,
  quest: questSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type StateType = ReturnType<typeof rootReducer>;
export type StoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
