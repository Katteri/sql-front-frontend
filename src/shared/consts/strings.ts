import { TaskDataPayloadType } from "@/shared/types/task-type";
import { QuestIdType } from "@/shared/types/quest-types";

const strings = {
  api: {
    rating: "/rating",
    ratingPersonal: "/rating/personal",
    register: "/auth/register",
    login: "/auth/login",
    logout: "/auth/logout",
    missions: "/missions",
    achievements: "/achievements",
    profile: "/profile/me",
    profileTaskTotal: "/missions/get_info",
    profileTaskProgress: "/profile/tasks_progress",
    profileAchievements: "/profile/achievements",
    task: ({ missionId, taskId }: TaskDataPayloadType) => `/missions/${missionId}/tasks/${taskId}`,
    runTask: ({ missionId, taskId }: TaskDataPayloadType) => `/missions/${missionId}/tasks/${taskId}/run`,
    submitTaskSolution: ({ missionId, taskId }: TaskDataPayloadType) => `/missions/${missionId}/tasks/${taskId}/submit`,
    clue: ({ missionId, taskId }: TaskDataPayloadType) => `/missions/${missionId}/tasks/${taskId}/clue`,
    expectedResult: ({ missionId, taskId }: TaskDataPayloadType) => `/missions/${missionId}/tasks/${taskId}/expected_result`,
    questProgress: ({ questId }: { questId: QuestIdType }) => `/quests/${questId}/progress`,
    runQuestQuery: ({ questId }: { questId: QuestIdType }) => `/quests/${questId}/run`,
  },
  unexpectedError: "Неизвестная ошибка",
  incorrectQuery: "Введите корректный SQL запрос",
  correctTaskQuery: "Задача решена",
  incorrectTaskQuery: "Задача не решена",
} as const;

export default strings;
