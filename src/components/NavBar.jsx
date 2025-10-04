import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  User,
  Code,
  Briefcase,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Sobre", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projetos", href: "#projects", icon: Briefcase },
  { name: "Contato", href: "#contact", icon: Mail },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { isDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-background border-b border-border shadow-lg"
          : "py-4 bg-background border-b border-border/50"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-xl font-bold flex items-center cursor-pointer hover:opacity-80 transition-all duration-300 relative z-50"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
        >
          <span className="relative">
            <span className="text-glow bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Fabricio
            </span>
            <span className="text-foreground/80 ml-1 font-normal">
              Portfolio
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, key) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative",
                  isActive
                    ? "text-primary bg-primary/10 shadow-sm"
                    : "text-foreground/70 hover:text-primary hover:bg-accent/50"
                )}
              >
                {item.name}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </a>
            );
          })}

          {/* Theme Toggle Desktop */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-accent/50 transition-all duration-300 ml-2"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-all duration-300 menu-button relative z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="relative w-6 h-6">
            <span
              className={cn(
                "absolute block w-6 h-0.5 bg-current transform transition-all duration-300",
                isMenuOpen ? "rotate-45 top-3" : "top-1"
              )}
            ></span>
            <span
              className={cn(
                "absolute block w-6 h-0.5 bg-current transform transition-all duration-300 top-3",
                isMenuOpen ? "opacity-0" : "opacity-100"
              )}
            ></span>
            <span
              className={cn(
                "absolute block w-6 h-0.5 bg-current transform transition-all duration-300",
                isMenuOpen ? "-rotate-45 top-3" : "top-5"
              )}
            ></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-lg border-l border-border/50 z-40 md:hidden mobile-menu",
            "transform transition-all duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            {/* Mobile Navigation Links */}
            <div className="flex-1 space-y-2">
              {navItems.map((item, key) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);

                return (
                  <a
                    key={key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                      isActive
                        ? "text-primary bg-primary/10 border border-primary/20 shadow-sm"
                        : "text-foreground/70 hover:text-primary hover:bg-accent/50 border border-transparent"
                    )}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile Theme Toggle */}
            <div className="pt-6 border-t border-border/50">
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium text-foreground/70 hover:text-primary hover:bg-accent/50 transition-all duration-300 w-full"
                aria-label="Toggle theme"
              >
                {isDarkTheme ? (
                  <>
                    <Sun className="h-5 w-5 text-yellow-500" />
                    <span>Modo Claro</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 text-slate-600" />
                    <span>Modo Escuro</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
