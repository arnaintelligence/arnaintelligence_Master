import { GraduationCap, Bot, Workflow } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const products = [
  {
    icon: GraduationCap,
    name: "Globiculum",
    description: "Curriculum alignment and learning intelligence platform",
    comingSoon: false,
    href: "/globiculum-preview",
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
  const navigate = useNavigate();

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
            const CardContent = (
              <>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
                {product.comingSoon && (
                  <span className="inline-block mt-4 px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">Coming Soon</span>
                )}
              </>
            );

            if (product.comingSoon) {
              return (
                <div
                  key={product.name}
                  className="p-8 rounded-2xl bg-background border border-border opacity-70 cursor-not-allowed text-center group"
                  onClick={() => toast("Coming Soon", { description: `${product.name} will be available soon.` })}
                >
                  {CardContent}
                </div>
              );
            }

            // Globiculum card with styled button
            if (product.name === "Globiculum") {
              return (
                <div
                  key={product.name}
                  className="p-8 rounded-2xl bg-background border border-border text-center group hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  <button
                    onClick={() => navigate(product.href!)}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition-colors"
                  >
                    View Preview
                  </button>
                  <p className="mt-3 text-xs text-muted-foreground">Early look at the platform</p>
                </div>
              );
            }

            return (
              <button
                key={product.name}
                className="p-8 rounded-2xl bg-background border border-border text-center group hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => navigate(product.href!)}
              >
                {CardContent}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

