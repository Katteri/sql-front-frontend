import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import type { CategoryType } from "@/shared/types/achievements-types";
import { useEffect } from "react";
import { getProfileAchievements } from "@/store/reducers/actions/profile-action";

export const useProfileAchievementsData = () => {
  const dispatch = useAppDispatch();
  const { achievements } = useAppSelector((state) => state.profile);

   useEffect(() => {
    dispatch(getProfileAchievements());
  }, [dispatch]);

  if (!achievements.data) {
    return {
      data: null,
      isLoading: achievements.isLoading,
      error: achievements.error,
    };
  }

  return {
    data: Object.entries(achievements.data).map(
      ([category, achievementsList]) => ({
        category: category as CategoryType,
        achievements: achievementsList,
      })
    ),
  };
};
