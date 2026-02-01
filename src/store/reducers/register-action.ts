import { isAxiosError } from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { DataRegisterType } from "@/shared/types/auth-data-types";
import api from "@/shared/config/axios";
import strings from "@/shared/strings";

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData: DataRegisterType, { rejectWithValue }) => {
    try {
      await api.post(strings.api.register, userData);
      
    } catch (err) {
      if (isAxiosError(err)) {
        return rejectWithValue(err.response?.data);
      }
      
      return rejectWithValue(strings.unexpectedError);
    }
  }
);

