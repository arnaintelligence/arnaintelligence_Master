import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { CrossIntelligenceSection } from "@/components/sections/CrossIntelligenceSection";
import { OperationalModelSection } from "@/components/sections/OperationalModelSection";
import { ICPSection } from "@/components/sections/ICPSection";
import { LeadMagnetsSection } from "@/components/sections/LeadMagnetsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <OverviewSection />
      <CrossIntelligenceSection />
      <OperationalModelSection />
      <ICPSection />
      <LeadMagnetsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
