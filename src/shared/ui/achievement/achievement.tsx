import { Text } from "../text/text";
import { AchievementIcon } from "./achievement-icon/achievement-icon";

import styles from "./achievement.module.scss";

type AchievementProps = {
  name: string,
  slug: string,
  category: string,
  historicalInfo: string,
  description: string,
  isAchieved?: boolean,
};

export const Achievement = ({
  name,
  slug,
  category,
  historicalInfo,
  description,
  isAchieved = false,
}: AchievementProps) => {
  return (
    <div className={styles.achievement}>
      <AchievementIcon slug={slug} />
      <div className={styles.textBlock}>
        <Text>{name}</Text>
        <Text>{historicalInfo}</Text>
        <div className={styles.description}>
          <Text>{description}</Text>
        </div>
      </div>
      {isAchieved && <Text size="2vw">✓</Text>}
    </div>
  );
};