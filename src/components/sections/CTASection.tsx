import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-10 lg:py-14 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[40px] border border-[#D7E6E3] bg-white"
          style={{
            boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
          }}
        >
          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Teal Glow */}
          <div
            className="absolute top-0 left-1/3 w-[420px] h-[250px]"
            style={{
              background:
                "radial-gradient(circle, rgba(94,234,212,0.22) 0%, transparent 70%)",
            }}
          />

          {/* Gold Glow */}
          <div
            className="absolute bottom-0 right-1/4 w-[250px] h-[250px]"
            style={{
              background:
                "radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 px-6 py-12 lg:px-12 lg:py-14 text-center">
            {/* Top Label */}
            <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0D9488]">
              <span className="w-6 h-px bg-[#0D9488]" />
              LET'S BUILD
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl mx-auto text-3xl md:text-3xl lg:text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-[#0F172A]">
              Ready to Build
              <br />
              Learning{" "}
              <span className="gradient-text-brand">
                Intelligently?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-8">
              Let Arna Intelligence help you build adaptive, future-ready learning experiences.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button
                asChild
                className="h-14 px-8 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0F172A] font-semibold text-base shadow-lg"
              >
                <Link to="/contact">
                  Start the Conversation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>


            </div>


          </div>
        </div>
      </div>
    </section>
  );
}