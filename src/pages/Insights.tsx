import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, Calendar, Clock, Tag, Sparkles, Cpu, Workflow, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Insights = () => {
  const previewCards = [
    {
      icon: GraduationCap,
      category: "Corporate Learning",
      title: "AI in Corporate Learning",
      description:
        "How adaptive AI is reshaping enterprise upskilling, from personalized pathways to real-time performance signals.",
      date: "Apr 2026",
      readTime: "6 min read",
    },
    {
      icon: Cpu,
      category: "L&D Ecosystems",
      title: "Intelligent L&D Ecosystems",
      description:
        "Designing connected learning architectures where content, data, and AI agents operate as one intelligent fabric.",
      date: "Mar 2026",
      readTime: "7 min read",
    },
    {
      icon: Workflow,
      category: "Automation",
      title: "Workflow Automation for Teams",
      description:
        "A blueprint for using AI to remove busywork — turning recurring team workflows into self-running pipelines.",
      date: "Feb 2026",
      readTime: "5 min read",
    },
  ];

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

      {/* Featured Insights */}
      <section className="relative py-16 lg:py-24 bg-background overflow-hidden">
        {/* Floating background glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ background: "radial-gradient(circle, #5B6CFF 0%, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 -right-40 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-25 animate-pulse"
          style={{ background: "radial-gradient(circle, #5EEAD4 0%, transparent 70%)", animationDelay: "1.5s" }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Hero Card */}
          <article
            className="group relative overflow-hidden rounded-[24px] shadow-2xl animate-fade-in transition-all duration-500 hover:shadow-[0_25px_80px_-15px_rgba(13,148,136,0.45)]"
            style={{ background: "linear-gradient(135deg, #0F172A 0%, #0D9488 100%)" }}
          >
            {/* Glow overlays */}
            <div
              aria-hidden
              className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-60"
              style={{ background: "radial-gradient(circle, #5B6CFF 0%, transparent 70%)" }}
            />
            <div
              aria-hidden
              className="absolute -bottom-24 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-50"
              style={{ background: "radial-gradient(circle, #5EEAD4 0%, transparent 70%)" }}
            />
            {/* Glass overlay */}
            <div aria-hidden className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1px]" />
            {/* Border glow on hover */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-[24px] ring-1 ring-white/10 transition-all duration-500 group-hover:ring-2"
              style={{ boxShadow: "inset 0 0 0 1px rgba(94,234,212,0)" }}
            />

            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-10 lg:p-14 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                  style={{ backgroundColor: "rgba(245, 158, 11, 0.15)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Insight
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight" style={{ color: "#F8FAFC" }}>
                  How We Built an AI Meeting Intelligence System — Without Paying for Another Subscription
                </h2>

                <p className="text-base sm:text-lg leading-relaxed" style={{ color: "rgba(248,250,252,0.75)" }}>
                  A practical breakdown of how intelligent transcription, workflow automation, and AI analysis were combined into a searchable meeting intelligence pipeline.
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm" style={{ color: "rgba(248,250,252,0.65)" }}>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: "#5EEAD4" }} />
                    May 2026
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: "#5EEAD4" }} />
                    5 min read
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Tag className="w-4 h-4" style={{ color: "#F59E0B" }} />
                    AI Systems
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg, #0D9488 0%, #5EEAD4 100%)",
                      color: "#0F172A",
                      boxShadow: "0 8px 24px -8px rgba(94,234,212,0.6)",
                    }}
                  >
                    Explore More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  <button
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white/5"
                    style={{ color: "#F8FAFC", border: "1px solid rgba(248,250,252,0.3)" }}
                  >
                    View All Insights
                  </button>
                </div>
              </div>

              {/* Right: AI Illustration */}
              <div className="relative h-64 sm:h-80 lg:h-96 hidden md:block">
                <AIIllustration />
              </div>
            </div>
          </article>

          {/* 3 Insight Preview Cards */}
          <div className="mt-12 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-7 border transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{
                    borderColor: "rgba(100,116,139,0.15)",
                    boxShadow: "0 4px 20px -8px rgba(15,23,42,0.08)",
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  {/* Hover border glow */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: "0 0 0 1px #5EEAD4, 0 12px 40px -10px rgba(13,148,136,0.35)" }}
                  />

                  <div className="relative space-y-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(13,148,136,0.12) 0%, rgba(91,108,255,0.12) 100%)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#0D9488" }} />
                    </div>

                    <span
                      className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider"
                      style={{ backgroundColor: "rgba(13,148,136,0.1)", color: "#0D9488" }}
                    >
                      {card.category}
                    </span>

                    <h3 className="text-lg lg:text-xl font-bold leading-snug" style={{ color: "#0F172A" }}>
                      {card.title}
                    </h3>

                    <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                      {card.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 text-xs" style={{ color: "#64748B" }}>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {card.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {card.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Explore More CTA */}
          <div className="mt-14 lg:mt-20 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: "#0F172A" }}>
              Explore the full library
            </h3>
            <p className="max-w-xl mx-auto mb-6" style={{ color: "#64748B" }}>
              Deep dives, frameworks, and field notes from the frontier of learning intelligence.
            </p>
            <button
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #0D9488 0%, #5EEAD4 100%)",
                color: "#0F172A",
                boxShadow: "0 10px 30px -10px rgba(94,234,212,0.6)",
              }}
            >
              Browse All Insights
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

