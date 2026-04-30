import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

const company = [
  { title: "Om oss", href: "#" },
  { title: "Karriere", href: "#" },
  { title: "Personvern", href: "#" },
  { title: "Vilkår for bruk", href: "#" },
];

const resources = [
  { title: "Blogg", href: "#" },
  { title: "Hjelpesenter", href: "#" },
  { title: "Kontakt", href: "#" },
  { title: "Sikkerhet", href: "#" },
];

const socialLinks = [
  { icon: <FacebookIcon className="size-4" />, href: "#" },
  { icon: <GithubIcon className="size-4" />, href: "#" },
  { icon: <InstagramIcon className="size-4" />, href: "#" },
  { icon: <LinkedinIcon className="size-4" />, href: "#" },
  { icon: <TwitterIcon className="size-4" />, href: "#" },
];

export function MinimalFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid grid-cols-6 gap-6 py-12">
          {/* Logo + beskrivelse + sosiale lenker */}
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <a href="#">
              <img src="/logo.png" alt="Koda" className="h-8 w-auto opacity-90" />
            </a>
            <p className="max-w-sm text-sm text-white/50 font-mono leading-relaxed">
              Vi bygger systemer og automatiserer arbeidsflyt med presisjon og kontroll.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/12 p-1.5 text-white/50 transition hover:bg-white/8 hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Ressurser */}
          <div className="col-span-3 md:col-span-1">
            <span className="mb-3 block text-xs uppercase tracking-[0.3em] text-white/40">
              Ressurser
            </span>
            <div className="flex flex-col gap-1">
              {resources.map(({ href, title }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-max py-1 text-sm text-white/60 transition hover:text-white"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* Selskap */}
          <div className="col-span-3 md:col-span-1">
            <span className="mb-3 block text-xs uppercase tracking-[0.3em] text-white/40">
              Selskap
            </span>
            <div className="flex flex-col gap-1">
              {company.map(({ href, title }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-max py-1 text-sm text-white/60 transition hover:text-white"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-center text-sm text-white/30 font-light">
            © Koda. Alle rettigheter forbeholdt {year}.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MinimalFooter;
