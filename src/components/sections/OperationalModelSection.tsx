import { Layers, Server, PenTool } from "lucide-react";

const models = [
  {
    icon: Layers,
    acronym: "LIaaS",
    name: "Learning Intelligence as a Service",
    description: "We turn business goals into high-impact learning ecosystems, powered by AI and driven by cognitive insight.",
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
    features: [
      "UX/UI design for engaging learning systems",
      "Elevated visual and interaction design for learning experiences",
      "Brand positioning, narratives, and content communication",
    ],
  },
];

export function OperationalModelSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            How We Work
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
            Our Service Lines
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Built for flexibility. Engineered for impact. Engage them individually 
            or combine them to drive greater outcomes.
          </p>
        </div>

        {/* Model Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <div
              key={model.acronym}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <model.icon className="w-7 h-7 text-primary" />
                </div>
                
                <div className="text-3xl font-bold text-primary mb-2">
                  {model.acronym}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4">
                  {model.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {model.description}
                </p>
                <ul className="space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
