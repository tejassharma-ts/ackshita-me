"use client";

import { useState } from "react";
import useCheckActiveNav from "@/hooks/use-check-active-link";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";
import { Icons } from "./icons";

const links = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "mailto:acks14sen@gmail.com",
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { checkActiveNav } = useCheckActiveNav();
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="font-semibold font-main">MENU</SheetTrigger>
      <SheetContent className="flex items-center justify-center flex-col bg-black">
        <ul className="flex flex-col items-center space-y-1.5 my-auto">
          {links.map((link) => (
            <li
              key={link.title}
              onClick={() => setIsOpen(false)}
              className={cn(
                "uppercase text-[4.7rem] sm:text-[3.5rem] font-extrabold cursor-pointer text-muted-foreground hover:text-white transition-colors relative",
                {
                  "text-white": checkActiveNav(link.href),
                },
              )}>
              {link.title}
              {link.href.startsWith("#") ? (
                <a href={link.href} className="absolute inset-0" />
              ) : (
                <Link href={link.href} className="absolute inset-0" />
              )}
            </li>
          ))}
        </ul>
        <SheetFooter className="flex mt-auto text-lg flex-col items-center space-y-6 absolute bottom-8 text-white font-medium">
          <div className="flex space-x-4">
            <CopyToClipboard text={"acks14sen@gmail.com"} onCopy={() => toast("Email copied. You're good to go!")}>
              <span className="uppercase underline underline-offset-4 cursor-pointer">Email</span>
            </CopyToClipboard>

            <a
              href="https://www.instagram.com/ackshita/"
              className="uppercase underline underline-offset-4">
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/ackshita/"
              className="uppercase underline underline-offset-4">
              Linkedin
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <Icons.copyright size={10} />
            <span className="uppercase">2024 Ackshita</span>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
