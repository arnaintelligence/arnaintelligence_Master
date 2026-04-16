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
                  <span className="inline-block mt-4 px-3 py-1 text-sm font-medium bg-amber-100 text-amber-700 rounded-full">Coming Soon</span>
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

            // Globiculum card - premium gradient hover interaction
            if (product.name === "Globiculum") {
              return (
              <a
                key={product.name}
                href="/globiculum-preview"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-8 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] text-center cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:border-transparent overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(13,148,136,0.1)] group-hover:bg-white/20 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <product.icon className="w-8 h-8 text-[#0D9488] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-white mb-2 transition-colors duration-300">{product.name}</h3>
                  <p className="text-[#64748B] group-hover:text-white/90 transition-colors duration-300">{product.description}</p>
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

