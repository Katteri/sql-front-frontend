import { useRouter } from "next/router";

import { QuestIds } from "@/shared/consts/quest-id";

import styles from "./image--quests-list.module.scss";

export const ImageQuestsList = ({ questId }: { questId: QuestIds}) => {
  const router = useRouter();
  
  const handleQuestNavigate = () => {
    router.replace(`/quest/${questId}`);
  };

  return (
    <div
      className={styles.image}
      style={{
        "--imageHref": `url(/images/quest/ids/${questId}.png)`,
      } as React.CSSProperties}
      onClick={handleQuestNavigate}
    />
  );
};
