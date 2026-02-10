import { AwardIcon, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Generative AI Certification",
    description: "Completed Google Study Jam",
    link: "https://www.cloudskillsboost.google/public_profiles/your-profile",
    linkText: "View Profile",
    date: "2025",
  },
  {
    title: "TechSprint 3.0 Hackathon",
    description: "Secured Top 10 position among all teams",
    organization: "GDG IIITS",
    link: null,
    linkText: null,
    date: "2025",
  },
];

export default function Achievements() {
  return (
    <section className="screen-line-before screen-line-after border-x border-edge">
      <header className="screen-line-after px-4">
        <h2 className="text-3xl font-semibold">
          Honors & Awards
          <sup className="-top-[0.75em] ml-1 text-sm font-medium text-muted-foreground tabular-nums select-none">
            ({achievements.length})
          </sup>
        </h2>
      </header>
      <div>
        {achievements.map((achievement, index) => (
          <div key={index}>
            <div className="flex items-center hover:bg-accent-muted transition-[background-color] ease-out">
              {/* Icon */}
              <div
                className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background"
                aria-hidden
              >
                <AwardIcon className="pointer-events-none size-4" />
              </div>

              {/* Content with dashed left border */}
              <div className="flex-1 border-l border-dashed border-edge">
                <div className="flex w-full items-center gap-2 p-4 pr-2 text-left">
                  <div className="flex-1">
                    <h3 className="mb-1 leading-snug font-medium text-balance">
                      {achievement.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                      <span>{achievement.description}</span>
                      {achievement.organization && (
                        <>
                          <span className="flex h-4 w-px bg-border" />
                          <span>{achievement.organization}</span>
                        </>
                      )}
                      <span className="flex h-4 w-px bg-border" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>

                  {achievement.link && (
                    <a
                      className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground transition-colors"
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="pointer-events-none size-4" />
                      <span className="sr-only">{achievement.linkText}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            {index < achievements.length - 1 && (
              <div className="border-t border-edge" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
