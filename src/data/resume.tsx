import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
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
  // Canonical URL — drives metadataBase, OG tags and link previews, so it has to
  // be a URL that actually resolves. smouad.vercel.app is aliased and ready, but
  // is behind Vercel Deployment Protection; switch to it once that's disabled.
  url: "https://portfolio-khaki-sigma-j2u4qfy2z5.vercel.app",
  location: "Tetouan, Morocco",
  locationLink: "https://www.google.com/maps/place/tetouan",
  description:
    "Full-stack & AI engineer. I build multi-tenant SaaS platforms, AI agents, and video automation systems.",
  summary:
    "I build production software end to end — multi-tenant SaaS backends, AI agent platforms with vector search, video generation pipelines, and Manifest V3 browser extensions. Most of my work lives in the messy middle: queue architectures that survive retries, org-scoped permission models, and AI integrations that stay cheap at scale. I currently build insurance and fintech systems at [EvaGrupo](#work), and ship products — Brainfast, Clipaf and Pillow Tales — under [Motkan Labs](#work). I trained through the [1337 / 42 Network](#education) — no lectures, no grades, just projects reviewed by peers.",
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
    { name: "Google Gemini", icon: Sparkles }, // Dia, Video Maker, Dan.ai, Brainfast voice
    { name: "OpenAI", icon: Bot }, // embeddings pipeline in Brainfast
    { name: "Qdrant / RAG", icon: Network }, // per-tenant vector collections, semantic search
    { name: "AI SDK", icon: Triangle }, // streaming + tool calls across 100+ models in Dan.ai
    { name: "Prompt Engineering", icon: MessageSquareCode }, // system prompts, personas, cheap-classifier routing
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // Blog is wired up and ready — add .mdx files to content/ and re-enable this.
    // Worth doing: a writeup of Brainfast's multi-tenant RAG architecture is the
    // kind of thing that proves depth to a hiring manager faster than a repo link.
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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

  // Dates below are derived from commit history on GitHub, not memory:
  //   EvaGrupo     first commit 2024-09-02, latest 2026-08-12 (1,139 commits, 2 accounts)
  //   Motkan Labs  Clipaf from 2024-07-27; Brainfast from 2025-08-26; latest 2026-07-28
  // ?? Titles are still my best guess — correct any that are wrong.
  work: [
    {
      company: "EvaGrupo",
      href: "https://github.com/evagrupo",
      badges: ["Current"],
      location: "Remote",
      title: "Full-Stack Developer", // ?? confirm title
      logoUrl: "/evagrupo.png",
      start: "Sep 2024",
      end: "Present",
      // ?? Did you build the original Django version, or inherit it? Did you lead the
      // migration? "Migrated a production Django ERP to Next.js/Node" is a senior-level
      // line — tell me which is true and I'll sharpen this.
      description:
        "Build and maintain a multi-tenant ERP for insurance and fintech operations, originally built on Python/Django and since evolved onto a Next.js and Node/PostgreSQL stack. Shipped per-product partner ownership, multi-supervisor CRM assignment, scheduled-call workflows, and a product image pipeline. Also maintain seven branded sub-apps sharing one design system and API layer.",
    },
    {
      company: "Motkan Labs",
      href: "https://github.com/Motkan-labs",
      badges: ["Brainfast", "Clipaf", "Pillow Tales"],
      location: "Remote",
      title: "Founding Engineer", // ?? confirm — depends whether this is your company
      logoUrl: "/motkan.png",
      start: "Jul 2024",
      end: "Present",
      description:
        "Build the engineering behind Motkan's products. Brainfast is a multi-tenant AI chatbot platform: Bun + Hono API, BullMQ workers, Drizzle/PostgreSQL, and per-tenant Qdrant collections for semantic search, with Gemini Live voice calls, Stripe usage metering, and an embeddable Shadow-DOM widget. Clipaf turns a story prompt into a finished short-form video, backed by an AI Queue microservice — a Hono + BullMQ job system with a typed SDK, webhook callbacks, and exponential-backoff retries — fanning generation across horizontally scaled workers. Pillow Tales is a React Native bedtime-story app on iOS and Android, with Convex real-time sync, a parental gate, and subscription entitlements. Also built the multi-domain Motkan site serving three brands from one Next.js app.",
    },
    {
      company: "Freelance",
      href: "https://github.com/smouad",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "",
      start: "2024",
      end: "Present",
      description:
        "Delivered eight client projects: RefCase (sales reference-matching Chrome extension + Next.js backend with org-level RBAC), TOAD (real-time SEO auditor extension), Dia (Gemini-powered jewelry design assistant), Dan.ai (chat interface routing 100+ models), a TCF Canada learning platform, and an Instagram sync tool.",
    },
  ],

  // Bracketed from repo history: first 42 project Dec 2022, last Apr 2024.
  // ALX repos run Mar 2023 - Jul 2024.
  education: [
    {
      school: "1337 School — 42 Network",
      href: "https://1337.ma",
      degree:
        "Software Engineering · Tuition-free, project-based, peer-reviewed — no lectures, no grades",
      logoUrl: "/1337.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "ALX Africa",
      href: "https://www.alxafrica.com",
      degree: "Software Engineering Program",
      logoUrl: "/alx.png",
      start: "2023",
      end: "2024",
    },
  ],

  projects: [
    {
      title: "Brainfast",
      href: "https://brainfast.ai",
      dates: "2025 - Present",
      active: true,
      description:
        "Multi-tenant AI chatbot platform. Organizations upload documents and URLs, which a BullMQ pipeline extracts, embeds, and stores in per-tenant Qdrant collections for semantic search. Includes agent builder, Gemini Live voice calls, Stripe usage metering, and an embeddable Shadow-DOM widget.",
      technologies: [
        "Bun",
        "Hono",
        "TypeScript",
        "React 19",
        "Drizzle ORM",
        "PostgreSQL",
        "Qdrant",
        "BullMQ",
        "Redis",
        "Stripe",
      ],
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
      image: "",
      video: "",
    },
    {
      title: "Resonance",
      href: "", // TODO: real Resonance URL
      dates: "2025",
      active: true,
      description:
        "Open-source alternative to ElevenLabs: AI text-to-speech with zero-shot voice cloning powered by Chatterbox TTS running on serverless GPUs. Includes credit-based billing and a full generation history.",
      technologies: [
        "Next.js 16",
        "React 19",
        "Prisma",
        "PostgreSQL",
        "Clerk",
        "Modal GPU",
        "Polar",
      ],
      // TODO: I couldn't find Resonance on @smouad — send me the real repo URL and
      // I'll restore the Source badge. Linking your profile instead was a dead end
      // for anyone clicking it.
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Clipaf — AI Video Platform",
      href: "https://clipaf.com",
      dates: "2024 - Present", // first commit 2024-07-27, later folded into Motkan Labs
      active: true,
      description:
        "End-to-end AI video creation: a story prompt becomes a script, narration, generated imagery, and a rendered short-form video. Backed by the AI Queue microservice — a Hono + BullMQ job system with a typed SDK, webhook callbacks, and retry handling across horizontally scaled workers.",
      technologies: [
        "Next.js",
        "React",
        "Hono",
        "BullMQ",
        "Redis",
        "Remotion",
        "TypeScript",
        "Docker",
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
      image: "",
      video: "",
    },
    {
      title: "EvaGrupo ERP",
      href: "https://github.com/evagrupo",
      dates: "2024 - Present",
      active: true,
      description:
        "Multi-tenant ERP for insurance and fintech operations: CRM with lead scheduling and multi-supervisor assignment, per-product partner ownership, product catalog with image pipeline, and seven branded sub-apps sharing one backend and design system. Started life as a Python/Django application before moving to a Next.js and Node stack.",
      technologies: [
        "Python",
        "Django",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Docker",
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
        "Device-insurance product for a retail chain: a mobile app plus an internal portal where sellers enrol customers straight into the Eva ERP. Next.js server actions hold the ERP API key so it never reaches the browser, quote premiums live as the form is filled, and link policies onto an existing client when the email is already known rather than creating duplicates.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Server Actions",
        "REST API",
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
    {
      title: "Motkan — Multi-Domain Site",
      href: "https://motkan.com",
      dates: "2025 - Present",
      active: true,
      description:
        "One Next.js application serving three distinct domains with separate branding, content, and landing pages — resolved by host-based routing at the edge rather than three separate deployments.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      links: [
        {
          type: "Source",
          href: "https://github.com/smouad/motkan-site",
          icon: <Icons.github className="size-3" />,
        },
      ],
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
      title: "Video Maker — AI Story Generator",
      dates: "2025",
      location: "Python · Streamlit · Google Gemini",
      description:
        "Generates long-form calming and bedtime-story videos: AI concept, sectioned script, per-section TTS, and per-scene generated imagery, with audio and images produced in parallel under API rate limits.",
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
