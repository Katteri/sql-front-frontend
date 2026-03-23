import { useCallback, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { questSlice } from "@/store/reducers/quests-slice";
import { MenuDrawer } from "@/entities/menu-drawer/menu-drawer";
import { MenuIcon } from "@/shared/ui/menu-icon/menu-icon";
import { TaskBlock } from "@/shared/ui/task-block/task-block";
import { isQuestId } from "@/shared/utils/is-quest-id";
import { runQuestQuery } from "@/store/reducers/actions/quest-action";
import strings from "@/shared/consts/strings";

import { useSceneData } from "./use-scene-data";
import { LegendBlock } from "./legend-block";
import { databaseEdges, databaseNodes } from "./const";
import styles from "./scene.module.scss";

export const Scene = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const data = useSceneData();
  const dispatch = useAppDispatch();
  const { queryRun } = useAppSelector((state) => state.quest);
  const { goToTask } = questSlice.actions;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [setIsMenuOpen]);

  const onLegendEnds = useCallback(() => {
    if (!data?.questId && !isQuestId(data?.questId)) {
      return;
    }

    dispatch(goToTask(data.questId));
  }, [dispatch, goToTask, data?.questId]);

  const onChange = useCallback((val: string) => {
    setValue(val);
  }, [setValue]);

  const handleRunQuery = useCallback(() => {
    if (!data) {
      return;
    }

    if (!data.questId && !isQuestId(data.questId)) {
      return;
    }

    if (!data.sceneId) {
      return;
    }

    setError("");
    const clearValue = value.replace(/--.*$/gmi, "").replace(/\n/gmi, " ");

    if (!clearValue.toLocaleLowerCase().includes("select")) { //TODO: add node-sql-parser to check is 
      setError(strings.incorrectQuery);
      return;
    }

    dispatch(runQuestQuery({
      questId: data.questId,
      payload: {
        scene_id: data?.sceneId,
        sql_query: value,
      },
    }));
  }, [dispatch, data, value]);

  if (!data) {
    return null;
  }

  return (
    <section className={styles.section}>
      <MenuIcon color="red" onClick={toggleMenu}/>
      <MenuDrawer isOpen={isMenuOpen} onClose={toggleMenu} currentPage="quest" />
      
      {/* TODO: put background image here */}
      {/*//TODO: add screen when sceneData is undefined */}
      {
        data.sceneProgress === "legend" && data.legend
          ? <LegendBlock text={data.legend} onEnds={onLegendEnds} />
          : data.task
            &&  <TaskBlock
                  type="quest"
                  task={data.task}
                  clueData={{
                    isUserHasClue: false, //TODO: are we need this?
                    isQuestHasClue: data.isQuestHasClue, //TODO: are we need this?
                  }}
                  databaseNodes={databaseNodes}
                  databaseEdges={databaseEdges}
                  onChange={onChange}
                  value={value}

                  queryRunHandle={handleRunQuery}
                  submitSolution={() => { return; }}
                  resultData={error ? error : queryRun.result ? queryRun.result : queryRun.queryError}
                  getClue={() => { return; }}
                />
      }
    </section>
  );
};
