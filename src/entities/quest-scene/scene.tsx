import { useCallback, useState } from "react";

import { MenuDrawer } from "@/entities/menu-drawer/menu-drawer";
import { MenuIcon } from "@/shared/ui/menu-icon/menu-icon";

import { useSceneData } from "./use-scene-data";
import { LegendBlock } from "./legend-block";
import { TaskBlock } from "../../shared/ui/task-block/task-block";
import styles from "./scene.module.scss";

export const Scene = () => {
  const { sceneData, databaseSchema } = useSceneData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, setState] = useState<"legend" | "task">("legend");
  
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [setIsMenuOpen]);

  const onLegendEnds = useCallback(() => {
    setState("task");
  }, [setState]);

  return (
    <section className={styles.section}>
      <MenuIcon color="red" onClick={toggleMenu}/>
      <MenuDrawer isOpen={isMenuOpen} onClose={toggleMenu} currentPage="quest" />
      
      {/* TODO: put background image here */}
      { //TODO: add screen when sceneData is undefined
        state === "legend" && sceneData?.legend
          ? <LegendBlock text={sceneData.legend} onEnds={onLegendEnds} />
          : sceneData
            &&  <TaskBlock
                  type="quest"
                  task={sceneData.task}
                  questClue={sceneData.clue}
                  databaseNodes={databaseSchema?.databaseNodes}
                  databaseEdges={databaseSchema?.databaseEdges}
                />
      }
    </section>
  );
};
