import { About, Hero, Project, Services, Testimonial } from "./sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Promo /> */}
      <Project />
      <Services />
      <Testimonial />
    </>
  );
}
