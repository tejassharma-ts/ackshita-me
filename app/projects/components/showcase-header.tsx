"use client";

import { projects } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../../components/container";
import Section from "../../components/section";

export default function ShowcaseHeader({ project }: { project: any }) {
  return (
    <div>
      <Section>
        <Container className="">
          <div className="relative flex justify-center flex-col text-center">
            <p className="font-light text-lg mb-6">{project.service}</p>
            <AnimatePresence>
              <motion.h1
                transition={{
                  duration: 0.4,
                }}
                layoutId={project.name}
                className="text-6xl font-medium  font-dx z-50 whitespace-nowrap">
                {project.name}
              </motion.h1>
            </AnimatePresence>
          </div>
        </Container>
      </Section>
      <Container className="relative h-full min-h-[600px] sm:min-h-full">
        <AnimatePresence>
          <motion.img
            layoutId={`project-${project.name}`}
            src={project.mainImgSrc}
            alt="project sample"
            className="rounded-3xl w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </AnimatePresence>
      </Container>
      <Section>
        <Container>
          <article>
            <div className="flex flex-col space-y-6">
              {project.content.map((content: any) => (
                <div className="flex flex-col space-y-2 text-base border-b pb-6 border-[#686868]">
                  <h2 className="uppercase text-lg">{content.title}</h2>
                  <p className="font-medium leading-7">{content.content}</p>
                  {"extra" in content ? (
                    content.extra ? (
                      <p className="font-medium leading-7">{content.extra}</p>
                    ) : null
                  ) : null}
                </div>
              ))}
            </div>
          </article>
        </Container>
      </Section>
    </div>
  );
}
