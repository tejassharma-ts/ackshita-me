import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const FadeIn = ({ children }: { children: ReactNode }) => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, {
    margin: "-100px 0px 0px 0px",
    amount: "some",
    once: true,
  });

  return (
    <motion.div
      ref={targetRef}
      initial={{ y: "25%", opacity: 0 }}
      animate={{
        y: isInView ? "0%" : "50%",
        opacity: isInView ? 1 : 0,
        transition: {
          ease: [0.85, 0, 0.15, 1],
          duration: 0.8,
        },
      }}>
      {children}
    </motion.div>
  );
};
