import { Brain, Palette, Cpu, BarChart3 } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Learning Experience Design",
    description: "AI-assisted LNA, instructional design, and personalized learning paths",
  },
  {
    icon: Cpu,
    title: "LearnTech & AI Systems",
    description: "AI learning assistants, content generators, and LMS automation",
  },
  {
    icon: Palette,
    title: "Experience Design",
    description: "UX/UI for learning systems, visual design, and communication journeys",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description: "Skill gap predictions, adaptive content engines, and insights dashboards",
  },
];

export function OverviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
            An AI-Powered Learning Design & Enablement Studio
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            ALIS combines LXD, LearnTech, UX, communication design, and AI automation 
            into one integrated intelligence system.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <capability.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {capability.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
