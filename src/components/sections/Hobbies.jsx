import { hobbies } from "../../data/hobbies";
import SectionTitle from "../ui/SectionTitle";

export default function Hobbies() {
  return (
    <section id="hobbies" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle color="yellow">Hobbies</SectionTitle>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {hobbies.map((h) => (
          <div
            key={h.label}
            className="group nb-card flex cursor-default flex-col items-center gap-2 bg-surface p-4 transition-transform duration-150 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--shadow)]"
          >
            <span className="text-3xl transition-transform duration-150 group-hover:-rotate-12 group-hover:scale-110">
              {h.icon}
            </span>
            <span className="text-center text-xs font-bold">{h.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}