import { useRouter } from "next/router";
import { tasksSelectors } from "@/store/reducers/tasks-slice";
import { taskData } from "./mock";
import { useAppSelector } from "@/shared/hooks/redux";

export const useTaskData = () => {
  const router = useRouter();
  const { missionId, taskId } = router.query;
  const task = useAppSelector((state) => tasksSelectors.selectById(state, `${missionId}.${taskId}`));

  return {
    ...task,
    ...taskData,
    missionId,
    taskId
  };
};
