import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GlobiculumPreview = () => {
  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
        {/* Background gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #0F172A 60%, #0D9488 200%)' }} />

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(13,148,136,0.1)' }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(245,158,11,0.08)' }} />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm sm:text-base font-medium uppercase tracking-widest mb-4 animate-fade-in" style={{ color: '#0D9488' }}>
              Don't Let the Move Set Your Child Behind
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ color: '#FFFFFF' }}>
              Bridge Your Child's Education
              <br />
              <span style={{ color: '#FFFFFF' }}>Between </span>
              <span style={{ color: '#0D9488' }}>Global Curriculums</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-in" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Seamless academic transitions to India — Globiculum ensures a seamless shift with tailored gap analysis and customized learning pathways designed for long-term success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="group" style={{ backgroundColor: '#F59E0B', color: '#0F172A' }}>
                Get Curriculum Gap Analysis Report
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                style={{ backgroundColor: 'transparent', borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}
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
