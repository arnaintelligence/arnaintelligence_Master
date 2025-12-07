import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="AI neural network visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Era L&D Starts Here</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
            <span className="text-primary">ALIS</span> — Arna's Learning
            <br />
            Intelligence Studio
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-secondary-foreground/80 font-serif italic mb-4 animate-fade-in animation-delay-200">
            Where Learning Meets Intelligence.
          </p>

          {/* Description */}
          <p className="text-lg text-secondary-foreground/70 mb-8 max-w-2xl animate-fade-in animation-delay-300">
            We build next-generation learning ecosystems for people who want to thrive 
            in the AI era. From LNA to design, delivery, AI systems, and insights — 
            ALIS creates learning ecosystems that are adaptive, beautiful, and future-ready.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
            <Button asChild size="lg" className="group">
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link to="/intelligence-engine">
                Discover ALIS Engine
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
