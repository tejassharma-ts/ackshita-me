"use client";

import * as React from "react";
import ReactLenis, { useLenis } from "lenis/react";
import { usePathname, useSearchParams } from "next/navigation";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lenis = useLenis();

  React.useEffect(() => {
    const scroll =
      location.hash === "#projects" ? (document.querySelector("#projects") as HTMLElement) : 0;
    lenis?.scrollTo(scroll, { immediate: true });
  }, [pathname, searchParams, lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.08 }}>
      {children}
    </ReactLenis>
  );
}
