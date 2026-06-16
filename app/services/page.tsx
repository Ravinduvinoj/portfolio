"use client";

import Link from "next/link";
import { FiCode, FiServer, FiSmartphone, FiShoppingCart, FiRefreshCw, FiZap, FiArrowRight, FiCheck } from "react-icons/fi";

const services = [
  {
    icon: FiCode,
    title: "Frontend Development",
    tagline: "Pixel-perfect, blazing fast UIs",
    description:
      "Building responsive, accessible, and high-performance web interfaces using React, Next.js, and TypeScript. From landing pages to complex dashboards.",
    features: [
      "React & Next.js applications",
      "Responsive & mobile-first design",
      "Performance optimization (Core Web Vitals)",
      "Accessibility (WCAG 2.1 compliance)",
      "Animation & micro-interactions",
      "Component library development",
    ],
    color: "from-blue-500 to-cyan-500",
    accent: "primary",
    popular: false,
  },
  {
    icon: FiServer,
    title: "Backend Development",
    tagline: "Scalable APIs & server infrastructure",
    description:
      "Designing and building robust RESTful and GraphQL APIs, microservices, authentication systems, and cloud-native backends that scale.",
    features: [
      "Node.js / Express / NestJS APIs",
      "RESTful & GraphQL endpoints",
      "Authentication & Authorization (JWT, OAuth)",
      "Database design (SQL & NoSQL)",
      "Caching strategies with Redis",
      "WebSocket real-time systems",
    ],
    color: "from-primary to-accent",
    accent: "gradient",
    popular: true,
  },
  {
    icon: FiZap,
    title: "Full Stack Development",
    tagline: "End-to-end product ownership",
    description:
      "Taking your idea from zero to production — architecture, frontend, backend, database, deployment, and everything in between.",
    features: [
      "Full product architecture design",
      "Next.js full-stack applications",
      "Database schema & migrations",
      "CI/CD pipeline setup",
      "Cloud deployment (AWS / Vercel)",
      "Monitoring & error tracking",
    ],
    color: "from-violet-500 to-purple-500",
    accent: "accent",
    popular: false,
  },
  {
    icon: FiSmartphone,
    title: "Mobile Development",
    tagline: "Cross-platform mobile apps",
    description:
      "Building iOS and Android apps using React Native and Expo, sharing up to 90% of code across platforms without sacrificing native performance.",
    features: [
      "React Native cross-platform apps",
      "Expo managed & bare workflow",
      "Push notifications",
      "Offline-first architecture",
      "App Store & Play Store deployment",
      "Native module integration",
    ],
    color: "from-green-500 to-emerald-500",
    accent: "primary",
    popular: false,
  },
  {
    icon: FiShoppingCart,
    title: "E-Commerce Solutions",
    tagline: "Online stores that convert",
    description:
      "Custom e-commerce platforms with product management, cart, secure payments (Stripe/PayHere), order tracking, and admin dashboards.",
    features: [
      "Custom storefront (Next.js)",
      "Stripe & PayHere integration",
      "Inventory & order management",
      "SEO optimization",
      "Analytics & reporting",
      "Multi-currency support",
    ],
    color: "from-orange-500 to-amber-500",
    accent: "accent",
    popular: false,
  },
  {
    icon: FiRefreshCw,
    title: "Code Review & Consulting",
    tagline: "Expert eyes on your codebase",
    description:
      "Architecture reviews, performance audits, code quality improvements, and technical consulting to level up your team and codebase.",
    features: [
      "Code quality & architecture review",
      "Performance & security audit",
      "Tech stack consultation",
      "Refactoring legacy code",
      "Team mentoring & workshops",
      "Documentation writing",
    ],
    color: "from-pink-500 to-rose-500",
    accent: "primary",
    popular: false,
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "Understanding your goals, requirements, and constraints in detail." },
  { step: "02", title: "Planning", desc: "Architecture design, tech stack selection, and timeline estimation." },
  { step: "03", title: "Development", desc: "Iterative builds with regular demos and feedback loops." },
  { step: "04", title: "Testing", desc: "Unit tests, integration tests, and QA before any release." },
  { step: "05", title: "Deployment", desc: "CI/CD pipeline setup and cloud deployment with zero downtime." },
  { step: "06", title: "Support", desc: "Post-launch monitoring, maintenance, and feature additions." },
];

export default function Services() {
  return (
    <div className="pt-24 section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// what i offer</p>
          <h1 className="section-title">
            My <span className="gradient-text">Services</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            From solo side projects to enterprise-scale platforms — I cover the full product lifecycle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map(({ icon: Icon, title, tagline, description, features, color, popular }) => (
            <div key={title} className={`card flex flex-col hover:-translate-y-2 transition-all duration-300 relative ${popular ? "border-primary/50 glow-blue" : ""}`}>
              {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  ⭐ Most Popular
                </div>
              )}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-lg mb-1">{title}</h3>
              <p className="text-primary text-sm font-medium mb-3">{tagline}</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{description}</p>
              <ul className="space-y-2 flex-1 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <FiCheck className="text-primary mt-0.5 shrink-0" size={14} />
                    <span className="text-[var(--text-secondary)]">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-outline text-center text-sm !py-2 w-full">
                Get Started →
              </Link>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-[var(--bg-secondary)] rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-center mb-10">
            My <span className="gradient-text">Process</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="text-3xl font-black gradient-text shrink-0 w-10">{step}</div>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">
            Ready to build something <span className="gradient-text">great</span>?
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">Let's talk about your project and how I can help.</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base !px-8 !py-4">
            Start a Conversation <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
