import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
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
export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("mt-44 pb-10", className)}>
      <div className="flex flex-col items-center  space-y-6">
        <p className="uppercase text-center font-medium">( need an unfair advantage? )</p>
        <h1 className="text-[10rem] font-dx text-center uppercase">
          Let&apos;s make it <br />
          happen
        </h1>
        <Button className="uppercase py-6 px-8 font-semibold mt-8" variant="outline">
          connect with me
        </Button>
      </div>
      <div className="mt-8 flex flex-col text-base">
        <Container className="flex justify-between w-full" size="full">
          <p className="uppercase text-muted-foreground font-medium">
            based in india - working worldwide
          </p>
          <p className="uppercase text-muted-foreground font-medium">
            local time <span className="text-white  font-semibold">34: 30</span>
          </p>
        </Container>
        <Separator className="mt-6 mb-12" />
        <Container className="flex justify-between w-full items-center" size="full">
          <div className="w-1/3">
            <Logo />
          </div>
          <ul className="flex space-x-12 w-full justify-center text-white font-medium">
            {socialLinks.map((link) => (
              <li key={link.title} className="relative">
                {link.title}
                <a href={link.href} className="absolute inset-0" />
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-1 w-1/3 justify-end text-muted-foreground font-medium ">
            <div className="flex flex-col">
              <div className="uppercase flex items-center space-x-2 justify-end">
                <Icons.copyright size={14} />
                <span>2024 Ackshita</span>
              </div>
              <span className="uppercase">
                Made with︎ <Icons.love size={18} className="fill-white inline-block stroke-none" />{" "}
                by DAK Designs
              </span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
