import { useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import type { AchievementType, AchievementTypeDto, AchievementsType, CategoryType } from "@/shared/types/achievements-types";
import { getAchievements } from "@/store/reducers/actions/achievements-action";

const normalizeAchievementsData = (data: AchievementsType): {
  category: CategoryType,
  achievements: AchievementType[]
}[] => {
  return (Object.entries(data) as [CategoryType, AchievementTypeDto[]][]).map(([category, achievements]) => 
    ({
      category,
      achievements: achievements.map((achievement) => ({
        id: achievement.achievement_id,
        name: achievement.name,
        historicalInfo: achievement.historical_info,
        description: achievement.description,
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
