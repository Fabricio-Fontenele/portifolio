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
    DemoUrl:
      "https://ecommerce-1whq6ncqo-fabricio-fonteneles-projects.vercel.app/",
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
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 flex flex-col overflow-hidden"
            >
              {/* Header with gradient */}
              <div className="h-2 bg-gradient-to-r from-primary/80 via-primary to-primary/80" />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-xs rounded-md bg-secondary/70 text-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">
                  <a
                    href={project.DemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all text-sm font-medium text-center flex items-center justify-center gap-2 cursor-pointer"
                    onClick={(e) =>
                      handleDemoClick(e, project.DemoUrl, project.title)
                    }
                  >
                    <ExternalLink size={16} />
                    Ver Demo
                  </a>
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-secondary/70 text-foreground rounded-lg hover:bg-secondary transition-all text-sm font-medium flex items-center justify-center gap-2"
                    onClick={(e) =>
                      project.gitHubUrl === "#" && e.preventDefault()
                    }
                  >
                    <GithubIcon size={16} />
                    Código
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
