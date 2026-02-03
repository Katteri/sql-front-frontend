import { useEffect, useMemo } from "react";

import { categoriesMap } from "@/shared/consts/achievements";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import type { AchievementTypeDto, AchievementsType, CategoryType } from "@/shared/types/achievements-types";
import { getAchievements } from "@/store/reducers/actions/achievements-action";

import { profileAchievementsData as data } from "./mock";

type AchievementType = {
  name: string;
  slug: string; //TODO: make slugs instead of or in addition to achievement_id. After that remove categoriesMap
  historicalInfo: string;
  description: string;
  isAchieved: boolean;
}

const makeSlug = (category: CategoryType, id: number): `${number}-${number}` => {
  return `${categoriesMap[category]}-${id}`;
};

const normalizeAchievementsData = (data: AchievementsType): {
  category: CategoryType,
  achievements: AchievementType[]
}[] => {
  return (Object.entries(data) as [CategoryType, AchievementTypeDto[]][]).map(([category, achievements]) => 
    ({
      category,
      achievements: achievements.map((achievement) => ({
        name: achievement.name,
        slug: makeSlug(category, achievement.achievement_id),
        historicalInfo: achievement.historical_info,
        description: achievement.historical_info,
        isAchieved: achievement.is_earned,
      })),
    })
  );
};

export const useAchievementsData = () => {
  const dispatch = useAppDispatch();
  const { achievements } = useAppSelector((state) => state.achievements);

  useEffect(() => {
    dispatch(getAchievements());
  }, [dispatch]);

  const normalizedData = useMemo(() => {
    if (!achievements) {
      return [];
    }

    return normalizeAchievementsData(achievements);
  }, [achievements]);

  return normalizedData;
};
