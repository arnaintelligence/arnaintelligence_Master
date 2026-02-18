import { BookOpen, Brain, BarChart3, Palette } from "lucide-react";

const quadrants = [
  {
    label: "Pedagogy",
    icon: BookOpen,
    subtexts: ["Learning Science", "Simulations", "Adaptive Assessment"],
    position: "top",
  },
  {
    label: "AI Systems",
    icon: Brain,
    subtexts: ["AI Assistants", "Automation", "Simulation Engines"],
    position: "right",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    subtexts: ["Skill Metrics", "Adoption Dashboards", "ROI Frameworks"],
    position: "bottom",
  },
  {
    label: "Experience & Design",
    icon: Palette,
    subtexts: ["Learning Experience Design", "UX/UI", "Visual & Motion Design"],
    position: "left",
  },
];

export function CrossIntelligenceSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "hsl(222, 47%, 11%)" }}>
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(175, 84%, 40%) 0%, transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "hsl(175, 84%, 45%)" }}>
            Our USP
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: "hsl(210, 40%, 98%)" }}>
            The Cross-Intelligence Engine
          </h2>
          <p className="mt-6 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "hsl(215, 16%, 60%)" }}>
            An integrated operating model connecting pedagogy, design, AI systems, and analytics into a continuously optimizing learning ecosystem.
          </p>
        </div>

        {/* Desktop Diagram */}
        <div className="hidden md:block relative max-w-3xl mx-auto">
          <div className="relative" style={{ paddingBottom: "100%" }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600" fill="none">
              <defs>
                <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(175, 84%, 40%)" />
                  <stop offset="60%" stopColor="hsl(185, 70%, 50%)" />
                  <stop offset="100%" stopColor="hsl(38, 80%, 55%)" />
                </linearGradient>
                <filter id="centerGlow">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <marker id="arrowHead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6" fill="hsl(175, 84%, 40%)" opacity="0.6" />
                </marker>
              </defs>

              {/* Outer circular loop - 4 arc segments with arrows */}
              <circle cx="300" cy="300" r="195" stroke="url(#loopGrad)" strokeWidth="2" opacity="0.25" />
              
              {/* Clockwise directional arcs */}
              {/* Top-right arc */}
              <path d="M 300 105 A 195 195 0 0 1 495 300" stroke="url(#loopGrad)" strokeWidth="2.5" opacity="0.5" fill="none" markerEnd="url(#arrowHead)" />
              {/* Right-bottom arc */}
              <path d="M 495 300 A 195 195 0 0 1 300 495" stroke="url(#loopGrad)" strokeWidth="2.5" opacity="0.5" fill="none" markerEnd="url(#arrowHead)" />
              {/* Bottom-left arc */}
              <path d="M 300 495 A 195 195 0 0 1 105 300" stroke="url(#loopGrad)" strokeWidth="2.5" opacity="0.5" fill="none" markerEnd="url(#arrowHead)" />
              {/* Left-top arc */}
              <path d="M 105 300 A 195 195 0 0 1 300 105" stroke="url(#loopGrad)" strokeWidth="2.5" opacity="0.5" fill="none" markerEnd="url(#arrowHead)" />

              {/* Pulse lines from center to each quadrant */}
              <line x1="300" y1="300" x2="300" y2="140" stroke="hsl(175, 84%, 40%)" strokeWidth="1" opacity="0.15" strokeDasharray="4 6" />
              <line x1="300" y1="300" x2="460" y2="300" stroke="hsl(175, 84%, 40%)" strokeWidth="1" opacity="0.15" strokeDasharray="4 6" />
              <line x1="300" y1="300" x2="300" y2="460" stroke="hsl(175, 84%, 40%)" strokeWidth="1" opacity="0.15" strokeDasharray="4 6" />
              <line x1="300" y1="300" x2="140" y2="300" stroke="hsl(175, 84%, 40%)" strokeWidth="1" opacity="0.15" strokeDasharray="4 6" />

              {/* Center glow circle */}
              <circle cx="300" cy="300" r="60" fill="hsl(222, 47%, 15%)" stroke="hsl(175, 84%, 40%)" strokeWidth="2" filter="url(#centerGlow)" opacity="0.9" />
              <circle cx="300" cy="300" r="60" fill="none" stroke="hsl(175, 84%, 40%)" strokeWidth="1" opacity="0.3">
                <animate attributeName="r" values="60;68;60" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Center text */}
              <text x="300" y="293" textAnchor="middle" fill="hsl(175, 84%, 50%)" fontSize="11" fontWeight="700" fontFamily="Poppins, sans-serif" letterSpacing="0.5">Cross</text>
              <text x="300" y="310" textAnchor="middle" fill="hsl(175, 84%, 50%)" fontSize="11" fontWeight="700" fontFamily="Poppins, sans-serif" letterSpacing="0.5">Intelligence</text>
              <text x="300" y="327" textAnchor="middle" fill="hsl(175, 84%, 50%)" fontSize="10" fontWeight="500" fontFamily="Poppins, sans-serif" opacity="0.8">Engine</text>
            </svg>

            {/* Quadrant Labels - positioned absolutely */}
            {/* Top: Pedagogy */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ width: "200px", top: "-80px" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-2" style={{ background: "hsla(175, 84%, 40%, 0.1)", border: "1px solid hsla(175, 84%, 40%, 0.2)" }}>
                <BookOpen className="w-6 h-6" style={{ color: "hsl(175, 84%, 45%)" }} />
              </div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "hsl(210, 40%, 98%)" }}>Pedagogy</h3>
              <div className="space-y-0.5">
                {["Learning Science", "Simulations", "Adaptive Assessment"].map(t => (
                  <p key={t} className="text-xs" style={{ color: "hsl(215, 20%, 75%)" }}>{t}</p>
                ))}
              </div>
            </div>

            {/* Right: AI Systems */}
            <div className="absolute top-1/2 -translate-y-1/2 text-center" style={{ width: "180px", right: "-100px" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-2" style={{ background: "hsla(175, 84%, 40%, 0.1)", border: "1px solid hsla(175, 84%, 40%, 0.2)" }}>
                <Brain className="w-6 h-6" style={{ color: "hsl(175, 84%, 45%)" }} />
              </div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "hsl(210, 40%, 98%)" }}>AI Systems</h3>
              <div className="space-y-0.5">
                {["AI Assistants", "Automation", "Simulation Engines"].map(t => (
                  <p key={t} className="text-xs" style={{ color: "hsl(215, 20%, 75%)" }}>{t}</p>
                ))}
              </div>
            </div>

            {/* Bottom: Analytics */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ width: "200px", bottom: "-80px" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-2" style={{ background: "hsla(175, 84%, 40%, 0.1)", border: "1px solid hsla(175, 84%, 40%, 0.2)" }}>
                <BarChart3 className="w-6 h-6" style={{ color: "hsl(175, 84%, 45%)" }} />
              </div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "hsl(210, 40%, 98%)" }}>Analytics</h3>
              <div className="space-y-0.5">
                {["Skill Metrics", "Adoption Dashboards", "ROI Frameworks"].map(t => (
                  <p key={t} className="text-xs" style={{ color: "hsl(215, 20%, 75%)" }}>{t}</p>
                ))}
              </div>
            </div>

            {/* Left: Experience & Design */}
            <div className="absolute top-1/2 -translate-y-1/2 text-center" style={{ width: "180px", left: "-100px" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-2" style={{ background: "hsla(175, 84%, 40%, 0.1)", border: "1px solid hsla(175, 84%, 40%, 0.2)" }}>
                <Palette className="w-6 h-6" style={{ color: "hsl(175, 84%, 45%)" }} />
              </div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "hsl(210, 40%, 98%)" }}>Experience & Design</h3>
              <div className="space-y-0.5">
                {["Learning Experience Design", "UX/UI", "Visual & Motion Design"].map(t => (
                  <p key={t} className="text-xs" style={{ color: "hsl(215, 20%, 75%)" }}>{t}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Center engine */}
          <div className="flex justify-center mb-10">
            <div className="relative w-28 h-28 rounded-full flex items-center justify-center" style={{ background: "hsl(222, 47%, 15%)", border: "2px solid hsl(175, 84%, 40%)", boxShadow: "0 0 30px hsla(175, 84%, 40%, 0.2)" }}>
              <div className="text-center">
                <p className="text-xs font-bold" style={{ color: "hsl(175, 84%, 50%)" }}>Cross</p>
                <p className="text-xs font-bold" style={{ color: "hsl(175, 84%, 50%)" }}>Intelligence</p>
                <p className="text-[10px] font-medium" style={{ color: "hsl(175, 84%, 50%)", opacity: 0.8 }}>Engine</p>
              </div>
            </div>
          </div>

          {/* Quadrant cards */}
          <div className="grid grid-cols-2 gap-4">
            {quadrants.map(({ label, icon: Icon, subtexts }) => (
              <div key={label} className="rounded-xl p-5 text-center" style={{ background: "hsla(222, 47%, 15%, 0.8)", border: "1px solid hsla(175, 84%, 40%, 0.15)" }}>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3" style={{ background: "hsla(175, 84%, 40%, 0.1)", border: "1px solid hsla(175, 84%, 40%, 0.2)" }}>
                  <Icon className="w-5 h-5" style={{ color: "hsl(175, 84%, 45%)" }} />
                </div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: "hsl(210, 40%, 98%)" }}>{label}</h3>
                <div className="space-y-1">
                  {subtexts.map(t => (
                    <p key={t} className="text-xs" style={{ color: "hsl(215, 16%, 55%)" }}>{t}</p>
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
