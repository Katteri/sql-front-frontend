import { AchievementTypeDto } from "@/shared/types/achievements-types";

import { Text } from "../text/text";
import { AchievementIcon } from "./achievement-icon/achievement-icon";
import styles from "./achievement.module.scss";

export const Achievement = ({
  achievement_id,
  name,
  description,
  historical_info,
  is_earned,
}: AchievementTypeDto) => {
  return (
    <div className={styles.achievement}>
      <AchievementIcon id={achievement_id} />

      <div className={styles.textBlock}>
        <Text>{name}</Text>
        <Text>{historical_info}</Text>
        <div className={styles.description}>
          <Text>{description}</Text>
        </div>
      </div>
      
      {is_earned && <Text size="2vw">✓</Text>}
    </div>
  );
};
