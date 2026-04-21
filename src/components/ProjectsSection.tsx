"use client";

import type { MouseEvent } from "react";
import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
import { useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSectionReveal } from "@/hooks/useSectionReveal";

type ProjectStatus = "Em produção" | "Em desenvolvimento";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  demoUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "GymPass Style API",
    description:
      "API de exemplo inspirada no GymPass, focada em clean architecture, principios do SOLID.",
    tags: [
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Vitest",
      "Clean Architecture",
    ],
    status: "Em desenvolvimento",
    demoUrl: "#",
    githubUrl: "https://github.com/Fabricio-Fontenele/API-SOLID.git",
  },
  {
    id: 2,
    title: "E-commerce",
    description:
      "E-commerce com backend organizado para fluxos de catálogo, pagamento e administração, priorizando consistência de domínio e integrações.",
    tags: ["TypeScript", "PostgreSQL", "Stripe", "Docker"],
    status: "Em produção",
    demoUrl: "https://ecommerce-eight-rosy-36.vercel.app/",
    githubUrl: "https://github.com/Fabricio-Fontenele/Ecommerce.git",
  },
  {
    id: 3,
    title: "NeoLife",
    description:
      "Sistema para pronto-socorro com regras operacionais, organização de atendimento e preocupação com o fluxo de dados entre módulos.",
    tags: ["Express", "SQLite", "Docker", "Arquitetura de Software"],
    status: "Em desenvolvimento",
    demoUrl: "#",
    githubUrl: "https://github.com/oAnjophb/NeoLife",
  },
];

const statusStyles: Record<ProjectStatus, string> = {
  "Em produção": "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  "Em desenvolvimento": "border-amber-300/30 bg-amber-300/10 text-amber-100",
};

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef);

  const { toast } = useToast();

  const handleDemoClick = (
    event: MouseEvent<HTMLAnchorElement>,
    demoUrl: string,
    projectTitle: string,
  ) => {
    if (demoUrl !== "#") return;

    event.preventDefault();
    toast({
      title: "Deploy em progresso",
      description: `O projeto ${projectTitle} ainda não possui demo pública.`,
      duration: 2800,
    });
  };

  return (
    <section id="projects" ref={sectionRef} className="px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="section-shell section-pad">
          <div className="mb-10 text-left md:text-center">
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              Projetos
            </p>
            <h2 data-reveal className="mt-3 text-3xl font-bold md:text-4xl">
              Projetos que representam meu momento atual
            </h2>
            <p
              data-reveal
              className="mx-auto mt-4 max-w-3xl text-muted-foreground"
            >
              Selecionei projetos em que consigo mostrar melhor como penso
              backend, modelagem, integração e organização técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                data-reveal
                className="glass-panel flex h-full min-w-0 flex-col p-5"
              >
                <div className="flex min-w-0 flex-wrap items-start justify-between gap-2">
                  <h3 className="min-w-0 break-words text-xl font-semibold">
                    {project.title}
                  </h3>
                  <span
                    className={`max-w-full break-words rounded-full border px-3 py-1 text-[11px] font-semibold ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mt-4 break-words text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <p className="mt-5 break-words text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground/90">
                    Stack:
                  </span>{" "}
                  {project.tags.join(" · ")}
                </p>

                <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) =>
                      handleDemoClick(event, project.demoUrl, project.title)
                    }
                    className="inline-flex max-w-full items-center gap-1.5 break-all text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Ver projeto
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex max-w-full items-center gap-1.5 break-all text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                  >
                    Código-fonte
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div data-reveal className="mt-10 text-center">
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              href="https://github.com/Fabricio-Fontenele"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver mais no GitHub
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
