import { Layout } from "@/components/layout/Layout";
import {
  Check,
  FileText,
  Sparkles,
  Workflow,
  Search,
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
import { supabase } from "@/integrations/supabase/client";
import caseStudyHero from "@/assets/case-study-hero.jpg";

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
      // Send notification email via Lovable Emails (errors are logged, never block the download)
      const downloadedAt = new Date().toISOString();
      const idempotencyKey = `workflow-download-${crypto.randomUUID()}`;
      try {
        const { data, error } = await supabase.functions.invoke(
          "send-transactional-email",
          {
            body: {
              templateName: "workflow-download-notification",
              recipientEmail: "info_arnaintelligence@alis-global.com",
              idempotencyKey,
              templateData: {
                fullName: form.name,
                organization: form.organization,
                workEmail: form.email,
                downloadedAt,
              },
            },
          }
        );
        if (error) {
          console.error("[workflow-download] notification email failed", error);
        } else {
          console.log("[workflow-download] notification email enqueued", data);
        }
      } catch (notifyErr) {
        console.error("[workflow-download] notification email threw", notifyErr);
      }

      // Force-download the pre-built PDF as a blob so the browser
      // never navigates to the asset URL (which can show a sign-in page).
      const filename = "ARNA-Meeting-Intelligence-Implementation-Guide.pdf";
      try {
        const res = await fetch("/full-workflow.pdf", { cache: "no-store" });
        if (!res.ok) throw new Error("Download failed");
        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(
          new Blob([blob], { type: "application/pdf" })
        );
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = filename;
        link.rel = "noopener";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
      } catch {
        toast.error("Could not start download. Please try again.");
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
        className="relative overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16"
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

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
                className="mt-6 text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[1.18] sm:leading-[1.22] tracking-[-0.015em] max-w-[20ch] [text-wrap:balance]"
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
                className="mt-6 text-base sm:text-[17px] leading-[1.75] tracking-[-0.005em] max-w-[58ch] [text-wrap:pretty]"
                style={{ color: "#64748B" }}
              >
                Inside the workflow ARNA Intelligence built to transform raw
                meetings into structured, searchable knowledge using automation,
                transcription, and AI analysis — without adding another
                software subscription.
              </p>

              {/* Highlight tag */}
              <div
                className="mt-5 inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(94,234,212,0.12)",
                  color: "#0D9488",
                  border: "1px solid rgba(94,234,212,0.4)",
                }}
              >
                <Check className="w-4 h-4" />
                No Additional Software Cost
              </div>
            </div>

            {/* RIGHT — Abstract AI workflow visual */}
            <div className="lg:col-span-5 animate-fade-in animation-delay-200">
              <div
                className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-[28px] overflow-hidden cs-float"
                style={{
                  background:
                    "linear-gradient(140deg, #0F172A 0%, #143246 50%, #137a72 110%)",
                  boxShadow:
                    "0 50px 100px -40px rgba(15,23,42,0.55), 0 20px 40px -20px rgba(13,148,136,0.30)",
                }}
              >
                {/* Hero illustration */}
                <img
                  src={caseStudyHero}
                  alt="AI meeting intelligence illustration"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Depth overlay for legibility */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,23,42,0.25) 0%, rgba(15,23,42,0.05) 40%, rgba(15,23,42,0.45) 100%)",
                  }}
                />

                {/* Floating glass cards — equal size, balanced positioning */}
                <div
                  className="absolute top-[5%] left-[5%] px-4 py-3 rounded-xl backdrop-blur-md flex items-center gap-2.5 animate-fade-in"
                  style={{
                    background: "rgba(15,23,42,0.55)",
                    border: "1px solid rgba(94,234,212,0.30)",
                    boxShadow: "0 12px 28px -8px rgba(0,0,0,0.5)",
                  }}
                >
                  <Mic className="w-[18px] h-[18px]" style={{ color: "#5EEAD4" }} />
                  <span className="text-[13px] font-semibold text-white whitespace-nowrap tracking-tight">
                    Transcription
                  </span>
                </div>

                <div
                  className="absolute top-[33%] right-[5%] px-4 py-3 rounded-xl backdrop-blur-md flex items-center gap-2.5 animate-fade-in animation-delay-100"
                  style={{
                    background: "rgba(15,23,42,0.55)",
                    border: "1px solid rgba(94,234,212,0.30)",
                    boxShadow: "0 12px 28px -8px rgba(0,0,0,0.5)",
                  }}
                >
                  <Workflow className="w-[18px] h-[18px]" style={{ color: "#5EEAD4" }} />
                  <span className="text-[13px] font-semibold text-white whitespace-nowrap tracking-tight">
                    Automation
                  </span>
                </div>

                <div
                  className="absolute top-[63%] left-[5%] px-4 py-3 rounded-xl backdrop-blur-md flex items-center gap-2.5 animate-fade-in animation-delay-200"
                  style={{
                    background: "rgba(15,23,42,0.55)",
                    border: "1px solid rgba(251,191,36,0.35)",
                    boxShadow: "0 12px 28px -8px rgba(0,0,0,0.5)",
                  }}
                >
                  <Sparkles className="w-[18px] h-[18px]" style={{ color: "#FBBF24" }} />
                  <span className="text-[13px] font-semibold text-white whitespace-nowrap tracking-tight">
                    AI Analysis
                  </span>
                </div>

                <div
                  className="absolute bottom-[5%] right-[5%] px-4 py-3 rounded-xl backdrop-blur-md flex items-center gap-2.5 animate-fade-in animation-delay-300"
                  style={{
                    background: "rgba(15,23,42,0.55)",
                    border: "1px solid rgba(94,234,212,0.30)",
                    boxShadow: "0 12px 28px -8px rgba(0,0,0,0.5)",
                  }}
                >
                  <Search className="w-[18px] h-[18px]" style={{ color: "#5EEAD4" }} />
                  <span className="text-[13px] font-semibold text-white whitespace-nowrap tracking-tight">
                    Searchable Knowledge
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 1 — THE CHALLENGE
         ============================================================ */}
      <section className="relative py-14 lg:py-20" style={{ backgroundColor: "#F8FAFC" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 90% 10%, rgba(239,68,68,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
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
                className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.25] sm:leading-[1.28] tracking-[-0.015em] max-w-[20ch] [text-wrap:balance]"
                style={{ color: "#0F172A" }}
              >
                Why Traditional Meeting Intelligence{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #0D9488 0%, #5B6CFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Breaks at Scale
                </span>
              </h2>
              <p
                className="mt-5 text-base sm:text-[17px] leading-[1.7] tracking-[-0.005em] max-w-[58ch] [text-wrap:pretty]"
                style={{ color: "#64748B" }}
              >
                As meetings increase, transcripts become fragmented, expensive,
                difficult to search, and disconnected from business workflows.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5 max-w-md">
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
                        className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                        style={{
                          background: "rgba(239,68,68,0.08)",
                          color: "#DC2626",
                        }}
                      >
                        <p.icon className="w-5 h-5" />
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
      <section className="relative py-14 lg:py-20" style={{ backgroundColor: "#F8FAFC" }}>
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
              className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.25] sm:leading-[1.28] tracking-[-0.015em] [text-wrap:balance]"
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
              className="mt-5 text-base sm:text-[17px] leading-[1.7] tracking-[-0.005em] max-w-[58ch] mx-auto [text-wrap:pretty]"
              style={{ color: "#64748B" }}
            >
              Capture, organise, analyse, and retrieve meeting intelligence from
              one streamlined system.
            </p>
          </div>

          {/* 4 steps */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        className="relative py-14 lg:py-20 overflow-hidden"
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
              className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.25] sm:leading-[1.28] tracking-[-0.015em] [text-wrap:balance]"
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
              className="mt-5 text-base sm:text-[17px] leading-[1.7] tracking-[-0.005em] max-w-[58ch] mx-auto [text-wrap:pretty]"
              style={{ color: "#64748B" }}
            >
              See how users can retrieve meeting decisions, action items,
              blockers, and summaries through natural language.
            </p>
          </div>

          {/* Video container */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div
              className="relative aspect-video rounded-[20px] overflow-hidden backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(140deg, #0B1428 0%, #143246 60%, #0D9488 140%)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow:
                  "0 50px 100px -40px rgba(15,23,42,0.35), 0 20px 40px -20px rgba(13,148,136,0.25)",
              }}
            >
              {/* glow ring */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-[20px] z-10"
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
              {/* Demo video */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                src="/arna-meeting-demo.mp4"
              />
            </div>

            {/* Feature checklist */}
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #0D9488 0%, #5EEAD4 100%)",
                  color: "#0F172A",
                  boxShadow:
                    "0 16px 36px -12px rgba(13,148,136,0.6), 0 0 0 1px rgba(94,234,212,0.3) inset",
                }}
              >
                <Download className="w-4 h-4" />
                Download Complete Workflow
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
          style={{ backgroundColor: "rgba(15,23,42,0.55)", backdropFilter: "blur(6px)" }}
          onClick={() => !submitting && setModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-white p-7 sm:p-8 animate-in zoom-in-95 duration-200"
            style={{
              boxShadow:
                "0 30px 80px -20px rgba(15,23,42,0.35), 0 0 0 1px rgba(15,23,42,0.06)",
            }}
          >
            <button
              type="button"
              onClick={() => !submitting && setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg transition-colors hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-4 h-4" style={{ color: "#64748B" }} />
            </button>

            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-4"
              style={{
                background: "rgba(13,148,136,0.08)",
                color: "#0D9488",
                border: "1px solid rgba(13,148,136,0.2)",
              }}
            >
              <Download className="w-3 h-3" />
              Workflow Guide
            </div>

            <h3
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#0F172A" }}
            >
              Download the Complete Workflow
            </h3>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "#64748B" }}
            >
              Access the complete AI Meeting Knowledge System case study, including the challenge, solution, workflow architecture, implementation approach, and live demonstration details.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {[
                { key: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
                { key: "organization", label: "Organization Name", type: "text", placeholder: "Acme Inc." },
                { key: "email", label: "Work Email", type: "email", placeholder: "you@company.com" },
              ].map((f) => (
                <div key={f.key}>
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "#0F172A" }}
                  >
                    {f.label} <span style={{ color: "#0D9488" }}>*</span>
                  </label>
                  <input
                    required
                    type={f.type}
                    placeholder={f.placeholder}
                    value={(form as any)[f.key]}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, [f.key]: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      color: "#0F172A",
                    }}
                  />
                </div>
              ))}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  disabled={submitting}
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors hover:bg-slate-100 disabled:opacity-50"
                  style={{ color: "#64748B" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:translate-y-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #0D9488 0%, #5EEAD4 100%)",
                    color: "#0F172A",
                    boxShadow:
                      "0 12px 28px -10px rgba(13,148,136,0.55), 0 0 0 1px rgba(94,234,212,0.3) inset",
                  }}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Preparing…
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download Complete Workflow
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CaseStudyDetail;