"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
    else setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ravindu Vinoj | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer portfolio of Ravindu Vinoj" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar dark={dark} setDark={setDark} />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
