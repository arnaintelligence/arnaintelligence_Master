import { useState } from "react";
import { Layers, Server, PenTool, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const models = [
  {
    icon: Layers,
    acronym: "LIaaS",
    name: "Learning Intelligence as a Service",
    description: "We turn business goals into high-impact learning ecosystems, powered by AI and driven by cognitive insight.",
    href: "/services/learning-intelligence",
    features: [
      "AI-driven learning and gap analysis",
      "Instructional design, blueprinting, and storyboarding",
      "Adaptive content and assessment development",
      "Learning analytics with continuous optimization",
    ],
  },
  {
    icon: Server,
    acronym: "LTaaS",
    name: "LearnTech as a Service",
    description: "Smart technology infrastructure for modern learning ecosystems.",
    href: "/services/learntech-ai",
    features: [
      "AI learning assistants for employees, managers, and professionals",
      "LMS & LXP integration and automation",
      "Chatbot, simulations, and immersive practice environments",
      "Learning data pipelines, dashboards, and performance reporting",
    ],
  },
  {
    icon: PenTool,
    acronym: "DaaS",
    name: "Design as a Service",
    description: "Experience-first creative support for learning and enablement teams, powered by human-centered design.",
    href: "/services/experience-design",
    features: [
      "UX/UI design for engaging learning systems",
      "Elevated visual and interaction design for learning experiences",
      "Brand positioning, narratives, and content communication",
    ],
  },
];

export function OperationalModelSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 lg:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-4xl sm:text-5xl font-bold gradient-text-brand">
            How We Work
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            Our Service Lines
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Built for flexibility. Engineered for impact.
          </p>
        </div>

        {/* 3-Column Cards with expand */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {models.map((model, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={model.acronym}
                className="relative rounded-2xl bg-background border border-border hover:border-primary/30 transition-all group overflow-hidden"
              >
                {/* Compact view */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <model.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold gradient-text-brand mb-1">
                    {model.acronym}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {model.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {model.description}
                  </p>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium gradient-text-brand hover:gradient-text-brand/80 transition-colors"
                  >
                    {isExpanded ? "Hide" : "View"} capabilities
                    <ChevronDown className={cn(
                      "w-3.5 h-3.5 transition-transform duration-300",
                      isExpanded && "rotate-180"
                    )} />
                  </button>
                </div>

                {/* Expandable features */}
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isExpanded ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="px-6 pb-6 pt-2 border-t border-border">
                    <ul className="space-y-2 mb-4">
                      {model.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="sm" variant="outline" className="w-full group/btn">
                      <Link to={model.href}>
                        Learn More
                        <ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
