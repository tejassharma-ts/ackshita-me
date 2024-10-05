import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Container from "../components/container";
import Section from "../components/section";

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

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container className="">
          <div className="relative flex justify-center flex-col text-center">
            <p className="text-gray-400">Organization Name</p>
            <h1 className="text-5xl font-medium">Poster Design</h1>
          </div>
        </Container>
      </Section>
      <Container className="relative h-full min-h-[600px]">
        <Image
          src="/project-sample.png"
          fill
          alt="project sample"
          className="rounded-3xl"
          style={{ objectFit: "cover" }}
        />
      </Container>
      <Section>
        <Container>
          <div className="max-w-3xl flex flex-col space-y-14">
            <div className="flex flex-col space-y-2">
              <span>DESCRIPTION</span>
              <p>
                A great brand identifies and cultivates a loyal tribe of people based on a
                connection larger than the product be it their values or philosophy. Here&apos;s a
                breakdown of the key steps I follow to create such a brand.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <span>CHALLENGE</span>
              <p>
                If you lorem ipsum this is a sample text for this section. That means I am genius.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <span>IDEA</span>
              <p>
                If you lorem ipsum this is a sample text for this section. That means I am genius.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <span>SOLUTION</span>
              <p>
                If you lorem ipsum this is a sample text for this section. That means I am genius.
              </p>
            </div>
          </div>
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
        <Section>
          <Container>
            <div className="flex justify-between">
              <div className="flex flex-col space-y-4">
                <h1 className="font-semibold">PREVIOUS</h1>
                <img
                  src="https://images.pexels.com/photos/25185199/pexels-photo-25185199/free-photo-of-smiling-woman-with-yellow-wildflowers-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-80 h-40 object-cover object-center rounded-xl"
                />
                <p>Project Name</p>
              </div>
              <div className="flex flex-col space-y-4 text-right">
                <h1 className="font-semibold">NEXT</h1>
                <img
                  src="https://images.pexels.com/photos/25185199/pexels-photo-25185199/free-photo-of-smiling-woman-with-yellow-wildflowers-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-80 h-40 object-cover object-center rounded-xl"
                />
                <p>Project Name</p>
              </div>
            </div>
          </Container>
        </Section>
      </Section>
    </>
  );
}
