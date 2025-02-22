import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/app/components/container";
import Section from "@/app/components/section";
import { projects } from "@/data";
import ProjectControls from "../components/project-controls";
import ShowcaseHeader from "../components/showcase-header";

export default function LLMA() {
  const project = projects[0];
  return (
    <div>
      <ShowcaseHeader project={project} />
      <LLMLayout />
      <ProjectControls next={1} prev={3} />
    </div>
  );
}

function LLMLayout() {
  const scrollImages = Array.from({ length: 7 }).map(
    (_, idx) => `/llma/carousel/img-${idx + 1}.png`,
  );
  return (
    <Section>
      <Container className="flex flex-col items-center gap-16">
        <div className="space-y-8">
          <h1 className="text-3xl font-semibold md:text-2xl md:text-left text-center">
            LLMA has always been political
          </h1>
          <Carousel>
            <CarouselContent>
              {scrollImages.map((src, index) => (
                <CarouselItem key={index}>
                  <img src={src} className="w-full h-full" />
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
            {/* Creating f**ing div wrapper for img because of chrome (images get overflowed won't shrink their size even it is a children of flex*/}
            <div className="relative">
              <img src="/llma/news-1.png" />
              <a
                href="https://www.vice.com/en/article/republicans-drag-show-ban-tennessee/"
                className="absolute inset-0"
              />
            </div>
            <div className="relative">
              <img src="/llma/news-2.png" />
              <a
                href="https://www.hrc.org/press-releases/human-rights-campaign-slams-governor-lee-for-signing-anti-drag-bill-and-gender-affirming-care-ban-into-law-tn-becomes-first-state-to-criminalize-drag"
                className="absolute inset-0"
              />
            </div>
            <div className="relative">
              <img src="/llma/news-3.png" />
              <a
                href="https://www.them.us/story/anti-drag-attacks-2022-glaad"
                className="absolute inset-0"
              />
            </div>
            <div className="relative">
              <img src="/llma/news-4.png" />
              <a
                href="https://www.rollingstone.com/music/music-news/bonnaroo-statement-tennessee-anti-drag-law-1234690594/"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16 items-center">
          <h1 className="text-3xl font-semibold text-center md:text-2xl md:text-left">
            HOW CAN THE MUSEUM EXPRESS ITS EVOLVING POLITICAL CONTEXT WHILE ARTICULATING ITS
            ENDURING ESSENCE?
          </h1>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 md:flex-col">
              <div>
                <img src="/llma/museum-1.png" className="w-full h-full" />
              </div>
              <div>
                <img src="/llma/museum-2.png" className="w-full h-full" />
              </div>
            </div>

            <div className="flex gap-14 md:flex-col">
              <div className="flex gap-4">
                <div>
                  <img src="/llma/info-1.png" className="w-full h-full" />
                </div>
                <div>
                  <img src="/llma/info-2.png" className="w-full h-full" />
                </div>
                <div>
                  <img src="/llma/info-3.png" className="w-full h-full" />
                </div>
              </div>
              <div className="flex items-center justify-center text-3xl text-left">
                <h1 className=" max-w-xl">
                  How would the museums actions, efforts look under this postioning statement?
                </h1>
              </div>
            </div>

            <div className="flex gap-4 md:flex-col">
              <div>
                <img src="/llma/museum-3.png" className="w-full h-full" />
              </div>
              <div>
                <img src="/llma/museum-4.png" className="w-full h-full" />
              </div>
            </div>

            <div className="flex gap-14 flex-row-reverse md:flex-col">
              <div className="flex gap-4">
                <div>
                  <img src="/llma/info-4.png" className="w-full h-full" />
                </div>
                <div>
                  <img src="/llma/info-5.png" className="w-full h-full" />
                </div>
                <div>
                  <img src="/llma/info-6.png" className="w-full h-full" />
                </div>
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
