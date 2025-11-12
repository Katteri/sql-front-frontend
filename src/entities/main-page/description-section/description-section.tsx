import { Title } from "@/shared/ui/title/title";
import { WHITE_COLOR } from "@/shared/ui/colors";

import styles from "./description-section.module.scss";
import { DescriptionContent } from "./description-content";

export const DescriptionSection = () => {
  return (
    <section className={styles.descriptionSection}>
      <DescriptionContent/>
      <Title
        size="5.5vw"
        color={WHITE_COLOR}
        as="p"
        letterSpacing="2vw"
      >
        ........................................
      </Title>
    </section>
  );
};
