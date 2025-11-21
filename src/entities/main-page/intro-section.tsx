import { Link } from "@/shared/ui/link/link";
import { Title } from "@/shared/ui/title/title";

import styles from "./intro-section.module.scss";

export const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.menuBlock}>
        <Link href="/auth?type=login" size="1vw">войти</Link>
        <Link href="/auth?type=register" size="1vw">зарегистрироваться</Link> {/*TODO: replace with the right route*/}
      </div>
      <Title
        size="15.8vw"
      >
        <span className={styles.title}>SQL Фронт</span>
        <span className={styles.subTitle}>битва за данные</span>
      </Title>
      <Title
        size="2.39vw"
        color="black"
        as="p"
        letterSpacing="0.1vw"
        margin="-1.5vw 0 0 11.3vw"
      >
        Освой SQL, вспоминая подвиги Победы
      </Title>
    </section>
  );
};
