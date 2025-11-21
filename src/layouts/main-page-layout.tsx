import { useCallback, useEffect, useState } from "react";

import { DescriptionSection } from "@/entities/main-page/description-section/description-section";
import { IntroSection } from "@/entities/main-page/intro-section";
import { RatingSection } from "@/entities/main-page/rating-section";
import { StartGuideSection } from "@/entities/main-page/start-guide-section";
import { Layout } from "@/shared/ui/layout/layout";
import { MenuIcon } from "@/shared/ui/menu/menu-icon";
import { useActiveSection } from "./use-active-section";
import { colors } from "@/shared/ui/colors";
import { MenuDrawer } from "@/shared/ui/menu/drawers/menu-drawer";

import styles from "./main-page-layout.module.scss";

const sectionIds = {
  description: "description",
  startGuide: "startGuide",
  rating: "rating",
} as const;

const colorBySection: Record<keyof typeof sectionIds, keyof typeof colors> = {
  description: "white",
  startGuide: "black",
  rating: "red",
};

export const MainPageLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [setIsMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);
  
  const activeSection = useActiveSection(Object.values(sectionIds));
  
  return (
    <Layout>
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
      <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu}/>
      <MenuIcon
        color={activeSection ? colorBySection[activeSection] : "white"}
        onClick={toggleMenu}
      />
      <IntroSection />
      <DescriptionSection id={sectionIds.description} />
      <StartGuideSection id={sectionIds.startGuide} />
      <RatingSection id={sectionIds.rating} />
    </Layout>
  );
};
