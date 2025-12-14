import { useSearchParams } from "next/navigation";

import { missionsData as data } from "./mock";
import { TASK_DIFFICULTY_QUERY_PARAM, TASK_STATUS_QUERY_PARAM } from "./const";
import { useCallback } from "react";

type TaskType = {
  missionId: number,
  taskId: number,
  title: string,
  isSolved: boolean,
};

export const useMissionsData = () => {
  const searchParams = useSearchParams();
  const taskDifficulty = searchParams.get(TASK_DIFFICULTY_QUERY_PARAM);
  const taskStatus = searchParams.get(TASK_STATUS_QUERY_PARAM);

  const matchedDifficulty = useCallback((missionId: number) => {
    if (taskDifficulty) {
      if (taskDifficulty === "all") {
        return true;
      }
      return missionId === Number(taskDifficulty);
    }
    return true;
  }, [taskDifficulty]);

  const matchedStatus = useCallback((isSolved: boolean) => {
    if (taskStatus) {
      if (taskStatus === "solved") {
        return isSolved === true;
      }
      if (taskStatus === "unsolved") {
        return isSolved === false;
      }
    }
    return true;
  }, [taskStatus]);

  const filteredData = data.filter(({ missionId, isSolved }) => matchedDifficulty(missionId) && matchedStatus(isSolved));

  const map = new Map<string, TaskType[]>();
  filteredData.forEach((item) => {
    if (!map.has(item.missionId.toString())) {
      map.set(item.missionId.toString(), []);
    }
    map.get(item.missionId.toString())?.push(item);
  });

  return Array.from(map.entries()).map(([missionId, tasks]) => ({
    missionId,
    tasks,
  }));
};
