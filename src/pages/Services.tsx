import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Server, PenTool } from "lucide-react";

const practiceAreas = [
  {
    icon: Layers,
    title: "Learning Intelligence (LIaaS)",
    tagline: "AI-powered learning design and strategy",
    description: "We turn business goals into high-impact learning ecosystems, powered by AI and driven by cognitive insight.",
    href: "/services/learning-intelligence",
    features: [
      "AI-driven learning and gap analysis",
      "Instructional design, blueprinting, and storyboarding",
      "Adaptive content and assessment development",
      "Learning analytics with continuous optimization",
    ],
  },
  {
    icon: Server,
    title: "LearnTech (LTaaS)",
    tagline: "Smart technology for modern learning",
    description: "Smart technology infrastructure for modern learning ecosystems.",
    href: "/services/learntech-ai",
    features: [
      "AI learning assistants for employees, managers, and professionals",
      "LMS & LXP integration and automation",
      "Chatbot, simulations, and immersive practice environments",
      "Learning data pipelines, dashboards, and performance reporting",
    ],
  },
  {
    icon: PenTool,
    title: "Design (DaaS)",
    tagline: "Human-centered design for learning",
    description: "Experience-first creative support for learning and enablement teams, powered by human-centered design that transforms learning into engaging and accessible experiences.",
    href: "/services/experience-design",
    features: [
      "UX/UI design for engaging learning systems",
      "Elevated visual and interaction design for learning experiences",
      "Brand positioning, narratives, and content communication",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
              Service Lines
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-secondary-foreground/70 leading-relaxed">
              Built for flexibility. Engineered for impact. Engage them individually
              or combine them to drive greater outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {practiceAreas.map((area, index) => (
              <div
                key={area.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-8">
                    <area.icon className="w-10 h-10 text-primary" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                    {area.title}
                  </h2>

                  <p className="text-xl text-primary font-medium mb-6">
                    {area.tagline}
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {area.description}
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="group rounded-xl px-6"
                  >
                    <Link to={area.href}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`bg-card border border-border rounded-3xl p-10 lg:p-12 shadow-sm ${index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                >
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-6">
                    Key Capabilities
                  </h3>

                  <ul className="space-y-5">
                    {area.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-4 text-card-foreground"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                        <span className="text-base lg:text-lg leading-relaxed">
                          {feature}
                        </span>
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
