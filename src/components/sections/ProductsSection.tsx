import { GraduationCap, Bot, Workflow } from "lucide-react";
import { toast } from "sonner";

const products = [
  {
    icon: GraduationCap,
    name: "Globiculum",
    description: "Curriculum alignment and learning intelligence platform",
    link: "https://academi-align.lovable.app",
  },
  {
    icon: Bot,
    name: "AI Learning Assistants",
    description: "Tailored to roles, programs, and systems",
    comingSoon: true,
  },
  {
    icon: Workflow,
    name: "Workflow Engines & Dashboards",
    description: "Orchestrate learning processes and insights",
    comingSoon: true,
  },
];

export function ProductsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-4xl sm:text-5xl font-bold text-primary">
            Products & Platforms
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            Proprietary Tools Built for Scale
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Our proprietary tools and platforms evolve from continuous learning intelligence 
            and are built for flexible customization and scalable deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {products.map((product) => {
            const isComingSoon = 'comingSoon' in product && product.comingSoon;

            return isComingSoon ? (
              <div
                key={product.name}
                className="p-8 rounded-2xl bg-background border border-border opacity-70 cursor-not-allowed text-center group"
                onClick={() => toast("Coming Soon", { description: `${product.name} will be available soon.` })}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
                <span className="inline-block mt-3 text-xs font-medium text-primary/60 uppercase tracking-wider">Coming Soon</span>
              </div>
            ) : (
              <a
                key={product.name}
                href={'link' in product ? product.link : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group cursor-pointer block"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
