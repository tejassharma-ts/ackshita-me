import Container from "@/app/components/container";
import { projects } from "@/data";
import ProjectControls from "../components/project-controls";
import ShowcaseHeader from "../components/showcase-header";

export default function Page() {
  const project = projects[3];
  return (
    <div>
      <ShowcaseHeader project={project} />
      <Container>
        <TelLayout />
      </Container>
      <ProjectControls prev={2} next={0} />
    </div>
  );
}

function TelLayout() {
  return (
    <div className="flex flex-col gap-14 md:gap-6">
      <div className="grid grid-cols-[.4fr_1fr] gap-14 lg:grid-cols-1">
        <h1 className="text-3xl">Developed design assets that embody his bold spirit</h1>
        <div className="h-full w-full">
          <img src="/tel-imgs/tel-palatte.png" className="h-full w-full" />
        </div>
      </div>

      <div className="h-full w-full">
        <img src="/tel-imgs/other.png" className="h-full w-full" />
      </div>
    </div>
  );
}
