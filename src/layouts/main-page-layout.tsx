import { useCallback, useEffect, useState } from "react";

import { DescriptionSection } from "@/entities/main-page/description-section/description-section";
import { IntroSection } from "@/entities/main-page/intro-section";
import { RatingSection } from "@/entities/main-page/rating-section/rating-section";
import { StartGuideSection } from "@/entities/main-page/start-guide-section";
import { Layout } from "@/shared/ui/layout/layout";
import { MenuIcon } from "@/shared/ui/menu-icon/menu-icon";
import { useActiveSection } from "./use-active-section";
import { colors } from "@/shared/ui/colors";
import { MenuDrawer } from "@/entities/menu-drawer/menu-drawer";
import { Overlay } from "@/shared/ui/drawer/overlay/overlay";

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
  
  const activeSection = useActiveSection(Object.values(sectionIds));
  
  return (
    <Layout>
      {isMenuOpen && <Overlay onClick={toggleMenu}/>}
      <MenuDrawer isOpen={isMenuOpen} onClose={toggleMenu} currentPage="main" />
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
