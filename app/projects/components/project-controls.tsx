import Container from "@/app/components/container";
import Section from "@/app/components/section";
import { projects } from "@/data";
import Link from "next/link";

type ProjectControlsProps = {
  next: number;
  prev: number;
};

export default function ProjectControls({ next, prev }: ProjectControlsProps) {
  return (
    <Section>
      <Container>
        <div className="flex justify-between gap-20">
          <div className="flex flex-col space-y-4 relative">
            <h1 className="font-semibold">PREVIOUS</h1>
            <img
              src={projects[prev].mainImgSrc}
              className="w-80 h-40 object-cover object-center rounded-xl"
            />
            <p>{projects[prev].name}</p>
            <Link href={`/projects/${projects[prev].prefix}`} className="absolute inset-0" />
          </div>
          <div className="flex flex-col space-y-4 text-right relative">
            <h1 className="font-semibold">NEXT</h1>
            <img
              src={projects[next].mainImgSrc}
              className="w-80 h-40 object-cover object-center rounded-xl"
            />
            <p>{projects[next].name}</p>
            <Link
              href={`/projects/${projects[next].prefix}`}
              // onClick={() => window.scrollTo(0, 0)}
              className="absolute inset-0"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
