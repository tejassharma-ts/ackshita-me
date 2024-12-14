import Container from "../components/container";
import HeroImageCard from "../components/hero-image-card";

const images = [
  "/projects/amudhu-cover.png",
  "/projects/tel-ganesan.jpg",
  "/projects/hy-veg.png",
];

export default function Hero() {
  return (
    <Container size="full">
      <section className="relative flex gap-14">
        <div className="relative flex flex-col basis-full">
          {images.map((img, idx) => (
            <HeroImageCard key={idx} imgUrl={img} />
          ))}
        </div>
        <div className="text-[13vw] text-white sticky top-0 h-screen font-dx  uppercase">
          <h1 className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
            Create
          </h1>
          <h1 className="text-[5vw]  mb-[4%] bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
            Your
          </h1>
          <h1 className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
            Brand
          </h1>
        </div>
      </section>
    </Container>
  );
}
