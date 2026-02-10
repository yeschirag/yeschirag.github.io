"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Stack", href: "#skills" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2">
      <div className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 after:z-[1] after:transition-[background-color] sm:gap-4 md:max-w-3xl">
        {/* Logo */}
        <Link 
          href="/" 
          className="transition-[scale] ease-out active:scale-[0.98]"
          aria-label="Home"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 200 100" 
            className="h-8 text-foreground"
          >
            <path 
              fill="currentColor" 
              d="M0,0 H80 V20 H20 V80 H80 V100 H0 Z M120,0 H200 V20 H140 V40 H200 V100 H120 V80 H180 V60 H120 Z"
            />
          </svg>
        </Link>

        <div className="flex-1" />

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-4">
          {NAV_ITEMS.map(({ title, href }) => (
            <Link 
              key={href}
              href={href} 
              className="font-mono text-sm font-medium text-muted-foreground transition-[color] duration-300 hover:text-foreground"
            >
              {title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <a
            href="https://github.com/yeschirag"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-[background-color,scale] ease-out hover:bg-accent size-8 text-muted-foreground hover:text-accent-foreground active:scale-[0.98] select-none outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </a>

          <span className="mx-2 flex h-4 w-px bg-border" />

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden inline-flex items-center justify-center rounded-lg size-8 hover:bg-accent transition-[background-color,scale] ease-out text-muted-foreground hover:text-accent-foreground active:scale-[0.98] ml-1 select-none outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            aria-label="Toggle Menu"
          >
            {/* Animated hamburger bars */}
            <div className="relative flex size-4 flex-col items-center justify-center">
              <span
                className={`absolute h-[1.5px] w-3.5 rounded-full bg-current transition-all duration-200 ease-out ${
                  isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-3.5 rounded-full bg-current transition-all duration-200 ease-out ${
                  isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-[3px]"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="sm:hidden overflow-hidden border-t border-edge"
          >
            <div className="flex flex-col gap-1 py-3 px-4">
              {NAV_ITEMS.map(({ title, href }) => (
                <Link 
                  key={href}
                  href={href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="font-mono text-sm font-medium text-muted-foreground hover:text-foreground transition-[color] duration-300 py-2"
                >
                  {title}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