function AIIllustration() {
  return (
    <div className="relative w-full h-full">
      {/* Mesh blur background */}
      <div
        aria-hidden
        className="absolute inset-6 rounded-3xl blur-2xl opacity-50"
        style={{ background: "radial-gradient(circle at 30% 30%, #5B6CFF 0%, transparent 60%), radial-gradient(circle at 70% 70%, #5EEAD4 0%, transparent 60%)" }}
      />

      <svg viewBox="0 0 400 400" className="relative w-full h-full" fill="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#5B6CFF" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="sqGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#5B6CFF" />
          </linearGradient>
        </defs>

        {/* Connecting lines */}
        <g stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.7">
          <line x1="80" y1="100" x2="200" y2="200" />
          <line x1="320" y1="90" x2="200" y2="200" />
          <line x1="200" y1="200" x2="100" y2="300" />
          <line x1="200" y1="200" x2="310" y2="310" />
          <line x1="80" y1="100" x2="320" y2="90" />
          <line x1="100" y1="300" x2="310" y2="310" />
        </g>

        {/* Gradient squares */}
        <rect x="60" y="80" width="40" height="40" rx="8" fill="url(#sqGrad)" opacity="0.9">
          <animate attributeName="y" values="80;72;80" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="300" y="70" width="40" height="40" rx="8" fill="url(#sqGrad)" opacity="0.85">
          <animate attributeName="y" values="70;78;70" dur="5s" repeatCount="indefinite" />
        </rect>
        <rect x="80" y="280" width="40" height="40" rx="8" fill="url(#sqGrad)" opacity="0.8">
          <animate attributeName="y" values="280;272;280" dur="4.5s" repeatCount="indefinite" />
        </rect>
        <rect x="290" y="290" width="40" height="40" rx="8" fill="url(#sqGrad)" opacity="0.9">
          <animate attributeName="y" values="290;298;290" dur="5.5s" repeatCount="indefinite" />
        </rect>

        {/* Central AI node */}
        <circle cx="200" cy="200" r="36" fill="#0F172A" stroke="#5EEAD4" strokeWidth="2" />
        <circle cx="200" cy="200" r="48" fill="none" stroke="#5EEAD4" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="48;60;48" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="200" r="48" fill="none" stroke="#5B6CFF" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="48;70;48" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* AI signal lines inside */}
        <g stroke="#5EEAD4" strokeWidth="1.5" strokeLinecap="round">
          <line x1="186" y1="195" x2="194" y2="195" />
          <line x1="198" y1="195" x2="214" y2="195" />
          <line x1="186" y1="200" x2="210" y2="200" />
          <line x1="186" y1="205" x2="200" y2="205" />
          <line x1="204" y1="205" x2="214" y2="205" />
        </g>

        {/* Floating particles */}
        <circle cx="160" cy="140" r="3" fill="#F59E0B">
          <animate attributeName="cy" values="140;132;140" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="160" r="2.5" fill="#5EEAD4">
          <animate attributeName="cy" values="160;152;160" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="240" cy="260" r="3" fill="#5B6CFF">
          <animate attributeName="cy" values="260;252;260" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="250" r="2.5" fill="#F59E0B">
          <animate attributeName="cy" values="250;242;250" dur="3.2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

export default Insights;
