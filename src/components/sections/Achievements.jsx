import { achievements } from "../../data/achievements";
import SectionTitle from "../ui/SectionTitle";

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle color="yellow">Achievements</SectionTitle>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="nb-card flex items-center gap-4 bg-surface p-4 transition-transform duration-150 hover:-translate-y-1 hover:shadow-[7px_7px_0_0_var(--shadow)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border-[3px] border-line bg-pyellow text-2xl">
              {a.icon}
            </div>
            <div className="min-w-0">
              <span className="inline-block rounded-sm border-2 border-line bg-ggreen px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-black">
                Unlocked
              </span>
              <div className="mt-1 font-bold leading-snug">{a.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}