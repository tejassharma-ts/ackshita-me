import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Container from "../components/container";
import { Icons } from "../components/icons";
import Logo from "../components/logo";

const socialLinks = [
  {
    title: "Dribble",
    href: "#",
  },
  {
    title: "Behance",
    href: "#",
  },
  {
    title: "LinkedIn",
    href: "#",
  },
  {
    title: "X",
    href: "#",
  },
];
export default function Footer() {
  return (
    <footer className="py-10">
      <div className="leading-[0.9] flex flex-col items-center">
        <p className="text-muted-foreground">( need an unfair advantage? )</p>
        <h1 className="text-[15rem] font-main text-center">
          Let&apos;s make it <br />
          happen
        </h1>
        <Button className="uppercase py-6 px-8 font-semibold mt-8" variant="outline">
          connect with me
        </Button>
      </div>
      <div className="mt-8 flex flex-col space-y-4 text-sm">
        <Container className="flex justify-between w-full" size="full">
          <p className="uppercase text-muted-foreground">based in india - working worldwide</p>
          <p className="uppercase text-muted-foreground">
            local time <span className="text-white">34: 30</span>
          </p>
        </Container>
        <Separator />
        <Container className="flex justify-between w-full" size="full">
          <div className="w-1/3">
            <Logo />
          </div>
          <ul className="flex space-x-4 w-1/3 justify-center">
            {socialLinks.map((link) => (
              <li key={link.title} className="relative">
                {link.title}
                <a href={link.href} className="absolute inset-0" />
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-1 w-1/3 justify-end">
            <Icons.copyright size={10} />
            <span className="uppercase">2024 Priyanka</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
