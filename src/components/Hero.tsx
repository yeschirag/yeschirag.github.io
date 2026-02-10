"use client";

import { useState, useEffect } from "react";
import { 
  Code2, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Link as LinkIcon,
  BadgeCheck
} from "lucide-react";

const TITLES = [
  "Software Developer",
  "Tech Enthusiast",
  "Problem Solver"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* Profile Header */}
      <div className="screen-line-after flex flex-row border-x border-edge">
        {/* Avatar */}
        <div className="shrink-0 border-r border-edge">
          <div className="mx-0.5 my-0.75">
            <div className="size-24 sm:size-40 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <img 
                src="/chirag.png" 
                alt="Chirag" 
                className="w-full h-full"
                style={{ objectFit: 'cover', objectPosition: 'center 45%', transform: 'scale(1.2)' }}
              />
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <div className="flex flex-1 flex-col min-w-0">
          <div className="flex grow items-end pb-1 pl-4">
            <div className="line-clamp-1 font-mono text-xs text-zinc-300 dark:text-zinc-800 select-none hidden sm:block">
              text-3xl font-semibold tracking-tight
            </div>
          </div>
          <div className="border-t border-edge">
            <div className="flex items-center gap-2 pl-3 sm:pl-4 group/name">
              <h1 className="-translate-y-px text-xl sm:text-3xl font-semibold tracking-tight transition-[color] duration-200 group-hover/name:text-foreground truncate">
                Chirag Sharma
              </h1>
              <BadgeCheck className="size-4 sm:size-4.5 text-info flex-shrink-0 select-none transition-transform duration-200 group-hover/name:scale-110" aria-label="Verified" />
            </div>
            <div className="h-8 sm:h-9 border-t border-edge py-1 pl-3 sm:pl-4">
              <p 
                className={`font-mono text-[11px] sm:text-sm text-muted-foreground text-balance transition-all duration-300 ${
                  isAnimating ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
                }`}
                style={{ transform: "translateY(-1px)" }}
              >
                {TITLES[titleIndex]}
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
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm rounded-lg px-2 -mx-2 py-1.5 sm:py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background mt-0.5 sm:mt-0">
              <Code2 className="size-4" />
            </div>
            <p className="leading-relaxed sm:leading-normal">Junior Teaching Assistant @ IIIT Sri City (DSA Spring 2026)</p>
          </div>

          {/* Row 2 — Education */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm rounded-lg px-2 -mx-2 py-1.5 sm:py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background mt-0.5 sm:mt-0">
              <GraduationCap className="size-4" />
            </div>
            <p className="leading-relaxed sm:leading-normal">
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
          <div className="relative grid gap-x-4 gap-y-2 sm:gap-y-2.5 sm:grid-cols-2 before:absolute before:top-0 before:left-[calc(50%-0.5rem-1px)] before:-z-10 before:h-full before:border-r before:border-edge/50 max-sm:before:content-none">
            <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm rounded-lg px-2 -mx-2 py-1.5 sm:py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
                <MapPin className="size-4" />
              </div>
              <a 
                href="https://maps.google.com/?q=Mumbai,India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 hover:underline truncate"
              >
                Mumbai, India
              </a>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm rounded-lg px-2 -mx-2 py-1.5 sm:py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
                <Phone className="size-4" />
              </div>
              <a 
                href="tel:+919321174407"
                className="font-medium underline-offset-4 hover:underline truncate"
              >
                +91 9321174407
              </a>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm rounded-lg px-2 -mx-2 py-1.5 sm:py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
                <Mail className="size-4" />
              </div>
              <a 
                href="mailto:chirag.k24@iiits.in"
                className="font-medium underline-offset-4 hover:underline truncate"
              >
                chirag.k24@iiits.in
              </a>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm rounded-lg px-2 -mx-2 py-1.5 sm:py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
                <LinkIcon className="size-4" />
              </div>
              <a 
                href="https://github.com/yeschirag" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 hover:underline truncate"
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
