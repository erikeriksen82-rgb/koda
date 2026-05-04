import { FeatureGrid } from '@/components/ui/modern-feature-grid';

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const ZapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const steps = [
  {
    Icon: SearchIcon,
    title: '01 — Kartlegg',
    description: 'Vi analyserer virksomheten din og identifiserer hvor automatisering gir størst effekt.',
  },
  {
    Icon: LinkIcon,
    title: '02 — Koble',
    description: 'Vi integrerer systemene dine slik at data flyter fritt og manuelt arbeid elimineres.',
  },
  {
    Icon: ZapIcon,
    title: '03 — Automatiser',
    description: 'Vi implementerer og skalerer løsningene — fra innsikt til produksjon på rekordtid.',
  },
];

export function StepProcessSection() {
  return (
    <FeatureGrid
      sectionTitle="Slik jobber vi"
      sectionDescription="En strukturert prosess fra kartlegging til ferdig løsning."
      features={steps}
    />
  );
}
