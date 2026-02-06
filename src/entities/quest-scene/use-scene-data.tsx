import { useAppSelector } from "@/shared/hooks/redux";

import { databaseQuestSchemas, questNodes } from "./quest-data";

export const useSceneData = () => {
  const { questId, currentSceneId } = useAppSelector((state) => state.quest);

  return { 
    sceneData: questNodes.find((node) => node.id === currentSceneId),
    databaseSchema: databaseQuestSchemas.find((schema) => schema.id === currentSceneId),
  };
};
