"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDownRight, Sparkles } from "lucide-react";

const techStack = [
  "Tailwind CSS 4",
  "TypeScript",
  "Node.js",
  "Fastify",
  "PostgreSQL",
  "Supabase",
  "SQLite",
  "Docker",
  "Vitest",
  "Clean Architecture",
  "DDD",
  "Prisma",
  "Next.js 15",
];

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.from("[data-hero-intro]", {
        y: 22,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
      });

      gsap.from("[data-hero-marquee]", {
        y: 14,
        opacity: 0,
        duration: 0.8,
        delay: 0.35,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-center px-4 pb-14 pt-32"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-left">
            <div
              data-hero-intro
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Backend e Engenharia de Software
            </div>

            <h1
              data-hero-intro
              className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
            >
              Oi, eu sou o
              <span className="text-glow text-primary"> Fabrício Fontenele</span>.
            </h1>

            <p
              data-hero-intro
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Sou desenvolvedor com foco em backend, engenharia de software e
              arquitetura. Trabalho na construção de APIs, regras de negócio e
              sistemas que precisam crescer com clareza, testes e boa manutenção.
            </p>

            <div data-hero-intro className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="cosmic-button">
                Ver projetos
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground/85 transition-colors hover:border-primary/40 hover:text-primary"
              >
                Conversar sobre projeto
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div data-hero-intro className="section-shell section-pad text-left">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Disponível para
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Freelance e colaboração técnica</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Atuo em projetos que exigem backend bem estruturado, domínio bem
              modelado e decisões técnicas pensadas para o longo prazo.
            </p>

            <div className="mt-6 space-y-2 text-sm text-foreground/85">
              <p>• APIs e serviços orientados a domínio</p>
              <p>• Arquitetura modular com foco em evolução</p>
              <p>• Testes, persistência relacional e deploy confiável</p>
            </div>
          </div>
        </div>

        <div
          data-hero-marquee
          className="mt-14 overflow-hidden rounded-xl border border-border/80 bg-card/55 py-4"
        >
          <div className="flex w-max animate-scroll gap-3 px-4">
            {[...techStack, ...techStack].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-full border border-border/75 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground/85"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
