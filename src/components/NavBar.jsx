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
  { name: "Experiências", href: "#experience", icon: Code },
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-card/95 dark:bg-card/80 backdrop-blur-xl border-b border-border shadow-lg"
            : "py-4 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a
            className="text-xl font-bold flex items-center cursor-pointer hover:scale-105 transition-all duration-300 relative group"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
          >
            <span className="relative flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent font-bold">
                Fabricio
              </span>
              <span className="text-foreground/60 font-light text-base">
                .dev
              </span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-muted dark:bg-secondary/30 backdrop-blur-sm border-2 border-border">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                      isActive
                        ? "text-primary-foreground bg-primary shadow-md"
                        : "text-foreground/70 hover:text-primary hover:bg-secondary/50"
                    )}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-muted dark:bg-secondary/30 backdrop-blur-sm border-2 border-border hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 ml-2 group"
              aria-label="Toggle theme"
            >
              {isDarkTheme ? (
                <Sun className="h-4 w-4 text-yellow-500 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="h-4 w-4 text-primary group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-3 rounded-lg bg-muted dark:bg-secondary/30 border-2 border-border hover:bg-secondary hover:border-primary/50 transition-all duration-300 relative z-[100]"
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] md:hidden"
          onClick={toggleMenu}
        />
      )}

      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-card backdrop-blur-xl border-l border-border shadow-2xl z-[95] md:hidden",
          "transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <div className="mb-6 px-4">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
              Navegação
            </h3>
            <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
          </div>

          <div className="flex-1 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    "group flex items-center space-x-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 relative overflow-hidden",
                    isActive
                      ? "text-primary bg-primary/10 shadow-sm"
                      : "text-foreground/70 hover:text-primary hover:bg-secondary/50"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300",
                      isActive
                        ? "bg-primary/20"
                        : "bg-secondary/50 group-hover:bg-primary/10"
                    )}
                  >
                    <Icon size={18} />
                  </div>
                  <span className="flex-1">{item.name}</span>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"></div>
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-border/50">
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-3 px-4 py-3.5 rounded-xl text-base font-medium text-foreground/70 hover:text-primary hover:bg-secondary/50 transition-all duration-300 w-full group"
              aria-label="Alternar tema"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary/50 group-hover:bg-primary/10 transition-all duration-300">
                {isDarkTheme ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-primary" />
                )}
              </div>
              <span className="flex-1 text-left">
                {isDarkTheme ? "Modo Claro" : "Modo Escuro"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
