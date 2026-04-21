"use client";

import type { LucideIcon } from "lucide-react";
import { Blocks, Database, Server } from "lucide-react";
import { useRef } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

type Specialty = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const specialties: Specialty[] = [
  {
    icon: Server,
    title: "Backend orientado a domínio",
    description:
      "Serviços e APIs com modelagem clara, regras de negócio explícitas e separação consistente de responsabilidades.",
  },
  {
    icon: Blocks,
    title: "Arquitetura e qualidade",
    description:
      "Aplicação prática de Clean Architecture, DDD, testes automatizados e organização preparada para o crescimento do produto.",
  },
  {
    icon: Database,
    title: "Persistência e stack moderna",
    description:
      "TypeScript, PostgreSQL, Supabase, Prisma e Vitest como base para construir sistemas confiáveis e fáceis de manter.",
  },
];

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="section-shell section-pad overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
            <div className="min-w-0 text-left">
              <p
                data-reveal
                className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
              >
                Sobre
              </p>
              <h2 data-reveal className="mt-3 text-3xl font-bold md:text-4xl">
                Gosto de software bem modelado e fácil de sustentar
              </h2>

              <p
                data-reveal
                className="mt-5 text-base leading-relaxed text-muted-foreground"
              >
                Tenho direcionado minha formação e meus projetos para backend,
                arquitetura e organização de código. Meu interesse está menos em
                “fazer funcionar rápido” e mais em construir bases que façam
                sentido quando o sistema precisar evoluir.
              </p>

              <p
                data-reveal
                className="mt-4 text-base leading-relaxed text-muted-foreground"
              >
                Por isso, dou atenção especial a modelagem de domínio,
                persistência relacional, separação de responsabilidades e testes
                que reduzam o custo de manutenção no dia a dia.
              </p>

              <div data-reveal className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="cosmic-button">
                  Iniciar conversa
                </a>
                <a
                  href="/curriculo.pdf"
                  download="Fabricio_Fontenele_Curriculo.pdf"
                  className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground/85 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  Baixar currículo
                </a>
              </div>
            </div>

            <div className="grid min-w-0 gap-4 overflow-hidden">
              {specialties.map((item) => {
                const IconComponent = item.icon;
                return (
                  <article
                    key={item.title}
                    data-reveal
                    className="glass-panel block w-full min-w-0 max-w-full overflow-hidden p-5 text-left"
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="shrink-0 rounded-lg bg-primary/12 p-2.5">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-2 break-words text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
