import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to Build Learning Intelligently?</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-6">
          Let Arna Intelligence help you build adaptive, future-ready learning experiences.
        </p>
        <Button asChild size="lg" className="group">
          <Link to="/contact">
            Start the Conversation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
