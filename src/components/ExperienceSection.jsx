import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Freelancer",
    location: "Remoto",
    period: "2024 - Presente",
    description:
      "Desenvolvimento de aplicações web completas usando React, Node.js e PostgreSQL. Foco em criar soluções escaláveis e modernas.",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "PET-Saúde Digital",
    company: "UESPI",
    location: "Parnaíba, PI",
    period: "2025 - Presente",
    description:
      "Desenvolvimento de dashboards para auxiliar as Unidades Básicas de Saúde (UBS) na análise e visualização de dados. Atuando pela área de ciência de dados, análise estatística e geração de insights.",
    tags: ["Python", "Django", "PostgreSQL", "Data Science"],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Estudante de Sistemas de Computação",
    company: "UESPI",
    location: "Parnaíba, PI",
    period: "2024 - Presente",
    description:
      "Aprofundando conhecimentos em algoritmos, estruturas de dados, arquitetura de software e ciência de dados.",
    tags: ["Python", "Algoritmos", "Data Science"],
    color: "from-purple-500 to-pink-500",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiências & <span className="text-primary">Jornada</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória no mundo da tecnologia e desenvolvimento
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  } pl-20 md:pl-0`}
                >
                  <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105">
                    {/* Gradient Accent */}
                    <div
                      className={`h-1 w-20 rounded-full bg-gradient-to-r ${exp.color} mb-4`}
                    />

                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs rounded-full bg-secondary/70 text-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interessado em trabalhar juntos?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Entre em Contato
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

function ArrowRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
