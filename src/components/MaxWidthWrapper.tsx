import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function MaxWidthWrapper({ className, children }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-3xl px-3 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}