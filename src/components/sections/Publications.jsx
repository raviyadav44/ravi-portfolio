import { ExternalLink } from "lucide-react";
import { publications } from "../../data/publications";
import SectionTitle from "../ui/SectionTitle";

const SPINES = ["bg-rblue", "bg-pyellow", "bg-nred", "bg-ggreen"];

export default function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle color="yellow">Publications</SectionTitle>

      {publications.length === 0 ? (
        <p className="mt-6 text-muted">More writing coming soon.</p>
      ) : (
        <div className="mt-8 space-y-4">
          {publications.map((pub, i) => (
            <a
              key={i}
              href={pub.url}
              target="_blank"
              rel="noreferrer"
              className="group nb-card flex items-stretch overflow-hidden bg-surface transition-transform duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0_0_var(--shadow)]"
            >
              {/* book spine */}
              <div className={`w-3 shrink-0 border-r-[3px] border-line ${SPINES[i % SPINES.length]}`} />

              <div className="flex flex-1 items-center justify-between gap-4 p-5">
                <div className="min-w-0">
                  <span className="nb-tag inline-block bg-pyellow px-2 py-0.5 font-mono text-[10px] font-bold text-black">
                    {pub.platform}
                  </span>
                  <h3 className="mt-2 font-bold leading-snug">{pub.title}</h3>
                </div>

                <span className="flex shrink-0 items-center gap-1.5 font-mono text-xs font-bold text-rblue">
                  Read <ExternalLink size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}