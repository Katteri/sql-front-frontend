import { StartQuest } from "@/entities/quest/start-quest";
import { ProtectedLayout } from "@/shared/ui/layout/protected-layout";

export const StartQuestLayout = () => {
  return (
    <ProtectedLayout>
      <StartQuest />
    </ProtectedLayout>
  );
};
