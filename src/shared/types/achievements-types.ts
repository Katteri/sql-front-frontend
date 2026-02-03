import { categoriesMap } from "../consts/achievements";

export type CategoryType = keyof typeof categoriesMap;

export type AchievementTypeDto = {
  achievement_id: number;
  name: string;
  icon: string; //TODO: remove it
  description: string;
  historical_info: string;
  is_earned: boolean;
};

export type AchievementsType = Record<CategoryType, AchievementTypeDto[]>;
export type AchievementsTypeDto = {
  categories: AchievementsType;
};
