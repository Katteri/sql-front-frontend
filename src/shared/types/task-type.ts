export type ResultQueryDataType = {
  columns: string[],
  data: (number | string)[][],
  row_count: number,
};

export type TaskDataPayloadType = {
  taskId: number,
  missionId: number,
};

export type TaskDataDtoType = {
  task_id: number,
  mission_id: number,
  title: string,
  description: string,
  is_solved: boolean,
  has_clue1: boolean,
  has_clue2: boolean,
  previous: {
    mission_id: number | null,
    task_id: number | null,
  },
  next: {
    mission_id: number | null,
    task_id: number | null,
  },
};

export type TaskClueDtoType = {
  points_spent: number;
  total_score: number;
  clue: string;
};

export type ExpectedResultType = {
  points_spent: number;
  total_score: number;
  expected_result: ResultQueryDataType,
};
