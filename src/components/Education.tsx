import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Indian Institute of Information Technology Sri City",
    degree: "B.Tech. in Computer Science Engineering",
    period: { start: "08.2024", end: null },
    grade: "CGPA: 8.6/10",
    location: "Chittoor, Andhra Pradesh",
  },
  {
    institution: "Shri T.P. Bhatia College of Science",
    degree: "Higher Secondary Certificate (HSC)",
    period: { start: "06.2022", end: "03.2024" },
    grade: "Percentage: 86.83%",
    location: "Kandivali, Mumbai",
  },
];

export default function Education() {
  return (
    <section className="screen-line-before screen-line-after border-x border-edge">
      <header className="screen-line-after px-4">
        <h2 className="text-3xl font-semibold">Education</h2>
      </header>
      <div>
        {education.map((edu, index) => (
          <div key={index}>
            <div className="flex items-center hover:bg-accent-muted transition-[background-color] ease-out">
              {/* Icon */}
              <div
                className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
                aria-hidden="true"
              >
                <GraduationCap className="size-4" />
              </div>

              {/* Content with dashed left border */}
              <div className="flex-1 border-l border-dashed border-edge p-4">
                <h3 className="mb-1 leading-snug font-medium text-balance">{edu.institution}</h3>
                <p className="text-sm text-muted-foreground mb-1">{edu.degree}</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-0.5">
                    <span>{edu.period.start}</span>
                    <span className="font-mono">—</span>
                    {edu.period.end ? (
                      <span>{edu.period.end}</span>
                    ) : (
                      <span className="text-info font-medium">Present</span>
                    )}
                  </span>
                  <span className="flex h-4 w-px bg-border" />
                  <span className="font-mono text-link">{edu.grade}</span>
                  <span className="flex h-4 w-px bg-border" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
            {index < education.length - 1 && (
              <div className="border-t border-edge" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
