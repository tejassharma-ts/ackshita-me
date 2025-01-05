import React, { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const Section = forwardRef<HTMLElement, { children: ReactNode; className?: string }>(
  ({ children, className }, ref) => {
    return (
      <section ref={ref} className={cn("py-20 sm:py-16", className)}>
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export default Section;
