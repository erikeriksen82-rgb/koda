import { HeroMonochromeLaunch } from "@/components/ui/hero-monochrome";
import { AnimatedNavFramer } from "@/components/ui/navigation-menu";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { GridFeatureSection } from "@/components/ui/grid-feature-section";
import { StepProcessSection } from "@/components/ui/step-process-section";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { ContactSection } from "@/components/ui/contact-section";
import { BentoGrid } from "@/components/ui/bento-grid";
import { BentoGrid01 } from "@/components/ui/bento-grid-01";
import { BentoMonochrome1 } from "@/components/ui/bento-monochrome-1";
import { RuixenBentoCards } from "@/components/ui/ruixen-bento-cards";

function App() {
  return (
    <>
      <AnimatedNavFramer />
      <main className="pt-20">
        <HeroMonochromeLaunch />
        <GridFeatureSection />
        <StepProcessSection />
        <BentoGrid />
        <BentoGrid01 />
        <BentoMonochrome1 />
        <RuixenBentoCards />
        <section className="py-16 md:py-24 px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">
              Teknologi vi <span className="font-semibold text-primary">jobber med</span>.
            </h2>
            <LogoCloud />
          </div>
        </section>
        <ContactSection />
      </main>
      <MinimalFooter />
    </>
  );
}

export default App;
