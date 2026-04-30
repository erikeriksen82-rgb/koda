import { HeroMonochromeLaunch } from "@/components/ui/hero-monochrome";
import { BentoGrid } from "@/components/ui/bento-grid";
import { BentoGrid01 } from "@/components/ui/bento-grid-01";
import { BentoMonochrome1 } from "@/components/ui/bento-monochrome-1";
import { RuixenBentoCards } from "@/components/ui/ruixen-bento-cards";
import { AnimatedNavFramer } from "@/components/ui/navigation-menu";

function App() {
  return (
    <>
      <AnimatedNavFramer />
      <main className="pt-20">
        <HeroMonochromeLaunch />
        <BentoGrid />
        <BentoGrid01 />
        <BentoMonochrome1 />
        <RuixenBentoCards />
      </main>
    </>
  );
}

export default App;
