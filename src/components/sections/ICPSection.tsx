import { Rocket, Clock, TrendingUp, BarChart3 } from "lucide-react";

const outcomes = [
  {
    icon: Clock,
    title: "Reduce Time-to-Learning",
    description: "Faster deployment and quicker learner onboarding",
  },
  {
    icon: TrendingUp,
    title: "Improve Adoption",
    description: "Higher engagement and sustained performance",
  },
  {
    icon: BarChart3,
    title: "Demonstrate ROI",
    description: "Metrics connecting learning to business impact",
  },
  {
    icon: Rocket,
    title: "Build for the Future",
    description: "Scalable, future-ready learning ecosystems",
  },
];

export function ICPSection() {
  return (
    <section id="outcomes" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-4xl sm:text-5xl font-bold text-primary">
              Outcomes
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
              Our Approach Helps Organizations
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <outcome.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold mb-1 text-foreground">{outcome.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
