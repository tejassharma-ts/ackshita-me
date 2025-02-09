import Container from "@/app/components/container";
import { projects } from "@/data";
import ProjectControls from "../components/project-controls";
import ShowcaseHeader from "../components/showcase-header";

export default function Page() {
  const project = projects[1];
  return (
    <div>
      <ShowcaseHeader project={project} />
      <Container>
        <AmudhuLayout />
      </Container>
      <ProjectControls next={2} prev={0} />
    </div>
  );
}

function AmudhuLayout() {
  return (
    <div className="flex flex-col gap-14">
      <div>
        <img src="/amudhu-imgs/intro.png" />
      </div>

      <div className="flex md:flex-col gap-4">
        <h1 className="text-3xl max-w-lg leading-[1.5] md:max-w-full md:text-2xl">
          Drawing inspiration from local traditions leaning into the taste of their audience.
        </h1>
        <div className="w-full">
          <img src="/amudhu-imgs/local-inspiration.png" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-14 md:grid-cols-1">
        <div className="flex flex-col items-center">
          <div className="w-full aspect-square h-full max-w-sm">
            <img
              src="/amudhu-imgs/feeling-hands.png"
              className="h-full w-full max-w-full object-contain"
            />
          </div>
          <div className="mt-8 flex flex-col h-full space-y-4">
            <h1 className="text-2xl">
              Inspired by Bharatanatyam and it’s mudras, this gesture is often used to express a
              feeding an other person. It is also the way we hold flowers and other offerings before
              offering it to god in poojas and havans.
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full aspect-square h-full max-w-sm">
            <img
              src="/amudhu-imgs/abstract-snack.png"
              className="h-full w-full max-w-full object-contain"
            />
          </div>
          <div className="mt-8 flex flex-col h-full space-y-4">
            <h1 className="text-2xl">
              Inspired by Bharatanatyam and it’s mudras, this gesture is often used to express a
              feeding an other person. It is also the way we hold flowers and other offerings before
              offering it to god in poojas and havans.
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2  gap-14 md:grid-cols-1">
        <div className="w-full aspect-square h-full max-h-[300px]">
          <img src="/amudhu-imgs/combo.png" className="h-full w-full max-w-full object-contain" />
        </div>
        <div className="mt-8 flex flex-col h-full space-y-4">
          <h1 className="text-2xl">
            The stamp like effect incorporates elements of intentional irregularity and uniqueness
            into the brand reflecting and embracing the natural variations that arise in products
            crafted by special people.
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-14 md:grid-cols-1">
        <h1 className="text-2xl">
          By converting this logo into a stamp, we make it easier for individuals with special needs
          to produce, while also reducing packaging costs. This cost-effective approach increases
          potential profits, allowing more funds to be reinvested into the school to support
          additional children.
        </h1>
        <div className="w-full h-full">
          <img src="/amudhu-imgs/stamp.png" className="h-full w-full max-w-full object-contain" />
        </div>
      </div>

      <div className="grid grid-cols-[.4fr_1fr] items-center gap-14 md:grid-cols-1">
        <div className="w-full h-full">
          <img src="/amudhu-imgs/outro-1.png" className="h-full w-full max-w-full" />
        </div>
        <div className="w-full h-full">
          <img src="/amudhu-imgs/outro-2.png" className="h-full w-full max-w-full" />
        </div>
      </div>
    </div>
  );
}
