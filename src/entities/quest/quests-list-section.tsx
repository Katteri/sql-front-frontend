import { Text } from "@/shared/ui/text/text";
import { Link } from "@/shared/ui/link/link";
import { QuestIds } from "@/shared/consts/quest-id";
import { ImageQuestsList } from "@/shared/ui/image--quests-list/image--quests-list";

import { useQuestsListData } from "./use-quests-list-data";
import styles from "./quests-list-section.module.scss";

export const QuestsListSection = () => {
  const { data } = useQuestsListData();

  return (
    <section className={styles.questsListSection} id="list">
      {
        data.map(({ id, description }) =>
          <div key={id} className={styles.liContainer}>
            <ImageQuestsList questId={id}/>
            <div className={styles.textBlock}>
              <Link
                href="/quest/hope"
                fontVariant="capital"
                size="7vw"
                margin="0 0.1vw 0"
              >
                {QuestIds[id]}
              </Link>
              <Text
                size="1vw"
              >
                {description}
              </Text>
            </div>
          </div>
        )
      }
    </section>
  );
};
