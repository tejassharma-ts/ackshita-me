"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { projects } from "@/data";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(0);
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, {
    amount: "some",
  });

  useEffect(() => {
    if (isInView) {
      setOpen(2);
    } else {
      setOpen(-1);
    }
    console.log({ isInView });
  }, [isInView]);

  return (
    <div id="projects" ref={targetRef} className="h-screen flex flex-col md:h-[80vh]">
      <div className="bg-[#161310] flex justify-between text-8xl items-center pb-4 sm:text-4xl">
        <span>0{open}</span>
        <span className="text-4xl absolute left-1/2 -translate-x-1/2 translate-y-1/2 sm:-translate-y-0">
          /
        </span>
        <span>0{projects.length}</span>
      </div>
      <div className="flex flex-row h-full w-full shadow overflow-hidden gap-2">
        {projects.map((project, idx) => {
          return (
            <Panel
              key={idx + 1}
              open={open}
              setOpen={setOpen}
              id={idx + 1}
              title={project.name}
              service={project.service}
              imgSrc={project.mainImgSrc}
            />
          );
        })}
      </div>
    </div>
  );
};

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  title: string;
  imgSrc: string;
  service: string;
}

const Panel = ({ open, setOpen, id, title, imgSrc, service }: PanelProps) => {
  const isOpen = open === id;

  return (
    <>
      <motion.div
        layoutId={`project-${id}`}
        style={{
          backgroundImage: `url(${imgSrc})`,
          // filter: isOpen ? "grayscale(100%)" : "",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={cn(
          "relative p-3 flex flex-col justify-end items-center gap-8 group w-16 cursor-pointer transition-all duration-800 ease-accordion-project sm:w-8",
          isOpen && "w-full cursor-auto sm:w-full",
        )}
        onClick={() => setOpen(id)}>
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className={cn(
            "text-xl font-medium rotate-180 opacity-100 transition-opacity",
            isOpen && "opacity-0",
          )}>
          {"0" + id}
        </span>
        <div
          className={cn("absolute inset-0 transition-colors duration-800", isOpen && "bg-black/60")}
        />
        <div
          className={cn(
            "scale-110 opacity-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col space-y-4 text-center duration-200 w-full",
            isOpen && "transition-[transform_opacity] delay-700 opacity-100 scale-100",
          )}>
          <p className="font-semibold text-lg">{service}</p>
          <div className="relative">
            <motion.h1
              layoutId={`title-${id}`}
              className="font-dx text-[clamp(16px,10vw,10rem)] whitespace-nowrap">
              {title}
            </motion.h1>
            {isOpen ? <Link href={`/projects/${id}`} className="absolute inset-0" /> : null}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default VerticalAccordion;

const items = [
  {
    id: 1,
    title: "LLMA",
    imgSrc: "/projects/llma.png",
  },
  {
    id: 2,
    title: "Amudhu Snacks Co.",
    imgSrc: "/projects/amudhu-cover.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 3,
    title: "HyVeg",
    imgSrc: "/projects/hy-veg.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
];
