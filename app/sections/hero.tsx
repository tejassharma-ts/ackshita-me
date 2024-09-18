import Container from "../components/container";
import HeroImageCard from "../components/hero-image-card";

const images = [
  "https://images.pexels.com/photos/583345/pexels-photo-583345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3498988/pexels-photo-3498988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/206901/pexels-photo-206901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

export default function Hero() {
  return (
    <Container size="full">
      <section className="relative flex gap-8">
        <div className="relative flex flex-col basis-[70%]">
          {images.map((img, idx) => (
            <HeroImageCard key={idx} imgUrl={img} />
          ))}
        </div>
        <div className="text-[15rem] text-white sticky top-0 h-screen font-main leading-[1.1]">
          <h1>Create</h1>
          <h1 className="text-[8rem]">The</h1>
          <h1>Brand</h1>
        </div>
      </section>
    </Container>
  );
}
