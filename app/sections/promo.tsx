"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Promo() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const [ww, setWw] = useState(0);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const wordReveal = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const unsubscribe = wordReveal.onChange((latest) => {
      setWw(latest as any);
    });
  }, [wordReveal]);

  const words = [
    "MY",
    "PORTFOLIO",
    "TO",
    "SEE",
    "HOW",
    "STRATEGY",
    "AND",
    "DESIGN",
    "COME",
    "TOGETHER",
    "TO",
    "BUILD",
    "THESE",
    "POWERFUL,",
    "LASTING",
    "CONNECTIONS.",
  ];

  const delta = 100 / words.length;
  return (
    <div ref={targetRef} className="h-[300vh]">
      <div className={cn("h-screen bg-white sticky top-0 p-4 transition-all", ww === 100 && "p-0")}>
        <motion.div
          style={{ width: y }}
          className={cn(
            "h-full bg-[#161310] rounded-2xl transform-all",
            ww === 100 && "rounded-none",
          )}
        />

        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[2.2vw] mix-blend-difference w-full max-w-7xl sm:px-8 sm:text-[2.8vw]">
          <p className="text-center uppercase">
            Explore,{" "}
            {words.map((word, idx) => {
              const hee = idx * delta;
              return (
                <div key={idx} className={cn("hidden mx-1", ww! > hee && "inline-block")}>
                  {word}
                </div>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
