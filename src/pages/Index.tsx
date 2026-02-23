import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { OperationalModelSection } from "@/components/sections/OperationalModelSection";
import { ICPSection } from "@/components/sections/ICPSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionNav } from "@/components/layout/SectionNav";

const Index = () => {
  return (
    <Layout>
      <SectionNav />
      <HeroSection />
      <OverviewSection />
      <OperationalModelSection />
      <ICPSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
