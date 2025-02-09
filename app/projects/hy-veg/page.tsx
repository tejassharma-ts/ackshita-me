import Container from "@/app/components/container";
import { projects } from "@/data";
import ProjectControls from "../components/project-controls";
import ShowcaseHeader from "../components/showcase-header";

export default function Page() {
  const project = projects[2];
  return (
    <div>
      <ShowcaseHeader project={project} />
      <Container>
        <HyVegLayout />
      </Container>
      <ProjectControls prev={1} next={3} />
    </div>
  );
}

function HyVegLayout() {
  return (
    <div className="flex flex-col gap-6 md:gap-6">
      <div className="grid grid-cols-[.4fr_1fr] gap-6 lg:grid-cols-1">
        <h1 className="text-3xl">
          leveraged their distinctive color palette, setting them apart from competitors in the
          category, to craft a brand language that feels both vibrant and evocative
        </h1>
        <div className="flex ml-auto gap-8 [&_div]:w-1/3 sm:[&_div]:w-[500px] w-full sm:gap-4 overflow-y-auto">
          <div className="min-h-[400px]  bg-[#5c4194] text-3xl p-4 rounded-lg font-semibold sm:text-lg">
            Eggplant
            <br />
            Purple
          </div>
          <div className="min-h-[400px] bg-[#f9a731] text-3xl p-4 rounded-lg font-semibold sm:text-lg">
            Pumpkin
            <br />
            Yellow
          </div>
          <div className="min-h-[400px] bg-[#86c441] text-3xl p-4 rounded-lg font-semibold sm:text-lg">
            Gourd
            <br />
            Green
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_.3fr] gap-6 md:gap-6 lg:grid-cols-1">
        <div className="h-full w-full">
          <img src="/hy-veg-imgs/components.png" className="h-full w-full" />
        </div>
        <h1 className="text-3xl">
          Designed simple and easy to use elements to capture their purpose.
        </h1>
      </div>

      <div className="grid grid-cols-[1fr_.6fr] gap-6 md:gap-6 ">
        <div className="h-full w-full">
          <img src="/hy-veg-imgs/product.png" className="h-full w-full" />
        </div>
        <div className="h-full w-full">
          <img src="/hy-veg-imgs/grid.png" className="h-full w-full" />
        </div>
      </div>

      <div className="grid grid-cols-[1fr_.8fr] gap-6 md:gap-6">
        <div className="h-full w-full">
          <img src="/hy-veg-imgs/growing-seed.png" className="h-full w-full" />
        </div>
        <div className="h-full w-full">
          <img src="/hy-veg-imgs/on-packet.png" className="h-full w-full" />
        </div>
      </div>

      <div className="grid grid-cols-[.8fr_1fr_1fr] gap-6 md:gap-6">
        <div className="h-full w-full">
          <img src="/hy-veg-imgs/sweet-corn.png" className="h-full w-full" />
        </div>
        <div className="h-full w-full">
          <img src="/hy-veg-imgs/chetna.png" className="h-full w-full" />
        </div>
        <div className="h-full w-full">
          <img src="/hy-veg-imgs/board.png" className="h-full w-full" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:gap-6">
        <div className="h-full w-full">
          <img src="/hy-veg-imgs/homepage.png" className="h-full w-full" />
        </div>
        <div className="h-full w-full">
          <img src="/hy-veg-imgs/insta-post.png" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
