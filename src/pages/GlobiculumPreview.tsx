import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Globe, Shield, Award, Users, Cpu } from "lucide-react";

const GlobiculumPreview = () => {
  return (
    <Layout>
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0B1120 0%, #0F2027 30%, #0D9488 100%)',
        }}
      >
        {/* Subtle glow accents */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30" style={{ backgroundColor: '#0D9488' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10" style={{ backgroundColor: '#0D9488' }} />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline */}
            <p
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-8"
              style={{ color: '#F59E0B' }}
            >
              Don't Let the Move Set Your Child Behind
            </p>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8"
              style={{ color: '#FFFFFF' }}
            >
              Bridge Your Child's
              <br />
              Education
              <br />
              <span style={{ color: '#FFFFFF' }}>Between </span>
              <span style={{ color: '#0D9488' }}>Global Curriculums</span>
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              Seamless academic transitions to India — Globiculum ensures a
              seamless shift with tailored gap analysis and customized learning
              pathways designed for long-term success.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full transition-all hover:brightness-110 hover:scale-[1.02]"
                style={{ backgroundColor: '#F59E0B', color: '#0F172A' }}
              >
                Get Curriculum Gap Analysis Report
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border-2 transition-all hover:bg-white/10"
                style={{ borderColor: '#F59E0B', color: '#F59E0B', backgroundColor: 'transparent' }}
              >
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GlobiculumPreview;
