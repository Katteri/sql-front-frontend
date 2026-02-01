import { isAxiosError } from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { DataLoginType, LoginResponseType } from "@/shared/types/auth-data-types";
import api from "@/shared/config/axios";
import strings from "@/shared/strings";

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData: DataLoginType, { rejectWithValue }) => {
    try {
      const response = await api.post<LoginResponseType>(strings.api.login, userData);

      return response.data;
      
    } catch (err) {
      if (isAxiosError(err)) {
        return rejectWithValue(err.response?.data);
      }
      
      return rejectWithValue(strings.unexpectedError);
    }
  }
);

