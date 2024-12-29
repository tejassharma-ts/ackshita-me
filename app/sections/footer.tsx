"use client";

import { useEffect, useState } from "react";
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
    <footer className={cn("mt-44 pb-10 sm:mt-10", className)}>
      <div className="flex flex-col items-center  space-y-6">
        <p className="uppercase text-center font-medium">( need an unfair advantage? )</p>
        <h1 className="text-[10rem] md:text-[5rem] sm:text-[4.7rem] font-dx text-center uppercase">
          Let&apos;s make it <br />
          happen
        </h1>
        <Button className="uppercase py-6 px-8 font-semibold mt-8" variant="outline">
          connect with me
        </Button>
      </div>
      <div className="mt-8 flex flex-col text-base">
        <Container className="flex justify-between w-full flex-wrap gap-4" size="full">
          <p className="uppercase text-muted-foreground font-medium">
            based in india - working worldwide
          </p>
          <p className="flex space-x-4 uppercase text-muted-foreground font-medium">
            <span>local time</span>
            <span className="text-white  font-semibold">
              <RealTimeClock />
            </span>
          </p>
        </Container>
        <Separator className="mt-6 mb-12" />
        <Container className="flex justify-between w-full items-center md:flex-col gap-6 md:justify-center" size="full">
          <div className="w-1/3 md:flex md:justify-center">
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
          <div className="flex items-center space-x-1 w-1/3 justify-end text-muted-foreground font-medium md:w-full md:justify-center">
            <div className="flex flex-col">
              <div className="uppercase flex items-center space-x-2 justify-end md:justify-center">
                <Icons.copyright size={14} />
                <span>2024 Ackshita</span>
              </div>
              <span className="uppercase whitespace-nowrap">
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

function RealTimeClock() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <p>
      {dateState.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}
    </p>
  );
}
