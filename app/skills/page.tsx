"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const categories = ["All", "Frontend", "Backend", "Database", "DevOps", "Languages", "Tools & IDEs"];

const skills = [
  // Frontend
  { name: "Next.js", level: 90, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", level: 85, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", level: 93, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", level: 70, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  // Backend
  { name: "Node.js", level: 88, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Express.js", level: 85, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" },
  { name: "Python", level: 78, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "GraphQL", level: 72, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  // Database
  { name: "MongoDB", level: 84, category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", level: 80, category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" },
  { name: "MySQL", level: 75, category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  // DevOps
  { name: "Docker", level: 76, category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", level: 65, category: "DevOps", icon: null },
  { name: "Vercel", level: 88, category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  // Languages
  { name: "JavaScript", level: 92, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", level: 85, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", level: 78, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "HTML5", level: 95, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", level: 90, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Dart", level: 78, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
  // Tools & IDEs
  { name: "Git", level: 88, category: "Tools & IDEs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", level: 92, category: "Tools & IDEs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", level: 90, category: "Tools & IDEs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", level: 80, category: "Tools & IDEs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Jira", level: 70, category: "Tools & IDEs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" },
];

type ProficiencyTier = {
  label: string;
  className: string;
};

function getProficiency(level: number): ProficiencyTier {
  if (level < 50) return { label: "Very low", className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400" };
  if (level < 70) return { label: "Low",      className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" };
  if (level < 85) return { label: "Medium",   className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" };
  return             { label: "Strong",    className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" };
}

export default function Skills() {
  const [active, setActive] = useState("All");
  const [pageSize, setPageSize] = useState(12);
  const [shown, setShown] = useState(12);

  useEffect(() => {
    const size = window.innerWidth < 640 ? 8 : 12;
    setPageSize(size);
    setShown(size);
  }, []);

  const filtered =
    active === "All"
      ? skills.filter((s, i, arr) => arr.findIndex((x) => x.name === s.name) === i)
      : skills.filter((s) => s.category === active);

  const visible = filtered.slice(0, shown);
  const hasMore = filtered.length > shown;

  function handleFilter(cat: string) {
    setActive(cat);
    setShown(pageSize);
  }

  return (
    <div className="pt-24 section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// tech arsenal</p>
          <h1 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Technologies I work with daily to build performant, scalable, and beautiful products.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                  : "border-[var(--border)] text-[var(--text-secondary)] hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((skill) => {
            const tier = getProficiency(skill.level);
            return (
              <div
                key={`${skill.name}-${skill.category}`}
                className="card group hover:-translate-y-1 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  {skill.icon ? (
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      width={28}
                      height={28}
                      className="rounded"
                    />
                  ) : (
                    <span className="text-2xl">☁️</span>
                  )}
                  <div>
                    <h3 className="font-bold text-sm">{skill.name}</h3>
                    <span className="tag text-xs">{skill.category}</span>
                  </div>
                </div>

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${tier.className}`}
                >
                  {tier.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShown((s) => s + pageSize)}
              className="px-6 py-2.5 rounded-full border border-[var(--border)] text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}