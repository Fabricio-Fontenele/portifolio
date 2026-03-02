import { ArrowUp, Terminal } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#experience", label: "Experiências" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <footer className="relative">
      {/* Gradient divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="bg-card/50 backdrop-blur-md border-t border-border/50">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Brand + Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-primary/10 rounded">
                  <Terminal className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold">Fabrício Fontenele</span>
              </div>
              <span className="hidden md:block text-muted-foreground">•</span>
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()}
              </p>
            </div>

            {/* Center: Quick Links */}
            <nav className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <span key={link.href} className="flex items-center gap-4">
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                  {index < quickLinks.length - 1 && (
                    <span className="text-muted-foreground/30">•</span>
                  )}
                </span>
              ))}
            </nav>

            {/* Right: Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 text-primary transition-all duration-300 hover:scale-105"
              aria-label="Voltar ao topo"
            >
              <span className="text-sm font-medium">Topo</span>
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
