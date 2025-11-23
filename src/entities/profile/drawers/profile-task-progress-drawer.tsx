import { Title } from "@/shared/ui/title/title";
import { Text } from "@/shared/ui/text/text";
import { ProgressBar } from "@/shared/ui/progress-bar/progress-bar";
import { Drawer, type DrawerProps } from "@/shared/ui/drawer/drawer";

import styles from "./profile-task-progress-drawer.module.scss";

type TaskProgressDrawerProps = DrawerProps & {
  data: {
    title: string,
    solved: number,
    total: number,
  }[]
};

export const TaskProgressDrawer = ({
  isOpen,
  onClose,
  data,
}: TaskProgressDrawerProps) => {
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
        прогресс по задачам
      </Title>
      <div className={styles.progressBlock} >
        {data.map(({ title, solved, total }) => (
          <div className={styles.row} key={title}>
            <Text>
              {title}
            </Text>
            <ProgressBar solved={solved} total={total} />
            <Text>{solved}/{total}</Text>
          </div>
        ))}
      </div>
    </Drawer>
  );
};
