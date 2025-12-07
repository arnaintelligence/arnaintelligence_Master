import { ArrowRight, ArrowDown, ArrowLeft, ArrowUp } from "lucide-react";

const intelligenceNodes = [
  { id: "analytics", label: "Analytics", position: "top" },
  { id: "ai", label: "AI", position: "right" },
  { id: "ld", label: "L&D", position: "bottom" },
  { id: "design", label: "Design", position: "left" },
];

const flows = [
  { from: "Analytics", to: "L&D", description: "Data-driven insights fuel learning strategies" },
  { from: "Design", to: "AI", description: "UX patterns power intelligent interfaces" },
  { from: "AI", to: "L&D + Design", description: "Automation enhances both disciplines" },
  { from: "L&D", to: "LearnTech", description: "Learning expertise shapes technology" },
];

export function CrossIntelligenceSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our USP
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
            Cross-Intelligence Engine
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Where Design, AI, and Learning Converge — A four-way intelligence flow 
            that powers everything we create.
          </p>
        </div>

        {/* Interactive Visualization */}
        <div className="relative max-w-2xl mx-auto">
          {/* Center Hub */}
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              {/* Animated paths */}
              <path
                d="M 200 80 L 200 160"
                className="stroke-primary/30"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
              />
              <path
                d="M 320 200 L 240 200"
                className="stroke-primary/30"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
              />
              <path
                d="M 200 320 L 200 240"
                className="stroke-primary/30"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
              />
              <path
                d="M 80 200 L 160 200"
                className="stroke-primary/30"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
              />
              {/* Diagonal connections */}
              <path
                d="M 130 130 L 170 170"
                className="stroke-primary/20"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M 270 130 L 230 170"
                className="stroke-primary/20"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M 130 270 L 170 230"
                className="stroke-primary/20"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M 270 270 L 230 230"
                className="stroke-primary/20"
                strokeWidth="1"
                fill="none"
              />
            </svg>

            {/* Center Circle - ALIS */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-lg z-10">
              <span className="text-primary-foreground font-bold text-lg">ALIS</span>
            </div>

            {/* Analytics Node - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center hover:border-primary hover:shadow-md transition-all cursor-pointer group">
              <div className="text-center">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Analytics</span>
              </div>
            </div>

            {/* AI Node - Right */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center hover:border-primary hover:shadow-md transition-all cursor-pointer group">
              <div className="text-center">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">AI</span>
              </div>
            </div>

            {/* L&D Node - Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center hover:border-primary hover:shadow-md transition-all cursor-pointer group">
              <div className="text-center">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">L&D</span>
              </div>
            </div>

            {/* Design Node - Left */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center hover:border-primary hover:shadow-md transition-all cursor-pointer group">
              <div className="text-center">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Design</span>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Descriptions */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {flows.map((flow, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-background border border-border"
            >
              <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
                <span>{flow.from}</span>
                <ArrowRight className="w-4 h-4" />
                <span>{flow.to}</span>
              </div>
              <p className="text-xs text-muted-foreground">{flow.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
