"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Code2, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Link as LinkIcon,
  BadgeCheck
} from "lucide-react";

export default function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setLogoVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div>
      {/* Cover Pattern — Chánh Đại style */}
      <div className="aspect-[2/1] sm:aspect-[3/1] border-x border-edge select-none flex items-center justify-center screen-line-before screen-line-after hero-cover bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)] bg-[length:10px_10px] bg-center [--pattern-fg:theme(colors.zinc.950/5%)] dark:[--pattern-fg:theme(colors.white/5%)]">
        <div
          ref={logoRef}
          className={`relative inline-block transition-[opacity,transform] duration-300 ease-out ${
            logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 200 100" 
            className="h-14 w-28 sm:h-16 sm:w-32 text-foreground"
          >
            <path 
              fill="currentColor" 
              d="M0,0 H80 V20 H20 V80 H80 V100 H0 Z M120,0 H200 V20 H140 V40 H200 V100 H120 V80 H180 V60 H120 Z"
            />
          </svg>
        </div>
      </div>

      {/* Profile Header */}
      <div className="screen-line-after flex border-x border-edge">
        {/* Avatar */}
        <div className="shrink-0 border-r border-edge">
          <div className="mx-0.5 my-0.75">
            <div className="size-30 sm:size-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ring-1 ring-border ring-offset-2 ring-offset-background flex items-center justify-center text-4xl sm:text-5xl font-bold text-white select-none transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              CS
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <div className="flex flex-1 flex-col">
          <div className="flex grow items-end pb-1 pl-4">
            <div className="line-clamp-1 font-mono text-xs text-zinc-300 dark:text-zinc-800 select-none hidden sm:block">
              text-3xl font-semibold tracking-tight
            </div>
          </div>
          <div className="border-t border-edge">
            <div className="flex items-center gap-2 pl-4 group/name">
              <h1 className="-translate-y-px text-3xl font-semibold tracking-tight transition-[color] duration-200 group-hover/name:text-foreground">
                Chirag Sharma
              </h1>
              <BadgeCheck className="size-4.5 text-info flex-shrink-0 select-none transition-transform duration-200 group-hover/name:scale-110" aria-label="Verified" />
            </div>
            <div className="h-12.5 sm:h-9 border-t border-edge py-1 pl-4">
              <p className="font-mono text-sm text-muted-foreground text-balance" style={{ transform: "translateY(-1px)" }}>
                Software Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stripe Divider */}
      <div className="relative flex h-8 w-full border-x border-edge stripe-pattern" />

      {/* Overview Section */}
      <section className="screen-line-before screen-line-after border-x border-edge">
        <h2 className="sr-only">Overview</h2>
        <div className="p-4 space-y-2.5">
          {/* Row 1 — Job */}
          <div className="flex items-center gap-4 font-mono text-sm rounded-lg px-2 -mx-2 py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
              <Code2 className="size-4" />
            </div>
            <p>Software Developer</p>
          </div>

          {/* Row 2 — Education */}
          <div className="flex items-center gap-4 font-mono text-sm rounded-lg px-2 -mx-2 py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
              <GraduationCap className="size-4" />
            </div>
            <p>
              B.Tech CSE @{" "}
              <a 
                href="https://iiits.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 hover:underline"
              >
                IIIT Sri City
              </a>
              <span className="text-muted-foreground ml-2">// CGPA: 8.6</span>
            </p>
          </div>

          {/* Grid for location, contact etc */}
          <div className="relative grid gap-x-4 gap-y-2.5 sm:grid-cols-2 before:absolute before:top-0 before:left-[calc(50%-0.5rem-1px)] before:-z-10 before:h-full before:border-r before:border-edge/50 max-sm:before:content-none">
            <div className="flex items-center gap-4 font-mono text-sm rounded-lg px-2 -mx-2 py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
                <MapPin className="size-4" />
              </div>
              <a 
                href="https://maps.google.com/?q=Mumbai,India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 hover:underline"
              >
                Mumbai, India
              </a>
            </div>

            <div className="flex items-center gap-4 font-mono text-sm rounded-lg px-2 -mx-2 py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
                <Phone className="size-4" />
              </div>
              <a 
                href="tel:+919321174407"
                className="font-medium underline-offset-4 hover:underline"
              >
                +91 9321174407
              </a>
            </div>

            <div className="flex items-center gap-4 font-mono text-sm rounded-lg px-2 -mx-2 py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
                <Mail className="size-4" />
              </div>
              <a 
                href="mailto:chirag.k24@iiits.in"
                className="font-medium underline-offset-4 hover:underline"
              >
                chirag.k24@iiits.in
              </a>
            </div>

            <div className="flex items-center gap-4 font-mono text-sm rounded-lg px-2 -mx-2 py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
                <LinkIcon className="size-4" />
              </div>
              <a 
                href="https://github.com/yeschirag" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 hover:underline"
              >
                github.com/yeschirag
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
