import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { 
  Brain, 
  Target, 
  BookOpen, 
  Layers, 
  BarChart3, 
  Compass, 
  Sparkles,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Target,
    title: "AI-assisted Learning Needs Analysis",
    description: "Leverage AI to identify skill gaps, learning preferences, and organizational needs faster and more accurately than traditional methods.",
  },
  {
    icon: BookOpen,
    title: "LXD, Instructional Design & Storyboarding",
    description: "Expert learning experience design that combines pedagogical best practices with modern engagement techniques.",
  },
  {
    icon: Layers,
    title: "Multi-format Content Creation",
    description: "eLearning, VILT, microlearning, and more — content designed for how your learners actually learn.",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description: "Track, measure, and understand learning impact with comprehensive analytics dashboards.",
  },
  {
    icon: Compass,
    title: "Personalized Learning Paths",
    description: "AI-driven pathways that adapt to individual learner needs, pace, and goals.",
  },
  {
    icon: Sparkles,
    title: "Adaptive Content Engines",
    description: "Content that evolves based on learner performance and organizational objectives.",
  },
];

const LearningIntelligence = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link 
              to="/services" 
              className="inline-flex items-center text-sm text-primary hover:underline mb-6"
            >
              ← Back to Services
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-foreground mb-4">
              Learning Intelligence
            </h1>
            <p className="text-xl text-secondary-foreground/70">
              AI-powered learning design and strategy that transforms how organizations 
              approach skill development and knowledge transfer.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
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

export default LearningIntelligence;
