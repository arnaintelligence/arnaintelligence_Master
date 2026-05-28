import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, Calendar, Clock, Tag, Sparkles } from "lucide-react";

const Insights = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Thought Leadership
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
              Insights
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-secondary-foreground/70 leading-relaxed">
              Perspectives on the future of learning, AI in L&D, and building 
              intelligent learning ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="group relative overflow-hidden rounded-[24px] mx-auto max-w-[900px] animate-fade-in transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_50px_-20px_rgba(13,148,136,0.4)]"
            style={{
              background: "linear-gradient(135deg, #0F172A 0%, #134E4A 100%)",
              boxShadow: "0 10px 30px -15px rgba(15,23,42,0.25)",
            }}
          >
            {/* Subtle teal glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-16 w-72 h-72 rounded-full blur-3xl opacity-30"
              style={{ background: "radial-gradient(circle, #5EEAD4 0%, transparent 70%)" }}
            />
            {/* Hover border glow */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-[24px] ring-1 ring-white/10 transition-all duration-300 group-hover:ring-[#5EEAD4]/40"
            />

            <div className="relative p-7 sm:p-9 lg:p-10 space-y-5">
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase"
                style={{
                  backgroundColor: "rgba(245,158,11,0.12)",
                  color: "#F59E0B",
                  border: "1px solid rgba(245,158,11,0.25)",
                }}
              >
                <Sparkles className="w-3 h-3" />
                Featured Insight
              </div>

              <h2
                className="text-xl sm:text-2xl lg:text-[28px] font-semibold leading-snug tracking-tight"
                style={{ color: "#F8FAFC" }}
              >
                How We Built an AI Meeting Intelligence System — Without Paying for Another Subscription
              </h2>

              <p className="text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: "rgba(248,250,252,0.7)" }}>
                A practical breakdown of how intelligent transcription, workflow automation, and AI analysis were combined into a searchable meeting intelligence pipeline.
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm" style={{ color: "rgba(248,250,252,0.6)" }}>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" style={{ color: "#5EEAD4" }} />
                  May 2026
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" style={{ color: "#5EEAD4" }} />
                  5 min read
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
                  AI Systems
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <button
                  className="group/btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-[0_8px_24px_-6px_rgba(94,234,212,0.5)]"
                  style={{
                    background: "linear-gradient(135deg, #0D9488 0%, #5EEAD4 100%)",
                    color: "#0F172A",
                  }}
                >
                  Explore More
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
                <button
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-white/5"
                  style={{ color: "#F8FAFC", border: "1px solid rgba(248,250,252,0.25)" }}
                >
                  View All Insights
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Insights;
