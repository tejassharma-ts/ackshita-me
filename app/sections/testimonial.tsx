import Container from "../components/container";
import Section from "../components/section";

export default function Testimonial() {
  return (
    <Section>
      <Container size="full">
        <div className="flex gap-10">
          <h1 className="uppercase text-8xl font-semibold">What clients has to say</h1>
          <div className="flex flex-nowrap space-x-2">
            <div className="size-80 bg-gray-500"></div>
            <div className="size-80 bg-gray-500"></div>
            <div className="size-80 bg-gray-500"></div>
            <div className="size-80 bg-gray-500"></div>
            <div className="size-80 bg-gray-500"></div>
            <div className="size-80 bg-gray-500"></div>
            <div className="size-80 bg-gray-500"></div>
            <div className="size-80 bg-gray-500"></div>
            <div className="size-80 bg-gray-500"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
