"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const skills = [
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    href: "https://en.cppreference.com/w/c",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    href: "https://isocpp.org/",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    href: "https://www.java.com/",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    href: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    href: "https://nextjs.org/",
    darkInvert: true,
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    href: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    href: "https://expressjs.com/",
    darkInvert: true,
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    href: "https://tailwindcss.com/",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    href: "https://firebase.google.com/",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    href: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    href: "https://github.com/",
    darkInvert: true,
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    href: "https://code.visualstudio.com/",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    href: "https://www.linux.org/",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    href: "https://www.figma.com/",
  },
  {
    name: "Google Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    href: "https://cloud.google.com/",
  },
  {
    name: "LaTeX",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",
    href: "https://www.latex-project.org/",
    darkInvert: true,
  },
  {
    name: "MATLAB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
    href: "https://www.mathworks.com/products/matlab.html",
  },
  {
    name: "Canva",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    href: "https://www.canva.com/",
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="screen-line-before screen-line-after border-x border-edge"
    >
      <header className="screen-line-after px-4">
        <h2 className="text-3xl font-semibold">Stack</h2>
      </header>
      <div className="p-4">
        <ul className="flex flex-wrap gap-4 select-none">
          {skills.map((skill) => (
            <li key={skill.name} className="flex">
              <a
                href={skill.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={skill.name}
                className="relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={32}
                  height={32}
                  className={`transition-[transform,filter] duration-200 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(100,100,255,0.25)] ${
                    skill.darkInvert ? "dark:invert" : ""
                  }`}
                  unoptimized
                />
                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute -top-11 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                    >
                      <div className="px-2.5 py-1 text-xs font-mono font-medium bg-foreground text-background rounded-md shadow-lg whitespace-nowrap">
                        {skill.name}
                      </div>
                      {/* Arrow pointing down */}
                      <div className="flex justify-center -mt-[3px]">
                        <div className="size-2 rotate-45 bg-foreground rounded-[1px]" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
