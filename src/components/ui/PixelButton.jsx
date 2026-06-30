// A reusable neo-brutalist button.
// Usage:
//   <PixelButton variant="red" onClick={...}>Click</PixelButton>
//   <PixelButton as="a" href="/resume.pdf" download variant="blue">Resume</PixelButton>

const VARIANTS = {
  red: "bg-nred text-white",
  green: "bg-ggreen text-black",
  yellow: "bg-pyellow text-black",
  blue: "bg-rblue text-black",
  surface: "bg-surface text-ink",
};

export default function PixelButton({
  as: Comp = "button",
  variant = "yellow",
  className = "",
  children,
  ...props
}) {
  return (
    <Comp
      className={[
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5",
        "font-body font-bold whitespace-nowrap cursor-pointer select-none",
        "border-[3px] border-line",
        "shadow-[4px_4px_0_0_var(--shadow)]",
        "transition-all duration-100",
        "hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[6px_6px_0_0_var(--shadow)]",
        "active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0_0_0_0_var(--shadow)]",
        VARIANTS[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </Comp>
  );
}