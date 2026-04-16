import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-secondary">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Company Name */}
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-relaxed tracking-wide mb-4 sm:mb-6 animate-fade-in">
            Arnas Learning Intelligence
            <span className="block mt-4">Studio</span>
          </p>

          {/* Main Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-foreground leading-tight tracking-wide mb-6 sm:mb-8 animate-fade-in animation-delay-100">
            We Build Learning{" "}
            <span className="text-primary">Intelligently</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-secondary-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-200 px-2 sm:px-0">
            Grounded in learning science. Accelerated by AI. Humanized through 
            design. Proven through analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
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
