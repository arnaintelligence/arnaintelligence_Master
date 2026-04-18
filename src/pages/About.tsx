import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Compass, ShieldCheck, BrainCircuit, Rocket, Target } from "lucide-react";
import tbgLogo from "@/assets/tbg-logo.png";

const principles = [
  {
    letter: "C",
    icon: Compass,
    title: "Curious Craftsmanship",
    description:
      "We combine deep curiosity with thoughtful execution, building solutions that are both intelligent and carefully crafted.",
  },
  {
    letter: "O",
    icon: ShieldCheck,
    title: "Ownership with Integrity",
    description:
      "We take responsibility for what we build and how we build it, acting with honesty, accountability, and respect.",
  },
  {
    letter: "A",
    icon: BrainCircuit,
    title: "AI with Human-Centered Intelligence",
    description:
      "We design systems where artificial intelligence enhances human thinking rather than replacing it.",
  },
  {
    letter: "C",
    icon: Rocket,
    title: "Courage to Innovate",
    description:
      "We challenge assumptions, experiment rapidly, and explore new possibilities to create meaningful transformation.",
  },
  {
    letter: "H",
    icon: Target,
    title: "High-Impact Thinking",
    description:
      "We focus on impact that truly matters and create solutions that generate lasting value.",
  },
];

const partners = [
  {
    name: "The Bradbury Group (TBG)",
    logo: tbgLogo,
    description:
      "Arna Intelligence partners with The Bradbury Group to support its mission of architecting the human experience around artificial intelligence. Our collaboration focuses on operational excellence and optimizing AI-driven systems that enable scalable, human-centered innovation.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Arna Intelligence
          </h1>
          <p className="text-base sm:text-lg text-secondary-foreground/80">
            The principles, partnerships, and people behind our work.
          </p>
        </div>
      </section>

      {/* COACH Philosophy - Vertical Acronym Layout */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our COACH Philosophy
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Five values that aren't on a poster — they're in the product, the team, and the decisions we make every single day.
            </p>
          </div>

          {/* Philosophy Statement */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-lg sm:text-xl text-foreground/90 italic leading-relaxed">
              "We believe intelligent systems should amplify human thinking, not replace it."
            </p>
            <div className="mt-6 w-24 h-1 bg-primary/30 rounded-full mx-auto" />
          </div>

          {/* Vertical COACH Acronym */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col">
              {principles.map((p, idx) => (
                <div key={`${p.letter}-${idx}`}>
                  <div className="flex items-start gap-4 sm:gap-6 py-6 group">
                    {/* Large Letter */}
                    <div className="flex-shrink-0 w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <span className="text-3xl sm:text-4xl font-bold text-primary">
                        {p.letter}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                          {p.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider between items (not after last) */}
                  {idx < principles.length - 1 && (
                    <Separator className="bg-border/60" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Transition Divider */}
      <div className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </div>
      </div>

      {/* Enterprise Partnerships */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Enterprise Partnerships
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We collaborate with forward-thinking organizations shaping the future of
              learning, artificial intelligence, and operational excellence.
            </p>
          </div>

          {/* Partner Spotlight */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-primary mb-8">
              Partner Spotlight
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {partners.map((partner) => (
                <Card key={partner.name} className="border-border shadow-md overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                    {/* Left: Logo */}
                    <div className="md:col-span-2 flex items-center justify-center p-8 bg-muted/20 border-b md:border-b-0 md:border-r border-border/50">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-full max-w-[200px] h-auto object-contain"
                      />
                    </div>

                    {/* Right: Content */}
                    <div className="md:col-span-3 p-8 flex flex-col justify-center">
                      <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                        {partner.name}
                      </h4>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
