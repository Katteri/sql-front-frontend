import { useCallback, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { questSlice } from "@/store/reducers/quest-slice";
import { MenuDrawer } from "@/entities/menu-drawer/menu-drawer";
import { MenuIcon } from "@/shared/ui/menu-icon/menu-icon";

import { useSceneData } from "./use-scene-data";
import { LegendBlock } from "./legend-block";
import { TaskBlock } from "../../shared/ui/task-block/task-block";
import styles from "./scene.module.scss";

export const Scene = () => {
  const data = useSceneData();
  
  const dispatch = useAppDispatch();
  const { sceneProgress } = useAppSelector((state) => state.quest);
  const { goToTask } = questSlice.actions;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [setIsMenuOpen]);

  const onLegendEnds = useCallback(() => {
    dispatch(goToTask());
  }, [dispatch, goToTask]);

  if (!data) {
    return null;
  }
  const { sceneData, databaseSchema } = data;

  return (
    <section className={styles.section}>
      <MenuIcon color="red" onClick={toggleMenu}/>
      <MenuDrawer isOpen={isMenuOpen} onClose={toggleMenu} currentPage="quest" />
      
      {/* TODO: put background image here */}
      { //TODO: add screen when sceneData is undefined
        sceneProgress === "legend" && sceneData?.legend
          ? <LegendBlock text={sceneData.legend} onEnds={onLegendEnds} />
          : sceneData
            &&  <TaskBlock
                  type="quest"
                  task={sceneData.task}
                  clueData={{
                    isUserHasClue: false,
                    isQuestHasClue: Boolean(sceneData.clue),
                  }}
                  databaseNodes={databaseSchema?.databaseNodes}
                  databaseEdges={databaseSchema?.databaseEdges}
                />
      }
    </section>
  );
};
