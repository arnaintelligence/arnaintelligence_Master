import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Cpu, Palette } from "lucide-react";

const practiceAreas = [
  {
    icon: Brain,
    title: "Learning Intelligence",
    tagline: "AI-powered learning design and strategy",
    description:
      "Transform your learning initiatives with AI-assisted needs analysis, personalized learning paths, and adaptive content engines.",
    href: "/services/learning-intelligence",
    features: [
      "AI-assisted Learning Needs Analysis",
      "LXD, instructional design, storyboarding",
      "Multi-format content: eLearning, VILT, microlearning",
      "Learning analytics & skill gap predictions",
      "Personalized learning paths",
      "Adaptive content engines",
    ],
  },
  {
    icon: Cpu,
    title: "LearnTech & AI Systems",
    tagline: "Intelligent technology for modern learning",
    description:
      "Build and deploy AI-powered learning infrastructure that scales with your organization and adapts to your learners.",
    href: "/services/learntech-ai",
    features: [
      "AI learning assistants (ALIS Assist™)",
      "AI content generators",
      "LMS setup and automation",
      "Chatbot trainers & simulations",
      "Learning data pipelines",
      "Analytics-driven recommendations",
      "Conversation design & scenario builders",
    ],
  },
  {
    icon: Palette,
    title: "Experience Design & Communication Studio",
    tagline: "Beautiful design that enhances learning",
    description:
      "Create learning experiences that are not just effective but delightful. From UX to visual design, we make learning beautiful.",
    href: "/services/experience-design",
    features: [
      "UX/UI for learning systems",
      "UX writing & microcopy",
      "Visual + motion design",
      "Communication journeys",
      "L&D branding systems",
      "AI-automated content variations",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-secondary-foreground">
              Practice Tracks
            </h1>
            <p className="mt-6 text-xl text-secondary-foreground/70">
              Three integrated practice areas that work together to deliver 
              comprehensive learning solutions for the AI era.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {practiceAreas.map((area, index) => (
              <div
                key={area.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <area.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {area.title}
                  </h2>
                  <p className="text-lg text-primary font-medium mb-4">
                    {area.tagline}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {area.description}
                  </p>
                  <Button asChild className="group">
                    <Link to={area.href}>
                      Explore {area.title}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div
                  className={`bg-card border border-border rounded-2xl p-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Service Catalog
                  </h3>
                  <ul className="space-y-3">
                    {area.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-card-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
