// Reusable section heading: bold uppercase text in a neo-brutalist accent box.
// Pops on hover like the cards. <SectionTitle color="yellow">About</SectionTitle>

const COLORS = {
  yellow: "bg-pyellow text-black",
  green: "bg-ggreen text-black",
  blue: "bg-rblue text-black",
  red: "bg-nred text-white",
};

export default function SectionTitle({ children, color = "yellow", className = "" }) {
  return (
    <h2
      className={[
        "inline-block cursor-default rounded-md border-[3px] border-line px-5 py-2.5",
        "text-2xl font-black uppercase tracking-tight sm:text-3xl",
        "shadow-[5px_5px_0_0_var(--shadow)] transition-transform duration-100",
        "hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[7px_7px_0_0_var(--shadow)]",
        COLORS[color] || COLORS.yellow,
        className,
      ].join(" ")}
    >
      {children}
    </h2>
  );
}