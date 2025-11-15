import { Title } from "@/shared/ui/title/title";
import { RatingTable } from "@/shared/ui/rating-table/rating-table";
import styles from "./rating-section.module.scss"

export const RatingSection = () => {
  return (
    <section className={styles.ratingSection}>
      <Title
        margin="5vw 0 3vw 0"
        as="h3"
        size="10vw"
        color="black"
      >
        топ лучших игроков
      </Title>
      <RatingTable />
      <div className={styles.image} />
    </section>
  );
};
