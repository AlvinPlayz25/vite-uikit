import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ComponentWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ComponentWrapper({ title, description, children, className }: ComponentWrapperProps) {
  return (
    <div className="space-y-4 mb-12" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <div className="space-y-1">
        <h3 className="text-xl font-medium font-heading tracking-tight text-foreground">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <Card className="overflow-hidden border-border/50 shadow-sm bg-background/50 backdrop-blur-[2px]">
        <CardContent className={`p-6 flex items-center justify-center min-h-[150px] ${className}`}>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
