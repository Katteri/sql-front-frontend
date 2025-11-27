import { useCallback, useState } from "react";

import { MenuIcon } from "@/shared/ui/menu-icon/menu-icon";
import { Overlay } from "@/shared/ui/drawer/overlay/overlay";
import { Title } from "@/shared/ui/title/title";
import { Text } from "@/shared/ui/text/text";
import { Link } from "@/shared/ui/link/link";
import { Select } from "@/shared/ui/select/select";

import { MenuDrawer } from "../menu-drawer/menu-drawer";
import { useTasksData } from "./use-tasks-data";
import { TASK_DIFFICULTY_QUERY_PARAM, TASK_STATUS_QUERY_PARAM, taskDifficultyOptions, taskStatusOptions } from "./const";

import styles from "./tasks.module.scss";

//TODO: add images on page
const images = [
  {
    src: "/images/tasks/image-1.png",
    gridArea: "",
  },
  {
    src: "/images/tasks/image-2.png",
    gridArea: "",
  },
  {
    src: "/images/tasks/image-3.png",
    gridArea: "",
  },
  {
    src: "/images/tasks/image-4.png",
    gridArea: "",
  },
];

const selectConfig = [
  {
    title: "сложность",
    name: TASK_DIFFICULTY_QUERY_PARAM,
    options: taskDifficultyOptions,
  },
  {
    title: "статус",
    name: TASK_STATUS_QUERY_PARAM,
    options: taskStatusOptions,
  },
];

export const Tasks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tasksData = useTasksData();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [setIsMenuOpen]);

  return (
    <section className={styles.tasks}>
      {isMenuOpen && <Overlay onClick={toggleMenu} />}
      <MenuIcon color="red" onClick={toggleMenu} />
      <MenuDrawer isOpen={isMenuOpen} onClose={toggleMenu} currentPage="tasks"/>
      <Title
        as="h1"
        size="12vw"
        margin="3vw 0 5vw"
        color="black"
      >
        задачи
      </Title>
      <div className={styles.selectBlock}>
        {selectConfig.map(({ title, name, options}, index) => (
          <div key={`${name}-${index}`}>
            <Text>{title}</Text>
            <Select
              name={name}
              options={options}
            />
          </div>
        ))}
      </div>
      <div className={styles.tasksSection}>
        {tasksData.map(({ missionId, tasks }) => (
          <div>
            <Title
              as="p"
              color="black"
              size="2vw"
            >
              миссия <span style={{ fontSize: "1.73vw" }}>{missionId}</span>
            </Title>
            <div className={styles.tasksBlock}>
              {tasks.map((task, index) => (
                <Link href="/" isVisited={task.isSolved}>{index+1}. {task.title}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
