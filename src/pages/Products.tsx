import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { CTASection } from "@/components/sections/CTASection";

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-2xl font-medium gradient-text-brand uppercase tracking-wider">
              Products & Platforms
            </span>
            <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight">
              Proprietary Tools Built
              <span className="block mt-3">for Scale</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
              Our proprietary tools and platforms evolve from continuous learning intelligence
              and are built for flexible customization and scalable deployment.
            </p>
          </div>
        </div>
      </section>
      <ProductsSection />
      <CTASection />
    </Layout>
  );
};

export default Products;
