import { useCallback, useState } from "react";

import { MenuIcon } from "@/shared/ui/menu-icon/menu-icon";
import { Overlay } from "@/shared/ui/drawer/overlay/overlay";
import { Title } from "@/shared/ui/title/title";
import { Text } from "@/shared/ui/text/text";
import { Link } from "@/shared/ui/link/link";
import { Select } from "@/shared/ui/select/select";

import { MenuDrawer } from "../menu-drawer/menu-drawer";
import { useMissionsData } from "./use-missions-data";
import { TASK_DIFFICULTY_QUERY_PARAM, TASK_STATUS_QUERY_PARAM, taskDifficultyOptions, taskStatusOptions } from "./const";

import styles from "./missions.module.scss";

//TODO: add images on page
const images = [
  {
    src: "/images/tasks/image-1.png",
    alt: "tasks background image 1",
    gridArea: "",
  },
  {
    src: "/images/tasks/image-2.png",
    alt: "tasks background image 2",
    gridArea: "",
  },
  {
    src: "/images/tasks/image-3.png",
    alt: "tasks background image 3",
    gridArea: "",
  },
  {
    src: "/images/tasks/image-4.png",
    alt: "tasks background image 4",
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

export const Missions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const missionsData = useMissionsData();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [setIsMenuOpen]);

  return (
    <section className={styles.missions}>
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
      <div className={styles.content}>
        <div className={styles.tasksSection}>
          {missionsData.length > 0 ? missionsData.map(({ missionId, tasks }) => (
            <div key={`mission-${missionId}`}> 
              <Title
                as="p"
                color="black"
                size="2vw"
              >
                миссия <span style={{ fontSize: "1.73vw" }}>{missionId}</span>
              </Title>
              <div className={styles.tasksBlock}>
                {tasks.map((task, index) => (
                  <Link
                    href="/"
                    isVisited={task.isSolved}
                    key={`task-${index+1}`}
                  >
                    {index+1}. {task.title}
                  </Link>
                ))}
              </div>
            </div>
          )) : <Title
                as="p"
                color="black"
                size="2vw"
              >
                нет задач
              </Title>}
        </div>
        <div className={styles.images}>
          {images.map(({src, alt}, index) => (
            <img
              key={src}
              src={src}
              alt={alt}
              className={styles[`image${index+1}`]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
