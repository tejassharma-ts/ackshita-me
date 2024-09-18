"use client";

import { Dispatch, SetStateAction, useState } from "react";
import useWindowSize from "@/hooks/use-window-resize";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../components/container";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <Container className="h-[90vh]" size="full">
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
    </Container>
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
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imgSrc})`,
          filter: "grayscale(100%)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={cn(
          "transition-colors p-3 flex flex-row-reverse lg:flex-col justify-end items-center gap-8 relative group w-16 cursor-pointer",
          {
            hidden: isOpen,
          },
        )}
        onClick={() => setOpen(id)}>
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180">
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-center justify-center">
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="">
              <p className="text-lg max-w-lg text-center">{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
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
