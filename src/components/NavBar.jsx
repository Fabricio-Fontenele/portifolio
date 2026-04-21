"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Experiência", href: "#experience" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      setScrollProgress(percent);
      setIsScrolled(scrollTop > 18);

      const section = navItems
        .map((item) => item.href.slice(1))
        .find((id) => {
          const element = document.getElementById(id);
          if (!element) return false;

          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        });

      if (section) {
        setActiveSection(section);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);

    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled ? "py-3" : "py-5"
        )}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div
            className={cn(
              "rounded-full border px-3 md:px-4",
              "bg-card/80 backdrop-blur-xl transition-all duration-300",
              isScrolled ? "border-border/90 shadow-xl shadow-black/25" : "border-border/65"
            )}
          >
            <div className="flex h-14 min-w-0 items-center justify-between gap-3">
              <a
                href="#hero"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick("#hero");
                }}
                className="inline-flex min-w-0 items-center gap-2 text-sm font-semibold tracking-wide md:text-base"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_16px_rgba(56,189,248,0.9)]" />
                <span className="truncate">Fabrício Fontenele</span>
              </a>

              <div className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-background/35 p-1.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={cn(
                        "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground/75 hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/35 text-foreground/80 transition-colors hover:text-primary"
                  aria-label="Alternar tema"
                >
                  {isDarkTheme ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>

                <button
                  onClick={() => setIsMenuOpen((state) => !state)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/35 text-foreground/85 md:hidden"
                  aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                  {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div
              className="h-[2px] rounded-full bg-gradient-to-r from-cyan-300 via-primary to-emerald-300 transition-all duration-200"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed right-3 top-20 z-50 w-[calc(100%-1.5rem)] max-w-xs rounded-2xl border border-border/80 bg-card/85 p-4 backdrop-blur-xl transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-[110%]"
        )}
      >
        <div className="space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/40 text-foreground/80"
                )}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
};
