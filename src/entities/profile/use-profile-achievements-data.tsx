import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { useEffect } from "react";
import { getProfileAchievements } from "@/store/reducers/actions/profile-action";
import { normalizeAchievementsData } from "@/shared/utils/normalize-achievements-data";

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
    data: normalizeAchievementsData(achievements.data),
  };
};
