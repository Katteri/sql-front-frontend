import { isAxiosError } from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { MissionsTypeDto } from "@/shared/types/missions-types";
import api from "@/shared/config/axios";
import strings from "@/shared/strings";

export const getMissions = createAsyncThunk(
  "missions/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<MissionsTypeDto>(strings.api.misisons);

      return response.data;
      
    } catch (err) {
      if (isAxiosError(err)) {
        return rejectWithValue(err.response?.data);
      }
      
      return rejectWithValue(strings.unexpectedError);
    }
  }
);
