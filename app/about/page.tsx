"use client";

import Link from "next/link";
import { FiArrowRight, FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const personalInfo = [
  { label: "Name", value: "Ravindu Wijerathna" },
  { label: "Role", value: "Associate Software Engineer" },
  { label: "Location", value: "Sri Lanka" },
  { label: "Email", value: "ravinduvinoj.se@gmail.com", icon: FiMail },
  { label: "Phone", value: "+94 75 487 9867", icon: FiPhone },
  { label: "Languages", value: "Sinhala, English" },
];

const values = [
  { emoji: "🚀", title: "Performance First", desc: "I obsess over load times, clean code, and scalable systems." },
  { emoji: "🎨", title: "Design Minded", desc: "Great UX isn't optional — I bridge design and engineering." },
  { emoji: "🔄", title: "Always Learning", desc: "Tech evolves fast. I stay current with modern stacks and patterns." },
  { emoji: "🤝", title: "Team Player", desc: "I thrive in collaborative environments and love mentoring juniors." },
];

export default function About() {
  return (
    <div className="pt-24 section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary font-mono text-sm mb-2">// who am i</p>
          <h1 className="section-title">
            About <span className="gradient-text">Me</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left - bio */}
          <div className="animate-slide-in-left">
            <div className="relative mb-8">
              <img
                src="/avatar.jpg"
                alt="Ravindu Vinoj avatar"
                className="w-48 h-48 rounded-2xl shadow-2xl glow-blue object-cover z-10 relative"
              />
              <div className="absolute -bottom-3 -right-3 w-48 h-48 rounded-2xl border-2 border-dashed border-accent/40" />
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Crafting digital experiences with <span className="text-primary">passion</span> & <span className="text-accent">precision</span>
            </h2>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              I'm Ravindu Vinoj, a Full Stack Developer based in Sri Lanka with 3+ years of experience building 
              web and mobile applications. I love turning complex problems into elegant, user-friendly solutions.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              My journey started with a curiosity for how websites work, which evolved into a deep passion for 
              building scalable systems. I specialize in React, Next.js, Node.js, and cloud-native architectures.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link href="/projects" className="btn-primary flex items-center gap-2">
                My Projects <FiArrowRight />
              </Link>
              <a href="/Ravindu_Wijerathna-CV.pdf" download className="btn-outline flex items-center gap-2">
                Download CV
              </a>
            </div>
          </div>

          {/* Right - personal info */}
          <div className="animate-fade-in">
            <div className="card mb-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <FiMapPin className="text-primary" /> Personal Info
              </h3>
              <div className="space-y-4">
                {personalInfo.map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-2 border-b border-[var(--border)] last:border-0">
                    <span className="text-sm text-[var(--text-secondary)] font-medium">{label}</span>
                    <span className="text-sm font-semibold text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <p className="text-sm font-mono text-center text-[var(--text-secondary)]">
                "I believe the best code is code that <span className="text-primary font-semibold">solves real problems</span> elegantly."
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-10">
            My Core <span className="gradient-text">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ emoji, title, desc }) => (
              <div key={title} className="card text-center hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
