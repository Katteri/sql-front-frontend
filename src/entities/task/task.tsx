import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { MenuIcon } from "@/shared/ui/menu-icon/menu-icon";
import { MenuDrawer } from "@/entities/menu-drawer/menu-drawer";
import { Title } from "@/shared/ui/title/title";
import { Text } from "@/shared/ui/text/text";
import { TaskBlock } from "@/shared/ui/task-block/task-block";
import { getTaskClueData, getTaskExpectedResultData, runTaskQuery, submitTaskSolution } from "@/store/reducers/actions/task-actions";

import { useTaskData } from "./use-task-data";
import styles from "./task.module.scss";
import { databaseEdges, databaseNodes } from "./const";
import strings from "@/shared/consts/strings";
import { SubmissionResultType } from "@/shared/types/task-type";
import { AchievementToast } from "@/shared/ui/achievement-toast/achievement-toast";

const SubmitionToastText = (submission: SubmissionResultType | null, isSolved: boolean) => {
  if (submission === null) {
    return "";
  }

  if (isSolved) {
    return (
      <Text>{submission.message}</Text>
    );
  }

  if (submission.is_correct) {
    return (
      <Text>
        {strings.correctTaskQuery} +{submission.points_earned}
      </Text>
    );
  } else {
    return (
      <Text>
        {strings.incorrectTaskQuery} -{submission.points_penalty}
      </Text>
    );
  }
};

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
    }));
  }, [dispatch, data.missionId, data.taskId, value]);

  const submitSolution = useCallback(async () => {
    const result = await dispatch(submitTaskSolution({
      taskId: data.taskId,
      missionId: data.missionId,
      payload: { sql_query: value },
    })).unwrap();
    
    if (result.submission?.is_correct) {
      toast.success(SubmitionToastText(result.submission, data.task.isSolved));
      result.submission.awarded_achievements.forEach((achievement) => {
        toast.custom(<AchievementToast achievement={achievement} />, { duration: 5000, });
      });
    } else {
      toast.error(SubmitionToastText(result.submission, data.task.isSolved));
    }
  }, [dispatch, data.taskId, data.missionId, value, data.task?.isSolved]);

  const getClue = useCallback(() => {
    dispatch(getTaskClueData({
      taskId: data.taskId,
      missionId: data.missionId, 
    }))
      .unwrap()
      .then((response) => toast(<Text>- {response.clue.points_spent}</Text>, { icon: "⚠️" }))
      .catch((error) => toast(<Text>{error.detail ? error.detail : error.message}</Text>));
  }, [dispatch, data.taskId, data.missionId]);

  const getExpectedResult = useCallback(() => {
    dispatch(getTaskExpectedResultData({
      taskId: data.taskId,
      missionId: data.missionId, 
    }))
      .unwrap()
      .then((response) => toast(<Text>- {response.expectedResult.points_spent}</Text>, { icon: "⚠️" }))
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
        {data.task?.title}
      </Title>
      <TaskBlock
        type="task"
        isSolved={data.task?.isSolved}
        task={data.task?.description}
        clueData={{
          clue: data.task?.clue?.clue,
          expectedResult: data.task?.expectedResult?.expected_result,
          isUserHasClue: data.task?.isUserHasClue,
          isUserHasExpectedResult: data.task?.isUserHasExpectedResult,
          getExpectedResult: getExpectedResult,
        }}
        databaseNodes={databaseNodes}
        databaseEdges={databaseEdges}
        onChange={onChange}
        value={value}
        queryRunHandle={queryRunHandle}
        submitSolution={submitSolution}
        resultData={error ? error : queryRun.result ? queryRun.result : queryRun.queryError}
        getClue={getClue}
      />
    </section>
  );
};
