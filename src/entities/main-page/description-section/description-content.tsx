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
          textIndent="7.3vw"
        >
          Великая Отечественная война — не только испытание
        </Text>
        <Text
          color="white"
          variant="column"
          lineHeight="1.5vw"
          width="45%"
          margin="-1.8vw 0 0"
          alignSelf="end"
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
