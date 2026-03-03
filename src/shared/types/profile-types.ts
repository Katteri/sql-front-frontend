export type ProfileInfoDtoType = {
  login: string;
  email: string;
  fullname: string;
  group: string,
  user_id: number,
  total_score: number;
};

export type ProfileTaskProgressDtoType = {
  easy_solved: number;
  medium_solved: number;
  hard_solved: number;
};

export type ProfileTaskTotalDtoType = {
  easy_tasks_total: number;
  medium_tasks_total: number;
  hard_tasks_total: number;
};

export type TaskDataType = {
  easySolved: number;
  easyTasksTotal: number;
  mediumSolved: number;
  mediumTasksTotal: number;
  hardSolved: number;
  hardTasksTotal: number;
};
