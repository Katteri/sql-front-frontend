import { AchievementSubmitType } from "./achievements-types";
import { ResultQueryDataType } from "./task-type";

export type SceneProgressType = "legend" | "task";

export type QuestClueData = {
  clue?: string;
  isUserHasClue: boolean;
  isQuestHasClue: boolean;
};

export type QuestProgressType = {
  scene_id: string;
  legend: string;
  task: string;
  has_clue: boolean;
};

export type RunQuestQueryType = {
  scene_id: string;
  sql_query: string;
};

export type RunQuestQueryResponseType = { response: ResultQueryDataType } & { sql_query: string };

export type SubmitQueryResultType = {
  is_correct: boolean;
  points: {
    earned: number;
    penalty: number;
  };
  is_quest_completed: boolean;
  awarded_achievements: AchievementSubmitType[];
};

export type SubmitQueryResultResponseType = { response: SubmitQueryResultType } & { sql_query: string };
