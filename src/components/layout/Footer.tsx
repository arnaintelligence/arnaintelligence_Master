import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { name: "Learning Intelligence", href: "/services/learning-intelligence" },
    { name: "LearnTech & AI Systems", href: "/services/learntech-ai" },
    { name: "Experience Design", href: "/services/experience-design" },
  ],
  company: [
    { name: "ALIS Intelligence Engine", href: "/intelligence-engine" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-primary">ALIS</span>
            </Link>
            <p className="mt-4 text-sm opacity-80 max-w-md">
              Building modern learning ecosystems for the AI era. ALIS combines LXD, LearnTech, UX, 
              communication design, and AI automation into one integrated intelligence system.
            </p>
            <p className="mt-6 text-sm font-medium text-primary">
              Where Learning Meets Intelligence.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <p className="text-sm opacity-60 text-center">
            © 2025 ALIS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
