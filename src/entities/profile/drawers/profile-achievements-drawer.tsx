import { Achievement } from "@/shared/ui/achievement/achievement";
import { Title } from "@/shared/ui/title/title";
import { Drawer, type DrawerProps } from "@/shared/ui/drawer/drawer";

import styles from "./profile-achievements-drawer.module.scss";

type ProfileAchievementsDrawerProps = DrawerProps & {
  data: {
    category: string,
    achievements: {
      name: string,
      slug: string,
      category: string,
      historicalInfo: string,
      description: string,
    }[],
  }[],
}

export const ProfileAchievementsDrawer = ({
  isOpen,
  onClose,
  data,
}: ProfileAchievementsDrawerProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      width="50vw"
      padding="5vw 0 0 4vw"
    >
      <Title
        as="p"
        size="5vw"
        color="black"
      >
        мои достижения
      </Title>
      <div className={styles.achievements}>
        {data.map(({ category, achievements }) => (
          <div key={category} className={styles.categoryBlock}>
            <div className={styles.categoryBlockTitle}>
              <Title
                as="p"
                size="2vw"
                color="black"
              >
                {category}
              </Title>
            </div>
            <div className={styles.achievementsBlock}>
              {achievements.map((item) => (
                <Achievement {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Drawer>
  );
};
