import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div className={cn("relative grid grid-cols-2 border-x md:grid-cols-4", className)} {...props}>
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />
      <LogoCard className="relative border-r border-b bg-secondary dark:bg-secondary/30" logo={{ src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia" }} />
      <LogoCard className="border-b md:border-r" logo={{ src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" }} />
      <LogoCard className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30" logo={{ src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub" }} />
      <LogoCard className="relative border-b bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background" logo={{ src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" }} />
      <LogoCard className="relative border-r border-b bg-secondary md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background" logo={{ src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso" }} />
      <LogoCard className="border-b bg-background md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30" logo={{ src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk" }} />
      <LogoCard className="border-r" logo={{ src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI" }} />
      <LogoCard className="bg-secondary dark:bg-secondary/30" logo={{ src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" }} />
      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & { logo: Logo };

function LogoCard({ logo, className, ...props }: LogoCardProps) {
  return (
    <div className={cn("flex items-center justify-center bg-background px-4 py-8 md:p-8", className)} {...props}>
      <img
        alt={logo.alt}
        className="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
    </div>
  );
}
