import { profile } from "../../data/profile";
import SectionTitle from "../ui/SectionTitle";

function Stat({ label, value, full }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <div className="font-mono text-[11px] uppercase tracking-wider text-muted">{label}</div>
      <div className="mt-1 font-bold">{value}</div>
    </div>
  );
}

export default function About() {
  const p = profile.playerInfo;

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle color="yellow">About</SectionTitle>

      <div className="nb-card mt-6 bg-surface p-6 sm:p-8">
        <div className="font-display text-[11px] tracking-wider text-rblue">&#9656; PLAYER INFO</div>

        <p className="mt-4 max-w-3xl leading-relaxed text-ink">
          {profile.summary}
          <span
            className="ml-1 inline-block animate-[blink_1s_steps(1)_infinite] text-rblue"
            aria-hidden="true"
          >
            &#9662;
          </span>
        </p>

        <div className="mt-7 grid gap-x-10 gap-y-5 border-t-[3px] border-line pt-6 sm:grid-cols-2">
          <Stat label="Name" value={profile.name} />
          <Stat label="Class" value={profile.roles[0]} />
          <Stat label="Level" value={p.level} />
          <Stat label="Location" value={profile.location} />
          <Stat label="Favorite Weapon" value={p.favoriteWeapon} />
          <Stat label="Current Quest" value={p.currentQuest} full />
        </div>
      </div>
    </section>
  );
}