import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { CrossIntelligenceSection } from "@/components/sections/CrossIntelligenceSection";
import { OperationalModelSection } from "@/components/sections/OperationalModelSection";
import { ICPSection } from "@/components/sections/ICPSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
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
      <ProductsSection />
      <LeadMagnetsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
