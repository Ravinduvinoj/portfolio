"use client";

import { useState } from "react";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";

const filters = ["All", "Web App", "Mobile", "API", "Open Source"];

const projects = [
  {
    title: "DevCollab – Real-time Code Editor",
    description: "A collaborative code editor supporting 10+ languages with live cursors, syntax highlighting, video chat, and room-based sessions.",
    tags: ["Next.js", "Socket.io", "Monaco Editor", "WebRTC", "Redis", "Docker"],
    category: "Web App",
    featured: true,
    github: "https://github.com/ravinduvinoj/devcollab",
    live: "https://devcollab.vercel.app",
    emoji: "💻",
    gradient: "from-blue-500/20 to-purple-500/20",
    stars: 128,
  },
  {
    title: "ShopEasy – E-Commerce Platform",
    description: "Full-featured e-commerce platform with product management, cart, Stripe payments, order tracking, and admin dashboard.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind", "JWT"],
    category: "Web App",
    featured: true,
    github: "https://github.com/ravinduvinoj/shopeasy",
    live: "https://shopeasy-demo.vercel.app",
    emoji: "🛒",
    gradient: "from-green-500/20 to-teal-500/20",
    stars: 95,
  },
  {
    title: "TaskFlow – Project Management App",
    description: "Kanban-style project management tool with drag-and-drop, team collaboration, notifications, and time tracking.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"],
    category: "Web App",
    featured: true,
    github: "https://github.com/ravinduvinoj/taskflow",
    live: "https://taskflow-app.vercel.app",
    emoji: "📋",
    gradient: "from-orange-500/20 to-red-500/20",
    stars: 73,
  },
  {
    title: "FitTrack – Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans, calorie counter, progress charts, and social challenges.",
    tags: ["React Native", "Expo", "Firebase", "Redux", "Chart.js"],
    category: "Mobile",
    featured: false,
    github: "https://github.com/ravinduvinoj/fittrack",
    live: null,
    emoji: "💪",
    gradient: "from-pink-500/20 to-rose-500/20",
    stars: 45,
  },
  {
    title: "WeatherAPI Wrapper",
    description: "A clean RESTful API wrapper around multiple weather data sources with caching, rate limiting, and TypeScript SDK.",
    tags: ["Node.js", "Express", "TypeScript", "Redis", "OpenAPI"],
    category: "API",
    featured: false,
    github: "https://github.com/ravinduvinoj/weather-api",
    live: "https://weather-api-docs.vercel.app",
    emoji: "🌤️",
    gradient: "from-sky-500/20 to-blue-500/20",
    stars: 62,
  },
  {
    title: "react-smooth-carousel",
    description: "Lightweight, zero-dependency React carousel library with touch support, lazy loading, and full accessibility.",
    tags: ["React", "TypeScript", "npm", "Jest", "Rollup"],
    category: "Open Source",
    featured: false,
    github: "https://github.com/ravinduvinoj/react-smooth-carousel",
    live: "https://www.npmjs.com/package/react-smooth-carousel",
    emoji: "🎠",
    gradient: "from-violet-500/20 to-indigo-500/20",
    stars: 187,
  },
  {
    title: "AI Resume Analyzer",
    description: "Upload a resume and job description — AI scores match %, suggests improvements, and rewrites bullet points.",
    tags: ["Next.js", "OpenAI API", "Tailwind", "pdf-parse", "Vercel AI SDK"],
    category: "Web App",
    featured: false,
    github: "https://github.com/ravinduvinoj/ai-resume",
    live: "https://ai-resume-lk.vercel.app",
    emoji: "🤖",
    gradient: "from-amber-500/20 to-orange-500/20",
    stars: 54,
  },
  {
    title: "QuickPay – Payment Gateway API",
    description: "Unified payment gateway API abstracting Stripe, PayHere, and PayPal with webhook handling and transaction logs.",
    tags: ["Node.js", "TypeScript", "Stripe", "PostgreSQL", "Docker"],
    category: "API",
    featured: false,
    github: "https://github.com/ravinduvinoj/quickpay",
    live: null,
    emoji: "💳",
    gradient: "from-emerald-500/20 to-green-500/20",
    stars: 38,
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const featured = projects.filter((p) => p.featured);

  return (
    <div className="pt-24 section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// what i've built</p>
          <h1 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            A selection of projects that showcase my skills across frontend, backend, mobile, and open source.
          </p>
        </div>

        {/* Featured */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FiStar className="text-accent" /> Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <div
                key={p.title}
                className={`card bg-gradient-to-br ${p.gradient} border-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col`}
              >
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="font-bold text-base mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="tag text-xs">+{p.tags.length - 3}</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-[var(--text-secondary)]">
                    <FiStar size={13} className="text-accent" /> {p.stars}
                  </div>
                  <div className="flex gap-3">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-primary transition-colors">
                      <FiGithub size={18} />
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-accent transition-colors">
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                active === f
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                  : "border-[var(--border)] text-[var(--text-secondary)] hover:border-primary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* All projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="card hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{p.emoji}</span>
                <div className="flex gap-2">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-primary transition-colors">
                    <FiGithub size={16} />
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-accent transition-colors">
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="font-bold text-sm mb-2 leading-snug">{p.title}</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3 flex-1 line-clamp-3">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="tag text-xs !px-2 !py-0.5">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                <FiStar size={11} className="text-accent" /> {p.stars} stars
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
