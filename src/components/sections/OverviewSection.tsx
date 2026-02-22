import { BookOpen, Palette, Cpu, BarChart3 } from "lucide-react";

const layers = [
  {
    icon: BookOpen,
    number: "1",
    title: "Pedagogy Layer",
    subtitle: "Learning Foundation",
    description: "Learning science, instructional design, and cognitive frameworks that define how learning is structured and assessed.",
    capabilities: [
      "Learning science-driven frameworks and blueprints",
      "Scenario-based and simulation-based learning models",
      "Adaptive assessment and feedback design",
      "Structured curriculum, content, and alignment models",
    ],
  },
  {
    icon: Palette,
    number: "2",
    title: "Experience & Design Layer",
    subtitle: "Learning Adoption",
    description: "Innovative design ensures clarity, accessibility, motivation and emotional connection so learning is adopted and sustained.",
    capabilities: [
      "Learning Experience Design (LXD)",
      "UX/UI for learning platforms",
      "UX writing & learning microcopy",
      "Visual & motion design",
    ],
  },
  {
    icon: Cpu,
    number: "3",
    title: "AI Systems Layer",
    subtitle: "Acceleration & Scale",
    description: "AI reduces turnaround time, improves consistency and scalability, while preserving the integrity of the learning model.",
    capabilities: [
      "AI-augmented workflow automation",
      "Learning assistants & chatbots",
      "Knowledge discovery & content automation",
      "AI-powered simulation & interaction engines",
    ],
  },
  {
    icon: BarChart3,
    number: "4",
    title: "Analytics & Intelligence Layer",
    subtitle: "Measurement & ROI",
    description: "Data and analytics transform learning into measurable impact that drives continuous improvement across workforce and business performance.",
    capabilities: [
      "Skill gap & performance metrics",
      "Engagement & adoption dashboards",
      "Learning ROI and value-realization frameworks",
      "Data-driven decision support",
    ],
  },
];

export function OverviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-4xl sm:text-5xl font-bold text-primary">
            Our Framework
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            The Learning Intelligence Model
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We organize our work into four layers, connected by a Cross-Intelligence 
            Engine that turns individual projects into a coherent learning ecosystem.
          </p>
        </div>

        {/* Layer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {layers.map((layer) => (
            <div
              key={layer.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <layer.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground">
                    {layer.title}
                  </h3>
                  <p className="text-sm font-medium text-primary">{layer.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {layer.description}
              </p>
              <ul className="space-y-2">
                {layer.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
