import { Link } from "react-router-dom";
import arnaLogo from "@/assets/arna-logo.png";

const footerLinks = {
  services: [
    { name: "Learning Intelligence (LIaaS)", href: "/services/learning-intelligence" },
    { name: "LearnTech (LTaaS)", href: "/services/learntech-ai" },
    { name: "Design (DaaS)", href: "/services/experience-design" },
  ],
  company: [
    { name: "Framework", href: "/intelligence-engine" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
  products: [
    { name: "Globiculum", href: "/globiculum-preview" },
    { name: "AI Learning Assistants", href: "https://discover-design-map.lovable.app/" },
    { name: "Workflow Engines & Dashboards", href: null, comingSoon: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img
                src={arnaLogo}
                alt="Arna Intelligence"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm opacity-80 max-w-md">
              Grounded in learning science. Accelerated by AI systems. Humanized through
              experience design. Proven through analytics. Creating connected learning
              ecosystems that deliver measurable business outcomes.
            </p>
            <p className="mt-6 text-sm font-medium text-primary">
              Where Learning Meets Intelligence.
            </p>
            <div className="mt-6 text-sm opacity-70">
              <p className="font-semibold opacity-90 mb-1">Registered Address:</p>
              <p>Plot No: 802 &amp; 803,</p>
              <p>Ayyappa Society,</p>
              <p>Madhapur,</p>
              <p>Hyderabad – 500081</p>
            </div>
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

          {/* Products Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  {link.href ? (
                    link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    )
                  ) : (
                    <span className="text-sm opacity-40 cursor-not-allowed inline-flex items-center gap-2">
                      {link.name}
                      <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-700">
                        Coming Soon
                      </span>
                    </span>
                  )}
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
            &copy; 2026 Arnas Learning Intelligence Studio Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
