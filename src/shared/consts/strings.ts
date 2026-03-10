import { TaskDataPayloadType } from "@/shared/types/task-type";

const strings = {
  api: {
    register: "/auth/register",
    login: "/auth/login",
    missions: "/missions",
    achievements: "/achievements",
    profile: "/profile/me",
    profileTaskTotal: "/missions/get_info",
    profileTaskProgress: "/profile/tasks_progress",
    profileAchievements: "/profile/achievements",
    task: ({ missionId, taskId }: TaskDataPayloadType) => `/missions/${missionId}/tasks/${taskId}`,
    runTask: ({ missionId, taskId }: TaskDataPayloadType) => `/missions/${missionId}/tasks/${taskId}/run`,
    clue: ({ missionId, taskId }: TaskDataPayloadType) => `/missions/${missionId}/tasks/${taskId}/clue`,
    expectedResult: ({ missionId, taskId }: TaskDataPayloadType) => `/missions/${missionId}/tasks/${taskId}/expected_result`,
  },
  unexpectedError: "Неизвестная ошибка",
  incorrectQuery: "Введите корректный SQL запрос",
} as const;

export default strings;
