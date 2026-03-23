import { isAxiosError } from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { QuestIdType, QuestProgressType } from "@/shared/types/quest-types";
import api from "@/shared/config/axios";
import strings from "@/shared/consts/strings";

export const getQuestProgress = createAsyncThunk(
  "quests/get--info",
  async (questId: QuestIdType, { rejectWithValue }) => {
    try {
      const response = await api.get<QuestProgressType>(strings.api.questProgress({ questId }));

      return {
        ...response.data,
        questId,
      };
      
    } catch (err) {
      if (isAxiosError(err)) {
        return rejectWithValue(err.response?.data);
      }
      
      return rejectWithValue(strings.unexpectedError);
    }
  }
);
