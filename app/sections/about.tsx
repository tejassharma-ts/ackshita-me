"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const textLines = [
  "THE RIGHT BRAND STRATEGY AND DESIGN ARE ESSENTIAL",
  "FOR ATTRACTING A LOYAL TRIBE THAT RESONATES WITH",
  "YOUR BRAND’S VALUES AND VISION. BY DEFINING WHAT",
  "MAKES A BRAND UNIQUE AND CRAFTING A COHESIVE",
  "IDENTITY, BRANDS CAN CONNECT WITH THEIR AUDIENCE ON",
  "A DEEPER LEVEL—BUILDING TRUST, INSPIRING LOYALTY, AND",
  "FOSTERING A COMMUNITY THAT SUPPORTS THEM OVER THE",
  "LONG TERM.",
];

const textLinesV2 = [
  "I AM A BRAND DESIGNER THAT MAKES",
  "AWESOME BRANDS. LOREM IPSUM WONG",
  "KAR WAI.",
];

export default function About() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const [up, setUp] = useState(false);

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const unsubscribe = x.onChange((latest) => {
      if (latest > 30) {
        setUp(true);
      } else {
        setUp(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [x]);

  return (
    <div ref={targetRef} className="h-[200vh]">
      <div className="h-screen sticky top-0 flex justify-center items-center font-medium">
        <div className="absolute inset-0 flex justify-center items-center flex-col">
          {textLines.map((text, idx) => (
            <div key={idx} className="overflow-hidden">
              <h1
                className={cn(
                  "text-[2.2vw]  text-center transition-transform duration-700 leading-[1.4] ease-[cubic-bezier(.16,1,.3,1)]",
                  up && "-translate-y-full",
                )}>
                {text}
              </h1>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex justify-center items-center flex-col">
          {textLinesV2.map((text, idx) => (
            <div key={idx} className="overflow-hidden">
              <h1
                className={cn(
                  "translate-y-full text-[2.2vw] text-center transition-transform duration-700 leading-[1.4] ease-[cubic-bezier(.16,1,.3,1)]",
                  up && "translate-y-0",
                )}>
                {text}
              </h1>
            </div>
          ))}
          <div className="overflow-hidden">
            <div
              className={cn(
                "translate-y-full mt-8 text-center transition-transform duration-700 leading-[1.4] ease-[cubic-bezier(.16,1,.3,1)]",
                up && "translate-y-0",
              )}>
              <Link
                href="/about"
                className="text-lg uppercase underline underline-offset-4 font-medium">
                Know more
              </Link>
            </div>
          </div>
          {/* <motion.h1 */}
          {/*   variants={textVariants} */}
          {/*   initial="hide" */}
          {/*   animate={up && "show"} */}
          {/*   className="text-3xl max-w-6xl text-center"> */}
          {/*   THE RIGHT BRAND */}
          {/* </motion.h1> */}
          {/* {textLines.map((line, index) => ( */}
          {/*   <MotionText key={index} text={line} variants={textVariants} up={!up} /> */}
          {/* ))} */}
        </div>
      </div>
    </div>
  );
}

// const MotionText = ({ text, variants, up }: { text: string; variants: any; up: boolean }) => (
//   <div className="overflow-hidden">
//     <motion.h1
//       variants={variants}
//       initial="show"
//       animate={up && "hide"}
//       className="text-3xl max-w-6xl text-center">
//       {text}
//     </motion.h1>
//   </div>
// );
