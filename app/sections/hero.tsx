import Container from "../components/container";
import HeroImageCard from "../components/hero-image-card";

const images = ["/projects/amudhu-cover.png", "/projects/tel-ganesan.jpg", "/projects/hy-veg.png"];

export default function Hero() {
  return (
    <Container size="full">
      <section className="relative flex gap-14">
        <div className="relative flex flex-col basis-full sm:hidden">
          {images.map((img, idx) => (
            <HeroImageCard key={idx} imgUrl={img} />
          ))}
        </div>
        <div className="text-[clamp(10rem,13vw,30rem)] text-white sticky top-0 font-dx  uppercase sm:w-full ">
          <div className="sticky top-0">
            <h1 className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent ">
              Create
            </h1>
            <h1 className="text-[clamp(5rem,5vw,15rem)]   mb-[4%] bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
              Your
            </h1>
            <h1 className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
              Brand
            </h1>
          </div>
        </div>
      </section>
    </Container>
  );
}
