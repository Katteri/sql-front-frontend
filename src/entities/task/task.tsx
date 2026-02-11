import { useCallback, useState } from "react";

import { MenuIcon } from "@/shared/ui/menu-icon/menu-icon";
import { MenuDrawer } from "@/entities/menu-drawer/menu-drawer";
import { Title } from "@/shared/ui/title/title";
import { Text } from "@/shared/ui/text/text";

import { useTaskData } from "./use-task-data";
import styles from "./task.module.scss";
import { databaseEdges, databaseNodes } from "./const";
import { TaskBlock } from "@/shared/ui/task-block/task-block";

export const Task = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const data = useTaskData();
  
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [setIsMenuOpen]);

  return (
    <section className={styles.task}>
      <MenuIcon color="red" onClick={toggleMenu}/>
      <MenuDrawer isOpen={isMenuOpen} onClose={toggleMenu} currentPage="missions"/>
      
      <div className={styles.spaceBetween}>
        <Text>
          миссия {data.missionId}.{data.taskId}
        </Text>
        <Text>
          мои баллы: {data.totalScore}
        </Text>
      </div>

      <Title
        color="black"
        size="7vw"
        margin="6vw 0"
      >
        {data.title}
      </Title>
      <TaskBlock 
        type="task"
        isSolved={data.isSolved}
        task={data.description}
        isUserHasClue={data.isUserHasClue}
        isUserHasExpectedResult={data.isUserHasExpectedResult}
        databaseNodes={databaseNodes}
        databaseEdges={databaseEdges}
      />
    </section>
  );
};
