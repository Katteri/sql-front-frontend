import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth-slice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};


export type StateType = ReturnType<typeof rootReducer>;
export type StoreType = ReturnType<typeof setupStore>;
export type DispatchType = StoreType["dispatch"];
