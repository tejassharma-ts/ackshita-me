import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return <section className="py-20">{children}</section>;
}
