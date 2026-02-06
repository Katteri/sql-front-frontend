import { useAppSelector } from "@/shared/hooks/redux";

export const QuestEngine = () => {
  const { questId } = useAppSelector((state) => state.quest);

  return (
    <>
    </>
  );
};
