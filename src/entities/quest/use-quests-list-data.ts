import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { getQuestList } from "@/store/reducers/actions/quest-action";

import { questListData } from "./mock";

export const useQuestsListData = () => {
  const dispatch = useAppDispatch();
  const { questList } = useAppSelector((state) => state.quest);

  useEffect(() => {
    dispatch(getQuestList());
  }, [dispatch]);

  return { ...questList, data: questListData };
};
