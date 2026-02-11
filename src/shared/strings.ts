import { TaskDataPayloadType } from "@/shared/types/task-type";

const strings = {
  api: {
    register: "/auth/register",
    login: "/auth/login",
    misisons: "/missions",
    achievements: "/achievements",
    task: ({ missionId, taskId }: TaskDataPayloadType) => `/missions/${missionId}/tasks/${taskId}/`,
    clue: ({ missionId, taskId }: TaskDataPayloadType) => `/missions/${missionId}/tasks/${taskId}/clue`,
    expectedResult: ({ missionId, taskId }: TaskDataPayloadType) => `/missions/${missionId}/tasks/${taskId}/expected_result`,
  },
  unexpectedError: "Неизвестная ошибка",
} as const;

export default strings;
