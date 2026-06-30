import { Database, Brain, Workflow, BarChart3, Server, Sparkles } from "lucide-react";
import { skills } from "../../data/skills";
import SectionTitle from "../ui/SectionTitle";

const CATEGORY_ICONS = {
  "Languages & Databases": Database,
  "AI & ML": Brain,
  "Automation & Data": Workflow,
  "Visualization & Frameworks": BarChart3,
  "Platforms & DevOps": Server,
};

// Each accent maps to: the top-bar color + the chip hover-fill (+ readable text on hover)
const ACCENTS = [
  { bar: "bg-rblue", hover: "hover:bg-rblue", hoverText: "hover:text-black" },
  { bar: "bg-pyellow", hover: "hover:bg-pyellow", hoverText: "hover:text-black" },
  { bar: "bg-nred", hover: "hover:bg-nred", hoverText: "hover:text-white" },
  { bar: "bg-ggreen", hover: "hover:bg-ggreen", hoverText: "hover:text-black" },
];

function XpBar({ level }) {
  return (
    <div className="h-3 w-full overflow-hidden rounded-sm border-2 border-line bg-black/10 dark:bg-white/15">
      <div
        className="h-full bg-rblue"
        style={{
          width: `${level * 10}%`,
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(0,0,0,0.18) 6px, rgba(0,0,0,0.18) 8px)",
        }}
      />
    </div>
  );
}

// A pressable skill chip that fills with its parent card's color on hover.
function SkillTag({ children, accent }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center rounded-md border-2 border-line bg-surface px-2.5 py-1 text-xs font-semibold shadow-[2px_2px_0_0_var(--shadow)] transition-all duration-100 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_0_var(--shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${accent.hover} ${accent.hoverText}`}
    >
      {children}
    </button>
  );
}

function SkillCard({ group, accent }) {
  const Icon = CATEGORY_ICONS[group.category] || Sparkles;
  const leveled = group.items.some((it) => typeof it.level === "number");

  return (
    <article className="nb-card group overflow-hidden bg-surface transition-transform duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[9px_9px_0_0_var(--shadow)]">
      <div className={`h-2 ${accent.bar}`} />
      <div className="p-5">
        <div className="flex items-center gap-2">
          <Icon size={20} />
          <h3 className="text-sm font-black uppercase tracking-tight">{group.category}</h3>
        </div>

        <div className="my-3 h-[2px] bg-line opacity-20" />

        {leveled ? (
          <div className="space-y-3">
            {group.items.map((it) => (
              <div key={it.name}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-semibold">{it.name}</span>
                  <span className="font-mono text-xs text-muted">LV {it.level}</span>
                </div>
                <XpBar level={it.level} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {group.items.map((it) => (
              <SkillTag key={it.name} accent={accent}>
                {it.name}
              </SkillTag>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle color="yellow">Skills</SectionTitle>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <SkillCard key={group.category} group={group} accent={ACCENTS[i % ACCENTS.length]} />
        ))}
      </div>
    </section>
  );
}