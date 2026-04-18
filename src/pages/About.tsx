import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, ShieldCheck, BrainCircuit, Rocket, Target, CheckCircle2 } from "lucide-react";
import tbgLogo from "@/assets/tbg-logo.png";

const principles = [
  {
    letter: "C",
    icon: Compass,
    title: "Curious Craftsmanship",
    description:
      "We combine deep curiosity with thoughtful execution. We question, explore, and build with precision—creating work that is both intelligent and beautifully crafted.",
  },
  {
    letter: "O",
    icon: ShieldCheck,
    title: "Ownership with Integrity",
    description:
      "We take responsibility for what we build and how we build it. We act with honesty, accountability, and respect.",
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

const focusAreas = [
  "AI systems optimization and workflow automation",
  "Operational infrastructure and process excellence",
  "Strategic operations support",
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

      {/* COACH Principles */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The COACH Principles
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              At Arna Intelligence, our work is guided by a philosophy called the COACH
              Principles. Like a great coach, we help organizations think clearly, build
              intelligent systems, and navigate the evolving world of artificial intelligence
              with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {principles.map((p) => (
              <Card
                key={p.title}
                className="group border-border hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary/20 transition-colors">
                      {p.letter}
                    </div>
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
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

          <div className="max-w-3xl mx-auto mb-12">
            <ul className="space-y-3">
              {focusAreas.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Spotlight */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-primary mb-6">
              Partner Spotlight
            </h3>
            <Card className="border-border shadow-md">
              <CardContent className="p-6 sm:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="flex justify-center md:col-span-1">
                    <img
                      src={tbgLogo}
                      alt="The Bradbury Group - Partners in Learning & Growth"
                      className="w-full max-w-[220px] h-auto object-contain"
                    />
                  </div>
                  <div className="md:col-span-2 text-center md:text-left">
                    <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                      The Bradbury Group (TBG)
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Supporting TBG's mission to architect the human experience around
                      artificial intelligence through operational excellence and AI-powered
                      system optimization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
