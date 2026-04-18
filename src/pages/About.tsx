import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Compass, ShieldCheck, Users, Rocket, Target } from "lucide-react";
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
    description: "We design systems where artificial intelligence enhances human thinking rather than replacing it.",
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
    description: "We focus on impact that truly matters and create solutions that generate lasting value.",
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
      <section className="bg-secondary text-secondary-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">About Us</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Arna Intelligence</h1>
          <p className="text-base sm:text-lg text-secondary-foreground/80">
            The principles, partnerships and people behind our work.
          </p>
        </div>
      </section>

      {/* COACH Philosophy - Vertical Acronym Layout */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our COACH Philosophy</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Five values that aren't on a poster — they're in the product, the team, and the decisions we make every
              single day.
            </p>
          </div>

          {/* Philosophy Statement */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            {/* ✅ KEEP THIS EXACT (top line stays same position) */}
            <div className="mt-6 w-24 h-1 bg-primary/30 rounded-full mx-auto" />

            <p className="text-lg sm:text-xl text-foreground/90 italic leading-relaxed mt-4">
              "We believe intelligent systems should amplify human thinking, not replace it."
            </p>

            {/* ✅ ADD THIS (bottom line only) */}
            <div className="mt-4 w-24 h-1 bg-primary/30 rounded-full mx-auto" />
          </div>

          {/* Vertical COACH Acronym */}
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="group flex flex-col sm:flex-row items-stretch bg-[#F8FAFC] border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* LEFT STRIP */}
                <div className="w-full sm:w-20 md:w-24 py-5 sm:py-0 flex items-center justify-center bg-gradient-to-b from-primary to-primary/80 sm:rounded-l-2xl">
                  <span className="text-white text-3xl sm:text-4xl font-bold tracking-tight">
                    {p.letter}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex-1 px-6 py-6 sm:py-7 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* RIGHT ICON */}
                <div className="flex items-center justify-center px-6 pb-6 sm:pb-0 sm:pr-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Enterprise Partnerships</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We collaborate with forward-thinking organizations shaping the future of learning, artificial
              intelligence, and operational excellence.
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
                      <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{partner.name}</h4>
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
