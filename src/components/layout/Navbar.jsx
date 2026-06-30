import { useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { profile } from "../../data/profile";
import { useTheme } from "../../hooks/useTheme";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Blogs", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const squareBtn =
  "inline-flex h-10 w-10 items-center justify-center rounded-md border-[3px] border-black " +
  "bg-white text-black shadow-[3px_3px_0_0_#141414] transition-all " +
  "hover:-translate-y-[1px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-pyellow text-black shadow-[0_5px_0_0_#141414]">
      <nav className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        {/* Logo */}
        <a
          href="#home"
          className="rounded-md border-2 border-black bg-white px-3 py-1.5 font-mono text-sm font-bold text-black shadow-[2px_2px_0_0_#141414] transition-transform duration-100 hover:scale-105"
        >
          Ravi.exe
        </a>

        {/* Desktop links — enlarge on hover (no underline) */}
        <ul className="ml-2 hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-block rounded-md px-3 py-2 text-sm font-bold text-black transition-transform duration-100 hover:scale-110"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2">
          <a
            href={profile.links.resume}
            download
            className="hidden items-center gap-2 rounded-md border-[3px] border-black bg-rblue px-4 py-2 text-sm font-bold text-black shadow-[3px_3px_0_0_#141414] transition-all hover:-translate-y-[1px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none lg:inline-flex"
          >
            <Download size={16} /> Resume
          </a>

          <button onClick={toggle} className={squareBtn} aria-label="Toggle light / dark theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className={`${squareBtn} lg:hidden`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t-[3px] border-black bg-pyellow lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-black/15 py-3 font-bold text-black"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={profile.links.resume}
                download
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-md border-[3px] border-black bg-rblue px-4 py-2 text-sm font-bold text-black shadow-[3px_3px_0_0_#141414]"
              >
                <Download size={16} /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}