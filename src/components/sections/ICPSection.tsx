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
            <span className="text-4xl sm:text-5xl font-bold gradient-text-brand">
              Outcomes
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
              Our Approach Helps Organizations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <outcome.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3">
                  {outcome.title}
                </h3>

                <p className="text-base text-muted-foreground leading-6">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
