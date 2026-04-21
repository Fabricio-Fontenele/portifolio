"use client";

import { MapPin } from "lucide-react";
import { useRef } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const experiences = [
  {
    title: "Desenvolvedor Backend / Engenheiro de Software",
    company: "Freelancer",
    location: "Remoto",
    period: "2024 - Atual",
    description:
      "Implementação de APIs, modelagem de domínio e organização de serviços com foco em escalabilidade, clareza estrutural e manutenção.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Supabase"],
  },
  {
    title: "Projetos com foco em arquitetura",
    company: "UESPI",
    location: "Parnaíba, PI",
    period: "2025 - Atual",
    description:
      "Estudo e aplicação prática de separação em camadas, responsabilidades de domínio, integração com banco relacional e padrões de projeto.",
    tags: ["Clean Architecture", "DDD", "Prisma", "Vitest"],
  },
  {
    title: "Sistemas de Computação",
    company: "UESPI",
    location: "Parnaíba, PI",
    period: "2024 - Atual",
    description:
      "Formação orientada a algoritmos, arquitetura de software, modelagem de dados, persistência e fundamentos de engenharia de sistemas.",
    tags: ["Arquitetura", "Modelagem", "SQL", "Engenharia de Software"],
  },
];

export const ExperienceSection = () => {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef);

  return (
    <section id="experience" ref={sectionRef} className="px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="section-shell section-pad">
          <div className="text-left md:text-center">
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              Experiência
            </p>
            <h2 data-reveal className="mt-3 text-3xl font-bold md:text-4xl">
              Onde venho concentrando minha experiência
            </h2>
            <p
              data-reveal
              className="mx-auto mt-4 max-w-3xl text-muted-foreground"
            >
              Minha trajetória recente tem sido guiada por backend, arquitetura
              e práticas que ajudam a manter o sistema compreensível conforme ele cresce.
            </p>
          </div>

          <div className="relative mt-10 space-y-5">
            <div
              data-reveal-line
              className="absolute left-[11px] top-0 h-full w-[2px] bg-gradient-to-b from-cyan-300/90 via-cyan-300/20 to-transparent md:hidden"
            />

            {experiences.map((item) => (
              <article
                key={item.title}
                data-reveal
                className="glass-panel min-w-0 p-5 text-left md:p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {item.period}
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {item.company}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>

                <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {item.location}
                </div>

                <p className="mt-4 break-words text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/85 bg-background/55 px-3 py-1 text-xs font-medium text-foreground/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
