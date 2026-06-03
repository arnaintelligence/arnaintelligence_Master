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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 xl:gap-16">

  {/* Brand Column */}
  <div className="max-w-[260px]">
    <Link to="/" className="inline-block">
      <img
        src={arnaLogo}
        alt="Arna Intelligence"
        className="h-10 md:h-12 w-auto object-contain"
      />
    </Link>

    <p className="mt-4 text-base text-white leading-8">
      Grounded in learning science. Accelerated by AI systems.
      Humanized through experience design.
      Creating connected learning ecosystems that deliver measurable
      business outcomes.
    </p>

    <p className="mt-5 text-base font-medium text-primary">
      Where Learning Meets Intelligence.
    </p>
  </div>

  {/* Services */}
  <div>
    <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">
      Services
    </h3>

    <ul className="space-y-4">
      {footerLinks.services.map((link) => (
        <li key={link.name}>
          <Link
            to={link.href}
            className="text-base text-white hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Products */}
  <div>
    <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">
      Products
    </h3>

    <ul className="space-y-4">
      {footerLinks.products.map((link) => (
        <li key={link.name}>
          {link.href ? (
            link.href.startsWith("http") ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-white hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                to={link.href}
                className="text-base text-white hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            )
          ) : (
            <div>
              <span className="text-base text-white/70 block">
                {link.name}
              </span>
              <span className="text-sm text-amber-500">
                Coming Soon
              </span>
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>

  {/* Company */}
  <div>
    <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">
      Company
    </h3>

    <ul className="space-y-4">
      {footerLinks.company.map((link) => (
        <li key={link.name}>
          <Link
            to={link.href}
            className="text-base text-white hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Address */}
  <div>
    <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">
      Address
    </h3>

    <a
      href="mailto:info_arnaintelligence@alis-global.com"
      className="text-base text-white hover:text-primary transition-colors block mb-6"
    >
      info_arnaintelligence@alis-global.com
    </a>

    <div className="text-base text-white leading-8">
      <p className="font-semibold text-sm uppercase tracking-wider mb-3">
        Registered Address
      </p>

      <p>Plot No: 802 &amp; 803,</p>
      <p>Ayyappa Society,</p>
      <p>Madhapur,</p>
      <p>Hyderabad – 500081</p>
    </div>
  </div>

</div>
    </footer>
  );
}
