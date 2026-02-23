import { Rocket, Clock, TrendingUp, BarChart3 } from "lucide-react";

const outcomes = [
  {
    icon: Clock,
    title: "Reduce Time-to-Learning",
    description: "Faster deployment and quicker learner onboarding",
  },
  {
    icon: TrendingUp,
    title: "Improve Learning Adoption",
    description: "Higher engagement and sustained learning performance",
  },
  {
    icon: BarChart3,
    title: "Demonstrate ROI",
    description: "Clear metrics connecting learning to business impact",
  },
  {
    icon: Rocket,
    title: "Build for the Future",
    description: "Scalable, future-ready learning ecosystems",
  },
];

export function ICPSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-4xl sm:text-5xl font-bold text-primary">
            Outcomes
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            Our Approach Helps Organizations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <outcome.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2 text-foreground">{outcome.title}</h3>
              <p className="text-sm text-muted-foreground">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
