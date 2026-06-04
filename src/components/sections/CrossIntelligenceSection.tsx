import { BookOpen, Brain, BarChart3, Palette, ArrowRight, Zap } from "lucide-react";

const stages = [
  {
    label: "Pedagogy",
    icon: BookOpen,
    subtexts: ["Learning Science", "Simulations", "Adaptive Assessment"],
    step: "01",
  },
  {
    label: "Experience & Design",
    icon: Palette,
    subtexts: ["Learning Experience Design", "UX/UI", "Visual & Motion Design"],
    step: "02",
  },
  {
    label: "AI Systems",
    icon: Brain,
    subtexts: ["AI Assistants", "Automation", "Simulation Engines"],
    step: "03",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    subtexts: ["Skill Metrics", "Adoption Dashboards", "ROI Frameworks"],
    step: "04",
  },
];

export function CrossIntelligenceSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-4xl sm:text-5xl font-bold gradient-text-brand">
            Our USP
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            The Cross-Intelligence Engine
          </h2>
          <p className="mt-6 text-base sm:text-lg max-w-2xl mx-auto text-muted-foreground">
            An integrated operating model connecting pedagogy, design, AI systems, and analytics into a continuously optimizing learning ecosystem.
          </p>
        </div>

        {/* Desktop: Layered Loop Diagram */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          {/* Loop flow */}
          <div className="relative">
            {/* Top row: stages 1 & 2 */}
            <div className="grid grid-cols-2 gap-8 mb-6">
              {stages.slice(0, 2).map((stage, i) => (
                <StageCard key={stage.label} stage={stage} index={i} />
              ))}
            </div>

            {/* Center engine badge */}
            <div className="flex items-center justify-center my-4">
              <div className="relative flex items-center gap-4">
                {/* Left arrow into center */}
                <div className="hidden sm:flex items-center gap-1 gradient-text-brand/30">
                  <div className="w-16 h-px bg-primary/20" />
                  <ArrowRight className="w-4 h-4" />
                </div>

                <div className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-primary/20 bg-primary/5">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold tracking-wide gradient-text-brand uppercase">
                    Continuous Optimization Loop
                  </span>
                  <Zap className="w-5 h-5 text-primary" />
                </div>

                {/* Right arrow out of center */}
                <div className="hidden sm:flex items-center gap-1 gradient-text-brand/30">
                  <ArrowRight className="w-4 h-4" />
                  <div className="w-16 h-px bg-primary/20" />
                </div>
              </div>
            </div>

            {/* Bottom row: stages 3 & 4 */}
            <div className="grid grid-cols-2 gap-8 mt-6">
              {stages.slice(2, 4).map((stage, i) => (
                <StageCard key={stage.label} stage={stage} index={i + 2} />
              ))}
            </div>

            {/* Loop arrows connecting cards */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <defs>
                <marker id="loopArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6" fill="hsl(175, 84%, 32%)" opacity="0.3" />
                </marker>
              </defs>
              {/* Top-left to top-right */}
              <line x1="50%" y1="18%" x2="50%" y2="18%" stroke="hsl(175, 84%, 32%)" strokeWidth="1.5" opacity="0.15" markerEnd="url(#loopArrow)" />
            </svg>
          </div>

          {/* Flow arrows between cards */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2 text-muted-foreground/50">
              <span className="text-xs uppercase tracking-widest font-medium">Pedagogy</span>
              <ArrowRight className="w-3.5 h-3.5" />
              <span className="text-xs uppercase tracking-widest font-medium">Experience</span>
              <ArrowRight className="w-3.5 h-3.5" />
              <span className="text-xs uppercase tracking-widest font-medium">AI Systems</span>
              <ArrowRight className="w-3.5 h-3.5" />
              <span className="text-xs uppercase tracking-widest font-medium">Analytics</span>
              <ArrowRight className="w-3.5 h-3.5" />
              <span className="text-xs uppercase tracking-widest font-medium gradient-text-brand/60">↻ Repeat</span>
            </div>
          </div>
        </div>

        {/* Tablet: 2-col grid */}
        <div className="hidden md:block lg:hidden max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {stages.map((stage, i) => (
              <StageCard key={stage.label} stage={stage} index={i} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold tracking-wide gradient-text-brand uppercase">
                Continuous Optimization Loop
              </span>
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-4">
          {stages.map((stage, i) => (
            <div key={stage.label}>
              <StageCard stage={stage} index={i} />
              {i < stages.length - 1 && (
                <div className="flex justify-center my-2">
                  <ArrowRight className="w-4 h-4 text-primary/30 rotate-90" />
                </div>
              )}
            </div>
          ))}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold tracking-wide gradient-text-brand uppercase">
                Continuous Loop
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StageCard({ stage, index }: { stage: typeof stages[number]; index: number }) {
  return (
    <div className="group relative rounded-xl p-6 border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        {/* Step number + icon */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
              <stage.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
              {stage.step}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-foreground mb-2">
            {stage.label}
          </h3>
          <ul className="space-y-1">
            {stage.subtexts.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
