import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import arnaLogo from "@/assets/arna-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  { name: "Learning Intelligence (LIaaS)", href: "/services/learning-intelligence" },
  { name: "LearnTech (LTaaS)", href: "/services/learntech-ai" },
  { name: "Design (DaaS)", href: "/services/experience-design" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", children: services },
  { name: "Framework", href: "/intelligence-engine" },
  { name: "Products", href: "/products" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary border-b border-secondary-foreground/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-22 lg:h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={arnaLogo} 
              alt="Arna Intelligence - Learning Intelligence Studio" 
              className="h-10 md:h-12 w-auto object-contain"
            />
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
                          "bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground",
                          isActive(link.href) && "text-primary"
                        )}
                      >
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[280px] gap-1 p-2 bg-background">
                          {link.children.map((child) => (
                            <li key={child.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={child.href}
                                  className={cn(
                                    "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/10 hover:text-foreground focus:bg-muted/10 focus:text-foreground",
                                    isActive(child.href) && "bg-primary/10 text-primary"
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
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary-foreground/10 hover:text-secondary-foreground focus:bg-secondary-foreground/10 focus:text-secondary-foreground focus:outline-none",
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
            className="lg:hidden rounded-md p-2 text-secondary-foreground hover:bg-secondary-foreground/10"
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
                    "block py-2 px-3 rounded-md text-base font-medium text-secondary-foreground transition-colors hover:bg-secondary-foreground/10",
                    isActive(link.href) && "text-primary bg-secondary-foreground/10"
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
                          "block py-2 px-3 rounded-md text-sm text-secondary-foreground/80 transition-colors hover:bg-secondary-foreground/10",
                          isActive(child.href) && "text-primary bg-secondary-foreground/10"
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
