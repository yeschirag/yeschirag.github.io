export default function About() {
  return (
    <section id="about" className="screen-line-before screen-line-after border-x border-edge">
      <header className="screen-line-after px-4">
        <h2 className="text-3xl font-semibold">About</h2>
      </header>
      <div className="p-4">
        <div className="prose prose-sm max-w-none font-mono text-foreground">
          <ul className="space-y-3 list-none pl-0">
            <li className="flex gap-3">
              <span className="text-muted-foreground flex-shrink-0">•</span>
              <span>
                <strong className="font-medium">Software Developer</strong> and Computer Science student at IIIT Sri City with a passion for building impactful applications.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground flex-shrink-0">•</span>
              <span>
                Skilled in <strong className="font-medium">Next.js</strong>, <strong className="font-medium">React</strong>, <strong className="font-medium">JavaScript</strong>, and modern web technologies; building user-centric web applications.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground flex-shrink-0">•</span>
              <span>
                Currently serving as <strong className="font-medium">Junior Teaching Assistant</strong> for Data Structures & Algorithms, helping students build strong programming foundations.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground flex-shrink-0">•</span>
              <span>
                Active member of <strong className="font-medium">Google Developer Groups (GDG)</strong> and <strong className="font-medium">Gradient Programming Club</strong>, contributing to technical events and competitive programming contests.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground flex-shrink-0">•</span>
              <span>
                Creator of{" "}
                <a 
                  href="https://ghost-collab.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  Ghost-Collab
                </a>
                : A student collaboration platform for discovering projects and collaborators.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground flex-shrink-0">•</span>
              <span>
                Completed <strong className="font-medium">Google Generative AI Study Jam</strong> certification and secured <strong className="font-medium">Top 10</strong> in TechSprint 3.0 Hackathon.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
