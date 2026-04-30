import { cn } from "@/lib/utils";

const cardContents = [
  {
    title: "AI-drevet kartlegging",
    description:
      "Vi analyserer arbeidsflytene dine og identifiserer hvor automatisering gir størst effekt — raskt og presist.",
  },
  {
    title: "Skreddersydde integrasjoner",
    description:
      "Vi kobler systemene dine sammen slik at data flyter fritt og manuelt arbeid elimineres.",
  },
  {
    title: "Fleksible løsninger",
    description:
      "Enten du bygger dashbord, automatiserte rapporter eller komplekse arbeidsflyter — vi designer løsninger som skalerer naturlig med virksomheten. Med modulær arkitektur og gjenbrukbare komponenter kan systemene vokse uten å måtte bygges om fra bunnen.",
  },
  {
    title: "Mørk modus innebygd",
    description:
      "Alle løsninger er designet for å fungere sømløst i både lyst og mørkt grensesnitt.",
  },
  {
    title: "Rask implementering",
    description:
      "Fra innsikt til produksjon på rekordtid — uten at det går på bekostning av kvalitet eller sikkerhet.",
  },
];

const PlusCard: React.FC<{
  className?: string;
  title: string;
  description: string;
}> = ({ className = "", title, description }) => {
  return (
    <div
      className={cn(
        "relative border border-dashed border-white/20 rounded-2xl p-6 bg-white/5 min-h-[200px]",
        "flex flex-col justify-between transition-colors duration-300 hover:bg-white/8 hover:border-white/30",
        className
      )}
    >
      <CornerPlusIcons />
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-semibold text-white tracking-tight">{title}</h3>
        <p className="text-white/60 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
};

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={cn("text-white/30 size-6", className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

function RuixenBentoCards() {
  return (
    <section className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          <PlusCard {...cardContents[0]} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...cardContents[1]} className="lg:col-span-2 lg:row-span-2" />
          <PlusCard {...cardContents[2]} className="lg:col-span-4 lg:row-span-1" />
          <PlusCard {...cardContents[3]} className="lg:col-span-2 lg:row-span-1" />
          <PlusCard {...cardContents[4]} className="lg:col-span-2 lg:row-span-1" />
        </div>

        <div className="max-w-2xl ml-auto text-right mt-10 lg:-mt-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Bygget for presisjon.
            <br />
            <span style={{ background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Designet for vekst.
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            LeanTech gir deg verktøyene til å bygge smarte, automatiserte systemer med høy hastighet. Hver løsning er gjennomtenkt og skalerbar.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RuixenBentoCards;
export { RuixenBentoCards };
