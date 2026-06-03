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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img src={arnaLogo} alt="Arna Intelligence" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
            <p className="mt-3 text-sm opacity-80 max-w-xs leading-relaxed">
              Grounded in learning science. Accelerated by AI systems. Humanized through experience design.
            </p>
            <p className="mt-3 text-sm font-medium text-primary">Where Learning Meets Intelligence.</p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Services</h3>
            <ul className="space-y-2.5">
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
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Products</h3>
            <ul className="space-y-2.5">
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
                        className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    )
                  ) : (
                    <span className="text-sm opacity-40 cursor-not-allowed block">
                      {link.name}
                      <span className="block text-xs text-amber-600 mt-0.5">Coming Soon</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Company</h3>
            <ul className="space-y-2.5">
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

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Address</h3>
            <div className="text-sm opacity-80 leading-relaxed">
              <p>Plot No: 802 &amp; 803,</p>
              <p>Ayyappa Society,</p>
              <p>Madhapur,</p>
              <p>Hyderabad – 500081</p>
            </div>
            <a
              href="mailto:info_arnaintelligence@alis-global.com"
              className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors block mb-3"
            >
              info_arnaintelligence@alis-global.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-secondary-foreground/10">
          <p className="text-xs opacity-50 text-center">
            &copy; 2026 Arnas Learning Intelligence Studio Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
