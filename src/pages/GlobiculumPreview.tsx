import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GlobiculumPreview = () => {
  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm sm:text-base font-medium text-primary uppercase tracking-widest mb-4 animate-fade-in">
              Don't Let the Move Set Your Child Behind
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6 animate-fade-in">
              Bridge Your Child's Education
              <br />
              <span className="text-secondary-foreground">Between </span>
              <span className="text-primary">Global Curriculums</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-secondary-foreground/70 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-in">
              Seamless academic transitions to India — Globiculum ensures a seamless shift with tailored gap analysis and customized learning pathways designed for long-term success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="group">
                Get Curriculum Gap Analysis Report
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
              >
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GlobiculumPreview;
