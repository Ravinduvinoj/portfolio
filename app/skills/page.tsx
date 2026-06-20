"use client";

import Image from "next/image";
import { useState } from "react";

const categories = ["All", "Frontend", "Backend", "Database", "DevOps", "Languages", "Tools & IDEs"];

const skills = [
  // Frontend
  // { name: "React", level: 92, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61dafb" },
  { name: "Next.js", level: 90, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#fff" },
  { name: "TypeScript", level: 85, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178c6" },
  { name: "Tailwind CSS", level: 93, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#38bdf8" },
  { name: "JavaScript", level: 70, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#42b883" },
  // { name: "Redux", level: 80, category: "Frontend", icon: "🔄", color: "#764abc" },
  // Backend
  { name: "Node.js", level: 88, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", color: "#68a063" },
  { name: "Express.js", level: 85, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg", color: "#fff" },
  { name: "Python", level: 78, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "#ffd43b" },
  // { name: "REST APIs", level: 90, category: "Backend", icon: "🔗", color: "#60a5fa" },
  { name: "GraphQL", level: 72, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", color: "#e535ab" },
  // Database
  { name: "MongoDB", level: 84, category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47a248" },
  { name: "PostgreSQL", level: 80, category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg", color: "#336791" },
  { name: "MySQL", level: 75, category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", color: "#4479a1" },
  // { name: "Redis", level: 68, category: "Database", icon: "⚡", color: "#dc382d" },
  // DevOps
  { name: "Docker", level: 76, category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ed" },
  { name: "AWS", level: 65, category: "DevOps", icon: "☁️", color: "#ff9900" },
  { name: "Vercel", level: 88, category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", color: "#fff" },
  // Languages
  { name: "JavaScript", level: 92, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#f7df1e" },
  { name: "TypeScript", level: 85, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178c6" },
  { name: "Python", level: 78, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "#ffd43b" },
  { name: "HTML5", level: 95, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#e34c26" },
  { name: "CSS3", level: 90, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#264de4" },
  { name: "MySQL", level: 78, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", color: "#4479a1" },
  { name: "Dart", level: 78, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg", color: "#4479a1" },

  //Tools & IDEs
  { name: "Git", level: 88, category: "Tools & IDEs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#f05032" },
  { name: "GitHub", level: 92, category: "Tools & IDEs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#f05032" },
  { name: "VS Code", level: 90, category: "Tools & IDEs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007acc" },
  { name: "Postman", level: 80, category: "Tools & IDEs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", color: "#ff6c37" },
  { name: "Jira", level: 70, category: "Tools & IDEs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg", color: "#0052cc" },
];

const techStack = [
  // { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
   { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
];

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? skills.filter((s, i, arr) =>
    arr.findIndex((x) => x.name === s.name) === i
  ) : skills.filter((s) => s.category === active);

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

        {/* Tech stack logos */}
        <div className="card mb-12 overflow-hidden">
          <h2 className="text-lg font-bold mb-6 text-center">Tech Stack at a Glance</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map(({ name, logo }) => (
              <div
                key={name}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border)] hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default"
              >
                 {typeof logo === "string" && logo.startsWith("http") ? (
                    <Image
                      src={logo}
                      alt={`${logo} logo`}
                      width={28}
                      height={28}
                      className="rounded"
                    />
                  ) : (
                    <span className="text-2xl">{logo}</span>
                  )}
                {/* <span className="text-xl">{logo}</span> */}
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${active === cat
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
          {filtered.map((skill) => (
            <div key={`${skill.name}-${skill.category}`} className="card group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {typeof skill.icon === "string" && skill.icon.startsWith("http") ? (
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      width={28}
                      height={28}
                      className="rounded"
                    />
                  ) : (
                    <span className="text-2xl">{skill.icon}</span>
                  )}
                  <div>
                    <h3 className="font-bold text-sm">{skill.name}</h3>
                    <span className="tag text-xs">{skill.category}</span>
                  </div>
                </div>
                <span className="text-2xl font-black gradient-text">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-[var(--bg-secondary)] overflow-hidden">
                <div
                  className="skill-bar h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
