import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-secondary">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Company Name */}
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-4 animate-fade-in">
            Arnas Learning Intelligence Studio
          </p>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
            We Build Learning{" "}
            <span className="text-primary">Intelligently</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl animate-fade-in animation-delay-200">
            Grounded in learning science. Accelerated by AI. Humanized through 
            design. Proven through analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
            <Button asChild size="lg" className="group">
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">
              <Link to="/intelligence-engine">
                Our Framework
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
