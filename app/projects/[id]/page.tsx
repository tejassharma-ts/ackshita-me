"use client";

import { ReactNode } from "react";
import { projects } from "@/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/container";
import Section from "../../components/section";
import ProjectControls from "../components/project-controls";

function ImageSection({
  src,
  alt,
  imageClassName,
}: {
  src: string;
  alt: string;
  imageClassName?: string;
}) {
  return (
    <div className="flex justify-end">
      <div className="relative max-h-[30rem] w-full">
        <img
          src={src}
          alt={alt}
          className={cn("h-full w-full object-cover object-top", imageClassName)}
        />
      </div>
    </div>
  );
}

function ContentSection({
  title,
  children,
  imageUrl,
  imageAlt,
  reverse = false,
  imageClassName,
}: {
  title: string;
  children: ReactNode;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
  imageClassName?: string;
}) {
  return (
    <div
      className={`grid lg:grid-cols-2 items-center gap-10 md:grid-cols-1 ${reverse ? "md:flex-col-reverse" : ""}`}>
      <div className={reverse ? "order-1" : ""}>
        <h1 className="text-5xl font-medium">{title}</h1>
        <div className="mt-5 text-white/80 max-w-sm">{children}</div>
      </div>
      <ImageSection src={imageUrl} alt={imageAlt} imageClassName={imageClassName} />
    </div>
  );
}

type AboutPageProps = {
  params: {
    id: string;
  };
};

export default function AboutPage({ params }: AboutPageProps) {
  const projectID = parseInt(params.id) - 1;

  const project = projects[projectID];

  if (!project) {
    return null;
  }

  const prev = projectID ? projectID - 1 : projects.length - 1;
  const next = projectID === projects.length - 1 ? 0 : projectID + 1;

  return (
    <>
      <Section>
        <Container className="">
          <div className="relative flex justify-center flex-col text-center">
            {/* <p className="text-gray-400">Organization Name</p> */}
            <AnimatePresence>
              <motion.h1
                transition={{
                  duration: 0.4,
                }}
                layoutId={`title-${params.id}`}
                className="text-6xl font-medium  font-dx z-50">
                {project.name}
              </motion.h1>
            </AnimatePresence>
          </div>
        </Container>
      </Section>
      <Container className="relative h-full min-h-[600px]">
        <AnimatePresence>
          <motion.img
            layoutId={`project-${params.id}`}
            src={project.mainImgSrc}
            alt="project sample"
            className="rounded-3xl w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </AnimatePresence>
      </Container>
      <Section>
        <Container>
          <article className="prose prose-h2:text-white prose-p:text-white">
            <div className="max-w-3xl flex flex-col">{project.desc}</div>
          </article>
        </Container>
        <Section>
          <Container>
            <div className="grid gap-10">
              <ContentSection
                title="LOGO DESIGN"
                imageUrl="https://images.pexels.com/photos/27750569/pexels-photo-27750569/free-photo-of-model-in-black-tube-top-and-leggings-holding-her-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                imageAlt="client-portfolio">
                <p>
                  A bit about me A great brand identifies and cultivates a loyal tribe of people
                  based on a connection larger than the product be it their values or philosophy.
                </p>
              </ContentSection>

              <ContentSection
                title="LABEL DESIGN"
                imageUrl="https://images.pexels.com/photos/27750569/pexels-photo-27750569/free-photo-of-model-in-black-tube-top-and-leggings-holding-her-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                imageAlt="client-portfolio">
                <p>
                  A bit about me A great brand identifies and cultivates a loyal tribe of people
                  based on a connection larger than the product be it their values or philosophy.
                </p>
              </ContentSection>
            </div>
          </Container>
        </Section>
        <ProjectControls next={next} prev={prev} />
      </Section>
    </>
  );
}
