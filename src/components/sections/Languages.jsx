import { languages } from "../../data/languages";
import SectionTitle from "../ui/SectionTitle";

function LevelBlocks({ level, learning }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1">
      {Array.from({ length: 10 }).map((_, i) => {
        const filled = i < level;
        const next = learning && i === level;
        return (
          <span
            key={i}
            className={`h-4 w-4 rounded-[2px] border-2 border-line ${
              filled
                ? "bg-ggreen"
                : next
                ? "animate-[blink_1s_steps(1)_infinite] bg-pyellow"
                : "bg-transparent"
            }`}
          />
        );
      })}
    </div>
  );
}

export default function Languages() {
  return (
    <section id="languages" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle color="yellow">Languages</SectionTitle>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {languages.map((lang) => (
          <div key={lang.name} className="nb-card bg-surface p-5">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-bold">{lang.name}</h3>
              <span className="font-mono text-xs text-muted">LV {lang.level}</span>
            </div>
            <LevelBlocks level={lang.level} learning={lang.learning} />
            {lang.learning && (
              <p className="mt-3 font-mono text-xs text-muted">Currently learning &#127471;&#127477;</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}