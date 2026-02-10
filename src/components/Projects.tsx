import { ArrowUpRight, BoxIcon, LinkIcon } from "lucide-react";

const projects = [
  {
    title: "Ghost-Collab",
    description: "A student-first collaboration platform enabling users to discover projects and collaborators based on skills, roles, and availability.",
    tech: ["Next.js", "Tailwind CSS", "Express", "Firebase", "Firestore"],
    liveUrl: "https://ghost-collab.vercel.app",
    period: { start: "2025", end: null },
    features: [
      "Project-based matching system with transparent match percentage logic using skill overlap, time commitment, and interest vectors",
      "Secure university-only authentication with builder-focused profiles",
      "Innovation board for structured project discovery",
    ],
  },
  {
    title: "Spendi",
    description: "A responsive frontend web application for group expense management, enabling balance tracking, settlements, and transaction history.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://spendi.vercel.app",
    period: { start: "2025", end: "2025" },
    features: [
      "Real-time expense calculations with partial settlements and filtering",
      "Modular JavaScript with local storage persistence",
      "Clean, mobile-friendly UI with dark/light mode",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="screen-line-before screen-line-after border-x border-edge">
      <header className="screen-line-after px-4">
        <h2 className="text-3xl font-semibold">
          Projects
          <sup className="-top-[0.75em] ml-1 text-sm font-medium text-muted-foreground tabular-nums select-none">
            ({projects.length})
          </sup>
        </h2>
      </header>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex items-center hover:bg-accent-muted transition-[background-color] ease-out">
              {/* Icon */}
              <div
                className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
                aria-hidden="true"
              >
                <BoxIcon className="size-4" />
              </div>

              {/* Content area with dashed left border */}
              <div className="flex-1 border-l border-dashed border-edge">
                <div className="flex w-full items-center gap-2 p-4 pr-2 text-left">
                  <div className="flex-1">
                    <h3 className="mb-1 leading-snug font-medium text-balance">
                      {project.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      <span className="flex items-center gap-0.5">
                        <span>{project.period.start}</span>
                        {project.period.end !== project.period.start && (
                          <>
                            <span className="font-mono">—</span>
                            {project.period.end ? (
                              <span>{project.period.end}</span>
                            ) : (
                              <span className="text-info font-medium">Present</span>
                            )}
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {project.liveUrl && (
                    <a
                      className="group/link relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground transition-[color,scale] duration-200 active:scale-90"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkIcon className="pointer-events-none size-4" />
                      <span className="sr-only">Open Project Link</span>
                      {/* Instant tooltip */}
                      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background shadow-lg whitespace-nowrap opacity-0 scale-95 transition-[opacity,transform] duration-150 group-hover/link:opacity-100 group-hover/link:scale-100">
                        Open Project Link
                        <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-foreground" />
                      </span>
                    </a>
                  )}
                </div>

                {/* Expanded content */}
                <div className="px-4 pb-4 -mt-1">
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-border mt-0.5 flex-shrink-0">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 text-xs font-mono bg-zinc-50 dark:bg-zinc-900 text-muted-foreground rounded-lg border transition-[background-color,color] duration-200 hover:bg-accent hover:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {index < projects.length - 1 && (
              <div className="border-t border-edge" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
