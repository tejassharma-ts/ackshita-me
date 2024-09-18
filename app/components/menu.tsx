"use client";

import useCheckActiveNav from "@/hooks/use-check-active-link";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
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
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Menu() {
  const { checkActiveNav } = useCheckActiveNav();
  return (
    <Sheet>
      <SheetTrigger className="font-medium">MENU</SheetTrigger>
      <SheetContent className="flex items-center justify-center flex-col bg-black">
        <ul className="flex flex-col items-center space-y-6 my-auto">
          {links.map((link) => (
            <li
              key={link.title}
              className={cn(
                "uppercase text-5xl font-extrabold cursor-pointer text-muted-foreground hover:text-white transition-colors",
                {
                  "text-white": checkActiveNav(link.href),
                },
              )}>
              {link.title}
            </li>
          ))}
        </ul>
        <SheetFooter className="flex mt-auto text-xs flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <a href="#" className="uppercase underline underline-offset-4">
              Email
            </a>
            <a href="#" className="uppercase underline underline-offset-4">
              Instagram
            </a>
            <a href="#" className="uppercase underline underline-offset-4">
              Linkedin
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <Icons.copyright size={10} />
            <span className="uppercase">2024 Priyanka</span>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
