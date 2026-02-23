import { useState } from "react";
import { BookOpen, Palette, Cpu, BarChart3, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const layers = [
  {
    icon: BookOpen,
    key: "pedagogy",
    title: "Pedagogy",
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
    key: "experience",
    title: "Experience & Design",
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
    key: "ai",
    title: "AI Systems",
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
    key: "analytics",
    title: "Analytics",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const active = layers[activeIndex];

  return (
    <section id="model" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-4xl sm:text-5xl font-bold text-primary">
            Our Framework
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            The Learning Intelligence Model
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Four layers connected by a Cross-Intelligence Engine — click each to explore.
          </p>
        </div>

        {/* Step Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card border border-border rounded-xl p-1 gap-1">
            {layers.map((layer, i) => (
              <button
                key={layer.key}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                  i === activeIndex
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background"
                )}
              >
                <layer.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{layer.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Layer Content */}
        <div className="max-w-4xl mx-auto">
          <div
            key={active.key}
            className="grid md:grid-cols-2 gap-8 items-start animate-fade-in"
          >
            {/* Left: Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <active.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{active.title}</h3>
                  <p className="text-sm font-medium text-primary">{active.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {active.description}
              </p>

              {/* Step indicator */}
              <div className="flex items-center gap-2 pt-2">
                {layers.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === activeIndex ? "w-8 bg-primary" : "w-3 bg-border hover:bg-primary/30"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Right: Capabilities */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Key Capabilities
              </h4>
              <ul className="space-y-3">
                {active.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-3 text-sm text-foreground group cursor-default"
                  >
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span className="group-hover:text-primary transition-colors">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
