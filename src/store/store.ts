import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth-slice";
import missionsSlice from "./reducers/missions-slice";
import achievementsSlice from "./reducers/achievements-slice";

const rootReducer = combineReducers({
  auth: authReducer,
  missions: missionsSlice,
  achievements: achievementsSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};


export type StateType = ReturnType<typeof rootReducer>;
export type StoreType = ReturnType<typeof setupStore>;
export type DispatchType = StoreType["dispatch"];
