import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { loginUser } from "./actions/login-action";
import { registerUser } from "./actions/register-action";
import { LoginResponseType } from "@/shared/types/auth-data-types";

type AuthState = {
  token: string | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  token: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // registerUser
      .addCase(registerUser.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled.type, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // loginUser
      .addCase(loginUser.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled.type, (state, action: PayloadAction<LoginResponseType>) => {
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.access_token;
      })
      .addCase(loginUser.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default authSlice.reducer;
