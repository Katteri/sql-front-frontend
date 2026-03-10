import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { MenuIcon } from "@/shared/ui/menu-icon/menu-icon";
import { MenuDrawer } from "@/entities/menu-drawer/menu-drawer";
import { Title } from "@/shared/ui/title/title";
import { Text } from "@/shared/ui/text/text";
import { TaskBlock } from "@/shared/ui/task-block/task-block";
import { getTaskClueData, getTaskExpectedResultData, runTaskQuery } from "@/store/reducers/actions/task-actions";

import { useTaskData } from "./use-task-data";
import styles from "./task.module.scss";
import { databaseEdges, databaseNodes } from "./const";
import strings from "@/shared/consts/strings";

export const Task = () => {
  const dispatch = useAppDispatch();
  const { queryRun } = useAppSelector((state) => state.task);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const data = useTaskData();
  
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [setIsMenuOpen]);

  const onChange = useCallback((val: string) => {
    setValue(val);
  }, [setValue]);

  const queryRunHandle = useCallback(() => {
    setError("");
    const clearValue = value.replace(/--.*$/gmi, "").replace(/\n/gmi, " ");

    if (!clearValue.toLocaleLowerCase().includes("select")) { //TODO: add node-sql-parser to check is 
      setError(strings.incorrectQuery);
      return;
    }

    dispatch(runTaskQuery({
      taskId: data.taskId,
      missionId: data.missionId,
      payload: { sql_query: clearValue },
    }))
      .unwrap()
      .catch((error) => toast(<Text>{error.detail ? error.detail : error.message}</Text>));
  }, [dispatch, data.missionId, data.taskId, value]);

  const getClue = useCallback(() => {
    dispatch(getTaskClueData({
      taskId: data.taskId,
      missionId: data.missionId, 
    }))
      .unwrap()
      .catch((error) => toast(<Text>{error.detail ? error.detail : error.message}</Text>));
  }, [dispatch, data.taskId, data.missionId]);

  const getExpectedResult = useCallback(() => {
    dispatch(getTaskExpectedResultData({
      taskId: data.taskId,
      missionId: data.missionId, 
    }))
      .unwrap()
      .catch((error) => toast(<Text>{error.detail ? error.detail : error.message}</Text>));
  }, [dispatch, data.taskId, data.missionId]);

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
        clueData={{
          clue: data.clue?.clue,
          expectedResult: data.expectedResult?.expected_result,
          isUserHasClue: data.isUserHasClue,
          isUserHasExpectedResult: data.isUserHasExpectedResult,
          getExpectedResult: getExpectedResult,
        }}
        databaseNodes={databaseNodes}
        databaseEdges={databaseEdges}
        onChange={onChange}
        value={value}
        queryRunHandle={queryRunHandle}
        resultData={error ? error : queryRun.result ? queryRun.result : queryRun.queryError}
        getClue={getClue}
      />
    </section>
  );
};
