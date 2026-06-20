import Link from "next/link";
import { AiFillTikTok } from "react-icons/ai";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiYoutube } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: "https://github.com/Ravinduvinoj", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/ravindu-wijerathna-b299b325a", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com/ravinduvinoj1", label: "Twitter" },
  { icon: AiFillTikTok, href: "https://vt.tiktok.com/ZSQc6P1uY", label: "TikTok" },
  { icon: FiYoutube, href: "https://www.youtube.com/@ravinduvinoj", label: "YouTube" },
  { icon: FiMail, href: "mailto:ravinduvinoj.se@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-12">
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-bold mb-1">
              <span className="text-primary">Ravindu</span>
              <span className="text-accent"> Wijerathna</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">Associate Software Engineer · Sri Lanka</p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border)] text-[var(--text-secondary)] hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-[var(--text-secondary)]">
          <p>© {new Date().getFullYear()} Ravindu Wijerathna. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-primary font-medium">Next.js</span> &{" "}
            {/* <span className="text-accent font-medium">Tailwind CSS</span> */}
          </p>
        </div>
      </div>
    </footer>
  );
}
