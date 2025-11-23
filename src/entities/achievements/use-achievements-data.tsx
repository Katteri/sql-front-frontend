import { profileAchievementsData as data } from "./mock";

type AchievementType = {
  name: string,
  slug: string,
  category: string,
  historicalInfo: string,
  description: string,
  isAchieved: boolean,
}

export const useAchievementsData = () => {
  const map = new Map<string, AchievementType[]>();
  
  data.forEach((item) => {
    if (!map.has(item.category)) {
      map.set(item.category, []);
    }
    map.get(item.category)?.push(item);
  });

  return Array.from(map.entries()).map(([category, achievements]) => ({
    category,
    achievements,
  }));
};