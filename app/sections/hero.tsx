"use client";

import { useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Container from "../components/container";
import HeroImageCard from "../components/hero-image-card";

const images = ["/projects/amudhu-cover.png", "/projects/hy-veg.png", "/projects/tel-ganesan.jpg"];

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const fadeIn = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <Container size="full">
      <section ref={targetRef} className="relative flex gap-16 md:h-[200vh]">
        <div className="relative flex flex-col basis-full md:hidden">
          {images.map((img, idx) => (
            <HeroImageCard key={idx} imgUrl={img} />
          ))}
        </div>
        <div className="text-white sticky top-0 font-dx uppercase sm:w-full basis-[40%]">
          <div className="sticky top-32">
            <motion.h1
              style={{ opacity: fadeOut }}
              className=" text-[clamp(9.5rem,12vw,30rem)] bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent ">
              DESIGN
            </motion.h1>
            <h1 className="text-[clamp(5rem,5vw,15rem)]   mb-[4%] bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
              That
            </h1>
            <motion.h1
              style={{ opacity: fadeOut }}
              className="text-[clamp(5rem,12vw,15rem)] mb-[4%] bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent whitespace-nowrap">
              SOLVES
            </motion.h1>

            <motion.div style={{ opacity: fadeIn }} className="absolute top-0">
              <h1 className=" text-[clamp(9.5rem,12vw,30rem)] bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent ">
                STORIES
              </h1>
              <h1 className="text-[clamp(5rem,5vw,15rem)]   mb-[4%] bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                That
              </h1>
              <h1 className="text-[clamp(5rem,12vw,15rem)]  mb-[4%] bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent whitespace-nowrap">
                STICK.
              </h1>
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
}
