"use client";

import { FiBook, FiAward, FiCalendar, FiMapPin } from "react-icons/fi";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Moratuwa",
    location: "Moratuwa, Sri Lanka",
    period: "2019 – 2023",
    grade: "Second Class Upper",
    description:
      "Focused on software engineering, algorithms, data structures, and distributed systems. Final year project: A real-time collaborative code editor built with React and WebSockets.",
    highlights: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Computer Networks", "Distributed Systems"],
    icon: "🎓",
    type: "degree",
  },
  {
    degree: "Advanced Level (A/L) – Physical Science",
    institution: "Ananda College",
    location: "Colombo, Sri Lanka",
    period: "2016 – 2018",
    grade: "3A passes",
    description:
      "Studied Combined Mathematics, Physics, and ICT. Achieved top results in the district and secured placement at the University of Moratuwa.",
    highlights: ["Combined Mathematics", "Physics", "ICT"],
    icon: "📚",
    type: "school",
  },
  {
    degree: "Ordinary Level (O/L)",
    institution: "Ananda College",
    location: "Colombo, Sri Lanka",
    period: "2014 – 2016",
    grade: "9A passes",
    description:
      "Completed O/Ls with distinction in all 9 subjects, with a strong aptitude for mathematics and science.",
    highlights: ["Mathematics", "Science", "ICT", "English"],
    icon: "🏫",
    type: "school",
  },
];

const certifications = [
  { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "2024", icon: "☁️" },
  { name: "Meta Front-End Developer Professional Certificate", issuer: "Meta / Coursera", year: "2023", icon: "📘" },
  { name: "Node.js Application Development (LFW211)", issuer: "The Linux Foundation", year: "2023", icon: "🟢" },
  { name: "MongoDB Developer Certification", issuer: "MongoDB University", year: "2022", icon: "🍃" },
  { name: "Google UX Design Certificate", issuer: "Google / Coursera", year: "2022", icon: "🎨" },
];

export default function Education() {
  return (
    <div className="pt-24 section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// academic journey</p>
          <h1 className="section-title">
            My <span className="gradient-text">Education</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            A step-by-step look at my academic background and certifications that shaped my technical foundation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 rounded-full" />

          <div className="space-y-10">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-16 animate-slide-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                {/* Icon bubble */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl shadow-lg shadow-primary/30 border-4 border-[var(--bg)]">
                  {edu.icon}
                </div>

                <div className="card hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
                      <p className="text-primary font-semibold">{edu.institution}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1 text-sm text-[var(--text-secondary)] mb-1 justify-end">
                        <FiCalendar size={13} /> {edu.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-[var(--text-secondary)] justify-end">
                        <FiMapPin size={13} /> {edu.location}
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold mb-4">
                    <FiAward size={13} /> {edu.grade}
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span key={h} className="tag">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-10">
            Certifications & <span className="gradient-text">Courses</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <div key={idx} className="card flex items-start gap-4 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl shrink-0">{cert.icon}</div>
                <div>
                  <h3 className="font-bold text-sm leading-snug mb-1">{cert.name}</h3>
                  <p className="text-xs text-primary font-medium mb-1">{cert.issuer}</p>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                    <FiCalendar size={11} /> {cert.year}
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
