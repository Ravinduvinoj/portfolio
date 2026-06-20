"use client";

import { useState } from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheck, FiYoutube, FiFacebook } from "react-icons/fi";

const contactInfo = [
  { icon: FiMail, label: "Email", value: "ravinduvinoj.se@gmail.com", href: "mailto:ravinduvinoj.se@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+94 75 487 9867", href: "tel:+94754879867" },
  { icon: FiMapPin, label: "Location", value: "Nittambuwa, Sri Lanka", href: "https://maps.app.goo.gl/Ch9Z8S3fjtRvMiRGA" },
];

const socials = [
  { icon: FiGithub, label: "GitHub", href: "https://github.com/Ravinduvinoj", username: "@ravinduvinoj" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ravindu-wijerathna-b299b325a", username: "Ravindu Vinoj" },
  { icon: FiTwitter, label: "Twitter / X", href: "https://twitter.com/ravinduvinoj1", username: "@ravinduvinoj1" },
  { icon: FiYoutube, label: "YouTube", href: "https://www.youtube.com/@ravinduvinoj", username: "Ravindu Vinoj" },
  { icon: AiFillTikTok, label: "TikTok", href: "https://vt.tiktok.com/ZSQc6P1uY", username: "@ravinduvinoj" },
    { icon: FiFacebook, label: "Facebook / X", href: "https://www.facebook.com/ravindu.vinoj.1/", username: "@ravinduvinoj1" },
];

const services = [
  "Web Site Development",
  "Web Based System Development",
  "Mobile App",
  "E-Commerce",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// let's connect</p>
          <h1 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left – contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <h2 className="font-bold text-lg mb-6">Get in Touch</h2>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-secondary)] mb-0.5">{label}</p>
                      <p className="text-sm font-semibold group-hover:text-primary transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card">
              <h2 className="font-bold text-lg mb-5">Follow Me</h2>
              <div className="space-y-4">
                {socials.map(({ icon: Icon, label, href, username }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-secondary)] mb-0.5">{label}</p>
                      <p className="text-sm font-semibold group-hover:text-accent transition-colors">{username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse-slow mx-auto mb-3" />
              <p className="font-semibold text-sm mb-1">Available for new projects</p>
              <p className="text-xs text-[var(--text-secondary)]">Response time: within 24 hours</p>
            </div>
          </div>

          {/* Right – contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card text-center py-20">
                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                  <FiCheck size={36} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message Sent! 🎉</h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  Thanks for reaching out, <span className="text-primary font-semibold">{form.name}</span>!
                  I'll get back to you within 24 hours.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", service: "", budget: "", message: "" }); }} className="btn-outline">
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="card">
                <h2 className="font-bold text-lg mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-[var(--text-secondary)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-[var(--text-secondary)]"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                      >
                        <option value="">Select budget</option>
                        <option value="<15000">Under 15000LKR</option>
                        <option value="15000-50000">15000LKR – 50000LKR</option>
                        <option value="50000-100000">50000LKR – 100000LKR</option>
                        <option value="100000+">100000LKR+</option>
                        <option value="discuss">Let's Discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none placeholder:text-[var(--text-secondary)]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 !py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={18} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
