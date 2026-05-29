import { Layout } from "@/components/layout/Layout";
import {
  ArrowRight,
  Check,
  FileText,
  Sparkles,
  Workflow,
  Search,
  Database,
  Mic,
  AlertTriangle,
  DollarSign,
  Layers,
  BrainCircuit,
  History,
  PlayCircle,
  MessageSquare,
  ListChecks,
  FileSearch,
  Download,
  X,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { toast } from "sonner";

const CaseStudyDetail = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", organization: "", email: "" });
  const pageRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.organization.trim() || !form.email.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid work email.");
      return;
    }
    setSubmitting(true);
    try {
      // Notify via FormSubmit (no backend, no DB)
      await fetch(
        "https://formsubmit.co/ajax/info_arnaintelligence@alis-global.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: "New Workflow Download Request",
            _template: "table",
            _captcha: "false",
            Name: form.name,
            Organization: form.organization,
            Email: form.email,
            Message: `A visitor downloaded the AI Meeting Knowledge System workflow.\n\nName: ${form.name}\nOrganization: ${form.organization}\nEmail: ${form.email}`,
          }),
        }
      ).catch(() => null);

      // Generate PDF of the case study page
      const html2pdf = (await import("html2pdf.js")).default;
      const element = pageRef.current;
      if (element) {
        await html2pdf()
          .set({
            margin: 10,
            filename: "ARNA-AI-Meeting-Knowledge-System-Workflow.pdf",
            image: { type: "jpeg", quality: 0.95 },
            html2canvas: { scale: 2, useCORS: true, backgroundColor: "#F8FAFC" },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
            pagebreak: { mode: ["avoid-all", "css", "legacy"] },
          })
          .from(element)
          .save();
      }

      toast.success("Thank you. Your workflow guide is downloading.");
      setForm({ name: "", organization: "", email: "" });
      setModalOpen(false);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div ref={pageRef}>
      <section
        className="relative overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-28"
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
                className="mt-8 text-3xl sm:text-4xl lg:text-[50px] font-bold leading-[1.18] sm:leading-[1.22] tracking-[-0.015em] max-w-[20ch] [text-wrap:balance]"
                style={{ color: "#0F172A" }}
              >
                Building an AI Meeting
                <br className="hidden sm:block" />
                Knowledge System{" "}
                <span className="whitespace-nowrap">Without</span>
                <br className="hidden sm:block" />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #0D9488 0%, #5B6CFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Another Subscription
                </span>
              </h1>

              <p
                className="mt-8 text-base sm:text-[17px] leading-[1.85] tracking-[-0.005em] max-w-[58ch] [text-wrap:pretty]"
                style={{ color: "#64748B" }}
              >
                Inside the workflow ARNA Intelligence built to transform raw
                meetings into structured, searchable knowledge using automation,
                transcription, and AI analysis — without adding another
                software subscription.
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
              <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
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
                className="relative aspect-[5/6] sm:aspect-[4/5] lg:aspect-[5/6] rounded-[28px] overflow-hidden cs-float"
                style={{
                  background:
                    "linear-gradient(140deg, #0F172A 0%, #143246 50%, #137a72 110%)",
                  boxShadow:
                    "0 50px 100px -40px rgba(15,23,42,0.55), 0 20px 40px -20px rgba(13,148,136,0.30)",
                }}
              >
                {/* Glow */}
                <div
                  aria-hidden
                  className="absolute -top-20 -right-16 w-72 h-72 rounded-full blur-3xl opacity-50 cs-glow-a"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(94,234,212,0.6) 0%, transparent 70%)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full blur-3xl opacity-40 cs-glow-b"
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

      {/* ============================================================
          SECTION 1 — THE CHALLENGE
         ============================================================ */}
      <section className="relative py-20 lg:py-28" style={{ backgroundColor: "#F8FAFC" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 90% 10%, rgba(239,68,68,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            {/* LEFT — narrative */}
            <div className="lg:col-span-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{
                  background: "rgba(239,68,68,0.08)",
                  color: "#DC2626",
                  border: "1px solid rgba(239,68,68,0.25)",
                }}
              >
                <AlertTriangle className="w-3 h-3" />
                The Challenge
              </div>
              <h2
                className="mt-8 text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.25] sm:leading-[1.28] tracking-[-0.015em] max-w-[20ch] [text-wrap:balance]"
                style={{ color: "#0F172A" }}
              >
                Why Traditional Meeting Intelligence{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #EF4444 0%, #F59E0B 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Breaks at Scale
                </span>
              </h2>
              <p
                className="mt-6 text-base sm:text-[17px] leading-[1.85] tracking-[-0.005em] max-w-[58ch] [text-wrap:pretty]"
                style={{ color: "#64748B" }}
              >
                As meetings increase, transcripts become fragmented, expensive,
                difficult to search, and disconnected from business workflows.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-5 max-w-md">
                {[
                  { value: "60%", label: "Knowledge lost post-meeting" },
                  { value: "5x", label: "Tools needed to stitch context" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-4 bg-white border border-[#E2E8F0]"
                    style={{ boxShadow: "0 6px 18px -10px rgba(15,23,42,0.15)" }}
                  >
                    <div className="text-2xl font-bold" style={{ color: "#0F172A" }}>
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs leading-snug" style={{ color: "#64748B" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — friction card */}
            <div className="lg:col-span-6">
              <div
                className="relative rounded-3xl p-7 lg:p-8 bg-white/80 backdrop-blur-xl border border-[#E2E8F0]"
                style={{
                  boxShadow:
                    "0 30px 60px -30px rgba(15,23,42,0.18), 0 12px 24px -16px rgba(239,68,68,0.15)",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                    style={{ color: "#94A3B8" }}
                  >
                    Friction Points
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      background: "rgba(239,68,68,0.08)",
                      color: "#DC2626",
                      border: "1px solid rgba(239,68,68,0.2)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    High Friction
                  </span>
                </div>

                <ul className="space-y-3">
                  {[
                    { icon: FileText, title: "Transcript limits", desc: "Meeting tools cap usage and lock long-form recordings behind tiers." },
                    { icon: DollarSign, title: "Rising subscription costs", desc: "Per-seat AI add-ons stack across teams and inflate monthly spend." },
                    { icon: Layers, title: "Scattered meeting knowledge", desc: "Notes live in Notion, Slack, email — no single source of truth." },
                    { icon: BrainCircuit, title: "No AI intelligence layer", desc: "Raw transcripts without summaries, action items, or context." },
                    { icon: History, title: "Difficult retrieval of past decisions", desc: "Teams re-discuss decisions because nothing is searchable." },
                  ].map((p) => (
                    <li
                      key={p.title}
                      className="group flex items-start gap-3 p-3.5 rounded-xl border border-transparent hover:border-[#E2E8F0] hover:bg-[#F8FAFC] transition-all"
                    >
                      <div
                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{
                          background: "rgba(239,68,68,0.08)",
                          color: "#DC2626",
                        }}
                      >
                        <p.icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold leading-snug tracking-[-0.01em]" style={{ color: "#0F172A" }}>
                          {p.title}
                        </div>
                        <div className="text-xs mt-1.5 leading-[1.7]" style={{ color: "#64748B" }}>
                          {p.desc}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — THE SOLUTION
         ============================================================ */}
      <section className="relative py-20 lg:py-28" style={{ backgroundColor: "#F8FAFC" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(13,148,136,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{
                background: "rgba(13,148,136,0.08)",
                color: "#0D9488",
                border: "1px solid rgba(13,148,136,0.25)",
              }}
            >
              <Sparkles className="w-3 h-3" />
              The Solution
            </div>
            <h2
              className="mt-8 text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.25] sm:leading-[1.28] tracking-[-0.015em] [text-wrap:balance]"
              style={{ color: "#0F172A" }}
            >
              A Unified Meeting{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0D9488 0%, #5B6CFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Knowledge Workflow
              </span>
            </h2>
            <p
              className="mt-6 text-base sm:text-[17px] leading-[1.85] tracking-[-0.005em] max-w-[58ch] mx-auto [text-wrap:pretty]"
              style={{ color: "#64748B" }}
            >
              Capture, organise, analyse, and retrieve meeting intelligence from
              one streamlined system.
            </p>
          </div>

          {/* 4 steps */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                n: "01",
                icon: Mic,
                title: "Capture",
                desc: "Automatically collect meeting conversations.",
                tint: "#0D9488",
              },
              {
                n: "02",
                icon: Workflow,
                title: "Automation",
                desc: "Structure and organise meeting data.",
                tint: "#5EEAD4",
              },
              {
                n: "03",
                icon: BrainCircuit,
                title: "AI Analysis",
                desc: "Generate summaries, actions, and insights.",
                tint: "#5B6CFF",
              },
              {
                n: "04",
                icon: Search,
                title: "Knowledge Layer",
                desc: "Make conversations searchable and reusable.",
                tint: "#0D9488",
              },
            ].map((s, i) => (
              <div
                key={s.title}
                className="group relative rounded-2xl p-6 bg-white border border-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:border-[#5EEAD4]/60"
                style={{
                  boxShadow: "0 8px 24px -16px rgba(15,23,42,0.18)",
                }}
              >
                {/* hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(13,148,136,0.06) 0%, rgba(91,108,255,0.06) 100%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${s.tint}22 0%, ${s.tint}11 100%)`,
                        color: s.tint,
                        border: `1px solid ${s.tint}33`,
                      }}
                    >
                      <s.icon className="w-5 h-5" />
                    </div>
                    <span
                      className="text-[11px] font-semibold tracking-[0.18em]"
                      style={{ color: "#94A3B8" }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <h3
                    className="mt-6 text-lg font-semibold leading-snug tracking-[-0.01em]"
                    style={{ color: "#0F172A" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-[1.7]"
                    style={{ color: "#64748B" }}
                  >
                    {s.desc}
                  </p>
                  {i < 3 && (
                    <div
                      aria-hidden
                      className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(13,148,136,0.4), rgba(91,108,255,0.4))",
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — LIVE DEMO
         ============================================================ */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ backgroundColor: "#F8FAFC" }}
      >
        {/* Background accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 20% 20%, rgba(13,148,136,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(91,108,255,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(13,148,136,0.12) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
          }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{
                background: "rgba(13,148,136,0.08)",
                color: "#0D9488",
                border: "1px solid rgba(13,148,136,0.25)",
              }}
            >
              <PlayCircle className="w-3 h-3" />
              Live Demo
            </div>
            <h2
              className="mt-8 text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.25] sm:leading-[1.28] tracking-[-0.015em] [text-wrap:balance]"
              style={{ color: "#0F172A" }}
            >
              Meeting Intelligence{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0D9488 0%, #5B6CFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                in Action
              </span>
            </h2>
            <p
              className="mt-6 text-base sm:text-[17px] leading-[1.85] tracking-[-0.005em] max-w-[58ch] mx-auto [text-wrap:pretty]"
              style={{ color: "#64748B" }}
            >
              See how users can retrieve meeting decisions, action items,
              blockers, and summaries through natural language.
            </p>
          </div>

          {/* Video container */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div
              className="relative aspect-video rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(140deg, #0B1428 0%, #143246 60%, #0D9488 140%)",
                border: "1px solid rgba(94,234,212,0.25)",
                boxShadow:
                  "0 50px 100px -40px rgba(15,23,42,0.35), 0 20px 40px -20px rgba(13,148,136,0.25)",
              }}
            >
              {/* glow ring */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(94,234,212,0.35), rgba(91,108,255,0.25))",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />
              {/* grid */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* play button */}
              <button
                type="button"
                className="group absolute inset-0 flex items-center justify-center"
                aria-label="Play demo"
              >
                <span
                  className="absolute w-28 h-28 rounded-full opacity-40 group-hover:opacity-60 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(94,234,212,0.5) 0%, transparent 70%)",
                  }}
                />
                <span
                  className="relative w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(94,234,212,0.5)",
                    boxShadow: "0 20px 40px -10px rgba(13,148,136,0.5)",
                  }}
                >
                  <PlayCircle className="w-10 h-10 text-white" />
                </span>
              </button>
              {/* bottom meta bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between text-white/80 text-xs">
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4] animate-pulse" />
                  Demo • Meeting Knowledge System
                </span>
                <span className="hidden sm:inline">02:14</span>
              </div>
            </div>

            {/* Feature checklist */}
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: FileSearch, label: "Search previous meetings" },
                { icon: ListChecks, label: "Retrieve action items" },
                { icon: FileText, label: "Generate summaries" },
                { icon: MessageSquare, label: "Ask questions in natural language" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0]"
                  style={{
                    boxShadow: "0 6px 18px -12px rgba(15,23,42,0.15)",
                  }}
                >
                  <div
                    className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(13,148,136,0.10)",
                      color: "#0D9488",
                      border: "1px solid rgba(13,148,136,0.25)",
                    }}
                  >
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm" style={{ color: "#0F172A" }}>{f.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 flex justify-center">
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #0D9488 0%, #5EEAD4 100%)",
                  color: "#0F172A",
                  boxShadow:
                    "0 16px 36px -12px rgba(13,148,136,0.6), 0 0 0 1px rgba(94,234,212,0.3) inset",
                }}
              >
                Explore the Full Process
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyDetail;