import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { GradientText } from "./GradientText";

export function PricingCard() {
  return (
    <GlassCard className="w-full max-w-sm flex flex-col gap-6 relative overflow-visible">
        {/* Glow effect behind */}
        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-3xl -z-10 rounded-full opacity-50 pointer-events-none" />
        
        <div className="space-y-2">
            <h3 className="text-lg font-medium text-muted-foreground">Pro Plan</h3>
            <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground">Perfect for growing teams and startups.</p>
        </div>

        <div className="space-y-3">
            {['Unlimited Projects', 'Priority Support', 'Advanced Analytics', 'Custom Domains', 'Team Collaboration'].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Check className="h-3 w-3" />
                    </div>
                    {feature}
                </div>
            ))}
        </div>

        <Button className="w-full rounded-xl h-11 font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border-0 shadow-lg shadow-indigo-500/20">
            Get Started
        </Button>
    </GlassCard>
  );
}
