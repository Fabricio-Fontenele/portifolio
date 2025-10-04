import { ArrowUp, Heart, Code } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {/* Gradient divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="bg-card/80 backdrop-blur-sm border-t border-border/50">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            {/* Left section - Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                &copy; {new Date().getFullYear()} Fabricio Fontenele. Todos os
                direitos reservados.
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground/80">
                <span>Feito com</span>
                <Heart className="h-3 w-3 text-red-500 fill-current animate-pulse" />
                <span>e</span>
                <Code className="h-3 w-3 text-primary" />
                <span>em Parnaíba, PI</span>
              </div>
            </div>

            {/* Center section - Links (only on desktop) */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Sobre
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Projetos
              </a>
              <a
                href="#skills"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Habilidades
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contato
              </a>
            </div>

            {/* Right section - Back to top */}
            <div className="flex items-center gap-3">
              <span className="hidden md:block text-xs text-muted-foreground/80">
                Voltar ao topo
              </span>
              <button
                onClick={scrollToTop}
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 text-primary transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label="Voltar ao topo"
              >
                <ArrowUp
                  size={18}
                  className="group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </button>
            </div>
          </div>

          {/* Mobile navigation links */}
          <div className="md:hidden mt-6 pt-6 border-t border-border/50">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Sobre
              </a>
              <span className="text-muted-foreground/50">•</span>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Projetos
              </a>
              <span className="text-muted-foreground/50">•</span>
              <a
                href="#skills"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Habilidades
              </a>
              <span className="text-muted-foreground/50">•</span>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
