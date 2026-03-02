import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const projects = [
  {
    id: 1,
    title: "BarberHub",
    description:
      "Plataforma completa de agendamento para barbearias com gestão de horários, clientes e serviços.",
    Image: "/images/placeholder-project.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    DemoUrl: "#",
    gitHubUrl: "https://github.com/Fabricio-Fontenele/BarberHub.git",
  },
  {
    id: 2,
    title: "E-commerce",
    description:
      "Sistema completo de loja online com integração de pagamentos via Stripe e painel administrativo.",
    Image: "/images/ecommerce.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle",
      "Stripe",
    ],
    DemoUrl: "https://ecommerce-eight-rosy-36.vercel.app/",
    gitHubUrl: "https://github.com/Fabricio-Fontenele/Ecommerce.git",
  },
  {
    id: 3,
    title: "NeoLife",
    description:
      "Sistema de gestão de Pronto Socorro focado na triagem e classificação de risco de pacientes.",
    Image: "/images/placeholder-project.svg",
    tags: ["Vue.js", "JavaScript", "Express", "SQLite", "Prisma", "Docker"],
    DemoUrl: "#",
    gitHubUrl: "https://github.com/oAnjophb/NeoLife",
  },
];

export const ProjectsSection = () => {
  const { toast } = useToast();

  const handleDemoClick = (e, demoUrl, projectTitle) => {
    if (demoUrl === "#") {
      e.preventDefault();
      toast({
        title: "Projeto em desenvolvimento",
        description: `O deploy do ${projectTitle} ainda não está disponível. Em breve estará no ar!`,
        duration: 3000,
      });
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Algumas das soluções que desenvolvi recentemente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 flex flex-col overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Terminal Header */}
              <div className="bg-card backdrop-blur px-4 py-2.5 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60 group-hover:bg-red-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60 group-hover:bg-yellow-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60 group-hover:bg-green-500 transition-colors" />
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-5 flex flex-col flex-grow font-mono text-sm bg-gradient-to-b from-card/30 to-card/60">
                {/* Command prompt */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary">❯</span>
                    <span className="text-primary/80">cat</span>
                    <span className="text-foreground/80">{project.title}.md</span>
                    <span className="animate-pulse text-muted-foreground">▋</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors font-sans">
                  # {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="text-xs text-primary/70 mb-2 font-mono">
                    ## stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs rounded bg-card/60 text-primary border border-border hover:border-primary/50 hover:bg-card transition-all font-mono"
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                </div>

                {/* Command Buttons */}
                <div className="flex gap-2 mt-auto pt-4 border-t border-border/30">
                  <a
                    href={project.DemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded font-mono text-xs font-bold transition-all hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 cursor-pointer"
                    onClick={(e) =>
                      handleDemoClick(e, project.DemoUrl, project.title)
                    }
                  >
                    Ver Demo
                  </a>
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-card/60 hover:bg-card text-primary rounded font-mono text-xs font-bold transition-all border border-border hover:border-primary/50 flex items-center justify-center gap-2"
                    onClick={(e) =>
                      project.gitHubUrl === "#" && e.preventDefault()
                    }
                  >
                    <GithubIcon size={14} />
                    git clone
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all hover:scale-105 font-medium"
            href="https://github.com/Fabricio-Fontenele"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais no GitHub
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
