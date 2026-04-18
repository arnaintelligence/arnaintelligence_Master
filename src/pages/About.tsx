import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
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
      "Arna Intelligence partners with The Bradbury Group to support its mission of architecting the human experience around artificial intelligence.\n\nOur collaboration focuses on strengthening operational excellence and optimizing AI-driven systems that enable scalable, human-centered innovation.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Arna Intelligence
          </h1>
          <p className="text-base sm:text-lg text-secondary-foreground/80">
            The principles, partnerships, and people behind our work.
          </p>
        </div>
      </section>

      {/* COACH Philosophy - Vertical Stack */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our COACH Philosophy
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              At Arna Intelligence, our work is guided by a philosophy we call the COACH
              approach. Like a great coach, we help organizations think clearly, build
              intelligent systems, and navigate the evolving world of artificial
              intelligence with confidence and responsibility.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {principles.map((p, idx) => (
              <Card
                key={`${p.letter}-${idx}`}
                className="group border-border hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <CardContent className="p-5 sm:p-6 flex items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl sm:text-3xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    {p.letter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <p.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Partnerships */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Enterprise Partnerships
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We collaborate with forward-thinking organizations shaping the future of
              learning, artificial intelligence, and operational excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-primary mb-6">
              Partner Spotlight
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {partners.map((partner) => (
                <Card key={partner.name} className="border-border shadow-md">
                  <CardContent className="p-6 sm:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                      <div className="flex justify-center md:col-span-1">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-full max-w-[220px] h-auto object-contain"
                        />
                      </div>
                      <div className="md:col-span-2 text-center md:text-left">
                        <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                          {partner.name}
                        </h4>
                        {partner.description.split("\n\n").map((para, i) => (
                          <p
                            key={i}
                            className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 last:mb-0"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
