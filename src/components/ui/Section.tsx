import { cn } from "@/lib/utils";
import React from "react";

export default function Section({
  className,
  children,
  id,
  loose = false,
}: React.PropsWithChildren<{ className?: string; id?: string; loose?: boolean }>) {
  return (
    <section id={id} className={cn(loose ? "py-24 md:py-32" : "py-16 md:py-24", className)}>
      {children}
    </section>
  );
}