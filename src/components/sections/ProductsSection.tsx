import { GraduationCap, Bot, Workflow } from "lucide-react";

const products = [
  {
    icon: GraduationCap,
    name: "Globiculum",
    description: "Curriculum alignment and learning intelligence platform",
    link: "/images/globiculum-preview.png",
  },
  {
    icon: Bot,
    name: "AI Learning Assistants",
    description: "Tailored to roles, programs, and systems",
  },
  {
    icon: Workflow,
    name: "Workflow Engines & Dashboards",
    description: "Orchestrate learning processes and insights",
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
          {products.map((product) => (
            <div
              key={product.name}
              className={`p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group ${product.link ? 'cursor-pointer' : ''}`}
              onClick={() => product.link && window.open(product.link, '_blank')}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
