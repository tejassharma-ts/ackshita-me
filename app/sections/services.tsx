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
      <div className="max-h-80 w-full bg-gray-500 aspect-square h-full">
        <img src={imageUrl} alt={title} className="h-full w-full max-w-full object-cover" />
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
    imageUrl:
      "https://images.pexels.com/photos/3585091/pexels-photo-3585091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Brand strategy",
    description:
      "Branding is a multifaceted process that involves creating a unique image and identity for a product, service, or company that is resonant with its intended audience.",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/20853116/pexels-photo-20853116/free-photo-of-programming-code-on-a-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "BRAND IDENTITY DESIGN",
    description:
      "Branding is a multifaceted process that involves creating a unique image and identity for a product, service, or company that is resonant with its intended audience.",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // title: "SOCIAL MEDIA CONTENT STRATEGY",
    title: "CONTENT STRATEGY",
    description:
      "Branding is a multifaceted process that involves creating a unique image and identity for a product, service, or company that is resonant with its intended audience.",
  },
];
export default function Services() {
  return (
    <Section>
      <Container size="full">
        <div className="leading-[1] flex flex-col items-center">
          <p className="uppercase text-center">
            I work with various brands to provide them <br />
            multiple designs services
          </p>
          <h1 className="text-[15rem] font-main">Services</h1>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-16">
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
