import { Button } from "@/components/ui/button";
import { GradientText } from "./GradientText";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/50 p-8 md:p-12 lg:p-16 backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
         <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px]" />
         <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px]" />
      </div>

      <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3 w-3" />
            <span>New Release v2.0</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-balance">
          Build <GradientText>beautiful interfaces</GradientText> with speed and precision.
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-xl text-balance">
          A complete design system with reusable components, glassmorphism effects, and modern aesthetics ready for your next project.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button size="lg" className="rounded-full h-12 px-8 bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20">
            Get Started Now
          </Button>
          <Button size="lg" variant="outline" className="rounded-full h-12 px-8 backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10">
            View Components <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
