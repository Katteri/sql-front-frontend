import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth-slice";
import missionsSlice from "./reducers/missions-slice";

const rootReducer = combineReducers({
  auth: authReducer,
  missions: missionsSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};


export type StateType = ReturnType<typeof rootReducer>;
export type StoreType = ReturnType<typeof setupStore>;
export type DispatchType = StoreType["dispatch"];
