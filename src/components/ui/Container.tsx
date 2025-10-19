import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}