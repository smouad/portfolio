import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DATA } from "@/data/resume";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "CV",
  description: `CV of ${DATA.name}: ${DATA.cv.headline}.`,
  alternates: { canonical: "/cv" },
};

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/** Live products a recruiter can open, in the order they're most worth a click. */
const PRODUCTS = [
  { name: "Ivaluna", note: "App Store", href: "https://apps.apple.com/app/id6823245402" },
  { name: "Brainfast", note: "AI support agents", href: "https://brainfast.ai" },
  { name: "Clipaf", note: "social content", href: "https://clipaf.com" },
  { name: "Bijiao", note: "insurance & tech app", href: "https://www.bijiao.app" },
];

/** 42 Network projects that show fundamentals, each with a two-word gloss. */
const GLOSS: Record<string, string> = {
  ft_transcendence: "multiplayer web app",
  minishell: "Unix shell in C",
  cub3D: "raycaster in C",
  Inception: "Docker",
};
const FUNDAMENTALS = DATA.hackathons.filter((h) => h.title in GLOSS);

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2.5 print:gap-1.5">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground border-b pb-1">
        {title}
      </h2>
      {children}
    </section>
  );
}

const linkCls = "underline decoration-border underline-offset-2 hover:decoration-foreground";

export default function CVPage() {
  const { contact, cv } = DATA;
  return (
    <main className="flex flex-col gap-7 text-foreground print:gap-[9px] print:text-[9.5pt] print:leading-snug">
      <div className="flex items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <header className="flex flex-col gap-1.5 print:gap-0.5">
        <h1 className="text-3xl font-semibold tracking-tight print:text-[22pt]">{DATA.name}</h1>
        <p className="font-medium">{cv.headline}</p>
        <ul className="flex flex-wrap gap-x-3 gap-y-0.5 text-sm text-muted-foreground print:text-[9pt]">
          <li>{DATA.location} · Remote</li>
          <li>
            <a href={`mailto:${contact.email}`} className={linkCls}>
              {contact.email}
            </a>
          </li>
          {contact.tel && <li>{contact.tel}</li>}
          <li>
            <a href={contact.social.LinkedIn.url} className={linkCls}>
              {bare(contact.social.LinkedIn.url)}
            </a>
          </li>
          <li>
            <a href={contact.social.GitHub.url} className={linkCls}>
              {bare(contact.social.GitHub.url)}
            </a>
          </li>
          <li>
            <a href={DATA.url} className={linkCls}>
              Portfolio
            </a>
          </li>
        </ul>
      </header>

      <p className="text-sm leading-relaxed print:text-[9.5pt]">{cv.summary}</p>

      <Section title="Experience">
        <div className="flex flex-col gap-4 print:gap-2">
          {DATA.work.map((w) => (
            <article key={w.company} className="flex flex-col gap-1 break-inside-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold">
                  {w.title} <span className="font-normal text-muted-foreground">·</span> {w.company}
                </h3>
                <span className="text-xs tabular-nums text-muted-foreground whitespace-nowrap">
                  {w.start} – {w.end}
                </span>
              </div>
              {w.context && (
                <p className="text-sm text-muted-foreground print:text-[9pt]">{w.context}</p>
              )}
              <ul className="list-disc pl-4 text-sm space-y-0.5 marker:text-muted-foreground print:space-y-0 print:text-[9.5pt]">
                {w.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Live products">
        <p className="text-sm print:text-[9.5pt]">
          {PRODUCTS.map((p, i) => (
            <span key={p.name}>
              {i > 0 && <span className="text-muted-foreground"> · </span>}
              <a href={p.href} className={`font-medium ${linkCls}`}>
                {p.name}
              </a>{" "}
              <span className="text-muted-foreground">({p.note})</span>
            </span>
          ))}
        </p>
      </Section>

      <Section title="Skills">
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5 text-sm print:text-[9.5pt]">
          {cv.skills.map((g) => (
            <div key={g.group} className="contents">
              <dt className="text-muted-foreground">{g.group}</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Education">
        <div className="flex flex-col gap-1.5">
          {DATA.education.map((e) => (
            <div key={e.school} className="flex items-baseline justify-between gap-4 text-sm print:text-[9.5pt]">
              <p>
                <span className="font-semibold">{e.school}</span>
                <span className="text-muted-foreground"> · {e.degree.split(" · ")[0]}</span>
              </p>
              <span className="text-xs tabular-nums text-muted-foreground whitespace-nowrap">
                {e.start} – {e.end}
              </span>
            </div>
          ))}
          <p className="text-sm text-muted-foreground print:text-[9pt]">
            Key projects:{" "}
            {FUNDAMENTALS.map((h, i) => (
              <span key={h.title}>
                {i > 0 && ", "}
                {h.links[0] ? (
                  <a href={h.links[0].href} className={linkCls}>
                    {h.title}
                  </a>
                ) : (
                  h.title
                )}{" "}
                ({GLOSS[h.title]})
              </span>
            ))}
            .
          </p>
        </div>
      </Section>
    </main>
  );
}
