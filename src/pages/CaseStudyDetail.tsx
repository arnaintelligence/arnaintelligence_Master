import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Check, FileText, Sparkles, Workflow, Search, Database, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyDetail = () => {
  return (
    <Layout>
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ backgroundColor: "#F8FAFC" }}
      >
        {/* Background radial glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 80% 20%, rgba(91,108,255,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(13,148,136,0.10) 0%, transparent 60%)",
          }}
        />
        {/* Dot mesh */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(13,148,136,0.18) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
          }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="mb-8 text-xs sm:text-sm animate-fade-in"
            style={{ color: "#64748B" }}
          >
            <Link to="/insights" className="hover:text-[#0D9488] transition-colors">
              Insights
            </Link>
            <span className="mx-2">/</span>
            <span style={{ color: "#0F172A" }}>Case Study 01</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT — Editorial content */}
            <div className="lg:col-span-7 animate-fade-in">
              {/* Top label */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{
                  background: "rgba(13,148,136,0.08)",
                  color: "#0D9488",
                  border: "1px solid rgba(13,148,136,0.25)",
                }}
              >
                <Sparkles className="w-3 h-3" />
                AI Automation Case Study
              </div>

              <h1
                className="mt-6 text-3xl sm:text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight"
                style={{ color: "#0F172A" }}
              >
                Building an AI Meeting Knowledge System{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #0D9488 0%, #5B6CFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Without Another Subscription
                </span>
              </h1>

              <p
                className="mt-6 text-base sm:text-lg leading-relaxed max-w-2xl"
                style={{ color: "#64748B" }}
              >
                Inside the workflow ARNA Intelligence built to transform raw
                meetings into structured, searchable knowledge using automation,
                transcription, and AI analysis — without introducing additional
                software costs.
              </p>

              {/* Highlight tag */}
              <div
                className="mt-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(94,234,212,0.12)",
                  color: "#0D9488",
                  border: "1px solid rgba(94,234,212,0.4)",
                }}
              >
                <Check className="w-4 h-4" />
                No Additional Software Cost
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(13,148,136,0.55)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #0D9488 0%, #5EEAD4 100%)",
                    color: "#0F172A",
                    boxShadow: "0 10px 24px -10px rgba(13,148,136,0.55)",
                  }}
                >
                  Explore the Process
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-xs sm:text-sm" style={{ color: "#64748B" }}>
                  Full workflow • AI pipeline • Architecture • Automation logic
                </span>
              </div>
            </div>

            {/* RIGHT — Abstract AI workflow visual */}
            <div className="lg:col-span-5 animate-fade-in animation-delay-200">
              <div
                className="relative aspect-[5/6] sm:aspect-[4/5] lg:aspect-[5/6] rounded-[28px] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #0F172A 0%, #123047 55%, #0D9488 130%)",
                  boxShadow:
                    "0 40px 80px -30px rgba(15,23,42,0.45), 0 16px 30px -16px rgba(13,148,136,0.35)",
                }}
              >
                {/* Glow */}
                <div
                  aria-hidden
                  className="absolute -top-20 -right-16 w-72 h-72 rounded-full blur-3xl opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(94,234,212,0.6) 0%, transparent 70%)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full blur-3xl opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(91,108,255,0.6) 0%, transparent 70%)",
                  }}
                />
                {/* Grid */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* SVG connectors */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 480"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="lineTeal" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#5B6CFF" stopOpacity="0.7" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M70 90 C 150 90, 180 200, 320 200"
                    stroke="url(#lineTeal)"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M320 200 C 230 240, 200 310, 90 350"
                    stroke="url(#lineTeal)"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M90 350 C 180 380, 240 400, 320 420"
                    stroke="url(#lineTeal)"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Floating glass cards */}
                <div
                  className="absolute top-[12%] left-[8%] px-3 py-2.5 rounded-xl backdrop-blur-md flex items-center gap-2 animate-fade-in"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 8px 24px -8px rgba(0,0,0,0.4)",
                  }}
                >
                  <Mic className="w-4 h-4" style={{ color: "#5EEAD4" }} />
                  <span className="text-[11px] font-medium text-white/90">
                    Transcription
                  </span>
                </div>

                <div
                  className="absolute top-[38%] right-[8%] px-3 py-2.5 rounded-xl backdrop-blur-md flex items-center gap-2 animate-fade-in animation-delay-100"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 8px 24px -8px rgba(0,0,0,0.4)",
                  }}
                >
                  <Workflow className="w-4 h-4" style={{ color: "#5EEAD4" }} />
                  <span className="text-[11px] font-medium text-white/90">
                    Automation
                  </span>
                </div>

                <div
                  className="absolute top-[68%] left-[10%] px-3 py-2.5 rounded-xl backdrop-blur-md flex items-center gap-2 animate-fade-in animation-delay-200"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 8px 24px -8px rgba(0,0,0,0.4)",
                  }}
                >
                  <Sparkles className="w-4 h-4" style={{ color: "#FBBF24" }} />
                  <span className="text-[11px] font-medium text-white/90">
                    AI Analysis
                  </span>
                </div>

                <div
                  className="absolute bottom-[8%] right-[8%] px-3 py-2.5 rounded-xl backdrop-blur-md flex items-center gap-2 animate-fade-in animation-delay-300"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 8px 24px -8px rgba(0,0,0,0.4)",
                  }}
                >
                  <Search className="w-4 h-4" style={{ color: "#5EEAD4" }} />
                  <span className="text-[11px] font-medium text-white/90">
                    Searchable Knowledge
                  </span>
                </div>

                {/* Center document/transcript preview */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] rounded-2xl p-4 backdrop-blur-xl"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-3.5 h-3.5" style={{ color: "#5EEAD4" }} />
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-white/80">
                      Transcript.md
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 rounded-full bg-white/30 w-full" />
                    <div className="h-1.5 rounded-full bg-white/20 w-[88%]" />
                    <div className="h-1.5 rounded-full bg-white/25 w-[72%]" />
                    <div className="h-1.5 rounded-full bg-white/15 w-[94%]" />
                    <div className="h-1.5 rounded-full bg-white/20 w-[60%]" />
                  </div>
                  <div
                    className="mt-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-md"
                    style={{
                      background: "rgba(94,234,212,0.15)",
                      border: "1px solid rgba(94,234,212,0.3)",
                    }}
                  >
                    <Database className="w-3 h-3" style={{ color: "#5EEAD4" }} />
                    <span className="text-[9px] font-semibold tracking-wide text-white/90 uppercase">
                      Indexed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyDetail;