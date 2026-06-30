import { profile } from "../../data/profile";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t-[3px] border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <p className="font-display text-base">THANKS FOR PLAYING!</p>
        <p className="mt-3 text-sm text-muted">
          Made with <span className="text-nred">&hearts;</span> by {profile.name}
        </p>
        <button
          onClick={scrollTop}
          className="mt-5 inline-flex items-center gap-2 rounded-md border-[3px] border-line bg-pyellow px-4 py-2 text-sm font-bold text-black shadow-[4px_4px_0_0_var(--shadow)] transition-all duration-100 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[6px_6px_0_0_var(--shadow)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
        >
          &#9654; Press Start Again
        </button>
      </div>
    </footer>
  );
}