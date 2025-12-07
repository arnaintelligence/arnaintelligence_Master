import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { 
  Zap, 
  Workflow, 
  PieChart, 
  Bot, 
  Wand2, 
  BarChart3,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const modules = [
  {
    icon: Zap,
    name: "ALIS Core™",
    tagline: "The foundation of learning intelligence",
    description: "Central orchestration layer that connects all ALIS modules and integrates with your existing systems.",
    features: [
      "Unified data model",
      "API-first architecture",
      "Enterprise integrations",
      "Real-time sync",
    ],
  },
  {
    icon: Workflow,
    name: "ALIS LearnFlow™",
    tagline: "Automated learning workflows",
    description: "Design and automate complex learning journeys with visual workflow builders and intelligent triggers.",
    features: [
      "Visual journey builder",
      "Smart notifications",
      "Conditional paths",
      "Progress automation",
    ],
  },
  {
    icon: PieChart,
    name: "ALIS Insight Dashboards™",
    tagline: "Learning analytics that matter",
    description: "Beautiful, actionable dashboards that surface the insights you need to optimize learning outcomes.",
    features: [
      "Real-time analytics",
      "Custom KPIs",
      "Trend analysis",
      "Executive reports",
    ],
  },
  {
    icon: Bot,
    name: "ALIS Assist™",
    tagline: "AI-powered learning companion",
    description: "Intelligent tutoring and support that's available 24/7, personalized for each learner.",
    features: [
      "Natural conversations",
      "Context-aware help",
      "Multi-language support",
      "Escalation handling",
    ],
  },
  {
    icon: Wand2,
    name: "ALIS Create™",
    tagline: "AI-accelerated content creation",
    description: "Generate, adapt, and localize learning content at scale while maintaining quality and brand consistency.",
    features: [
      "Content generation",
      "Auto-adaptation",
      "Multi-format export",
      "Brand compliance",
    ],
  },
  {
    icon: BarChart3,
    name: "ALIS Metrics™",
    tagline: "Measure what matters",
    description: "Comprehensive measurement framework that connects learning activities to business outcomes.",
    features: [
      "ROI tracking",
      "Skills mapping",
      "Impact analysis",
      "Predictive insights",
    ],
  },
];

const IntelligenceEngine = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Proprietary Technology
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6">
              ALIS Intelligence Engine™
            </h1>
            <p className="text-xl text-secondary-foreground/70">
              A modular, AI-native platform that powers everything we build. 
              Six integrated modules working together to deliver intelligent learning at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div
                key={module.name}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <module.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-1">
                      {module.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {module.tagline}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {module.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {module.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {feature}
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
                Request a Demo
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
