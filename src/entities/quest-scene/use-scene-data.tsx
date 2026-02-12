import { useRouter } from "next/router";

import { useAppSelector } from "@/shared/hooks/redux";

import { quests } from "./quest-data";

export const useSceneData = () => {
  const router = useRouter();
  const { questId } = router.query;

  const { currentSceneId } = useAppSelector((state) => state.quest);

  const quest = quests.find((quest) => quest.id === questId);

  if (!quest) {
    return null;
  }

  return { 
    sceneData: quest.questNodes.find((node) => node.id === currentSceneId),
    databaseSchema: quest.databaseQuestSchemas.find((schema) => schema.id === currentSceneId),
  };
};
