import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Layers, Zap, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Hjem", icon: Home },
  { label: "Løsninger", icon: Layers },
  { label: "Tjenester", icon: Zap },
  { label: "Kontakt", icon: MessageCircle },
  { label: "Om oss", icon: User },
];

const LABEL_WIDTH = 72;

type BottomNavBarProps = {
  className?: string;
  defaultIndex?: number;
  stickyBottom?: boolean;
};

export function BottomNavBar({
  className,
  defaultIndex = 0,
  stickyBottom = false,
}: BottomNavBarProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0, y: 16 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Bottom Navigation"
      className={cn(
        "flex items-center p-2 space-x-1 h-[52px] min-w-[320px] max-w-[95vw]",
        "rounded-full border border-white/15 bg-white/8 backdrop-blur-md",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        stickyBottom && "fixed inset-x-0 bottom-6 mx-auto z-50 w-fit",
        className
      )}
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        return (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex items-center px-3 py-2 rounded-full transition-colors duration-200 h-10 min-w-[44px]",
              isActive
                ? "bg-white/15 text-white gap-2"
                : "bg-transparent text-white/50 hover:bg-white/10 hover:text-white/80",
              "focus:outline-none"
            )}
            onClick={() => setActiveIndex(idx)}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            type="button"
          >
            <Icon size={20} strokeWidth={2} aria-hidden />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "6px" : "0px",
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 32 },
                opacity: { duration: 0.18 },
                marginLeft: { duration: 0.18 },
              }}
              className="overflow-hidden flex items-center"
            >
              <span
                className="font-medium text-xs whitespace-nowrap select-none text-white"
                title={item.label}
              >
                {item.label}
              </span>
            </motion.div>
          </motion.button>
        );
      })}
    </motion.nav>
  );
}

export default BottomNavBar;
