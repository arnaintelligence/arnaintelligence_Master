import { Layout } from "@/components/layout/Layout";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { CTASection } from "@/components/sections/CTASection";

const Products = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Products & Platforms
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
              Proprietary Tools Built for Scale
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-secondary-foreground/70 leading-relaxed">
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
