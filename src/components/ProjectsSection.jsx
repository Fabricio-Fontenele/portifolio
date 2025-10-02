import { ExternalLink, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BarberHub",
    description: "Plataforma de agendamento para pequenas barbearias.",
    Image: "/images/placeholder-project.svg", // Coloque sua imagem aqui
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    DemoUrl: "#",
    gitHubUrl: "https://github.com/Fabricio-Fontenele/BarberHub.git",
  },
  {
    id: 2,
    title: "Ecommerce",
    description: "Plataforma de ecommerce desenvolvida com Next.js.",
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
      "https://ecommerce-1fjaxso3o-fabricio-fonteneles-projects.vercel.app",
    gitHubUrl: "https://github.com/Fabricio-Fontenele/Ecommerce.git",
  },
  {
    id: 3,
    title: "NeoLife",
    description: "Sistema de gerenciamento de pronto-socorro ",
    Image: "/images/placeholder-project.svg", // Coloque sua imagem aqui
    tags: ["Vue.js", "JavaScript", "Express", "SQLite"],
    DemoUrl: "#",
    gitHubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Meus <span className="text-primary">Projetos</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui estão alguns dos meus projetos recentes. Sinta-se à vontade para
          explorar e ver o que eu tenho criado!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.Image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.DemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
