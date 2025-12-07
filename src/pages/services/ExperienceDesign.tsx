import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { 
  Palette, 
  Layout as LayoutIcon, 
  PenTool, 
  Video, 
  MapPin, 
  Fingerprint,
  Sparkles,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: LayoutIcon,
    title: "UX/UI for Learning Systems",
    description: "User-centered design for LMS, learning apps, and digital learning environments.",
  },
  {
    icon: PenTool,
    title: "UX Writing & Microcopy",
    description: "Clear, engaging copy that guides learners and enhances the learning experience.",
  },
  {
    icon: Video,
    title: "Visual + Motion Design",
    description: "Compelling visual assets and animations that bring learning content to life.",
  },
  {
    icon: MapPin,
    title: "Communication Journeys",
    description: "Strategic communication touchpoints that engage learners throughout their journey.",
  },
  {
    icon: Fingerprint,
    title: "L&D Branding Systems",
    description: "Cohesive brand identities for learning programs that resonate with your audience.",
  },
  {
    icon: Sparkles,
    title: "AI-automated Content Variations",
    description: "Generate personalized content variations at scale with AI assistance.",
  },
];

const ExperienceDesign = () => {
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
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-foreground mb-4">
              Experience Design & Communication Studio
            </h1>
            <p className="text-xl text-secondary-foreground/70">
              Beautiful design that enhances learning outcomes. From UX to visual identity, 
              we make learning experiences delightful.
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
                Start Your Design Project
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

export default ExperienceDesign;
