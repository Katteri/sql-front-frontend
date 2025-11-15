import { Title } from "@/shared/ui/title/title";

import styles from "./description-section.module.scss";
import { DescriptionContent } from "./description-content";

export const DescriptionSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className={styles.descriptionSection}>
      <DescriptionContent/>
      <Title
        size="5.5vw"
        color="white"
        as="p"
        letterSpacing="2vw"
      >
        .........................................
      </Title>
    </section>
  );
};
