import { DATA } from "@/data/resume";

/** schema.org Person — lets search engines show a proper profile card. */
export function personJsonLd() {
  const current = DATA.work.filter((w) => w.end === "Present");
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    image: new URL(DATA.avatarUrl, DATA.url).toString(),
    email: `mailto:${DATA.contact.email}`,
    jobTitle: current[0]?.title,
    worksFor: current.map((w) => ({ "@type": "Organization", name: w.company })),
    description: DATA.description,
    address: { "@type": "PostalAddress", addressLocality: "Tetouan", addressCountry: "MA" },
    alumniOf: DATA.education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.school,
      url: e.href,
    })),
    knowsAbout: DATA.skills.map((s) => s.name),
    sameAs: [DATA.contact.social.GitHub.url, DATA.contact.social.LinkedIn.url],
  };
}
