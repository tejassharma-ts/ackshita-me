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
              description={item.description}
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
  description: string;
}

const Panel = ({ open, setOpen, id, title, imgSrc, description }: PanelProps) => {
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
            "scale-110 opacity-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col space-y-16 text-center duration-200",
            isOpen && "transition-[transform_opacity] delay-700 opacity-100 scale-100",
          )}>
          <p className="text-base font-semibold">Origanization Name</p>
          <h1 className="font-dx text-9xl">Poster Design</h1>
        </div>
      </div>

      {/* <AnimatePresence> */}
      {/*   {isOpen && ( */}
      {/*     <motion.div */}
      {/*       key={`panel-${id}`} */}
      {/*       variants={width && width > 1024 ? panelVariants : panelVariantsSm} */}
      {/*       initial="closed" */}
      {/*       animate="open" */}
      {/*       exit="closed" */}
      {/*       style={{ */}
      {/*         backgroundImage: `url(${imgSrc})`, */}
      {/*         backgroundPosition: "center", */}
      {/*         backgroundSize: "cover", */}
      {/*       }} */}
      {/*       className="w-full h-full overflow-hidden relative bg-black flex items-center justify-center"> */}
      {/* <motion.div */}
      {/*   variants={descriptionVariants} */}
      {/*   initial="closed" */}
      {/*   animate="open" */}
      {/*   exit="closed" */}
      {/*   className=""> */}
      {/*   <p className="text-lg max-w-lg text-center">{description}</p> */}
      {/* </motion.div> */}
      {/*     </motion.div> */}
      {/*   )} */}
      {/* </AnimatePresence> */}
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
    title: "Earn more",
    imgSrc:
      "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 2,
    title: "Play more",
    imgSrc:
      "https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 3,
    title: "Keep track",
    imgSrc:
      "https://images.pexels.com/photos/234527/pexels-photo-234527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 4,
    title: "Grow faster",
    imgSrc:
      "https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
];
