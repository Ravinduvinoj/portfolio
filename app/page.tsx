"use client";

import Link from "next/link";
import { FiArrowRight, FiDownload, FiCode, FiServer, FiSmartphone } from "react-icons/fi";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "React / Next.js Dev",
  "Node.js Engineer",
  "UI/UX Enthusiast",
];

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies", value: "15+" },
  { label: "Happy Clients", value: "10+" },
];

const quickLinks = [
  { icon: FiCode, label: "Frontend", desc: "React, Next.js, TypeScript", href: "/skills" },
  { icon: FiServer, label: "Backend", desc: "Node.js, Express, Python", href: "/skills" },
  { icon: FiSmartphone, label: "Mobile", desc: "React Native, Flutter", href: "/skills" },
];

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIdx];
    let i = 0;
    setDisplayed("");
    setTyping(true);
    const interval = setInterval(() => {
      if (i < role.length) {
        setDisplayed(role.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTyping(false);
        setTimeout(() => {
          setRoleIdx((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [roleIdx]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="container-max w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                Available for work
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
                Hi, I'm{" "}
                <span className="gradient-text block">Ravindu Vinoj</span>
              </h1>

              <div className="text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] mb-6 h-10">
                <span className="text-primary">{displayed}</span>
                <span className={`ml-0.5 ${typing ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
              </div>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10 max-w-xl">
                I build <span className="text-primary font-semibold">end-to-end digital products</span> — 
                from sleek frontends to robust backends. Passionate about clean code, 
                great UX, and scalable architecture.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="btn-primary flex items-center gap-2">
                  View My Work <FiArrowRight />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-outline flex items-center gap-2"
                >
                  <FiDownload /> Download CV
                </a>
              </div>
            </div>

            {/* Avatar / Visual side */}
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: "20s" }} />
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-accent/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />

                {/* Avatar circle */}
                <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center m-6 glow-blue">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 absolute" />
                  <span className="text-8xl font-black gradient-text relative z-10">RV</span>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-2 -right-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-3 py-2 text-sm font-semibold shadow-xl flex items-center gap-2">
                  <span className="text-primary">⚡</span> Next.js
                </div>
                <div className="absolute -bottom-2 -left-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-3 py-2 text-sm font-semibold shadow-xl flex items-center gap-2">
                  <span className="text-accent">🔥</span> Node.js
                </div>
                <div className="absolute top-1/2 -right-8 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-3 py-2 text-sm font-semibold shadow-xl flex items-center gap-2">
                  <span>🎨</span> React
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-[var(--border)]">
            {stats.map((s) => (
              <div key={s.label} className="text-center group">
                <div className="text-4xl font-extrabold gradient-text group-hover:scale-110 transition-transform inline-block">
                  {s.value}
                </div>
                <div className="text-sm text-[var(--text-secondary)] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick services overview */}
      <section className="section-padding bg-[var(--bg-secondary)]">
        <div className="container-max">
          <h2 className="section-title text-center">
            What I <span className="gradient-text">Do Best</span>
          </h2>
          <p className="section-subtitle text-center text-[var(--text-secondary)]">
            Full-stack capabilities from idea to deployment
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map(({ icon: Icon, label, desc, href }) => (
              <Link key={label} href={href}>
                <div className="card group hover:-translate-y-2 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-4 group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{label}</h3>
                  <p className="text-sm text-[var(--text-secondary)] font-mono">{desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline inline-flex items-center gap-2">
              View All Services <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
