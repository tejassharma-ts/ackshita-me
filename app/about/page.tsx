import Image from "next/image";
import Container from "../components/container";
import Section from "../components/section";

export default function AboutPage() {
  return (
    <>
      <Container className="flex justify-center items-center py-20">
        <div className="relative flex items-center justify-center group">
          <h1 className="text-[25rem] font-main bg-gradient-to-r from-white to-90% to-white/50 bg-clip-text text-transparent">
            ACKSHITA
          </h1>
          <Image
            className="absolute"
            src="/about-hero-ak.png"
            alt="about picture"
            width={280}
            height={300}
            unoptimized
          />
          <h1 className="absolute text-[25rem] font-main bg-gradient-to-r from-white to-90% to-white/50 bg-clip-text text-transparent group-hover:opacity-0 duration-500">
            ACKSHITA
          </h1>
        </div>
      </Container>
      <Section>
        <Container>
          <div className="flex gap-8">
            <div className="flex-1 relative">
              <h1 className="text-[15rem] font-main leading-[1] whitespace-nowrap">
                YOUR FAVOURITE <br />
                BRAND DESIGNER
              </h1>
              <p className="mt-8 max-w-md">
                <span className="text-gray-400">I AM A </span> BRAND DESIGNER{" "}
                <span className="text-gray-400">THAT MAKES</span> AWESOME BRANDS.{" "}
                <span className="text-gray-400">LOREM IPSUM</span> WONG KAR WAI.
              </p>
              <Image
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 grayscale hover:grayscale-0 duration-500"
                src="/ak-circle-colour.png"
                width={300}
                height={300}
                alt="me"
              />
            </div>
            <p className="max-w-lg">
              A great brand identifies and cultivates a loyal tribe of people based on a connection
              larger than the product be it their values or philosophy. Here&apos;s a breakdown of the
              key steps I follow to create such a brand.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="pt-52">
        <Container>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col space-y-2">
                <h1 className="text-[20rem] font-main">My story</h1>
                {/* <h3 className="text-3xl">A BIT ABOUT ME</h3> */}
              </div>
              <div className="border-l pl-4">
                <div className="flex flex-col max-w-xl gap-14">
                  <div className="relative flex flex-col space-y-4 before:absolute before:h-full before:bg-white before:w-1 before:-left-4 before:-translate-x-1/2 before:rounded-full">
                    <h1 className="text-4xl font-semibold">Who I am</h1>
                    <p>
                      A bit about me A great brand identifies and cultivates a loyal tribe of people
                      based on a connection larger than the product be it their values or
                      philosophy.
                    </p>
                  </div>
                  <div className="relative flex flex-col space-y-4 before:absolute before:h-full before:bg-white before:w-1 before:-left-4 before:-translate-x-1/2 before:rounded-full">
                    <h1 className="text-4xl font-semibold">What I do.</h1>
                    <p>
                      A bit about me A great brand identifies and cultivates a loyal tribe of people
                      based on a connection larger than the product be it their values or
                      philosophy. than the product be it their values or philosophy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
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
    </>
  );
}
