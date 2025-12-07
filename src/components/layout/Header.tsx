import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  { name: "Learning Intelligence", href: "/services/learning-intelligence" },
  { name: "LearnTech & AI Systems", href: "/services/learntech-ai" },
  { name: "Experience Design", href: "/services/experience-design" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", children: services },
  { name: "ALIS Intelligence Engine", href: "/intelligence-engine" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">ALIS</span>
            <span className="hidden sm:inline text-sm text-muted-foreground">
              Learning Intelligence Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) =>
                  link.children ? (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent hover:bg-accent/50",
                          isActive(link.href) && "text-primary"
                        )}
                      >
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[280px] gap-1 p-2">
                          {link.children.map((child) => (
                            <li key={child.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={child.href}
                                  className={cn(
                                    "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActive(child.href) && "bg-accent text-primary"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {child.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.name}>
                      <Link
                        to={link.href}
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                          isActive(link.href) && "text-primary"
                        )}
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden rounded-md p-2 text-foreground hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.href}
                  className={cn(
                    "block py-2 px-3 rounded-md text-base font-medium transition-colors hover:bg-accent",
                    isActive(link.href) && "text-primary bg-accent"
                  )}
                  onClick={() => !link.children && setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={cn(
                          "block py-2 px-3 rounded-md text-sm transition-colors hover:bg-accent",
                          isActive(child.href) && "text-primary bg-accent"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
