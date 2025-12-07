import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Transform Your Learning Ecosystem?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          From Learning Needs to Learning Intelligence — let ALIS help you build 
          adaptive, beautiful, and future-ready learning experiences.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="group"
        >
          <Link to="/contact">
            Start the Conversation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
