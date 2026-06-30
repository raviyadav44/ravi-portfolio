import { education } from "../../data/education";
import SectionTitle from "../ui/SectionTitle";
import Chip from "../ui/Chip";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle color="yellow">Education</SectionTitle>

      <div className="relative mt-8 pl-8">
        <div className="absolute bottom-2 left-[11px] top-2 w-[3px] bg-line opacity-30" />

        {education.map((e, i) => (
          <div key={i} className="relative mb-7 last:mb-0">
            <span className="absolute -left-8 top-4 h-5 w-5 rounded-full border-[3px] border-line bg-pyellow" />

            <article className="nb-card bg-surface p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-bold">{e.degree}</h3>
                {e.period && (
                  <span className="nb-tag bg-rblue px-3 py-1 font-mono text-xs font-bold text-black">
                    {e.period}
                  </span>
                )}
              </div>

              {(e.specialization || e.institution) && (
                <p className="mt-1 font-mono text-sm text-muted">
                  {[e.specialization, e.institution].filter(Boolean).join(" — ")}
                </p>
              )}
              {e.affiliation && <p className="font-mono text-xs text-muted">{e.affiliation}</p>}

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
                {e.cgpa && (
                  <span>
                    &#9733; {e.cgpa.includes("%") ? "Score" : "CGPA"}:{" "}
                    <span className="font-bold text-ink">{e.cgpa}</span>
                  </span>
                )}
                {e.location && <span>&#128205; {e.location}</span>}
              </div>

              {e.coursework && e.coursework.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.coursework.map((c) => (
                    <Chip key={c} accent="yellow">
                      {c}
                    </Chip>
                  ))}
                </div>
              )}

              <div className="mt-4">
                <span className="nb-tag bg-ggreen px-2 py-1 font-mono text-[10px] font-bold text-black">
                  LEVEL CLEARED &#10003;
                </span>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}