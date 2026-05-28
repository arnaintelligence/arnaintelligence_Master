import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, Calendar, Clock, Tag, Sparkles, FileText } from "lucide-react";

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

      {/* Featured Case Study */}
      <section className="relative py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: "#F8FAFC" }}>
        {/* Background radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(13,148,136,0.10) 0%, transparent 70%)",
          }}
        />
        {/* Dotted mesh sides */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-40 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(13,148,136,0.18) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage:
              "linear-gradient(to right, black, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, black, transparent)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-40 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(13,148,136,0.18) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage: "linear-gradient(to left, black, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[1000px]">
            {/* Attached side label (desktop) */}
            <div className="hidden lg:flex absolute left-0 top-1/2 -translate-x-[55%] -translate-y-1/2 z-10 flex-col items-center animate-fade-in">
              <div
                className="relative flex flex-col items-center gap-2 px-4 py-4 rounded-[20px] backdrop-blur-xl"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(13,148,136,0.3)",
                  boxShadow:
                    "0 12px 28px -12px rgba(13,148,136,0.3), 0 2px 6px rgba(15,23,42,0.06)",
                }}
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(13,148,136,0.12), rgba(94,234,212,0.18))",
                    border: "1px solid rgba(13,148,136,0.25)",
                  }}
                >
                  <FileText className="w-4 h-4" style={{ color: "#0D9488" }} />
                </div>
                <span
                  className="text-[10px] font-semibold tracking-[0.14em] uppercase"
                  style={{ color: "#0D9488" }}
                >
                  Case Study
                </span>
                <span
                  className="text-base font-semibold"
                  style={{ color: "#0F172A" }}
                >
                  01
                </span>
              </div>
              {/* Short connector into card edge */}
              <div
                aria-hidden
                className="absolute top-1/2 -right-6 w-6 h-3 -translate-y-1/2 pointer-events-none"
              >
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-full transition-all duration-500 group-hover:h-[2px]"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(94,234,212,0.9), rgba(94,234,212,0.35))",
                    boxShadow: "0 0 8px rgba(94,234,212,0.5)",
                  }}
                />
                <span
                  className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#5EEAD4",
                    boxShadow: "0 0 10px rgba(94,234,212,1)",
                  }}
                />
              </div>
            </div>

            {/* Featured Card */}
            <article
              className="group relative overflow-hidden rounded-[28px] animate-fade-in transition-all duration-500 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(135deg, #123047 0%, #176B63 55%, #7ED7D1 100%)",
                boxShadow:
                  "0 30px 60px -30px rgba(18,48,71,0.35), 0 12px 24px -12px rgba(13,148,136,0.25)",
              }}
            >
              {/* Glass overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 50%)",
                }}
              />
              {/* Soft glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-20 w-80 h-80 rounded-full blur-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(126,215,209,0.6) 0%, transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-[28px] ring-1 ring-white/15 transition-all duration-500 group-hover:ring-white/30"
              />

              <div className="relative p-8 sm:p-10 lg:p-14 lg:pl-20 space-y-6">
                {/* Top badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase backdrop-blur-md"
                  style={{
                    background: "rgba(245,158,11,0.15)",
                    color: "#FBBF24",
                    border: "1px solid rgba(245,158,11,0.35)",
                  }}
                >
                  <Sparkles className="w-3 h-3" />
                  Featured Insight
                </div>

                <h2
                  className="text-2xl sm:text-3xl lg:text-[34px] font-semibold leading-[1.2] tracking-tight max-w-3xl"
                  style={{ color: "#F8FAFC" }}
                >
                  How We Built an AI Meeting Intelligence System — Without Paying for Another Subscription
                </h2>

                <p
                  className="text-sm sm:text-base lg:text-[15px] leading-relaxed max-w-2xl"
                  style={{ color: "rgba(248,250,252,0.78)" }}
                >
                  A practical breakdown of how intelligent transcription, workflow automation,
                  and AI analysis were combined into a searchable meeting intelligence pipeline.
                </p>

                <div
                  className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm"
                  style={{ color: "rgba(248,250,252,0.7)" }}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" style={{ color: "#7ED7D1" }} />
                    May 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" style={{ color: "#7ED7D1" }} />
                    5 min read
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" style={{ color: "#FBBF24" }} />
                    AI Systems
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(94,234,212,0.55)]"
                    style={{
                      background:
                        "linear-gradient(135deg, #0D9488 0%, #5EEAD4 100%)",
                      color: "#0F172A",
                      boxShadow:
                        "0 8px 20px -8px rgba(13,148,136,0.5)",
                    }}
                  >
                    Explore More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                  <button
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10"
                    style={{
                      color: "#F8FAFC",
                      border: "1px solid rgba(248,250,252,0.3)",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    View All Insights
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Insights;
