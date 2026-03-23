export type QuestIdType = "hope";

export const QuestIds = {
  HOPE: "hope",
} as const;
export type QuestIds = typeof QuestIds[keyof typeof QuestIds];

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
