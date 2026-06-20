"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/career", label: "Career" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (v: boolean) => void;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-[var(--bg)]/80 border-b border-[var(--border)] shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/avatar.jpg"
            alt="Ravindu Vinoj"
            className="w-9 h-9 rounded-xl shadow-lg object-cover group-hover:scale-110 transition-transform"
          />
          <span className="font-bold text-lg hidden sm:block">
            <span className="text-primary">Ravindu</span>
            {/* <span className="text-accent"> Wijerathna</span> */}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-[var(--text-secondary)] hover:text-primary ${
                pathname === link.href ? "!text-primary font-semibold" : ""
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-xl flex items-center justify-center border border-[var(--border)] bg-[var(--bg-card)] hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Toggle theme"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <Link href="/contact" className="hidden md:block btn-primary text-sm !py-2 !px-4">
            Hire Me
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center border border-[var(--border)] bg-[var(--bg-card)] hover:border-primary transition-all"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--bg-card)] border-b border-[var(--border)] shadow-xl py-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-[var(--border)] last:border-0 transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-[var(--text-secondary)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
