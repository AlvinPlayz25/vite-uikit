import { GlassCard } from "./GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Twitter } from "lucide-react";

export function LoginCard() {
    return (
        <GlassCard className="w-full max-w-md mx-auto p-8">
            <div className="text-center space-y-2 mb-8">
                <h3 className="text-2xl font-bold tracking-tight">Welcome back</h3>
                <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
            </div>
            
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label>Email</Label>
                    <Input placeholder="name@example.com" className="bg-white/5 border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20 rounded-xl h-11" />
                </div>
                <div className="space-y-2">
                    <Label>Password</Label>
                    <Input type="password" placeholder="••••••••" className="bg-white/5 border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20 rounded-xl h-11" />
                </div>
                <Button className="w-full rounded-xl h-11 bg-primary hover:opacity-90">Sign In</Button>
            </div>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or continue with</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="rounded-xl h-11 border-white/10 bg-white/5 hover:bg-white/10"><Github className="mr-2 h-4 w-4" /> Github</Button>
                <Button variant="outline" className="rounded-xl h-11 border-white/10 bg-white/5 hover:bg-white/10"><Twitter className="mr-2 h-4 w-4" /> Twitter</Button>
            </div>
        </GlassCard>
    )
}
