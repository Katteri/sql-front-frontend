import { QuestIds } from "@/shared/types/quest-types";

export const isQuestId = (value: unknown): value is QuestIds =>
  typeof value === "string" && Object.values(QuestIds).includes(value as QuestIds);
