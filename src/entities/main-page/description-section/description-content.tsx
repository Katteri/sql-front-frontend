import { Text } from "../../../shared/ui/text/text";

import styles from "./description-content.module.scss";

export const DescriptionContent = () => {
  return (
    <div className={styles.descriptionContent}>
      <div className={styles.line} />
      <div className={styles.textArea}>
        <Text
          size="1.8vw"
          color="white"
          className={styles.textHeading}
        >
          Великая Отечественная война — не только испытание
        </Text>
        <Text
          size="1vw"
          color="white"
          className={styles.textBlock}
        >
          <span>но и величайшее наследие мужества, стратегии и силы разума.</span>
          <span>Сегодня мы приглашаем тебя продолжить ту борьбу — не с оружием, а с данными.</span>
          <span>В роли фронтового аналитика ты узнаешь, как знания и логика могут стать мощным оружием в любые времена.</span>
        </Text>     
      </div>
      <div className={styles.image} />
    </div>
  );
};
