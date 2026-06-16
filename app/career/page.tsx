"use client";

import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "TechVision Solutions",
    location: "Colombo, Sri Lanka (Hybrid)",
    period: "Jan 2024 – Present",
    type: "Full-time",
    current: true,
    description:
      "Leading development of a SaaS analytics platform serving 5,000+ users. Architected a microservices backend and built a real-time dashboard using Next.js and WebSockets.",
    achievements: [
      "Reduced page load time by 40% through SSR and code splitting",
      "Designed REST & GraphQL APIs consumed by web and mobile clients",
      "Mentored 2 junior developers, conducting weekly code reviews",
      "Integrated CI/CD pipeline with GitHub Actions and Docker on AWS",
    ],
    stack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    role: "Frontend Developer",
    company: "Pixel Craft Studio",
    location: "Remote",
    period: "Jun 2022 – Dec 2023",
    type: "Full-time",
    current: false,
    description:
      "Built pixel-perfect UIs for 10+ client projects across e-commerce, healthcare, and fintech. Collaborated closely with designers to translate Figma prototypes into responsive React apps.",
    achievements: [
      "Delivered 10+ production React apps on time and under budget",
      "Improved Lighthouse performance scores from ~60 to 95+ across projects",
      "Implemented reusable component library saving ~30% dev time",
      "Led migration from Create React App to Next.js for 3 projects",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Redux", "Figma", "Jest"],
  },
  {
    role: "Junior Web Developer",
    company: "Digital Nest LK",
    location: "Colombo, Sri Lanka",
    period: "Jan 2022 – May 2022",
    type: "Full-time",
    current: false,
    description:
      "Started my professional career building WordPress and React websites for local businesses. Gained hands-on experience with full project lifecycle from requirements to deployment.",
    achievements: [
      "Built 5 client websites using React and custom WordPress themes",
      "Learned Git workflows, agile sprints, and client communication",
      "Implemented SEO best practices boosting client search rankings",
    ],
    stack: ["React", "JavaScript", "WordPress", "PHP", "MySQL", "CSS3"],
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    location: "Remote",
    period: "2020 – 2022",
    type: "Freelance",
    current: false,
    description:
      "Worked with clients across Sri Lanka, UK, and Australia building web applications and landing pages while completing my university degree.",
    achievements: [
      "Completed 15+ freelance projects on Upwork and direct clients",
      "Built e-commerce stores, portfolios, and booking systems",
      "Maintained 5-star rating across all client engagements",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React", "Firebase", "Stripe"],
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
