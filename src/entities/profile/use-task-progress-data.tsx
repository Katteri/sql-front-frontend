import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { useEffect } from "react";

import { getProfileTaskProgress } from "@/store/reducers/actions/profile-action";

export const useTaskProgressData = () => {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfileTaskProgress());
  }, [dispatch]);

  return tasks;
};
