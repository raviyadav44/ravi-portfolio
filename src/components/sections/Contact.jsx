import { useState } from "react";
import { Mail, Download, ArrowUpRight, MapPin, Send } from "lucide-react";
import { profile } from "../../data/profile";
import SectionTitle from "../ui/SectionTitle";

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.79 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 3-.4c1.02 0 2.05.13 3 .4 2.28-1.53 3.29-1.21 3.29-1.21.66 1.64.25 2.86.12 3.16.77.83 1.24 1.88 1.24 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.21.68.83.56A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const VARIANT_COLORS = {
  blue: "bg-rblue text-black",
  yellow: "bg-pyellow text-black",
  green: "bg-ggreen text-black",
  red: "bg-nred text-white",
};

function SocialButton({ href, variant, icon, label, download }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`flex items-center gap-3 rounded-md border-[3px] border-line px-4 py-3 font-bold shadow-[4px_4px_0_0_var(--shadow)] transition-all duration-100 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[6px_6px_0_0_var(--shadow)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none ${VARIANT_COLORS[variant]}`}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex-1">{label}</span>
      <ArrowUpRight size={18} />
    </a>
  );
}

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const inputClass =
  "w-full rounded-md border-[3px] border-line bg-bg px-3 py-2 text-sm text-ink placeholder:text-muted focus:outline-none";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="nb-card flex flex-col items-center justify-center gap-3 bg-surface p-8 text-center">
        <div className="text-4xl">&#127881;</div>
        <p className="font-display text-sm">MESSAGE SENT!</p>
        <p className="text-sm text-muted">Thanks &mdash; I&rsquo;ll get back to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-1 font-mono text-xs font-bold text-rblue underline underline-offset-4"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="nb-card bg-surface p-6"
    >
      {/* Netlify needs these to route the submission */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="font-mono text-[11px] uppercase tracking-wider text-muted">Send a message</div>

      <div className="mt-4 space-y-3">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className={inputClass}
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className={inputClass}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Message…"
          className={`${inputClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm font-semibold text-nred">
          Something went wrong — please try again, or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border-[3px] border-line bg-nred px-4 py-2.5 font-bold text-white shadow-[4px_4px_0_0_var(--shadow)] transition-all duration-100 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[6px_6px_0_0_var(--shadow)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:opacity-60"
      >
        <Send size={16} /> {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle color="red">Contact</SectionTitle>

      <p className="mt-4 font-display text-sm text-rblue">&#9733; THE END &#9733;</p>
      <p className="mt-2 text-muted">Let&rsquo;s build something amazing together.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Left: links + location */}
        <div>
          <div className="space-y-3">
            <SocialButton
              href={profile.links.linkedin}
              variant="blue"
              icon={<LinkedinIcon />}
              label="LinkedIn"
            />
            <SocialButton
              href={profile.links.github}
              variant="yellow"
              icon={<GithubIcon />}
              label="GitHub"
            />
            <SocialButton
              href={`mailto:${profile.links.email}`}
              variant="green"
              icon={<Mail size={18} />}
              label="Email"
            />
            <SocialButton
              href={profile.links.resume}
              variant="red"
              icon={<Download size={18} />}
              label="Resume"
              download
            />
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} /> {profile.location}
          </div>
        </div>

        {/* Right: form */}
        <ContactForm />
      </div>
    </section>
  );
}