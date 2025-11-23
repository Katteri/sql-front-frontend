import { achievementIcons } from "./const";

import styles from "./achievement-icon.module.scss";

type AchievementIconProps = {
  slug: string,
};

export const AchievementIcon = ({
  slug,
}: AchievementIconProps) => {
  return (
    <div className={styles.icon}>{achievementIcons[slug]}</div>
  );
};
