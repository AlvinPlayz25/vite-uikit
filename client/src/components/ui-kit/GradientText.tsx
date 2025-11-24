import { cn } from "@/lib/utils";
import React from "react";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
  via?: string;
}

export function GradientText({ 
  children, 
  className, 
  from = "from-indigo-400", 
  to = "to-cyan-400", 
  via = "via-purple-400",
  ...props 
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        from,
        via,
        to,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
