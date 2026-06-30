import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience } from "../../data/experience";
import SectionTitle from "../ui/SectionTitle";
import Chip from "../ui/Chip";

const ACCENTS = ["blue", "yellow", "red", "green"];

function QuestCard({ job, accent }) {
  const [open, setOpen] = useState(job.current);

  return (
    <article className="nb-card bg-surface">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div className="min-w-0">
          <span
            className={`nb-tag inline-block px-2 py-0.5 font-mono text-[10px] font-bold text-black ${
              job.current ? "bg-pyellow" : "bg-ggreen"
            }`}
          >
            {job.current ? "\u2691 ACTIVE QUEST" : "\u2691 QUEST COMPLETED"}
          </span>
          <h3 className="mt-2 text-lg font-bold">
            {job.role} &mdash; {job.company}
          </h3>
          <p className="font-mono text-xs text-muted">
            {job.period} &middot; {job.location}
          </p>
        </div>
        <ChevronDown
          size={22}
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="border-t-[3px] border-line p-5">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted">
            Responsibilities
          </div>
          <ul className="space-y-2">
            {job.responsibilities.map((r, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-rblue" aria-hidden="true" />
                <span>{r}</span>
              </li>
            ))}
          </ul>

          <div className="mb-2 mt-5 font-mono text-[11px] uppercase tracking-wider text-muted">
            Technologies
          </div>
          <div className="flex flex-wrap gap-2">
            {job.technologies.map((t) => (
              <Chip key={t} accent={accent}>
                {t}
              </Chip>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle color="yellow">Experience</SectionTitle>

      <div className="mt-8 flex flex-col gap-5">
        {experience.map((job, i) => (
          <QuestCard key={i} job={job} accent={ACCENTS[i % ACCENTS.length]} />
        ))}
      </div>
    </section>
  );
}