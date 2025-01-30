import Container from "../components/container";
import Section from "../components/section";

type BrandStrategyCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

function BrandStrategyCard({ imageUrl, title, description }: BrandStrategyCardProps) {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-square h-full">
        <img src={imageUrl} alt={title} className="h-full w-full max-w-full object-contain" />
      </div>
      <div className="mt-8 flex flex-col h-full space-y-4">
        <h1 className="text-3xl uppercase font-medium">{title}</h1>
        <p className="text-base mt-auto">{description}</p>
      </div>
    </div>
  );
}

const cardData = [
  {
    imageUrl: "/services/service-1.png",
    title: "Brand strategy",
    description:
      "My brand strategy connects your brand’s core identity with your audience's values, building lasting emotional ties. This creates consistency across all touchpoints, fosters loyalty, and sets you apart from competitors.",
  },
  {
    imageUrl: "/services/service-2.png",
    title: "BRAND IDENTITY DESIGN",
    description:
      "My Brand identity design is the visual expression of your brand’s core values, personality, and vision. It creates a cohesive, memorable experience that resonates with the audience and sets the brand apart in a crowded market.",
  },
];
export default function Services() {
  return (
    <Section>
      <Container size="full">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-[10rem] md:text-[5rem] sm:text-[4.7rem] font-dx uppercase">
            Services
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto md:grid-cols-1">
          {cardData.map((card, index) => (
            <BrandStrategyCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
