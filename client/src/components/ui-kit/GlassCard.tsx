import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export function GlassCard({ children, className, gradient = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10",
        gradient && "before:absolute before:-inset-px before:-z-10 before:bg-gradient-to-r before:from-indigo-500/20 before:via-purple-500/20 before:to-pink-500/20 before:blur-xl before:content-['']",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
