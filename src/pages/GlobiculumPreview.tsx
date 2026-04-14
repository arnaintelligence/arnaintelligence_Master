import { Layout } from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/sections/CTASection";

const GlobiculumPreview = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Product Preview
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
              Globiculum
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-secondary-foreground/70 leading-relaxed">
              Curriculum alignment and learning intelligence platform
            </p>
          </div>
        </div>
      </section>

      {/* Preview Image Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <img 
              src="/images/globiculum-preview.png" 
              alt="Globiculum Platform Preview" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Feature Overview */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Curriculum Alignment</h3>
                <p className="text-muted-foreground">Map learning objectives to industry standards and competency frameworks</p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Learning Intelligence</h3>
                <p className="text-muted-foreground">AI-powered insights to optimize learning outcomes</p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Flexible Deployment</h3>
                <p className="text-muted-foreground">Cloud-native architecture for seamless scalability</p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Custom Integrations</h3>
                <p className="text-muted-foreground">Connect with your existing learning ecosystem</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default GlobiculumPreview;
