import { DescriptionSection } from "@/entities/main-page/description-section/description-section";
import { IntroSection } from "@/entities/main-page/intro-section";
import { StartGuideSection } from "@/entities/main-page/start-guide-section";
import { Layout } from "@/shared/ui/layout/layout";

export const MainPageLayout = () => {
  return (
    <Layout>
      <IntroSection />
      <DescriptionSection />
      <StartGuideSection />
    </Layout>
  );
};
