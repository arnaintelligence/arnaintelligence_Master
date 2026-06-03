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
    { name: "Globiculum", href: "/globiculum-preview", newTab: true },
    { name: "AI Learning Assistants", href: "https://discover-design-map.lovable.app/" },
    { name: "Workflow Engines & Dashboards", href: null, comingSoon: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[320px_220px_220px_220px_280px] justify-between gap-y-10">
          {/* Brand Column */}
          <div className="max-w-[280px]">
            <Link to="/" className="inline-block">
              <img src={arnaLogo} alt="Arna Intelligence" className="h-10 md:h-12 w-auto object-contain" />
            </Link>

            <p className="mt-4 text-sm text-white/90 leading-6 max-w-[260px]">
              Grounded in learning science. Accelerated by AI systems. Humanized through experience design. Creating
              connected learning ecosystems that deliver measurable business outcomes.
            </p>

            <p className="mt-5 text-base font-medium text-primary">Where Learning Meets Intelligence.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">Services</h3>

            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-base text-white hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">Products</h3>

            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  {link.href ? (
                    link.href.startsWith("http") || link.newTab ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-white hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.href} className="text-base text-white hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    )
                  ) : (
                    <div>
                      <span className="text-base text-white/70 block">{link.name}</span>
                      <span className="text-sm text-amber-500">Coming Soon</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">Company</h3>

            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-base text-white hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">Address</h3>

            <div className="text-base text-white leading-6">
              <p>Plot No: 802 &amp; 803,</p>
              <p>Ayyappa Society,</p>
              <p>Madhapur,</p>
              <p>Hyderabad – 500081</p>
            </div>
            <a
              href="mailto:info_arnaintelligence@alis-global.com"
              className="text-base text-white hover:text-primary transition-colors block mb-4 break-words"
            >
              info_arnaintelligence@alis-global.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-secondary-foreground/10">
          <p className="text-sm text-white/70 text-center">
            &copy; 2026 Arnas Learning Intelligence Studio Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
