import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/container";
import Section from "../../components/section";
import ProjectControls from "../components/project-controls";

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

type AboutPageProps = {
  params: {
    id: string;
  };
};

export const projects = [
  {
    name: "LLMA",
    mainImgSrc: "/project-sample.png",
    desc: (
      <>
        <h2>Context</h2>
        <p>
          The Leslie-Lohman Museum of Art (LLMA) began in 1969 when founders Charles Leslie and
          Fritz Lohman hosted an exhibition of gay artists in their SoHo loft. Today, LLMA stands as
          the world’s only LGBTQIA+ art museum, devoted to preserving, showcasing, and celebrating
          queer art and culture. Throughout history, LLMA has been attuned to pivotal moments in
          queer culture, evolving in response to each significant cultural shift and honouring the
          authentic narratives of LGBTQIA+ artists.
        </p>
        <p>
          However, the museum has faced challenges in effectively communicating its values and
          nuanced understanding of queerness through its brand.
        </p>
        <h2>Challenge</h2>
        <p>
          Work with LLMA to clarify its positioning among museums, ease team decision-making, and
          amplify its message of inclusion and acceptance.
        </p>
      </>
    ),
  },

  {
    name: "Amudhu Snacks Co.",
    mainImgSrc: "/projects/amudhu-cover.png",
    desc: (
      <>
        <h2>Context</h2>
        <p>
          Amudhu, launched in 2024 by the Sai Kirupa Special School, is a brand created to further
          the school’s mission of empowering individuals with special abilities through meaningful
          work. Since the school’s founding in 2014, it has provided essential education and
          vocational training for children and adults with unique needs. Entirely funded by
          donations, Amudhu gives students valuable, hands-on experience while generating revenue
          that directly supports the school. With 100% of profits reinvested into education,
          training, and support programs, Amudhu strengthens resources and expands opportunities for
          even more children. Guided by empathy, inclusivity, and dedicated care, Amudhu serves as a
          bridge from training to independence in neurotypical workspaces.
        </p>
        <h2>Challenge</h2>
        <p>How do we produce brand assets that are cost-effective and easy to reproduce?</p>
      </>
    ),
  },
  {
    name: "HyVeg",
    mainImgSrc: "/projects/hy-veg.png",
    desc: (
      <>
        <h2>Context</h2>
        <p>
          HyVeg is a vegetable seed brand  HyVeg, a vegetable seed brand by ACSEN Agriscience, is
          dedicated to meeting the needs of farmers with a focus on enhancing productivity and
          profitability. While deeply rooted in scientific innovation, the brand’s purpose is
          profoundly emotional—supporting farmers' livelihoods and well-being. Guided by the vision
          of achieving "more profit per acre, for more and more farmers, year after year," HyVeg
          develops high-quality seeds that empower farmers to maximize yields and sustain growth
          season after season, making a meaningful impact on farming communities.
        </p>
        <h2>Challenge</h2>
        <p>How do we create a cohesive brand identity that captures their vision accurately?</p>
      </>
    ),
  },
];

export default function AboutPage({ params }: AboutPageProps) {
  const projectID = parseInt(params.id) - 1;

  const project = projects[projectID];

  if (!project) {
    return null;
  }

  const prev = projectID ? projectID - 1 : projects.length - 1;
  const next = projectID === projects.length - 1 ? 0 : projectID + 1;

  return (
    <>
      <Section>
        <Container className="">
          <div className="relative flex justify-center flex-col text-center">
            {/* <p className="text-gray-400">Organization Name</p> */}
            <h1 className="text-5xl font-medium  font-dx">{project.name}</h1>
          </div>
        </Container>
      </Section>
      <Container className="relative h-full min-h-[600px]">
        <Image
          src={project.mainImgSrc}
          fill
          alt="project sample"
          className="rounded-3xl"
          style={{ objectFit: "cover" }}
        />
      </Container>
      <Section>
        <Container>
          <article className="prose prose-h2:text-white prose-p:text-white">
            <div className="max-w-3xl flex flex-col">{project.desc}</div>
          </article>
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
        <ProjectControls next={next} prev={prev} />
      </Section>
    </>
  );
}
