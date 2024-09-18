"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useScroll, Variants } from "framer-motion";

export const buttonUpSticky: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export default function ShortIntro() {
  const targetRef = useRef<HTMLDivElement>(null);

  // const [showFirstIntro, setShowFirstIntro] = useState(true);

  const secondIntroControl = useAnimationControls();

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.02) {
        console.log("Show");
        // secondIntroControl.start("show");
      } else if (latestValue > 0.08) {
        // secondIntroControl.start("show");
      }
    });

    // eslint-disable-next-line
  }, []);

  return (
    <div
      ref={targetRef}
      className="min-h-[200vh] top-0 flex justify-center items-center bg-gray-500">
      <div className="h-screen sticky top-52">
        {/* <motion.div className="bg-red-500"> */}
        {/*   <h1 className="text-3xl">This is first intro</h1> */}
        {/* </motion.div> */}

        <motion.div
          initial="hide"
          animate={secondIntroControl}
          variants={buttonUpSticky}
          className="bg-red-500">
          <h1 className="text-3xl">This is second intro</h1>
        </motion.div>
      </div>
    </div>
  );
}
