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
    <footer className="relative z-10 mt-8 border-t border-border/70 bg-[linear-gradient(180deg,rgba(5,9,20,0.08),rgba(5,9,20,0.42))] px-4 pb-10 pt-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0 text-left">
            <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              Encerramento
            </p>
            <p className="mt-3 text-lg font-semibold text-foreground/92">
              Fabrício Fontenele
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Backend e Engenharia de Software • {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex flex-col gap-5 md:items-end">
            <nav className="flex min-w-0 flex-wrap gap-x-5 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#hero"
              className="inline-flex items-center gap-2 self-start rounded-full border border-border/70 bg-background/25 px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary md:self-end"
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
