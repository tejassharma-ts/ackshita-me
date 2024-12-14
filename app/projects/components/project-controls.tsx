"use client";

import { useEffect } from "react";
import Container from "@/app/components/container";
import Section from "@/app/components/section";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "../[id]/page";

type ProjectControlsProps = {
  next: number;
  prev: number;
};

export default function ProjectControls({ next, prev }: ProjectControlsProps) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Section>
      <Container>
        <div className="flex justify-between">
          <div className="flex flex-col space-y-4 relative">
            <h1 className="font-semibold">PREVIOUS</h1>
            <img
              src={projects[prev].mainImgSrc}
              className="w-80 h-40 object-cover object-center rounded-xl"
            />
            <p>{projects[prev].name}</p>
            <Link scroll={false} href={`/projects/${prev + 1}`} className="absolute inset-0" />
          </div>
          <div className="flex flex-col space-y-4 text-right relative">
            <h1 className="font-semibold">NEXT</h1>
            <img
              src={projects[next].mainImgSrc}
              className="w-80 h-40 object-cover object-center rounded-xl"
            />
            <p>{projects[next].name}</p>
            <Link scroll={false} href={`/projects/${next + 1}`} className="absolute inset-0" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
