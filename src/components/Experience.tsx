"use client";

import { useState } from "react";
import { Briefcase, Calendar, Code2, Users, PenTool, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    title: "Junior Teaching Assistant",
    subtitle: "Data Structures & Algorithms (C Lab)",
    company: "Indian Institute of Information Technology Sri City",
    companyUrl: "https://iiits.ac.in",
    period: { start: "01.2026", end: null },
    isCurrentEmployer: true,
    icon: Code2,
    description: [
      "Assisted junior students during DSA lab sessions using C language, focusing on implementation of core data structures and algorithmic logic.",
      "Guided students to build strong DSA foundations, improving their problem-solving approach and coding.",
      "Debugged C programs and resolved logical, memory, and runtime errors, mentoring students on clean coding and complexity awareness.",
    ],
    skills: ["C", "Data Structures", "Algorithms", "Mentoring"],
  },
  {
    title: "AIML / DS Core",
    subtitle: null,
    company: "Google Developer Groups (GDG), IIIT Sri City",
    companyUrl: "https://gdg.community.dev",
    period: { start: "09.2025", end: null },
    isCurrentEmployer: true,
    icon: Users,
    description: [
      "Conducted technical events and hands-on sessions, introducing students to full-stack development workflows.",
      "Built responsive frontend interfaces and integrated them with backend systems for functional applications.",
      "Deployed projects and supported students in debugging, deployment, and real-world development practices.",
    ],
    skills: ["Full-Stack", "React", "Events", "Deployment"],
  },
  {
    title: "Problem Setter",
    subtitle: null,
    company: "Gradient, IIIT Sri City - Programming Club",
    companyUrl: null,
    period: { start: "08.2025", end: null },
    isCurrentEmployer: true,
    icon: PenTool,
    description: [
      "Conducted competitive programming contests and supported the execution of structured coding events.",
      "Designed high-quality DSA problems focusing on logic building, edge cases, and constraints.",
      "Helped participants understand efficient solutions and strengthened their DSA fundamentals.",
    ],
    skills: ["DSA", "Problem Design", "Competitive Programming"],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="screen-line-before screen-line-after border-x border-edge">
      <header className="screen-line-after px-4">
        <h2 className="text-3xl font-semibold">Experience</h2>
      </header>
      <div className="pr-2 pl-4">
        {experiences.map((exp, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div key={index} className="screen-line-after space-y-4 py-4">
              {/* Company header */}
              <div className="flex items-center gap-3 rounded-lg px-2 -mx-2 py-1 transition-[background-color] duration-200 hover:bg-accent-muted">
                <div className="flex size-6 shrink-0 items-center justify-center select-none">
                  <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                </div>
                <h3 className="text-lg leading-snug font-semibold">
                  {exp.companyUrl ? (
                    <a
                      className="underline-offset-4 hover:underline"
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                {exp.isCurrentEmployer && (
                  <span className="relative flex items-center justify-center">
                    <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
                    <span className="relative inline-flex size-2 rounded-full bg-info" />
                    <span className="sr-only">Current</span>
                  </span>
                )}
              </div>

              {/* Position with timeline connector */}
              <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
                <div className="relative">
                  {/* Clickable role header with chevron */}
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="relative z-10 mb-1 flex w-full items-center gap-3 cursor-pointer group"
                  >
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background">
                      <exp.icon className="size-4" />
                    </div>
                    <h4 className="flex-1 font-medium text-balance text-left">
                      {exp.title}
                      {exp.subtitle && (
                        <span className="block text-sm font-normal text-muted-foreground">{exp.subtitle}</span>
                      )}
                    </h4>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex size-6 shrink-0 items-center justify-center text-muted-foreground"
                    >
                      <ChevronDown className="size-4" />
                    </motion.div>
                  </button>

                  <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                    <span>{exp.period.start}</span>
                    <span className="font-mono">—</span>
                    {exp.period.end ? (
                      <span>{exp.period.end}</span>
                    ) : (
                      <span className="text-info font-medium">Present</span>
                    )}
                  </div>

                  {/* Skills tags (always visible) */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pl-9">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-1.5 py-0.5 text-xs font-mono bg-zinc-50 dark:bg-zinc-900 text-muted-foreground rounded-lg border transition-[background-color,color] duration-200 hover:bg-accent hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Collapsible description */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 pl-9">
                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                <span className="text-border mt-1.5 flex-shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
