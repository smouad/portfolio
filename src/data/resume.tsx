import { Icons } from "@/components/icons";
import {
  HomeIcon,
  FileText,
  Sparkles,
  Bot,
  Network,
  MessageSquareCode,
  Triangle,
  Smartphone,
} from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Django } from "@/components/ui/svgs/django";

export const DATA = {
  name: "Mouad Sodor",
  initials: "MS",
  // Canonical URL: drives metadataBase, OG tags, sitemap and the CV link.
  url: "https://msodor.dev",
  location: "Tetouan, Morocco",
  languages: ["Arabic", "English", "French", "Spanish"],
  locationLink: "https://www.google.com/maps/place/tetouan",
  description:
    "Full-stack & AI engineer. I build multi-tenant SaaS platforms, AI agents, and video automation systems.",
  summary:
    "I ship production software end to end — NestJS and Hono backends, Next.js web apps and React Native mobile apps, all in TypeScript. At [EvaGrupo](#work) I build the multi-tenant ERP behind an insurance and fintech group: a predictive dialer for its call centre, a partner portal for retail chains, and the access rules that keep each partner's data its own. As co-founder of [Motkan Labs](#work) I shipped Ivaluna, a baby-care app on the App Store, and built billing and the embeddable chat widget for Brainfast, an AI agent platform. I'm also a student at [1337 / 42 Network](#education): no lectures and no grades, just projects reviewed by peers.",
  avatarUrl: "/me.jpg", // pulled from your GitHub avatar
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "React Native", icon: Smartphone }, // Pillow Tales, shipped iOS + Android
    { name: "Python", icon: Python },
    { name: "Django", icon: Django }, // original EvaGrupo ERP backend
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    // AI — each of these is backed by shipped work, not tutorials:
    { name: "Google Gemini", icon: Sparkles }, // Dia, Dan.ai, Brainfast voice
    { name: "OpenAI", icon: Bot }, // embeddings pipeline in Brainfast
    { name: "Qdrant / RAG", icon: Network }, // per-tenant vector collections, semantic search
    { name: "AI SDK", icon: Triangle }, // streaming + tool calls across 100+ models in Dan.ai
    { name: "Prompt Engineering", icon: MessageSquareCode }, // system prompts, personas, cheap-classifier routing
  ],
  // Recruiter-facing CV (/cv). Short on purpose: one page, every line a result.
  cv: {
    headline: "Full-Stack Engineer · TypeScript, Node.js, React, React Native",
    summary:
      "Full-stack engineer with 2+ years shipping production systems for an insurance and fintech group and for my own SaaS products. I own features end to end: database schema, API, web and mobile UI, then the release. Most at home where business rules get hard: telephony, billing, multi-tenant access control.",
    skills: [
      { group: "Programming", items: ["TypeScript", "JavaScript", "Python", "SQL", "C", "Swift (widgets)"] },
      { group: "Backend", items: ["Node.js", "NestJS", "Hono", "Bun", "PostgreSQL", "Drizzle ORM", "Redis", "BullMQ", "Django"] },
      { group: "Frontend & mobile", items: ["React", "Next.js", "TanStack Query", "Tailwind CSS", "React Native", "Expo", "Capacitor"] },
      { group: "AI & media", items: ["Claude API", "OpenAI", "Google Gemini", "Vercel AI SDK", "Qdrant / RAG", "Remotion"] },
      { group: "Infra & tools", items: ["Docker", "Vercel", "Cloudflare R2", "Git", "Jest"] },
      { group: "Spoken", items: ["Arabic (native)", "English (fluent)", "French (conversational)", "Spanish (conversational)"] },
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/cv", icon: FileText, label: "CV" },
    // Blog is wired up and ready — add .mdx files to content/ and re-enable this.
    // Worth doing: a writeup of Brainfast's multi-tenant RAG architecture is the
    // kind of thing that proves depth to a hiring manager faster than a repo link.
    // { href: "/blog", icon: NotebookIcon, label: "Blog" }, (import NotebookIcon)
  ],
  contact: {
    email: "sodormouad@gmail.com",
    tel: "", // TODO: add your phone number, or leave blank to hide
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/smouad",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/msodor",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sodormouad@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // Titles and dates confirmed by Mouad, and mirrored on LinkedIn:
  //   EvaGrupo    Backend Developer Jul-Oct 2024, then Software Engineer Nov 2024-
  //   Motkan Labs Co-founder & AI Engineer, Jun 2025-
  //   Freelance   Jan 2025-
  work: [
    {
      company: "EvaGrupo",
      href: "https://github.com/evagrupo",
      badges: ["Current"],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/evagrupo.png",
      start: "Jul 2024",
      end: "Present",
      description:
        "Multi-tenant ERP and consumer apps for an insurance and fintech group. Joined as a Backend Developer and was promoted to Software Engineer after four months. NestJS, Drizzle and PostgreSQL behind a Next.js front end.",
      // From erp-backend / erp-frontend / apps-frontend history.
      context: "Insurance and fintech group. Promoted from Backend Developer after four months. NestJS, Drizzle, PostgreSQL, Next.js.", // one line on the CV
      highlights: [
        "Built the call centre's predictive dialer on the Netelip telephony API (customer-first calling, pacing, instant connect, agent fallback) and the screens agents and managers run it from.",
        "Built the K-TUIN partner portal: a partner-branded CRM scoped to each company, per-product partner ownership, an Eva Protect sales dashboard and a partner API.",
        "Tightened CRM access control (multiple supervisors per user, call logs scoped to the reporting line, read-only observers) and closed a leak that exposed partner dashboards and lead analytics.",
        "Shipped absence coverage, so agents can work an absent colleague's leads and the sale is credited to whoever closes it, plus lead scheduling and status history.",
        "Built the car quotation and reservation flow in the shared mobile platform (React Native, Expo), which runs the car shop in Bijiao and Estibadores, and shipped Bijiao's Chinese-language edition.",
      ],
    },
    {
      company: "Motkan Labs",
      href: "https://github.com/Motkan-labs",
      badges: ["Ivaluna", "Brainfast", "Clipaf"],
      location: "Remote",
      title: "Co-founder & AI Engineer",
      logoUrl: "/motkan.png",
      start: "Jun 2025",
      end: "Present",
      description:
        "Product studio I co-founded. We build and run our own products: Ivaluna (baby sleep tracker), Brainfast (AI agents for customer support), Clipaf (autonomous social content) and Pillow Tales (bedtime stories).",
      // From brainfast and clipaf repo history.
      context: "Product studio I co-founded to build and run our own SaaS products.", // one line on the CV
      highlights: [
        "Ivaluna: built and shipped a baby sleep tracker for iPhone, iPad and Apple Watch (React, Capacitor, Swift widgets, Hono), with family sharing, a Claude-powered assistant and six languages.",
        "Brainfast: built prepaid-wallet billing on Dodo Payments that charges AI usage pay-as-you-go to sub-cent precision and resyncs subscriptions after checkout and plan changes.",
        "Brainfast: built the embeddable chat widget with live customisation and the agent-builder onboarding.",
        "Clipaf: built the Remotion templates for its first short-form formats (Reddit stories, animated text chats), with emoji and font loading, asset preloading and R2 deploys.",
        "Pillow Tales: shipped a React Native bedtime-story app for iOS and Android with Convex sync and subscriptions.",
      ],
    },
    {
      company: "Freelance",
      href: "https://github.com/smouad",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "",
      start: "Jan 2025",
      end: "Present",
      description:
        "Eight client projects delivered end to end, from browser extensions to AI products.",
      context: "", // one line on the CV
      highlights: [
        "RefCase: a Chrome extension and Next.js backend that matches sales teams to customer reference cases, with CSV import, faceted filters, AI matching and organisation-level permissions.",
        "Dan.ai: chat across 100+ models with the Vercel AI SDK and per-token cost tracking. Also Dia (a Gemini design assistant) and TOAD (an SEO audit extension).",
      ],
    },
  ],

  // 1337: enrolled Aug 2022, still ongoing (confirmed by Mouad, matches LinkedIn).
  // ALX confirmed by Mouad: 1-year program starting Feb 2023.
  education: [
    {
      school: "1337 School — 42 Network",
      href: "https://1337.ma",
      degree:
        "Software Engineering · Tuition-free, project-based, peer-reviewed — no lectures, no grades",
      logoUrl: "/1337.png",
      start: "Aug 2022",
      end: "Present",
    },
    {
      school: "ALX Africa",
      href: "https://www.alxafrica.com",
      degree: "Software Engineering Program",
      logoUrl: "/alx.png",
      start: "Feb 2023",
      end: "Feb 2024",
    },
  ],

  projects: [
    {
      title: "Ivaluna",
      href: "https://ivaluna.motkan.com",
      dates: "2026 - Present",
      active: true,
      description:
        "Baby sleep and care tracker I built and shipped to the App Store for iPhone, iPad and Apple Watch. One-tap logging for 15 activities with live timers, next-nap estimates, WHO growth percentiles and a PDF report for the paediatrician, plus real-time sharing between caregivers and Lulu, a Claude-powered assistant. Includes widgets, Live Activities and the Dynamic Island, six languages including Arabic (right-to-left), RevenueCat subscriptions and signed over-the-air updates.",
      technologies: [
        "React",
        "Vite",
        "Capacitor",
        "Swift",
        "Hono",
        "SQLite",
        "RevenueCat",
        "Claude API",
      ],
      links: [
        {
          type: "Website",
          href: "https://ivaluna.motkan.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/app/id6823245402",
          icon: <Smartphone className="size-3" />,
        },
      ],
      image: "/projects/ivaluna-poster.jpg",
      video: "/projects/ivaluna.mp4",
    },
    {
      title: "Brainfast",
      href: "https://brainfast.ai",
      dates: "2025 - Present",
      active: true,
      description: 
        "AI agent platform for customer support. Teams upload documents and URLs; a BullMQ pipeline extracts and embeds them into per-tenant Qdrant collections, and agents answer on the web, WhatsApp and voice. I built the prepaid-wallet billing on Dodo Payments (pay-as-you-go AI usage with sub-cent precision) and the embeddable chat widget with live customisation.",
      technologies: [
        "Bun",
        "Hono",
        "TypeScript",
        "React 19",
        "Drizzle ORM",
        "PostgreSQL",
        "Qdrant",
        "BullMQ",
        "Dodo Payments",
      ],
      // Product demo pulled from the Brainfast landing page hero (Mux asset).
      // Mux MP4 renditions are disabled on that asset, so this is the animated
      // GIF rendition. Swap to an MP4 in `video` if renditions get enabled.
      // Repo is private, so no "Source" badge — the live product is the proof.
      links: [
        {
          type: "Website",
          href: "https://brainfast.ai",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Organization",
          href: "https://github.com/Motkan-labs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/brainfast-demo.gif",
      video: "",
    },
    {
      title: "Clipaf",
      href: "https://clipaf.com",
      dates: "2024 - Present", // first commit 2024-07-27, later folded into Motkan Labs
      active: true,
      description: 
        "Autonomous content platform: give it a brief and it makes the videos, images and captions, plans the week and posts to Instagram, TikTok, YouTube, LinkedIn, Facebook and X, tailoring each post per channel and tracking every delivery. I built the Remotion templates behind its first short-form formats (Reddit stories and animated text-message chats), with font and emoji loading, asset preloading and R2 deploys, then added captions and transcription to its story studio.",
      technologies: [
        "Remotion",
        "React",
        "TypeScript",
        "Cloudflare R2",
        "Bun",
        "Hono",
        "BullMQ",
      ],
      links: [
        {
          type: "Website",
          href: "https://clipaf.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Organization",
          href: "https://github.com/clipaf",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/clipaf-poster.jpg",
      video: "/projects/clipaf.mp4",
    },
    {
      title: "Bijiao",
      href: "https://www.bijiao.app",
      dates: "2026 - Present",
      active: true,
      // Contributions per apps-frontend history: car quotation flow in both
      // editions, full Chinese UI + catalog localisation for bijiao-zh.
      description:
        "Consumer app for EvaGrupo that puts a Xiaomi store, Eva Protect device insurance, insurance and mobile/fibre plans, and everyday services in one place — shipped on iOS, Android and the web, plus a separate Chinese-language edition. Built on the team's white-label Expo platform, where each brand is a feature manifest over shared modules. I built the car quotation and reservation flow, which the platform shares with Estibadores, and localised the Chinese edition's interface and product catalog.",
      technologies: [
        "React Native",
        "Expo Router",
        "React Native Web",
        "TypeScript",
        "TanStack Query",
        "Zustand",
        "i18next",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.bijiao.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/es/app/bijiao/id6768951308",
          icon: <Smartphone className="size-3" />,
        },
      ],
      image: "/projects/bijiao-poster.jpg",
      video: "/projects/bijiao.mp4",
    },
    {
      title: "Estibadores",
      href: "https://estibadores.app",
      dates: "2026 - Present",
      active: true,
      description:
        "Branded member app on the same EvaGrupo platform: Eva Protect device insurance, life, home and health cover, a Xiaomi store with instalment payments, and mobile and fibre plans — all contracted digitally from the phone. Its car shop runs on the car quotation and reservation flow I built in the platform's shared cars module.",
      technologies: [
        "React Native",
        "Expo Router",
        "React Native Web",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://estibadores.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/es/app/estibadores/id6815605852",
          icon: <Smartphone className="size-3" />,
        },
      ],
      image: "/projects/estibadores-poster.jpg",
      video: "/projects/estibadores.mp4",
    },
    {
      title: "EvaGrupo ERP",
      href: "https://github.com/evagrupo",
      dates: "2024 - Present",
      active: true,
      description: 
        "Multi-tenant ERP that runs an insurance and fintech group: CRM, call centre, partners, products and policies, plus seven branded sub-apps on one API. My parts: a predictive dialer on the Netelip telephony API, the K-TUIN partner portal, absence coverage for agents, and access rules that scope every lead, call log and dashboard to the right company and reporting line.",
      technologies: [
        "NestJS",
        "Next.js",
        "TypeScript",
        "Drizzle ORM",
        "PostgreSQL",
        "BullMQ",
        "Redis",
        "TanStack Query",
      ],
      links: [
        {
          type: "Website",
          href: "https://evagrupo.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Organization",
          href: "https://github.com/evagrupo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Pillow Tales",
      href: "", // private repo — Organization badge below instead
      dates: "2025 - Present",
      active: true,
      description:
        "Bedtime-story mobile app for iOS and Android. Convex powers real-time sync across devices; a parental gate guards purchases and settings. Subscription billing with entitlement checks, narrated stories with audio playback, reading-progress tracking, a rewards system, and story sharing — plus an in-app account-deletion flow for App Store compliance.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Convex",
        "Dodo Payments",
        "expo-audio",
      ],
      links: [
        {
          type: "Organization",
          href: "https://github.com/Motkan-labs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "K-TUIN Protect",
      href: "",
      dates: "2025 - 2026",
      active: false,
      description: 
        "Device-insurance programme EvaGrupo runs with the K-TUIN retail chain: sellers enrol customers in-store and policies land in the ERP. I built the partner side of the ERP: a K-TUIN-branded CRM scoped to the partner, an Eva Protect sales dashboard for partner staff, per-product partner ownership, consent-based lead matching, and a partner API for lead comments and scheduling.",
      technologies: [
        "NestJS",
        "Next.js",
        "TypeScript",
        "Drizzle ORM",
        "PostgreSQL",
      ],
      links: [
        {
          type: "K-TUIN",
          href: "https://ktuin.es",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "RefCase",
      href: "", // private client work — no public destination
      dates: "2025",
      active: true,
      description:
        "Chrome extension and Next.js backend that helps sales teams find the right customer reference case. CSV ingestion with merge-or-replace, dynamic faceted filters, AI-powered case matching, and organization-level RBAC with bearer-token auth for the extension.",
      technologies: [
        "Plasmo",
        "React 19",
        "TypeScript",
        "Next.js 16",
        "Drizzle ORM",
        "PostgreSQL",
        "Better Auth",
        "Zustand",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],

  // Repurposed: this renders as the "Also built" timeline at the bottom of the page.
  hackathons: [
    {
      title: "TOAD — SEO Auditor Extension",
      dates: "2025",
      location: "Chrome Extension · Plasmo, React 19, TypeScript",
      description:
        "Real-time on-page SEO audit: heading hierarchy, meta and Open Graph tags, JSON-LD schema validation, and image/link checks, with a health score and social preview. A full typed rewrite of a legacy vanilla-JS extension.",
      image: "",
      links: [],
    },
    {
      title: "Dia — Jewelry Design Assistant",
      dates: "2025",
      location: "Next.js · Google Gemini",
      description:
        "Email-gated engagement-ring designer. Customers describe a piece, Gemini generates design options, and the result is handed off to the jeweler as a structured order.",
      image: "",
      links: [],
    },
    {
      title: "Dan.ai — Multi-Model Chat",
      dates: "2025",
      location: "Next.js 15 · Vercel AI SDK",
      description:
        "Chat interface routing across 100+ models from Anthropic, OpenAI, Google, Meta, and Mistral, with streaming responses, reasoning display, source citations, file attachments, and per-token cost tracking.",
      image: "",
      links: [],
    },
    {
      title: "The Buzz — Booking Platform",
      dates: "2025",
      location: "Next.js · Drizzle · Neon PostgreSQL",
      description:
        "Two independent frontend designs sharing a single backend and database, letting the client A/B an entire product experience without forking the API.",
      image: "",
      links: [],
    },
    {
      title: "ft_transcendence",
      dates: "2024",
      location: "1337 / 42 Network · Team project",
      description:
        "Real-time multiplayer Pong platform with matchmaking, live chat, OAuth, and tournaments — built as a team across a full-stack codebase.",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/42-teamprojects/ft_transcendence",
        },
      ],
    },
    {
      title: "minishell",
      dates: "2023",
      location: "1337 / 42 Network · C",
      description:
        "A Unix shell in C: lexer and parser, pipelines, redirections, environment expansion, signal handling, and built-ins — no external parsing libraries.",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/smouad/minishell",
        },
      ],
    },
    {
      title: "cub3D",
      dates: "2023",
      location: "1337 / 42 Network · C",
      description:
        "A raycasting engine in C rendering a textured first-person maze from a 2D map, written from scratch against a minimal graphics library.",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/smouad/cub3d",
        },
      ],
    },
    {
      title: "Inception",
      dates: "2024",
      location: "1337 / 42 Network · Docker",
      description:
        "A multi-service infrastructure built from scratch with Docker Compose: NGINX with TLS, WordPress via PHP-FPM, and MariaDB, each in its own container with persistent volumes and an isolated network.",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/smouad/inception",
        },
      ],
    },
  ],
} as const;
