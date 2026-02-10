"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by{" "}
          <a 
            className="link"
            href="https://chanhdai.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            chanhdai.com
          </a>
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link"
            href="https://github.com/yeschirag"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chirag Sharma
          </a>
        </p>

        <div className="screen-line-before screen-line-after flex w-full">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            <a
              className="flex items-center text-muted-foreground transition-[color] duration-300 hover:text-foreground py-3"
              href="https://github.com/yeschirag"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              <span className="sr-only">GitHub</span>
            </a>

            <span className="flex h-4 w-px bg-border" />

            <a
              className="flex items-center text-muted-foreground transition-[color] duration-300 hover:text-foreground py-3"
              href="https://linkedin.com/in/yeschirag"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-4" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <span className="flex h-4 w-px bg-border" />

            <a
              className="flex items-center text-muted-foreground transition-[color] duration-300 hover:text-foreground py-3"
              href="mailto:chirag.k24@iiits.in"
            >
              <Mail className="size-4" />
              <span className="sr-only">Email</span>
            </a>

            <span className="flex h-4 w-px bg-border" />

            <button
              onClick={scrollToTop}
              className="flex items-center text-muted-foreground transition-[color,scale] duration-300 ease-out hover:text-foreground active:scale-[0.9] py-3"
              aria-label="Scroll to top"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
