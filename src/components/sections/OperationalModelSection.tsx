import { Layers, Server, PenTool } from "lucide-react";

const models = [
  {
    icon: Layers,
    acronym: "LIaaS",
    name: "Learning Intelligence as a Service",
    description:
      "On-demand access to AI-powered learning design expertise. From needs analysis to personalized learning path creation, get the intelligence you need without building an in-house team.",
  },
  {
    icon: Server,
    acronym: "LTaaS",
    name: "LearnTech as a Service",
    description:
      "Full-stack learning technology solutions including LMS setup, AI assistant deployment, content generation pipelines, and analytics infrastructure — all managed for you.",
  },
  {
    icon: PenTool,
    acronym: "DaaS",
    name: "Design as a Service",
    description:
      "Continuous UX/UI design support for your learning platforms. Visual design, motion graphics, communication journeys, and L&D branding — scaled to your needs.",
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
            Flexible Operational Models
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Choose the engagement model that fits your organization's needs and scale.
          </p>
        </div>

        {/* Model Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={model.acronym}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group overflow-hidden"
            >
              {/* Background Decoration */}
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
                <p className="text-muted-foreground">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
