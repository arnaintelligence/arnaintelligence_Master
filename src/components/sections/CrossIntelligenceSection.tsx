import { BookOpen, Brain, BarChart3, Palette } from "lucide-react";

const quadrants = [
  {
    label: "Pedagogy",
    icon: BookOpen,
    subtexts: ["Learning Science", "Simulations", "Adaptive Assessment"],
  },
  {
    label: "AI Systems",
    icon: Brain,
    subtexts: ["AI Assistants", "Automation", "Simulation Engines"],
  },
  {
    label: "Analytics",
    icon: BarChart3,
    subtexts: ["Skill Metrics", "Adoption Dashboards", "ROI Frameworks"],
  },
  {
    label: "Experience & Design",
    icon: Palette,
    subtexts: ["Learning Experience Design", "UX/UI", "Visual & Motion Design"],
  },
];

export function CrossIntelligenceSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-4xl sm:text-5xl font-bold text-primary">
            Our USP
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            The Cross-Intelligence Engine
          </h2>
          <p className="mt-6 text-base sm:text-lg max-w-2xl mx-auto text-muted-foreground">
            An integrated operating model connecting pedagogy, design, AI systems, and analytics into a continuously optimizing learning ecosystem.
          </p>
        </div>

        {/* Desktop Diagram */}
        <div className="hidden md:block relative max-w-3xl mx-auto">
          <div className="relative" style={{ paddingBottom: "100%" }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600" fill="none">
              <defs>
                <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(175, 84%, 32%)" />
                  <stop offset="60%" stopColor="hsl(175, 84%, 40%)" />
                  <stop offset="100%" stopColor="hsl(38, 80%, 55%)" />
                </linearGradient>
                <filter id="centerGlow">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <marker id="arrowHead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6" fill="hsl(175, 84%, 32%)" opacity="0.6" />
                </marker>
              </defs>

              {/* Outer circular loop */}
              <circle cx="300" cy="300" r="195" stroke="url(#loopGrad)" strokeWidth="2" opacity="0.2" />
              
              {/* Clockwise directional arcs */}
              <path d="M 300 105 A 195 195 0 0 1 495 300" stroke="url(#loopGrad)" strokeWidth="2.5" opacity="0.4" fill="none" markerEnd="url(#arrowHead)" />
              <path d="M 495 300 A 195 195 0 0 1 300 495" stroke="url(#loopGrad)" strokeWidth="2.5" opacity="0.4" fill="none" markerEnd="url(#arrowHead)" />
              <path d="M 300 495 A 195 195 0 0 1 105 300" stroke="url(#loopGrad)" strokeWidth="2.5" opacity="0.4" fill="none" markerEnd="url(#arrowHead)" />
              <path d="M 105 300 A 195 195 0 0 1 300 105" stroke="url(#loopGrad)" strokeWidth="2.5" opacity="0.4" fill="none" markerEnd="url(#arrowHead)" />

              {/* Pulse lines from center to each quadrant */}
              <line x1="300" y1="300" x2="300" y2="140" stroke="hsl(175, 84%, 32%)" strokeWidth="1" opacity="0.12" strokeDasharray="4 6" />
              <line x1="300" y1="300" x2="460" y2="300" stroke="hsl(175, 84%, 32%)" strokeWidth="1" opacity="0.12" strokeDasharray="4 6" />
              <line x1="300" y1="300" x2="300" y2="460" stroke="hsl(175, 84%, 32%)" strokeWidth="1" opacity="0.12" strokeDasharray="4 6" />
              <line x1="300" y1="300" x2="140" y2="300" stroke="hsl(175, 84%, 32%)" strokeWidth="1" opacity="0.12" strokeDasharray="4 6" />

              {/* Center circle - light background */}
              <circle cx="300" cy="300" r="60" fill="hsl(210, 40%, 98%)" stroke="hsl(175, 84%, 32%)" strokeWidth="2" filter="url(#centerGlow)" opacity="0.95" />
              <circle cx="300" cy="300" r="60" fill="none" stroke="hsl(175, 84%, 32%)" strokeWidth="1" opacity="0.2">
                <animate attributeName="r" values="60;68;60" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.08;0.2" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Center text */}
              <text x="300" y="293" textAnchor="middle" fill="hsl(175, 84%, 32%)" fontSize="11" fontWeight="700" fontFamily="Poppins, sans-serif" letterSpacing="0.5">Cross</text>
              <text x="300" y="310" textAnchor="middle" fill="hsl(175, 84%, 32%)" fontSize="11" fontWeight="700" fontFamily="Poppins, sans-serif" letterSpacing="0.5">Intelligence</text>
              <text x="300" y="327" textAnchor="middle" fill="hsl(175, 84%, 32%)" fontSize="10" fontWeight="500" fontFamily="Poppins, sans-serif" opacity="0.8">Engine</text>
            </svg>

            {/* Quadrant Labels */}
            {/* Top: Pedagogy */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ width: "200px", top: "-80px" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-2 bg-primary/10 border border-primary/20">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-1 text-foreground">Pedagogy</h3>
              <div className="space-y-0.5">
                {["Learning Science", "Simulations", "Adaptive Assessment"].map(t => (
                  <p key={t} className="text-xs text-muted-foreground">{t}</p>
                ))}
              </div>
            </div>

            {/* Right: AI Systems */}
            <div className="absolute top-1/2 -translate-y-1/2 text-center" style={{ width: "180px", right: "-100px" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-2 bg-primary/10 border border-primary/20">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-1 text-foreground">AI Systems</h3>
              <div className="space-y-0.5">
                {["AI Assistants", "Automation", "Simulation Engines"].map(t => (
                  <p key={t} className="text-xs text-muted-foreground">{t}</p>
                ))}
              </div>
            </div>

            {/* Bottom: Analytics */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ width: "200px", bottom: "-80px" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-2 bg-primary/10 border border-primary/20">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-1 text-foreground">Analytics</h3>
              <div className="space-y-0.5">
                {["Skill Metrics", "Adoption Dashboards", "ROI Frameworks"].map(t => (
                  <p key={t} className="text-xs text-muted-foreground">{t}</p>
                ))}
              </div>
            </div>

            {/* Left: Experience & Design */}
            <div className="absolute top-1/2 -translate-y-1/2 text-center" style={{ width: "180px", left: "-100px" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-2 bg-primary/10 border border-primary/20">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-1 text-foreground">Experience & Design</h3>
              <div className="space-y-0.5">
                {["Learning Experience Design", "UX/UI", "Visual & Motion Design"].map(t => (
                  <p key={t} className="text-xs text-muted-foreground">{t}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Center engine */}
          <div className="flex justify-center mb-10">
            <div className="relative w-28 h-28 rounded-full flex items-center justify-center bg-background border-2 border-primary shadow-lg">
              <div className="text-center">
                <p className="text-xs font-bold text-primary">Cross</p>
                <p className="text-xs font-bold text-primary">Intelligence</p>
                <p className="text-[10px] font-medium text-primary/80">Engine</p>
              </div>
            </div>
          </div>

          {/* Quadrant cards */}
          <div className="grid grid-cols-2 gap-4">
            {quadrants.map(({ label, icon: Icon, subtexts }) => (
              <div key={label} className="rounded-xl p-5 text-center bg-card border border-border">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 bg-primary/10 border border-primary/20">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold mb-2 text-foreground">{label}</h3>
                <div className="space-y-1">
                  {subtexts.map(t => (
                    <p key={t} className="text-xs text-muted-foreground">{t}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
