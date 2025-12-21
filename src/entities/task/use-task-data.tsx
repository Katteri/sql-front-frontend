import { useRouter } from "next/router";

import { taskData as data } from "./mock";

export const useTaskData = () => {
  const router = useRouter();

  const { missionId, taskId } = router.query;

  return { ...data, missionId, taskId };
};
