import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitHubContributions from "@/components/GitHubContributions";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

function Separator() {
  return (
    <div className="relative flex h-8 w-full border-x border-edge stripe-pattern" />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-screen overflow-x-hidden px-2">
        <div className="mx-auto md:max-w-3xl">
          <Hero />
          <Separator />

          <ScrollReveal>
            <SocialLinks />
          </ScrollReveal>
          <Separator />

          <ScrollReveal>
            <About />
          </ScrollReveal>
          <Separator />

          <ScrollReveal>
            <Experience />
          </ScrollReveal>
          <Separator />

          <ScrollReveal>
            <Projects />
          </ScrollReveal>
          <Separator />

          <ScrollReveal>
            <Skills />
          </ScrollReveal>
          <Separator />

          <ScrollReveal>
            <GitHubContributions username="yeschirag" />
          </ScrollReveal>
          <Separator />

          <ScrollReveal>
            <Education />
          </ScrollReveal>
          <Separator />

          <ScrollReveal>
            <Achievements />
          </ScrollReveal>
          <Separator />
        </div>
      </main>
      <Footer />
    </div>
  );
}
