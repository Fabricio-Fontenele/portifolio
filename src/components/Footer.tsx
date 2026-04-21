"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";

const quickLinks = [
  { href: "#about", label: "Sobre" },
  { href: "#experience", label: "Experiência" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 px-4 pb-10 pt-6">
      <div className="container mx-auto max-w-6xl">
        <div className="section-shell section-pad">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0 text-left">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                Fabrício Fontenele
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Backend e Engenharia de Software • {new Date().getFullYear()}
              </p>
            </div>

            <nav className="flex min-w-0 flex-wrap gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#hero"
              className="inline-flex items-center gap-2 self-start rounded-md border border-border/80 bg-background/45 px-4 py-2 text-sm font-semibold text-foreground/85 transition-colors hover:border-primary/40 hover:text-primary md:self-auto"
            >
              Voltar ao topo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
