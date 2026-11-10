import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DATA } from "@/data/resume";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "CV",
  description: `CV of ${DATA.name} — ${DATA.description}`,
  alternates: { canonical: "/cv" },
};

/** Markdown links in the summary point at page anchors; plain text reads better on paper. */
const plain = (md: string) => md.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3 break-inside-avoid-page">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground border-b pb-1.5">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Row({
  title,
  subtitle,
  dates,
  children,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  dates: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 break-inside-avoid">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-semibold leading-snug">{title}</h3>
        <span className="text-xs tabular-nums text-muted-foreground whitespace-nowrap">{dates}</span>
      </div>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      {children}
    </div>
  );
}

export default function CVPage() {
  const { contact } = DATA;
  return (
    <main className="flex flex-col gap-8 text-foreground print:gap-6 print:text-[10.5pt]">
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

      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">{DATA.name}</h1>
        <p className="text-muted-foreground">{DATA.description}</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <li>{DATA.location} · Remote</li>
          <li>
            <a href={`mailto:${contact.email}`} className="underline underline-offset-2">
              {contact.email}
            </a>
          </li>
          {contact.tel && <li>{contact.tel}</li>}
          <li>
            <a href={contact.social.LinkedIn.url} className="underline underline-offset-2">
              {bare(contact.social.LinkedIn.url)}
            </a>
          </li>
          <li>
            <a href={contact.social.GitHub.url} className="underline underline-offset-2">
              {bare(contact.social.GitHub.url)}
            </a>
          </li>
          <li>
            <a href={DATA.url} className="underline underline-offset-2">
              Portfolio
            </a>
          </li>
        </ul>
      </header>

      <Section title="Summary">
        <p className="text-sm leading-relaxed">{plain(DATA.summary)}</p>
      </Section>

      <Section title="Experience">
        <div className="flex flex-col gap-5">
          {DATA.work.map((w) => (
            <Row
              key={w.company}
              title={
                <>
                  {w.title} · {w.company}
                </>
              }
              subtitle={w.location}
              dates={`${w.start} – ${w.end}`}
            >
              <p className="text-sm leading-relaxed">{w.description}</p>
            </Row>
          ))}
        </div>
      </Section>

      <Section title="Selected projects">
        <div className="flex flex-col gap-5">
          {DATA.projects.map((p) => {
            const site = p.href || p.links.find((l) => l.type !== "Organization")?.href;
            return (
              <Row
                key={p.title}
                title={
                  site ? (
                    <a href={site} className="hover:underline underline-offset-2">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )
                }
                dates={p.dates}
              >
                <p className="text-sm leading-relaxed">{p.description}</p>
                <p className="text-xs text-muted-foreground">{p.technologies.join(" · ")}</p>
              </Row>
            );
          })}
        </div>
      </Section>

      <Section title="Also built">
        <ul className="grid gap-1 text-sm sm:grid-cols-2 print:grid-cols-2">
          {DATA.hackathons.map((h) => (
            <li key={h.title}>
              <span className="font-medium">{h.title}</span>{" "}
              <span className="text-muted-foreground">({h.dates})</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Education">
        <div className="flex flex-col gap-3">
          {DATA.education.map((e) => (
            <Row key={e.school} title={e.school} subtitle={e.degree} dates={`${e.start} – ${e.end}`} />
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <p className="text-sm">{DATA.skills.map((s) => s.name).join(" · ")}</p>
      </Section>
    </main>
  );
}
