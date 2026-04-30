import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Hjem", href: "#" },
  { name: "Løsninger", href: "#" },
  { name: "Tjenester", href: "#" },
  { name: "Kontakt", href: "#" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

export function AnimatedNavFramer() {
  const [isExpanded, setExpanded] = React.useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest;
    } else if (
      !isExpanded &&
      latest < previous &&
      scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD
    ) {
      setExpanded(true);
    }
    lastScrollY.current = latest;
  });

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 26, delay: 0.2 }}
        role="navigation"
        aria-label="Navigasjon"
        onClick={() => !isExpanded && setExpanded(true)}
        className={cn(
          "flex items-center overflow-hidden rounded-full h-12",
          "border border-white/15 bg-black/60 backdrop-blur-md",
          "shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-w-[780px]",
          !isExpanded && "cursor-pointer"
        )}
      >
        {/* Logo */}
        <motion.div
          animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 flex items-center pl-4 pr-2"
        >
          <img src="/logo.png" alt="Koda" className="h-7 w-auto" />
        </motion.div>

        {/* Nav links — absolutt sentrert */}
        <motion.div
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ pointerEvents: isExpanded ? "auto" : "none" }}
        >
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => e.stopPropagation()}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-white/8"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-auto pr-2 flex-shrink-0"
          style={{ pointerEvents: isExpanded ? "auto" : "none" }}
        >
          <a
            href="#"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/15 whitespace-nowrap"
          >
            Kom i gang <span aria-hidden>↗</span>
          </a>
        </motion.div>

        {/* Collapsed burger icon */}
        <motion.div
          animate={{ opacity: isExpanded ? 0 : 1, scale: isExpanded ? 0.8 : 1 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute inset-0 flex items-center justify-center pointer-events-none",
            isExpanded && "hidden"
          )}
        >
          <Menu className="h-5 w-5 text-white" />
        </motion.div>
      </motion.nav>
    </div>
  );
}

export default AnimatedNavFramer;
