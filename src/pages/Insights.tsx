import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { Lightbulb, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Insights = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Thought Leadership
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary-foreground">
              Insights
            </h1>
            <p className="mt-6 text-xl text-secondary-foreground/70">
              Perspectives on the future of learning, AI in L&D, and building 
              intelligent learning ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is crafting valuable insights on AI-powered learning, 
              instructional design trends, and LearnTech innovations. 
              Subscribe to be notified when we publish.
            </p>
            <div className="relative flex flex-col sm:flex-row gap-4 justify-center opacity-40 pointer-events-none select-none">
              <Button size="lg" className="group" disabled>
                Subscribe for Updates
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" disabled>
                Learn About ALIS Engine
              </Button>
            </div>
            <span className="mt-4 inline-block text-xs font-medium uppercase tracking-wider text-muted-foreground/70 bg-muted px-3 py-1 rounded-full">
              Coming Soon
            </span>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Insights;
