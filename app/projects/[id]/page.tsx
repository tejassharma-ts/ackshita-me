"use client";

import { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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
      className={`grid grid-cols-2 items-center gap-10 md:grid-cols-1 ${reverse ? "md:flex-col-reverse" : ""}`}>
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

  const prefix = projects[projectID].prefix;
  return (
    <>
      <Section>
        <Container className="">
          <div className="relative flex justify-center flex-col text-center">
            <p className="font-light text-lg mb-6">{project.service}</p>
            <AnimatePresence>
              <motion.h1
                transition={{
                  duration: 0.4,
                }}
                layoutId={`title-${params.id}`}
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
          <article>
            <div className="flex flex-col space-y-6">
              {project.content.map((content) => (
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
            {/* <div className="max-w-3xl flex flex-col">{project.desc}</div> */}
          </article>
        </Container>
        <Section>
          {/* <Container> */}
          {/*   <div className="grid gap-10"> */}
          {/*     <ContentSection */}
          {/*       title="LOGO DESIGN" */}
          {/*       imageUrl="https://images.pexels.com/photos/27750569/pexels-photo-27750569/free-photo-of-model-in-black-tube-top-and-leggings-holding-her-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" */}
          {/*       imageAlt="client-portfolio"> */}
          {/*       <p> */}
          {/*         A bit about me A great brand identifies and cultivates a loyal tribe of people */}
          {/*         based on a connection larger than the product be it their values or philosophy. */}
          {/*       </p> */}
          {/*     </ContentSection> */}
          {/**/}
          {/*     <ContentSection */}
          {/*       title="LABEL DESIGN" */}
          {/*       imageUrl="https://images.pexels.com/photos/27750569/pexels-photo-27750569/free-photo-of-model-in-black-tube-top-and-leggings-holding-her-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" */}
          {/*       imageAlt="client-portfolio"> */}
          {/*       <p> */}
          {/*         A bit about me A great brand identifies and cultivates a loyal tribe of people */}
          {/*         based on a connection larger than the product be it their values or philosophy. */}
          {/*       </p> */}
          {/*     </ContentSection> */}
          {/*   </div> */}
          {/* </Container> */}
          {prefix ? (
            <ResponsiveMasonry columnsCountBreakPoints={{ 750: 2, 900: 3 }}>
              <Masonry gutter="1.5rem">
                {Array.from({ length: project.imageCount! }).map((_, idx) => (
                  <img src={`/${prefix}-imgs/${prefix}-${idx + 1}.png`} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          ) : (
            <LLMLayout />
          )}
        </Section>
        <ProjectControls next={next} prev={prev} />
      </Section>
    </>
  );
}

// TODO: need to create general layout
function LLMLayout() {
  const scrollImages = Array.from({ length: 7 }).map(
    (_, idx) => `/llma/carousel/img-${idx + 1}.png`,
  );
  return (
    <Section>
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col gap-16 items-center">
          <h1 className="text-3xl font-semibold md:text-2xl md:text-left">
            LLMA has always been political
          </h1>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full">
            <CarouselContent>
              {scrollImages.map((src, index) => (
                <CarouselItem key={index} className="">
                  <div className="p-1">
                    <div className="flex items-center justify-center">
                      <img src={src} className="w-full h-fit" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-black/40 left-0 border-none h-14 rounded-md hover:bg-black/40 hover:text-white disabled:opacity-0" />
            <CarouselNext className="bg-black/40 right-0 border-none h-14 rounded-md hover:bg-black/40 hover:text-white disabled:opacity-0" />
          </Carousel>

          <div className="flex md:flex-col gap-4">
            <h1 className="text-3xl max-w-lg leading-[1.5] md:max-w-full md:text-2xl">
              THE MUSEUM'S POLITICAL ENGAGEMENT AND PERCEPTIVENESS HAVE BEEN ITS GREATEST STRENGTH
              AND ENSURED ITS CONTINUED RELEVANCE.
            </h1>
            <div className="w-full">
              <img src="/llma/architecture.png" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16 items-center">
          <h1 className="text-3xl font-semibold text-center md:text-2xl md:text-left">
            The Museum’s STRUGGLE TO SIGNIFY YOUR CURRENT POLITICAL BELIEFS AND DILUTION IS LEADING
            TO A LACK OF DEFINITION.
          </h1>

          <div className="flex gap-48 md:flex-col md:gap-10">
            <div className="flex flex-col gap-4">
              <img src="/llma/forbes-stat-1.png" className="w-full h-full" />
              <img src="/llma/forbes-stat-2.png" className="w-full h-full" />
            </div>
            <div className="flex items-center justify-center text-3xl text-center md:justify-start md:text-left">
              <h1 className=" max-w-lg md:max-w-full">
                The museums’s role more important now than ever
              </h1>
            </div>
          </div>

          <div className="flex md:flex-col md:gap-10 [&_img]:w-full [&_img]:h-full [&_img]:aspect-square md:[&_img]:aspect-auto [&_img]:object-contain">
            <img src="/llma/news-1.png" />
            <img src="/llma/news-2.png" />
            <img src="/llma/news-3.png" />
            <img src="/llma/news-4.png" />
          </div>
        </div>

        <div className="flex flex-col gap-16 items-center">
          <h1 className="text-3xl font-semibold text-center md:text-2xl md:text-left">
            HOW CAN THE MUSEUM EXPRESS ITS EVOLVING POLITICAL CONTEXT WHILE ARTICULATING ITS
            ENDURING ESSENCE?
          </h1>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 md:flex-col">
              <img src="/llma/museum-1.png" className="w-full h-full" />
              <img src="/llma/museum-2.png" className="w-full h-full" />
            </div>

            <div className="flex gap-14 md:flex-col">
              <div className="flex gap-4">
                <img src="/llma/info-1.png" className="w-full h-full" />
                <img src="/llma/info-2.png" className="w-full h-full" />
                <img src="/llma/info-3.png" className="w-full h-full" />
              </div>
              <div className="flex items-center justify-center text-3xl text-left">
                <h1 className=" max-w-xl">
                  How would the museums actions, efforts look under this postioning statement?
                </h1>
              </div>
            </div>

            <div className="flex gap-4 md:flex-col">
              <img src="/llma/museum-3.png" className="w-full h-full" />
              <img src="/llma/museum-4.png" className="w-full h-full" />
            </div>

            <div className="flex gap-14 flex-row-reverse md:flex-col">
              <div className="flex gap-4">
                <img src="/llma/info-4.png" className="w-full h-full" />
                <img src="/llma/info-5.png" className="w-full h-full" />
                <img src="/llma/info-6.png" className="w-full h-full" />
              </div>
              <div className="flex items-center justify-center text-3xl text-left">
                <h1 className=" max-w-xl">
                  How would the museums actions, efforts look under this postioning statement?
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
