"use client";

import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Enkiveda LLC",
    location: "UAE - Remote",
    period: "Apr 2025 – Present",
    type: "Full-time",
    current: true,
    description:
      "Leading development of a SaaS analytics platform serving 5,000+ users. Architected a microservices backend and built a real-time dashboard using Next.js and WebSockets.",
    achievements: [
      "Spearheaded migration to a microservices architecture, improving scalability and reducing downtime by 30%",
      "Implemented a real-time analytics dashboard using Next.js and WebSockets, increasing user engagement by 25%",
      "Optimized backend services, resulting in a 40% reduction in API response times",
    ],
    stack: ["Angular", "Node.js", "TypeScript", "PostgreSQL", "Flutter", "Dart", "Ionic", "Azure", "GitHub", "Azure DevOps", "Azure Functions", "MySQL", "Stripe", ".NET Core"],
  },
  {
    role: "Intern Software Engineer",
    company: "Enkiveda LLC",
    location: "UAE - Remote",
    period: "Jan 2025 – March 2025",
    type: "Full-time",
    current: false,
    description:
      "Participated in a 3-month internship program focused on building scalable web applications. Contributed to both frontend and backend development, gaining exposure to cloud deployment and CI/CD practices.",
    achievements: [
      "Developed a real-time chat feature using WebSockets and Node.js",
      "Wrote unit and integration tests improving code coverage to 85%",
      "Deployed applications to Azure using Docker and CI/CD pipelines",
    ],
    stack: ["Angular", "Sonarcube", "Docker", "RabitMQ", "Flutter", "Azure"],
  },
  {
    role: "Intern Software Engineer",
    company: "ElementX LLC",
    location: "UAE - Remote",
    period: "Oct 2024 – Dec 2024",
    type: "Full-time",
    current: false,
    description:
      "Participated in a 3-month internship program focused on building scalable web applications. Contributed to both frontend and backend development, gaining exposure to cloud deployment and CI/CD practices.",
    achievements: [
      "Developed a real-time chat feature using WebSockets and Node.js",
      "Wrote unit and integration tests improving code coverage to 85%",
      "Deployed applications to AWS using Docker and CI/CD pipelines",
    ],
    stack: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "MySQL", "Stripe", ".NET Core", "Azure", "GitHub"],
  },
];

export default function Career() {
  return (
    <div className="pt-24 section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// work history</p>
          <h1 className="section-title">
            My <span className="gradient-text">Career</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            A timeline of roles, companies, and the impact I've made along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 rounded-full" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-16 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                {/* Dot */}
                <div className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg border-4 border-[var(--bg)] ${exp.current ? "bg-gradient-to-br from-primary to-accent shadow-primary/40" : "bg-[var(--bg-card)] border-[var(--border)]"}`}>
                  <FiBriefcase className={exp.current ? "text-white" : "text-primary"} size={18} />
                </div>

                <div className={`card hover:-translate-y-1 transition-all duration-300 ${exp.current ? "border-primary/30 glow-blue" : ""}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold">{exp.role}</h3>
                        {exp.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0 space-y-1">
                      <div className="flex items-center gap-1 text-sm text-[var(--text-secondary)] justify-end">
                        <FiCalendar size={13} /> {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-[var(--text-secondary)] justify-end">
                        <FiMapPin size={13} /> {exp.location}
                      </div>
                      <span className="tag text-xs">{exp.type}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="text-primary mt-0.5 shrink-0">▸</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
