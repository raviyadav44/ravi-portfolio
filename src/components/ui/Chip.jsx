// A small pressable tag. `accent` sets the hover fill color so chips can match
// the color of the section/card they live in (like the Skills chips).
//   <Chip accent="yellow">DBMS</Chip>

const ACCENT = {
  blue: "hover:bg-rblue hover:text-black",
  yellow: "hover:bg-pyellow hover:text-black",
  red: "hover:bg-nred hover:text-white",
  green: "hover:bg-ggreen hover:text-black",
};

export default function Chip({ children, accent = "blue", className = "" }) {
  return (
    <button
      type="button"
      className={[
        "inline-flex items-center rounded-md border-2 border-line bg-surface px-2.5 py-1",
        "text-xs font-semibold shadow-[2px_2px_0_0_var(--shadow)] transition-all duration-100",
        "hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_0_var(--shadow)]",
        "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        ACCENT[accent] || ACCENT.blue,
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}