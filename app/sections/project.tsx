"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import useWindowSize from "@/hooks/use-window-resize";
import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";

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
    <div ref={targetRef} className="h-[95vh]">
      <div className="flex flex-col lg:flex-row h-full w-full  shadow overflow-hidden gap-2">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
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
}

const Panel = ({ open, setOpen, id, title, imgSrc }: PanelProps) => {
  const isOpen = open === id;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imgSrc})`,
          // filter: isOpen ? "grayscale(100%)" : "",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={cn(
          "relative p-3 flex flex-row-reverse lg:flex-col justify-end items-center gap-8 relative group w-16 cursor-pointer transition-all duration-800 ease-accordion-project",
          isOpen && "w-full",
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
            "scale-110 opacity-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col space-y-4 text-center duration-200",
            isOpen && "transition-[transform_opacity] delay-700 opacity-100 scale-100",
          )}>
          {/* <p className="font-semibold text-lg">Origanization Name</p> */}
          <h1 className="font-dx text-[10vw]">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default VerticalAccordion;

const panelVariants: Variants = {
  open: {
    width: "100%",
    height: "100%",
    transition: {
      duration: 0.8,
    },
  },
  closed: {
    width: "0%",
    height: "100%",
    transition: {
      duration: 0.8,
    },
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      ease: "easeIn",
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

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
