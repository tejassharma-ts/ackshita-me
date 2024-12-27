"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Container from "../components/container";
import { FadeIn } from "../components/fade-in";
import Section from "../components/section";
import { Footer } from "../sections";

export default function AboutPage() {
  const brandUnderstandingSteps = [
    {
      title: "Talk to management",
      description:
        "to understand their mission, vision, business goals, and most importantly what made them want to take this step.",
    },
    {
      title: "Talk to internal Stakeholders",
      description:
        "to understand the brand's points of alignment and dissonance with its goal/mission.",
    },
    {
      title: "Conduct a competitive audit",
      description: "where we understand how the brand can differentiate ourselves.",
    },
    {
      title: "Conduct a cultural audit",
      description:
        "to understand the sentiment towards topics relating to the brand and what are some trends that are arising in culture that could impact the brand.",
    },
    {
      title: "Visual Audit",
      description:
        "How does the brand compare to the rest of the competition on a visual level and understand the visual trends within the product category.",
    },
  ];

  const brandCoreAttributes = [
    {
      title: "Brand's Purpose",
      description: "Mission, Vission, Purpose statement.",
    },
    {
      title: "Brand values",
      description: "what are  values the brand stands for and doesn’t stand for.",
    },
    {
      title: "Brand persona",
      description: "What is the attitude that this brand carries.",
    },
    {
      title: "Audience Persona",
      description: "defining the audience they need to talk to that would yield the best results.",
    },
  ];

  const brandIUnderstandingSteps = [
    {
      title: "Talk to management",
      description:
        "to understand their mission, vision, business goals, and most importantly what made them want to take this step.",
    },
    {
      title: "Talk to internal Stakeholders",
      description:
        "to understand the brand's points of alignment and dissonance with its goal/mission.",
    },
    {
      title: "Conduct a competitive audit",
      description: "where we understand how the brand can differentiate ourselves.",
    },
    {
      title: "Conduct a cultural audit",
      description:
        "to understand the sentiment towards topics relating to the brand and what are some trends that are arising in culture that could impact the brand.",
    },
    {
      title: "Visual Audit",
      description:
        "How does the brand compare to the rest of the competition on a visual level and understand the visual trends within the product category.",
    },
  ];

  const brandICoreAttributes = [
    {
      title: "Brand's Purpose",
      description: "Mission, Vission, Purpose statement.",
    },
    {
      title: "Brand values",
      description: "what are  values the brand stands for and doesn’t stand for.",
    },
    {
      title: "Brand persona",
      description: "What is the attitude that this brand carries.",
    },
    {
      title: "Audience Persona",
      description: "defining the audience they need to talk to that would yield the best results.",
    },
  ];

  return (
    <>
      {/* <Container className="flex justify-center items-center py-20"> */}
      {/*   <div className="relative flex items-center justify-center group"> */}
      {/*     <h1 className="text-[25rem] font-main bg-gradient-to-r from-white to-90% to-white/50 bg-clip-text text-transparent"> */}
      {/*       ACKSHITA */}
      {/*     </h1> */}
      {/*     <Image */}
      {/*       className="absolute" */}
      {/*       src="/about-hero-ak.png" */}
      {/*       alt="about picture" */}
      {/*       width={280} */}
      {/*       height={300} */}
      {/*       unoptimized */}
      {/*     /> */}
      {/*     <h1 className="absolute text-[25rem] font-main bg-gradient-to-r from-white to-90% to-white/50 bg-clip-text text-transparent group-hover:opacity-0 duration-500"> */}
      {/*       ACKSHITA */}
      {/*     </h1> */}
      {/*   </div> */}
      {/* </Container> */}
      <Section>
        <Container>
          <div className="flex gap-8">
            <div className="relative">
              <h1 className="text-[10rem] font-dx whitespace-nowrap">
                YOUR FAVOURITE <br />
                BRAND DESIGNER
              </h1>
              <p className="mt-8 max-w-md">
                <span className="text-muted-foreground">I AM A </span> BRAND STRATEGIST{" "}
                <span className="text-muted-foreground">WHO</span> LEVERAGES HUMAN INSIGHTS.{" "}
                <span className="text-muted-foreground">TO HELP</span> BRANDS FIND THEIR TRIBE.
              </p>
              <Image
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 grayscale hover:grayscale-0 duration-500"
                src="/ak-circle-colour.png"
                width={300}
                height={300}
                alt="me"
              />
            </div>
            {/* <p className="max-w-lg"> */}
            {/*   A great brand identifies and cultivates a loyal tribe of people based on a connection */}
            {/*   larger than the product be it their values or philosophy. Here&apos;s a breakdown of the */}
            {/*   key steps I follow to create such a brand. */}
            {/* </p> */}
          </div>
        </Container>
      </Section>
      <Section className="pt-52">
        <Container>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h1 className="text-[10rem] font-dx">My story</h1>
                <h3 className="text-2xl mt-4 font-medium">A BIT ABOUT ME</h3>
              </div>
              <div className="border-l pl-4 mt-14">
                <div className="flex flex-col max-w-xl gap-14">
                  <FadeIn>
                    <div className="relative flex flex-col space-y-4 before:absolute before:h-full before:bg-white before:w-1 before:-left-4 before:-translate-x-1/2 before:rounded-full font-medium">
                      <h1 className="text-4xl font-semibold">My Mission.</h1>
                      <p>
                        Challenge convention and spark meaningful change by creatively solving
                        business problems through design and storytelling. I believe in the power of
                        leveraging deep human insights to create brands that don’t just stand
                        out—they inspire action, connection, and loyalty.
                      </p>
                    </div>
                  </FadeIn>
                  <FadeIn>
                    <div className="relative flex flex-col space-y-4 before:absolute before:h-full before:bg-white before:w-1 before:-left-4 before:-translate-x-1/2 before:rounded-full font-medium">
                      <h1 className="text-4xl font-semibold">My Approach.</h1>
                      <p>
                        With a brazen, cheerful, and steadfast approach, I work closely with my
                        clients to bring their unique vision to life in ways that resonate on a
                        human level. I don’t believe in a one-size-fits-all approach. Instead, I
                        dive into the core of what makes each brand special, crafting identities and
                        strategies that solve real challenges and leave lasting impressions.
                      </p>
                    </div>
                  </FadeIn>
                  <FadeIn>
                    <div className="relative flex flex-col space-y-4 before:absolute before:h-full before:bg-white before:w-1 before:-left-4 before:-translate-x-1/2 before:rounded-full font-medium">
                      <h1 className="text-4xl font-semibold">My Goal.</h1>
                      <p>
                        To create more than just brands. I’m here to build communities, forge
                        genuine connections, and help brands find and cultivate their loyal tribe.
                        I’m excited to partner with those who are ready to break boundaries and
                        embrace fresh perspectives. If you’re ready to inspire action and stand
                        apart, let’s make it happen.
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
            <div className="sticky top-32 h-fit mt-32">
              <Image
                src="/ak-standing.png"
                className="hover:-scale-x-[100%]"
                width={400}
                height={400}
                alt="ak-standing"
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col items-center">
            <p className="max-w-8xl text-center mb-4 font-medium">
              A GREAT BRAND IDENTIFIES AND CULTIVATES A LOYAL TRIBE OF PEOPLE BASED ON A CONNECTION
              LARGER THAN THE PRODUCT BE IT THEIR VALUES OR PHILOSOPHY. HERE'S A BREAKDOWN OF THE
              KEY STEPS I FOLLOW TO CREATE SUCH A BRAND.
            </p>
            <h1 className="text-[10rem] mt-4 font-dx whitespace-nowrap">APPROACH</h1>

            <Accordion type="single" collapsible className="w-full mt-8">
              <AccordionItem value="item-1" className="border-white/50">
                <AccordionTrigger className="py-8">
                  <span className="size-12 rounded-full border-2 bg-transparent"></span>
                  <span className="mr-auto text-3xl ml-8">BRAND STRATEGY</span>
                </AccordionTrigger>
                <AccordionContent className="text-lg pl-[80px] flex flex-col gap-3">
                  <h3 className="font-bold underline">Understanding the brand</h3>
                  {brandUnderstandingSteps.map((item, index) => (
                    <h3 key={index} className="font-bold">
                      {item.title} -{" "}
                      <span className="font-normal text-white/70">{item.description}</span>
                    </h3>
                  ))}
                  <h3 className="font-bold underline mt-8">Defining the brand</h3>
                  {brandCoreAttributes.map((item, index) => (
                    <h3 key={index} className="font-bold">
                      {item.title} -{" "}
                      <span className="font-normal text-white/70">{item.description}</span>
                    </h3>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-white/50">
                <AccordionTrigger className="py-8">
                  <span className="size-12 rounded-full border-2 bg-transparent"></span>
                  <span className="mr-auto text-3xl ml-8">BRAND IDENTITY DESIGN</span>
                </AccordionTrigger>
                <AccordionContent className="text-lg pl-[80px] flex flex-col gap-3">
                  <h3 className="font-bold underline">Understanding the brand</h3>
                  {brandIUnderstandingSteps.map((item, index) => (
                    <h3 key={index} className="font-bold">
                      {item.title} -{" "}
                      <span className="font-normal text-white/70">{item.description}</span>
                    </h3>
                  ))}
                  <h3 className="font-bold underline mt-8">Defining the brand</h3>
                  {brandICoreAttributes.map((item, index) => (
                    <h3 key={index} className="font-bold">
                      {item.title} -{" "}
                      <span className="font-normal text-white/70">{item.description}</span>
                    </h3>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </Section>
      <Footer className="mt-0" />
    </>
  );
}
