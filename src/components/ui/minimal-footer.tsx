import { Globe, Mail } from "lucide-react";

const LinkedinIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const XIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

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
  { icon: <LinkedinIcon />, href: "#", label: "LinkedIn" },
  { icon: <GithubIcon />, href: "#", label: "GitHub" },
  { icon: <XIcon />, href: "#", label: "X" },
  { icon: <Globe className="size-4" />, href: "#", label: "Nettside" },
  { icon: <Mail className="size-4" />, href: "#", label: "E-post" },
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
                  aria-label={item.label}
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
