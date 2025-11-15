import { DescriptionSection } from "@/entities/main-page/description-section/description-section";
import { IntroSection } from "@/entities/main-page/intro-section";
import { RatingSection } from "@/entities/main-page/rating-section";
import { StartGuideSection } from "@/entities/main-page/start-guide-section";
import { Layout } from "@/shared/ui/layout/layout";
import { MenuIcon } from "@/shared/ui/menu/menu-icon";
import { useActiveSection } from "./use-active-section";
import { colors } from "@/shared/ui/colors";

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
  const activeSection = useActiveSection(Object.values(sectionIds));
  
  return (
    <Layout>
      <MenuIcon color={activeSection ? colorBySection[activeSection] : "white"}/>
      <IntroSection />
      <DescriptionSection id={sectionIds.description} />
      <StartGuideSection id={sectionIds.startGuide} />
      <RatingSection id={sectionIds.rating} />
    </Layout>
  );
};
