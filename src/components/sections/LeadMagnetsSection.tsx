import { Scan, BarChart2, CheckSquare, Wand2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const leadMagnets = [
  {
    icon: Scan,
    title: "AI-powered LNA Scan",
    description: "Get a comprehensive learning needs analysis powered by AI in minutes",
  },
  {
    icon: BarChart2,
    title: "Learning Intelligence Scorecard",
    description: "Assess your organization's learning maturity and AI readiness",
  },
  {
    icon: CheckSquare,
    title: "UX Checklist for LMS Adoption",
    description: "Ensure your LMS delivers an exceptional user experience",
  },
  {
    icon: Wand2,
    title: "AI Storyboard Generator Demo",
    description: "See how AI can transform your content creation process",
  },
];

export function LeadMagnetsSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Free Resources
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
            Start Your AI Learning Journey
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Explore our free tools and resources to see how ALIS can transform your learning ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {leadMagnets.map((magnet, index) => (
            <div
              key={magnet.title}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <magnet.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {magnet.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {magnet.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">
              Get Access to All Resources
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
