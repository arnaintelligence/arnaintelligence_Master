import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Globe, Shield, Award, Users, Cpu, AlertTriangle, BookOpen, Clock, MapPin, Brain, Route } from "lucide-react";

const stats = [
  { icon: Globe, value: "24/7", label: "Expert Support" },
  { icon: Shield, value: "100%", label: "Secure & Compliant" },
  { icon: Award, value: "Boards", label: "Excellence" },
  { icon: Cpu, value: "AI-Powered", label: "Personalized Plans" },
  { icon: Users, value: "Global", label: "Family Community" },
];

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

      {/* Stats Section */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 px-6 py-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}
              >
                <s.icon className="w-8 h-8 flex-shrink-0" style={{ color: '#14b8a6' }} />
                <div>
                  <p className="text-lg font-bold" style={{ color: '#0f172a' }}>{s.value}</p>
                  <p className="text-sm" style={{ color: '#64748b' }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#14b8a6' }}>
              The challenge families face
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
              Every year, thousands of children land in India academically unprepared.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#64748b' }}>
              The excitement of returning home quickly turns to anxiety when parents realise that CBSE Grade 7 Math is two years ahead of what their child studied in the US — and that no one told them in advance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#fee2e2' }}>
                <AlertTriangle className="w-6 h-6" style={{ color: '#ef4444' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0f172a' }}>Curriculum shock is real</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                Indian boards cover topics earlier and deeper. Without a plan, your child is thrown into a class where everyone else already knows what they don't.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#ccfbf1' }}>
                <BookOpen className="w-6 h-6" style={{ color: '#14b8a6' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0f172a' }}>Generic tutors don't help enough</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                Most tutors don't know both curricula. They teach rote answers — not how to close specific gaps from a US to Indian curriculum transition.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#dbeafe' }}>
                <Clock className="w-6 h-6" style={{ color: '#3b82f6' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0f172a' }}>Every week of delay costs confidence</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                The longer your child struggles silently, the harder it becomes to catch up. Early intervention is the single biggest predictor of a successful transition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GlobiculumPreview;
