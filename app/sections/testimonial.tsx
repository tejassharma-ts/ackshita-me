"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../components/container";
import Section from "../components/section";
import Footer from "./footer";

export default function Testimonial() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div ref={targetRef} className="h-[200vh]">
      <Section className="sticky top-0 pb-0">
        <Container size="full">
          <div className="flex gap-10 overflow-hidden">
            <div className="bg-black  relative z-50">
              <h1 className="uppercase text-8xl font-semibold">What clients has to say</h1>
            </div>
            <motion.div style={{ x }} className="">
              <div className="flex flex-nowrap space-x-2">
                <div className="size-80 bg-gray-500"></div>
                <div className="size-80 bg-gray-500"></div>
                <div className="size-80 bg-gray-500"></div>
                <div className="size-80 bg-gray-500"></div>
                <div className="size-80 bg-gray-500"></div>
                <div className="size-80 bg-gray-500"></div>
                <div className="size-80 bg-gray-500"></div>
                <div className="size-80 bg-gray-500"></div>
                <div className="size-80 bg-gray-500"></div>
              </div>
            </motion.div>
          </div>
        </Container>
        <Footer />
      </Section>
    </div>
  );
}
