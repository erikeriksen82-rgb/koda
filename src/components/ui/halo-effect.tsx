import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Circle {
  id: number;
  x: number;
  y: number;
  color: string;
}

interface HaloEffectProps {
  count1?: number;
  count2?: number;
  count3?: number;
  size?: number;
  speed?: number;
  blur?: number;
  color1?: string;
  color2?: string;
  color3?: string;
}

export default function HaloEffect({
  count1 = 3,
  count2 = 2,
  count3 = 1,
  size = 300,
  speed = 8,
  blur = 80,
  color1 = "#9EA8B8",
  color2 = "#EDF0F4",
  color3 = "#9EA8B8",
}: HaloEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDims({ w: width, h: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Initialize circles with stable IDs when dims are known
  useEffect(() => {
    if (dims.w === 0 || dims.h === 0) return;

    const colors = [
      ...Array(count1).fill(color1),
      ...Array(count2).fill(color2),
      ...Array(count3).fill(color3),
    ];

    setCircles(
      colors.map((color, i) => ({
        id: i,
        x: Math.random() * Math.max(0, dims.w - size),
        y: Math.random() * Math.max(0, dims.h - size),
        color,
      }))
    );
  }, [dims, count1, count2, count3, color1, color2, color3, size]);

  // Animate to new positions on interval
  useEffect(() => {
    if (circles.length === 0 || dims.w === 0) return;

    const interval = setInterval(() => {
      setCircles((prev) =>
        prev.map((c) => ({
          ...c,
          x: Math.random() * Math.max(0, dims.w - size),
          y: Math.random() * Math.max(0, dims.h - size),
        }))
      );
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [circles.length, dims, size, speed]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          animate={{ x: circle.x, y: circle.y }}
          transition={{ duration: speed, ease: "easeInOut" }}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            backgroundColor: circle.color,
            filter: `blur(${blur}px)`,
          }}
        />
      ))}
    </div>
  );
}
