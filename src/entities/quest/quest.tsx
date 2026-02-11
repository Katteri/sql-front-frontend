import { useEffect } from "react";
import { useRouter } from "next/router";

import { questSlice } from "@/store/reducers/quest-slice";
import { useAppDispatch } from "@/shared/hooks/redux";

import { Scene } from "../quest-scene/scene";

const normalizeQuestIdType = (questId?: string | string[]) => {
  if (!questId) {
    return null;
  }
  if (Array.isArray(questId)) {
    return null;
  }
  return questId;
};

export const Quest = () => {
  const router = useRouter();
  const { questId: questIdFromUrl } = router.query;

  const dispatch = useAppDispatch();
  const { startQuest } = questSlice.actions;

  useEffect(() => {
    const questId = normalizeQuestIdType(questIdFromUrl);
    if (!questId) {
      return;
    }

    dispatch(startQuest({ questId }));
  }, [questIdFromUrl, dispatch, startQuest]);

  return (
    <Scene />
  );
};
