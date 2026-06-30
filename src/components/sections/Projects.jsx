import { useState } from "react";
import { ExternalLink, BookOpen, Gamepad2 } from "lucide-react";
import { projects } from "../../data/projects";
import SectionTitle from "../ui/SectionTitle";
import Chip from "../ui/Chip";

const ACCENTS = [
  { bg: "bg-rblue", key: "blue" },
  { bg: "bg-pyellow", key: "yellow" },
  { bg: "bg-nred", key: "red" },
  { bg: "bg-ggreen", key: "green" },
];

const ACTION_ACCENT = {
  blue: "hover:bg-rblue hover:text-black",
  yellow: "hover:bg-pyellow hover:text-black",
  red: "hover:bg-nred hover:text-white",
  green: "hover:bg-ggreen hover:text-black",
};

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.79 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 3-.4c1.02 0 2.05.13 3 .4 2.28-1.53 3.29-1.21 3.29-1.21.66 1.64.25 2.86.12 3.16.77.83 1.24 1.88 1.24 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.21.68.83.56A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
    </svg>
  );
}

function ActionLink({ href, accent, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-md border-2 border-line bg-surface px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0_0_var(--shadow)] transition-all duration-100 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_0_var(--shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
        ACTION_ACCENT[accent] || ACTION_ACCENT.blue
      }`}
    >
      {children}
    </a>
  );
}

function ProjectImage({ src, title, accentBg }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className={`flex h-40 items-center justify-center border-b-[3px] border-line ${accentBg}`}>
        <Gamepad2 size={40} className="text-black/70" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      onError={() => setError(true)}
      className="h-40 w-full border-b-[3px] border-line object-cover"
    />
  );
}

function ProjectCard({ project, accent }) {
  return (
    <article className="nb-card group overflow-hidden bg-surface transition-transform duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[9px_9px_0_0_var(--shadow)]">
      <div className="flex items-center gap-1 border-b-[3px] border-line bg-black/5 px-3 py-1.5 dark:bg-white/5">
        <span className="h-2 w-8 rounded-sm bg-black/25 dark:bg-white/25" />
        <span className="h-2 w-4 rounded-sm bg-black/15 dark:bg-white/15" />
      </div>

      <ProjectImage src={project.image} title={project.title} accentBg={accent.bg} />

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold">{project.title}</h3>
          {project.featured && (
            <span className="nb-tag shrink-0 bg-pyellow px-2 py-0.5 text-[10px] font-bold text-black">
              &#9733; FEATURED
            </span>
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Chip key={s} accent={accent.key} className="px-2 py-0.5 text-[11px]">
              {s}
            </Chip>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.github && (
            <ActionLink href={project.github} accent={accent.key}>
              <GithubIcon /> Code
            </ActionLink>
          )}
          {project.demo && (
            <ActionLink href={project.demo} accent={accent.key}>
              <ExternalLink size={15} /> Demo
            </ActionLink>
          )}
          {project.caseStudy && (
            <ActionLink href={project.caseStudy} accent={accent.key}>
              <BookOpen size={15} /> Case
            </ActionLink>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle color="yellow">Projects</SectionTitle>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} accent={ACCENTS[i % ACCENTS.length]} />
        ))}
      </div>
    </section>
  );
}