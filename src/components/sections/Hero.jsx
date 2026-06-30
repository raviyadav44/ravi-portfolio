import { useState } from "react";
import { Mail, Download, Code2, Terminal, Save } from "lucide-react";
import { profile } from "../../data/profile";
import { useTypewriter } from "../../hooks/useTypewriter";
import PixelButton from "../ui/PixelButton";

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.79 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 3-.4c1.02 0 2.05.13 3 .4 2.28-1.53 3.29-1.21 3.29-1.21.66 1.64.25 2.86.12 3.16.77.83 1.24 1.88 1.24 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.21.68.83.56A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function IconLink({ href, label, children }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex h-11 w-11 items-center justify-center rounded-md border-[3px] border-line bg-surface text-ink shadow-[3px_3px_0_0_var(--shadow)] transition-all hover:-translate-y-[1px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
    >
      {children}
    </a>
  );
}

// A floating decorative icon: outer element bobs, inner element holds the tilt.
function FloatIcon({ className, rotate, bg, delay, children }) {
  return (
    <div
      className={`absolute z-10 hidden animate-[float_3s_ease-in-out_infinite] sm:block ${className}`}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <div className={`nb-tag ${rotate} ${bg} p-2 text-black`}>{children}</div>
    </div>
  );
}

function ProfileImage() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex aspect-[4/5] w-full items-center justify-center rounded-md bg-rblue">
        <span className="font-display text-4xl text-black/80">RY</span>
      </div>
    );
  }

  return (
    <img
      src="/images/profile.jpg"
      alt={profile.name}
      onError={() => setError(true)}
      className="aspect-[4/5] w-full rounded-md object-cover"
    />
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* ---- Left: intro ---- */}
        <div>
          <p className="mb-3 font-mono text-sm font-bold tracking-wide text-rblue">Hi there! 👋</p>

          <h1 className="font-body text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}.
          </h1>

          <p className="mt-4 flex min-h-[1.6em] items-center font-display text-base text-rblue sm:text-lg">
            <span>{typed}</span>
            <span className="cursor" aria-hidden="true" />
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-muted">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PixelButton as="a" href="#contact" variant="red">
              <Mail size={18} /> Get in touch
            </PixelButton>
            <PixelButton as="a" href={profile.links.resume} download variant="yellow">
              <Download size={18} /> Resume
            </PixelButton>

            <IconLink href={profile.links.github} label="GitHub">
              <GithubIcon size={20} />
            </IconLink>
            <IconLink href={profile.links.linkedin} label="LinkedIn">
              <LinkedinIcon size={20} />
            </IconLink>
            <IconLink href={`mailto:${profile.links.email}`} label="Email">
              <Mail size={20} />
            </IconLink>
          </div>
        </div>

        {/* ---- Right: framed avatar with floating pixel artifacts ---- */}
        <div className="relative mx-auto flex w-full max-w-sm justify-center lg:justify-end">
          <FloatIcon className="-left-4 top-8" rotate="-rotate-12" bg="bg-rblue" delay="0s">
            <Code2 size={22} />
          </FloatIcon>
          <FloatIcon className="-bottom-4 left-2" rotate="rotate-6" bg="bg-ggreen" delay="0.7s">
            <Save size={22} />
          </FloatIcon>
          <FloatIcon className="-right-4 top-4" rotate="rotate-12" bg="bg-pyellow" delay="1.3s">
            <Terminal size={22} />
          </FloatIcon>

          {/* photo frame — straightens and grows on hover */}
          <div className="nb-card w-[260px] rotate-2 bg-rblue p-2 shadow-[8px_8px_0_0_var(--shadow)] transition-all duration-200 hover:rotate-0 hover:scale-[1.03] hover:shadow-[12px_12px_0_0_var(--shadow)] sm:w-[300px]">
            <ProfileImage />
          </div>

          <div className="nb-tag absolute -bottom-3 right-2 z-10 bg-ggreen px-4 py-2 font-bold text-black sm:right-6">
            AI &amp; Data Engineer
          </div>
        </div>
      </div>
    </section>
  );
}