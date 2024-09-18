"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";

const vertMargin = 2;
export default function HeroImageCard({ imgUrl }: { imgUrl: string }) {
  const container = useRef(null);

  const [maxScrollY, setMaxScrollY] = useState(Infinity);
  const [dynamicStyles, setDyanamicStyles] = useState({
    scale: 1,
    filter: 0,
  });

  const { scrollY } = useScroll({
    target: container,
  });

  scrollY.on("change", (scrollY) => {
    let animationValue = 1;
    if (scrollY > maxScrollY) {
      animationValue = Math.max(0, 1 - (scrollY - maxScrollY) / 10000);
    }

    setDyanamicStyles({
      scale: animationValue,
      filter: (1 - animationValue) * 100,
    });
  });

  const isInView = useInView(container, {
    // margin: `0px 0px -${100 - vertMargin}% 0px`,
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }

    // eslint-disable-next-line
  }, [isInView]);

  return (
    <motion.div
      ref={container}
      className="sticky rounded-xl overflow-hidden mb-4"
      style={{
        top: `${vertMargin}vh`,
        height: `${90 - 2 * vertMargin}vh`,
        scale: dynamicStyles.scale,
        filter: `blur(${dynamicStyles.filter}px)`,
      }}>
      <img src={imgUrl} alt={imgUrl} className="object-cover h-full w-full" />
    </motion.div>
  );
}
