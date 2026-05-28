import { GraduationCap, Bot, Workflow, ArrowRight } from "lucide-react";
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
    comingSoon: false,
    href: "https://discover-design-map.lovable.app/",
    external: true,
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
          <span className="text-4xl sm:text-5xl font-bold text-primary">Our Flagship Products</span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            Powerful Tools | Infinite Possibilities
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Purpose-built platforms that put AI to work across your organisation—flexible enough to fit your structure
            and powerful enough to transform it.
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
                  <span className="inline-block mt-4 px-3 py-1 text-sm font-medium bg-amber-100 text-amber-700 rounded-full">
                    Coming Soon
                  </span>
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

            // Premium interactive cards - light default, teal hover with gradient
            if (product.name === "Globiculum" || product.name === "AI Learning Assistants") {
              const isExternal = (product as any).external;
              return (
                <a
                  key={product.name}
                  href={product.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block p-8 rounded-2xl bg-[#F8FAFC] border border-border text-center cursor-pointer transition-all duration-300 ease-out hover:bg-gradient-to-br hover:from-[#0D9488] hover:to-[#2DD4BF] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(13,148,136,0.25)] hover:border-[#5EEAD4]/60 overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#0D9488]/10 flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-[0_0_24px_rgba(94,234,212,0.45)]">
                      <product.icon className="w-8 h-8 text-[#0D9488] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-white transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-[#64748B] group-hover:text-white/90 transition-colors duration-300">
                      {product.description}
                    </p>
                    <span className="mt-2 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md bg-white text-[#0D9488] font-medium text-sm transition-all duration-300 group-hover:shadow-[0_8px_20px_-8px_rgba(94,234,212,0.7)]">
                      Quick Preview <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
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
