import { useState, useCallback } from "react";
import { Layout } from "@/components/layout/Layout";
import {
  ArrowRight,
  Globe,
  Shield,
  Award,
  Users,
  Cpu,
  AlertTriangle,
  BookOpen,
  Clock,
  MapPin,
  Brain,
  Route,
  X,
  Check,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import globiculumLogo from "@/assets/globiculum-logo-white.png";
const readinessReport = "/images/Readiness_Report.jpeg";

const stats = [
  { icon: Globe, value: "24/7", label: "Expert Support" },
  { icon: Shield, value: "100%", label: "Secure & Compliant" },
  { icon: Award, value: "Boards", label: "Excellence" },
  { icon: Cpu, value: "AI-Powered", label: "Personalized Plans" },
  { icon: Users, value: "Global", label: "Family Community" },
];

const GlobiculumPreview = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);

  const zoomIn = useCallback(() => setScale((s) => Math.min(s + 0.25, 3)), []);
  const zoomOut = useCallback(() => setScale((s) => Math.max(s - 0.25, 0.5)), []);

  return (
    <Layout>
      <section
        className="relative min-h-[75vh] flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0B1120 0%, #0F2027 30%, #0D9488 100%)",
        }}
      >
        {/* Subtle glow accents */}
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
          style={{ backgroundColor: "#0D9488" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
          style={{ backgroundColor: "#0D9488" }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-12 lg:pb-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <img
              src={globiculumLogo}
              alt="Globiculum"
              className="h-12 sm:h-14 lg:h-16 w-auto mx-auto mb-4 md:mb-6 object-contain"
            />

            {/* Tagline */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-2" style={{ color: "#F59E0B" }}>
              Don't Let the Move Set Your Child Behind
            </p>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.03] mb-6 max-w-4xl mx-auto"
              style={{ color: "#FFFFFF" }}
            >
              Bridge Your Child&apos;s Education
              <br />
              <span style={{ color: "#FFFFFF" }}>Between </span>
              <span style={{ color: "#0D9488" }}>Global Curricula</span>
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Seamless academic transitions to India — Globiculum ensures a seamless shift with tailored gap analysis
              and customized learning pathways designed for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto place-items-center">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 px-6 py-5 rounded-xl shadow-sm hover:shadow-md transition-shadow w-full max-w-xs h-24"
                style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
              >
                <s.icon className="w-8 h-8 flex-shrink-0" style={{ color: "#14b8a6" }} />
                <div>
                  <p className="text-lg font-bold" style={{ color: "#0f172a" }}>
                    {s.value}
                  </p>
                  <p className="text-sm" style={{ color: "#64748b" }}>
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-[#14b8a6] mb-3" style={{ color: "#14b8a6" }}>
              The Challenge Families Face
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4" style={{ color: "#0f172a" }}>
              Every year, thousands of children land in India academically unprepared.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#64748b" }}>
              The excitement of returning home quickly turns to anxiety when parents realise that CBSE Grade 7 Math is
              two years ahead of what their child studied in the US — and that no one told them in advance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div
              className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#fee2e2" }}
              >
                <AlertTriangle className="w-6 h-6" style={{ color: "#ef4444" }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0f172a" }}>
                Curriculum shock is real
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                Indian boards cover topics earlier and deeper. Without a plan your child is thrown into a class where
                everyone else already knows what they don't.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#ccfbf1" }}
              >
                <BookOpen className="w-6 h-6" style={{ color: "#14b8a6" }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0f172a" }}>
                Generic tutors don't help enough
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                Most tutors don't know both curricula. They teach rote answers — not how to close specific gaps from a
                US to Indian curriculum transition.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#dbeafe" }}
              >
                <Clock className="w-6 h-6" style={{ color: "#3b82f6" }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0f172a" }}>
                Every week of delay costs confidence
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                The longer your child struggles silently, the harder it becomes to catch up. Early intervention is the
                single biggest predictor of a successful transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-[#14b8a6] mb-3" style={{ color: "#14b8a6" }}>
              Simple · Fast · Personalised
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4" style={{ color: "#0f172a" }}>
              From signup to study plan in under 10 minutes
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#64748b" }}>
              No lengthy intake forms. No waiting. Just three steps between you and a clear actionable roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div
              className="relative p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
            >
              <span
                className="absolute top-3 right-3 text-4xl font-extrabold select-none"
                style={{ color: "#cbd5e1", opacity: 0.4 }}
              >
                01
              </span>
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto"
                style={{ backgroundColor: "#dbeafe" }}
              >
                <MapPin className="w-7 h-7" style={{ color: "#3b82f6" }} />
              </div>
              <h3 className="text-lg font-bold" style={{ color: "#0f172a" }}>
                Tell us where your child is coming from
              </h3>
            </div>

            {/* Step 2 */}
            <div
              className="relative p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
            >
              <span
                className="absolute top-3 right-3 text-4xl font-extrabold select-none"
                style={{ color: "#cbd5e1", opacity: 0.4 }}
              >
                02
              </span>
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto"
                style={{ backgroundColor: "#ccfbf1" }}
              >
                <Brain className="w-7 h-7" style={{ color: "#14b8a6" }} />
              </div>
              <h3 className="text-lg font-bold" style={{ color: "#0f172a" }}>
                Our AI maps and bridges the gaps instantly
              </h3>
            </div>

            {/* Step 3 */}
            <div
              className="relative p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
            >
              <span
                className="absolute top-3 right-3 text-4xl font-extrabold select-none"
                style={{ color: "#cbd5e1", opacity: 0.4 }}
              >
                03
              </span>
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto"
                style={{ backgroundColor: "#fef3c7" }}
              >
                <Route className="w-7 h-7" style={{ color: "#f59e0b" }} />
              </div>
              <h3 className="text-lg font-bold" style={{ color: "#0f172a" }}>
                Get a personalised learning pathway
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* The Globiculum Difference Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-bold text-[#14b8a6] mb-3" style={{ color: "#14b8a6" }}>
              The Globiculum Difference
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4" style={{ color: "#0f172a" }}>
              Your child doesn't have to choose between two worlds.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#64748b" }}>
              Our unique AI-driven approach ensures your child excels in Indian education standards and stays aligned
              with global academic competitiveness.
            </p>
          </div>

          {/* Two Cards with Bridge */}
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Indian Curriculum Card */}
              <div
                className="rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
              >
                <div className="p-5 flex items-center gap-3" style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    <BookOpen className="w-5 h-5" style={{ color: "#ffffff" }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: "#0f172a" }}>
                    Build a Strong Academic Core
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>
                    Master the depth and rigor of Indian education systems. A foundation built for academic excellence
                    and cultural rootedness.
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "CBSE & ICSE Excellence", desc: "Deep conceptual mastery, not just exam readiness" },
                      { title: "Mathematical Rigour", desc: "Advanced computation and analytical reasoning" },
                      { title: "Cultural & Language Foundation", desc: "Language proficiency and cultural context" },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: "#0f172a" }}
                        />
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "#0f172a" }}>
                            {item.title}
                          </p>
                          <p className="text-xs" style={{ color: "#64748b" }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Global Curriculum Card */}
              <div
                className="rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
              >
                <div className="p-5 flex items-center gap-3" style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#14b8a6" }}
                  >
                    <Globe className="w-5 h-5" style={{ color: "#ffffff" }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: "#0f172a" }}>
                    Stay Ahead for Global Pathways
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>
                    Maintain global curriculum flexibility and competitive edge. Equip your child for international
                    admissions and global careers.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        title: "University Entrance Test / AP Preparation",
                        desc: "Strategic readiness for global college admissions success",
                      },
                      {
                        title: "Critical Thinking & Creativity",
                        desc: "Project-based, inquiry-led learning approaches",
                      },
                      {
                        title: "Global Competitiveness",
                        desc: "Skills that travel, whichever country they live in next",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: "#14b8a6" }}
                        />
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "#0f172a" }}>
                            {item.title}
                          </p>
                          <p className="text-xs" style={{ color: "#64748b" }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bridge Icon - centered between cards */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
                style={{ backgroundColor: "#ffffff", border: "2px solid #e5e7eb" }}
              >
                <ArrowRight className="w-6 h-6" style={{ color: "#14b8a6" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs Globiculum Comparison */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-[#14b8a6] mb-3" style={{ color: "#14b8a6" }}>
              Why Choose Globiculum
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4" style={{ color: "#0f172a" }}>
              Traditional vs Globiculum
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#64748b" }}>
              Traditional approaches treat every child the same. Globiculum starts from where they actually are not
              where the textbook assumes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Approach */}
            <div
              className="rounded-xl shadow-sm overflow-hidden"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
            >
              <div className="p-5 flex items-center gap-3" style={{ backgroundColor: "#fee2e2" }}>
                <X className="w-5 h-5" style={{ color: "#ef4444" }} />
                <h3 className="text-lg font-bold" style={{ color: "#0f172a" }}>
                  Traditional Approach
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  "Generic curriculum overview",
                  "One-size-fits-all approach",
                  "Manual assessment process",
                  "Limited follow-up support",
                  "Static learning materials",
                  "Rote learning",
                ].map((desc) => (
                  <div key={desc} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#fee2e2" }}
                    >
                      <X className="w-3 h-3" style={{ color: "#ef4444" }} />
                    </div>
                    <p className="text-sm" style={{ color: "#64748b" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Globiculum Advantage */}
            <div
              className="rounded-xl shadow-sm overflow-hidden"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
            >
              <div className="p-5 flex items-center gap-3" style={{ backgroundColor: "#ccfbf1" }}>
                <Check className="w-5 h-5" style={{ color: "#14b8a6" }} />
                <h3 className="text-lg font-bold" style={{ color: "#0f172a" }}>
                  Globiculum Advantage
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  "Personalized AI-powered gap analysis",
                  "AI-powered customized pathways",
                  "Instant digital assessment",
                  "Continuous progress tracking",
                  "Dynamic, adaptive resources",
                  "Pocket friendly",
                ].map((desc) => (
                  <div key={desc} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#ccfbf1" }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#14b8a6" }} />
                    </div>
                    <p className="text-sm" style={{ color: "#0f172a" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Transition Readiness Report */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-[#14b8a6] mb-3" style={{ color: "#14b8a6" }}>
              What You'll Receive
            </h1>
            <h2 className="text-xl md:text-3xl font-bold font-medium text-foreground mb-1">
              Transition Readiness Report
            </h2>

            <h3 className="text-sm md:text-base text-muted-foreground mb-4">(sample for reference only)</h3>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#64748b" }}>
              See exactly what you'll receive — a comprehensive, actionable report tailored to your child's academic
              transition.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
            >
              <img
                src={readinessReport}
                alt="Sample Transition Readiness Report showing subject coverage, critical gaps, bridge timeline, and study recommendations"
                className="w-full h-auto block"
              />
              <button
                onClick={() => {
                  setIsFullscreen(true);
                  setScale(1);
                }}
                className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: "rgba(15, 23, 42, 0.8)", color: "#ffffff" }}
                aria-label="Zoom report"
              >
                <ZoomIn className="w-4 h-4" />
                Zoom Report
              </button>
            </div>
            <p className="text-center text-sm mt-4" style={{ color: "#64748b" }}>
              Click the expand icon to zoom in the report
            </p>
          </div>
        </div>
      </section>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex flex-col" style={{ backgroundColor: "rgba(15, 23, 42, 0.95)" }}>
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p className="text-base font-semibold" style={{ color: "#ffffff" }}>
              Transition Readiness Report
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={zoomOut}
                disabled={scale <= 0.5}
                className="p-2 rounded-lg transition-colors disabled:opacity-30"
                style={{ color: "#ffffff", backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="text-sm min-w-[50px] text-center" style={{ color: "#ffffff" }}>
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={zoomIn}
                disabled={scale >= 3}
                className="p-2 rounded-lg transition-colors disabled:opacity-30"
                style={{ color: "#ffffff", backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-lg transition-colors ml-2"
                style={{ color: "#ffffff", backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-auto flex items-start justify-center p-8">
            <img
              src={readinessReport}
              alt="Full Transition Readiness Report"
              className="max-w-full h-auto transition-transform duration-200"
              style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default GlobiculumPreview;
