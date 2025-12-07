import { Building2, Users, Package, GraduationCap, Rocket } from "lucide-react";

const clients = [
  { icon: Building2, label: "SaaS Companies" },
  { icon: Users, label: "L&D Teams Adopting AI" },
  { icon: Package, label: "Product Orgs Needing Enablement" },
  { icon: GraduationCap, label: "HR/Enablement/Training Teams" },
  { icon: Rocket, label: "Startups Building AI-Powered Learning" },
];

export function ICPSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Who We Serve
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
            Built for Forward-Thinking Organizations
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {clients.map((client, index) => (
            <div
              key={client.label}
              className="flex items-center gap-3 px-6 py-4 rounded-full bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30 hover:bg-secondary-foreground/10 transition-all"
            >
              <client.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{client.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
