import { BLACK_COLOR } from "@/shared/ui/colors";
import { Link } from "@/shared/ui/link/link";
import { Title } from "@/shared/ui/title/title";

import styles from "./intro-section.module.scss";

export const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.menuBlock}>
        <Link href="/" size="1vw">Войти</Link> {/*TODO: replace with the right route*/}
        <Link href="/" size="1vw">Зарегистрироваться</Link> {/*TODO: replace with the right route*/}
      </div>
      <Title
        size="15.8vw"
      >
        <span className={styles.title}>SQL Фронт</span>
        <span className={styles.subTitle}>битва за данные</span>
      </Title>
      <Title
        size="2.39vw"
        color={BLACK_COLOR}
        as="p"
        letterSpacing="0.1vw"
        margin="-1.5vw 0 0 11.3vw"
      >
        Освой SQL, вспоминая подвиги Победы
      </Title>
    </section>
  );
};
