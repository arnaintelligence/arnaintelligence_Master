import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { Server, Bot, Settings, MessageSquare, Database, BarChart2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bot,
    title: "AI Learning Assistants",
    description: "AI learning assistants for employees, managers, and professionals.",
  },
  {
    icon: Settings,
    title: "LMS & LXP Integration and Automation",
    description: "Full LMS/LXP implementation, configuration, and workflow automation.",
  },
  {
    icon: MessageSquare,
    title: "Chatbot, Simulations & Immersive Environments",
    description: "Build conversational learning experiences and realistic practice scenarios.",
  },
  {
    icon: Database,
    title: "Learning Data Pipelines & Dashboards",
    description: "Robust data infrastructure for learning data capture, processing, and performance reporting.",
  },
];

const LearnTechAI = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center text-sm text-primary hover:underline mb-6">
              ← Back to Services
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Server className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-foreground mb-4">
              LearnTech as a Service (LTaaS)
            </h1>
            <p className="text-xl text-secondary-foreground/70">
              Smart technology infrastructure for modern learning ecosystems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                Build Your LearnTech Stack
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

export default LearnTechAI;
