import { ArrowRight } from "lucide-react";

const connections = [
  { label: "Pedagogy", description: "Defines standards, outcomes, and evidence of learning" },
  { label: "Design Experience", description: "Turns those into journeys people want to complete" },
  { label: "AI Systems", description: "Scale, personalize, and automate the experience" },
  { label: "Analytics", description: "Read what is happening and feed insights back into the model" },
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
            The Cross-Intelligence Engine brings pedagogy, design experience, AI systems, 
            and analytics layers together to power an end-to-end learning operating model.
          </p>
        </div>

        {/* Interactive Visualization */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <path d="M 200 80 L 200 160" className="stroke-primary/30" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M 320 200 L 240 200" className="stroke-primary/30" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M 200 320 L 200 240" className="stroke-primary/30" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M 80 200 L 160 200" className="stroke-primary/30" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M 130 130 L 170 170" className="stroke-primary/20" strokeWidth="1" fill="none" />
              <path d="M 270 130 L 230 170" className="stroke-primary/20" strokeWidth="1" fill="none" />
              <path d="M 130 270 L 170 230" className="stroke-primary/20" strokeWidth="1" fill="none" />
              <path d="M 270 270 L 230 230" className="stroke-primary/20" strokeWidth="1" fill="none" />
            </svg>

            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-lg z-10">
              <span className="text-primary-foreground font-bold text-sm text-center leading-tight">Cross<br/>Engine</span>
            </div>

            {/* Pedagogy - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center hover:border-primary hover:shadow-md transition-all cursor-pointer group">
              <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors text-center">Pedagogy</span>
            </div>

            {/* AI Systems - Right */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center hover:border-primary hover:shadow-md transition-all cursor-pointer group">
              <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors text-center">AI<br/>Systems</span>
            </div>

            {/* Analytics - Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center hover:border-primary hover:shadow-md transition-all cursor-pointer group">
              <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors text-center">Analytics</span>
            </div>

            {/* Design - Left */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center hover:border-primary hover:shadow-md transition-all cursor-pointer group">
              <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors text-center">Design</span>
            </div>
          </div>
        </div>

        {/* Connection Descriptions */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {connections.map((item) => (
            <div key={item.label} className="p-4 rounded-lg bg-background border border-border">
              <div className="text-primary font-medium text-sm mb-2">{item.label}</div>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto">
          This interconnected approach unifies the learning ecosystem, with each project 
          continuously strengthening the entire system intelligence.
        </p>
      </div>
    </section>
  );
}
