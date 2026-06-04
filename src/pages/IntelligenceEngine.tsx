import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { BookOpen, Palette, Cpu, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const layers = [
  {
    icon: BookOpen,
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
    title: "Analytics & Intelligence Layer",
    subtitle: "Measurement & ROI",
    description: "Data and analytics transform learning into measurable impact that drives continuous improvement.",
    capabilities: [
      "Skill gap & performance metrics",
      "Engagement & adoption dashboards",
      "Learning ROI and value-realization frameworks",
      "Data-driven decision support",
    ],
  },
];

const IntelligenceEngine = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="text-2xl font-medium uppercase tracking-[0.15em] mb-4 block"
              style={{
                background: "linear-gradient(90deg, #14B8A6 0%, #5B6CFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              OUR FRAMEWORK
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight mb-4 sm:mb-6">
              The Learning Intelligence Model
            </h1>
            <p className="text-base sm:text-lg text-secondary-foreground/80">
              We organize our work into four layers, connected by a Cross-Intelligence
              Engine that turns individual projects into a coherent learning ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {layers.map((layer) => (
              <div key={layer.title} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <layer.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-1">{layer.title}</h3>
                    <p className="gradient-text-brand text-sm font-medium mb-3">{layer.subtitle}</p>
                    <p className="text-muted-foreground mb-4">{layer.description}</p>
                    <ul className="space-y-2">
                      {layer.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                Discuss Your Learning Needs
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default IntelligenceEngine;
