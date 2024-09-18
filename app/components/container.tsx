import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const containerVariants = cva("mx-auto px-6", {
  variants: {
    size: {
      default: "max-w-[1300px]",
      full: "max-w-[1600px]",
      md: "max-w-[800px]",
      sm: "max-w-8xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: "default" | "full" | "md" | "sm";
}

export default function Container({ className, size, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size, className }))} {...props} />;
}
