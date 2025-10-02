import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", level: 45, category: "Frontend" },
  { name: "CSS", level: 45, category: "Frontend" },
  { name: "JavaScript", level: 50, category: "Frontend" },
  { name: "TypeScript", level: 50, category: "Frontend" },
  { name: "React", level: 45, category: "Frontend" },
  { name: "Tailwind CSS", level: 50, category: "Frontend" },
  { name: "Next.js", level: 45, category: "Frontend" },
  // Backend
  { name: "Node.js", level: 50, category: "Backend" },
  { name: "Express.js", level: 45, category: "Backend" },
  { name: "PostgreSQL", level: 60, category: "Backend" },
  // Data Science
  { name: "Python", level: 50, category: "Data Science" },
  // Tools
  { name: "Docker", level: 60, category: "Tools" },
  { name: "Git", level: 80, category: "Tools" },
  { name: "Figma", level: 40, category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "Data Science", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) =>
    activeCategory === "all" ? true : skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className=" font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
