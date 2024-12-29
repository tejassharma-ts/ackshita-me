"use client";

import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../components/container";
import Section from "../components/section";
import Footer from "./footer";

const testimonials = [
  {
    name: "Anirudh Ravichandran",
    title: "Founder of Arise Performance and Real Fuel",
    content:
      "She has been an absolute game-changer for us. Her professionalism, ideas, and commitment to our growth is motivating for me and my team as well. We doubled and tripled our followers on social media in just a few months with her organic and original ideas. Since we connect on the same wavelength, working with her is very easy and exciting. We have just begun, and it's exciting times ahead. I cannot recommend her more to any company or individual looking to actually put themselves out there!",
  },
  {
    name: "Sangaamithra P.S Chadha",
    title: "Executive Director, Sai Kirupa Special School",
    content:
      "Working with Ackshita on our snack brand and café branding has been extraordinary. From day one, she immersed herself in our vision, crafting a cohesive brand identity. Her creativity shone with our logo design—it captured our essence perfectly and was loved by the entire team, no revisions needed! Her dedication, talent, and passion have truly elevated our brand, and we’re thrilled with the outcome. If you’re looking for a designer who brings brands to life with creativity and heart, she’s the one. A heartfelt thank you from all of us at Sai Kirupa for her commitment and care.",
  },
];
export default function Testimonial() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div ref={targetRef} className="h-[300vh]">
      <Section className="sticky top-0 pb-0">
        <Container size="full">
          <div className="flex lg:flex-col gap-10 overflow-hidden">
            <div className="bg-black  relative z-50 basis-1/6">
              <h1 className="uppercase text-8xl md:text-[5rem] sm:text-[4rem] font-semibold">
                Client Reviews
              </h1>
            </div>
            <div className="flex-shrink-0 overflow-hidden w-full md:hidden">
              <motion.div style={{ x }} className="w-full">
                <div className="flex flex-nowrap space-x-2">
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                      key={index}
                      name={testimonial.name}
                      title={testimonial.title}
                      content={testimonial.content}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            <Carousel
              className="w-full hidden md:block"
              opts={{
                loop: true,
                align: "start",
              }}>
              <CarouselContent>
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem key={idx} className="basis-1/3 md:basis-1/2 sm:basis-full">
                    <TestimonialCard
                      name={testimonial.name}
                      title={testimonial.title}
                      content={testimonial.content}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </Container>
        <Footer />
      </Section>
    </div>
  );
}

interface TestimonialCardProps {
  name: string;
  title: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, content: description }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className={`flex flex-col p-8 max-w-2xl text-2xl bg bg-[#01069E]`}>
      <div className="flex flex-col space-y-2 sm:mb-4">
        <h1 className="text-4xl font-medium">{name}</h1>
        <p className="font-medium">{title}</p>
      </div>
      <p>{description}</p>
      {/* {typeof description === "string" ? ( */}
      {/*   <p> */}
      {/*     {isReadMore ? description.slice(0, 150).concat("...") : description} */}
      {/*     {description.length > 150 && ( */}
      {/*       <Dialog> */}
      {/*         <DialogTrigger asChild> */}
      {/*           <span className="cursor-pointer hover:text-primary block">Read more</span> */}
      {/*         </DialogTrigger> */}
      {/*         <DialogContent className="rounded-sm"> */}
      {/*           <DialogHeader> */}
      {/*             <DialogTitle className="text-xl">{title}</DialogTitle> */}
      {/*             <DialogDescription className="text-base">{description}</DialogDescription> */}
      {/*           </DialogHeader> */}
      {/*         </DialogContent> */}
      {/*       </Dialog> */}
      {/*     )} */}
      {/*   </p> */}
      {/* ) : ( */}
      {/*   <p>{description}</p> */}
      {/* )} */}
    </div>
  );
};
