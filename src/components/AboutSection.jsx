import { BarChart2, Code, Server } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Transformando ideias em código desde 2022
            </h3>

            <p className="text-muted-foreground">
              Atualmente cursando Sistemas de Computação na UESPI, comecei minha
              jornada na programação explorando Python e me apaixonei por criar
              soluções que fazem diferença.
            </p>

            <p className="text-muted-foreground">
              Hoje, desenvolvo aplicações full stack modernas, desde interfaces
              elegantes até APIs robustas, sempre buscando escrever código limpo
              e escalável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Entre em contato
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Meu currículo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Frontend Moderno</h4>
                  <p className="text-sm text-muted-foreground">
                    Interfaces responsivas e intuitivas com React, Next.js e
                    Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Backend Robusto</h4>
                  <p className="text-sm text-muted-foreground">
                    APIs escaláveis com Node.js, Express e PostgreSQL.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Data & Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Análise e manipulação de dados com Python e SQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
