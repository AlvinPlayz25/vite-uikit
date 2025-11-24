import React, { useState } from "react";
import { Link } from "wouter";
import { ComponentWrapper } from "@/components/ui-kit/ComponentWrapper";
import { ModeToggle } from "@/components/mode-toggle";
import { HeroSection } from "@/components/ui-kit/HeroSection";
import { PricingCard } from "@/components/ui-kit/PricingCard";
import { LoginCard } from "@/components/ui-kit/LoginCard";
import { GlassCard } from "@/components/ui-kit/GlassCard";
import { GradientText } from "@/components/ui-kit/GradientText";
import { FadeIn, FadeInOut, ScaleIn, HoverLift, HoverGlow, Pulse, StaggerContainer, StaggerItem, AnimateText, AnimatePresence } from "@/components/ui-kit/Motion";
import abstractBg from '@assets/generated_images/abstract_gradient_mesh_background_with_noise_texture.png';
import { motion } from "framer-motion";

// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Terminal, Waves, AlertCircle, Check, ChevronRight, Mail, Loader2, BellRing, MoreHorizontal, Plus, User, CreditCard, Settings, Keyboard, Users, Layers, Layout, Component, Zap, Sparkles, Move, Activity, Eye, EyeOff, Timer, Menu, X } from "lucide-react";
import { LoadingScreen } from "@/components/ui-kit/LoadingScreen";

export default function UIKit() {
  const [showCard, setShowCard] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading and hide after 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Mobile check (simplified)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <div className="min-h-screen font-sans text-foreground flex bg-transparent selection:bg-primary/30 relative overflow-x-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      {/* Background Image Layer */}
      <div 
        className="fixed inset-0 -z-50 opacity-30 dark:opacity-20 pointer-events-none mix-blend-overlay"
        style={{
            backgroundImage: `url(${abstractBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
      />
      
      {/* Floating Orbs Animation */}
      <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
                x: [0, -50, 0],
                y: [0, 100, 0],
                scale: [1, 1.5, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
          />
      </div>

      {/* Sidebar Toggle Button (Visible when CLOSED) */}
      {!isSidebarOpen && (
        <div className="fixed top-4 left-4 z-[60]">
           <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setIsSidebarOpen(true)}
              className="bg-background/80 backdrop-blur-md border-border/50 shadow-sm hover:bg-background/90 rounded-full h-10 w-10"
           >
              <Menu className="h-4 w-4" />
           </Button>
        </div>
      )}

      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside 
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-64 fixed inset-y-0 left-0 z-50 border-r border-border/50 bg-sidebar/60 backdrop-blur-xl pt-14 lg:pt-0"
          >
            <div className="h-full flex flex-col">
              <div className="h-14 flex items-center justify-between px-6 border-b border-sidebar-border/50">
                <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
                  <motion.div 
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-primary-foreground shadow-lg shadow-indigo-500/20"
                  >
                    <Waves className="w-4 h-4" />
                  </motion.div>
                  <span>Structura</span>
                </div>
                
                {/* Close Button (Inside Sidebar when OPEN) */}
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsSidebarOpen(false)}
                    className="h-8 w-8 -mr-2 hover:bg-sidebar-accent/50"
                >
                    <X className="h-4 w-4" />
                </Button>
              </div>
              <ScrollArea className="flex-1 py-4">
                <div className="px-4 space-y-6">
                  <StaggerContainer staggerDelay={0.05}>
                    <StaggerItem>
                        <h4 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                            <Zap className="w-3 h-3" /> Motion
                        </h4>
                        <div className="space-y-1">
                            <a href="#animations" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-md transition-colors">Showcase</a>
                        </div>
                    </StaggerItem>
                    
                    <div className="h-4"></div>

                    <StaggerItem>
                        <h4 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                            <Layers className="w-3 h-3" /> Foundation
                        </h4>
                        <div className="space-y-1">
                        <a href="#typography" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-md transition-colors">Typography</a>
                        <a href="#colors" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-md transition-colors">Colors</a>
                        </div>
                    </StaggerItem>
                    
                    <div className="h-4"></div>

                    <StaggerItem>
                        <h4 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                            <Component className="w-3 h-3" /> Components
                        </h4>
                        <div className="space-y-1">
                        <a href="#buttons" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-md transition-colors">Buttons</a>
                        <a href="#inputs" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-md transition-colors">Inputs & Forms</a>
                        <a href="#cards" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-md transition-colors">Cards & Display</a>
                        <a href="#data" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-md transition-colors">Data & Layout</a>
                        <a href="#navigation" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-md transition-colors">Navigation</a>
                        <a href="#feedback" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-md transition-colors">Feedback</a>
                        </div>
                    </StaggerItem>

                    <div className="h-4"></div>

                    <StaggerItem>
                        <h4 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                            <Layout className="w-3 h-3" /> Examples
                        </h4>
                        <div className="space-y-1">
                            <a href="#examples" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-md transition-colors">Composed UI</a>
                        </div>
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </ScrollArea>
              <div className="p-4 border-t border-sidebar-border/50">
                 <div className="flex items-center gap-3 px-2">
                    <Avatar className="h-8 w-8 border border-border">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>UI</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Design Engineer</span>
                      <span className="text-xs text-muted-foreground">v2.3.0</span>
                    </div>
                 </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.main 
        className="flex-1"
        animate={{ 
            marginLeft: isSidebarOpen && (typeof window !== 'undefined' && window.innerWidth >= 1024) ? 256 : 0 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="max-w-5xl mx-auto p-8 lg:p-12 space-y-16 pt-20 lg:pt-12">
          
          {/* Header */}
          <FadeIn className="flex flex-col gap-8">
            <div className="flex justify-end w-full">
                <ModeToggle />
            </div>
            <HeroSection />
          </FadeIn>

          <Separator className="bg-border/50" />

          {/* Animations Showcase */}
          <section id="animations" className="scroll-mt-20">
             <FadeIn>
                <h2 className="text-3xl font-semibold mb-8 font-heading flex items-center gap-2">
                    <GradientText>Motion & Animation</GradientText>
                    <Sparkles className="h-5 w-5 text-indigo-400" />
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl">
                    A suite of motion primitives powered by Framer Motion. These components bring life to your UI with smooth, physics-based interactions.
                </p>
             </FadeIn>

             <div className="grid gap-8">
                <ComponentWrapper title="Interactive States" description="Transitions for mounting, unmounting, and visibility.">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label>Fade In/Out Toggle</Label>
                                <Button variant="outline" size="sm" onClick={() => setShowCard(!showCard)}>
                                    {showCard ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                                    {showCard ? "Hide" : "Show"}
                                </Button>
                            </div>
                            <div className="h-40 flex items-center justify-center border border-dashed border-border/50 rounded-xl bg-background/20">
                                <AnimatePresence mode="wait">
                                    {showCard && (
                                        <FadeInOut key="demo-card">
                                            <GlassCard className="w-64 text-center bg-indigo-500/20 border-indigo-500/30">
                                                <p className="font-medium text-indigo-200">I fade in and out smoothly!</p>
                                            </GlassCard>
                                        </FadeInOut>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Label>Continuous Pulse</Label>
                            <div className="h-40 flex items-center justify-center border border-dashed border-border/50 rounded-xl bg-background/20">
                                <Pulse>
                                     <GlassCard className="w-64 text-center bg-emerald-500/20 border-emerald-500/30">
                                        <div className="flex items-center justify-center gap-2 text-emerald-200">
                                            <Timer className="w-4 h-4" />
                                            <span className="font-medium">Live Status</span>
                                        </div>
                                    </GlassCard>
                                </Pulse>
                            </div>
                        </div>
                    </div>
                </ComponentWrapper>

                <ComponentWrapper title="Hover Effects" description="Interactive states for cards and actionable elements.">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        <HoverLift>
                            <GlassCard className="h-32 flex items-center justify-center cursor-pointer bg-indigo-500/10 border-indigo-500/20">
                                <span className="font-medium flex items-center gap-2"><Move className="w-4 h-4" /> Lift on Hover</span>
                            </GlassCard>
                        </HoverLift>
                        
                        <HoverGlow>
                             <GlassCard className="h-32 flex items-center justify-center cursor-pointer bg-purple-500/10 border-purple-500/20">
                                <span className="font-medium flex items-center gap-2"><Zap className="w-4 h-4" /> Glow on Hover</span>
                            </GlassCard>
                        </HoverGlow>

                        <motion.div 
                            whileHover={{ scale: 0.95, rotate: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                             <GlassCard className="h-32 flex items-center justify-center cursor-pointer bg-pink-500/10 border-pink-500/20">
                                <span className="font-medium flex items-center gap-2"><Activity className="w-4 h-4" /> Shrink & Rotate</span>
                            </GlassCard>
                        </motion.div>
                    </div>
                </ComponentWrapper>

                <ComponentWrapper title="Entrance Animations" description="Smooth entry transitions for content.">
                    <div className="w-full space-y-8">
                        <div className="space-y-2">
                            <Label>Staggered List</Label>
                            <StaggerContainer className="grid grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <StaggerItem key={i}>
                                        <div className="h-16 rounded-lg bg-accent/50 border border-border/50 flex items-center justify-center">
                                            Item {i}
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                        
                        <div className="space-y-2">
                            <Label>Text Animation</Label>
                            <div className="p-6 rounded-xl bg-background/50 border border-border/50">
                                <AnimateText text="Typing effect with stagger..." className="text-xl font-medium font-heading" />
                            </div>
                        </div>
                    </div>
                </ComponentWrapper>
             </div>
          </section>
          
          <Separator className="bg-border/50" />
          
          {/* Examples Section */}
          <section id="examples" className="scroll-mt-20">
            <FadeIn>
                <h2 className="text-3xl font-semibold mb-8 font-heading flex items-center gap-2">
                    <GradientText>Composed Examples</GradientText>
                </h2>
            </FadeIn>
            <div className="grid lg:grid-cols-2 gap-8">
                <ScaleIn delay={0.1}>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-medium text-muted-foreground">Login & Authentication</h3>
                        <LoginCard />
                    </div>
                </ScaleIn>
                <ScaleIn delay={0.2}>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-medium text-muted-foreground">Pricing & Features</h3>
                        <PricingCard />
                    </div>
                </ScaleIn>
            </div>
          </section>

          <Separator className="bg-border/50" />

          {/* Typography Section */}
          <section id="typography" className="scroll-mt-20">
            <FadeIn>
                <h2 className="text-2xl font-semibold mb-6 font-heading">Typography</h2>
            </FadeIn>
            <StaggerContainer className="grid gap-8">
              <StaggerItem className="space-y-2">
                <p className="text-sm text-muted-foreground font-mono">Display • Space Grotesk</p>
                <GlassCard className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight">The quick brown fox jumps over the lazy dog</h1>
                  <h2 className="text-3xl font-semibold tracking-tight">The quick brown fox jumps over the lazy dog</h2>
                  <h3 className="text-2xl font-medium tracking-tight">The quick brown fox jumps over the lazy dog</h3>
                </GlassCard>
              </StaggerItem>
              <StaggerItem className="space-y-2">
                 <p className="text-sm text-muted-foreground font-mono">Body • Inter</p>
                 <GlassCard>
                  <p className="leading-7">
                    Loreum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                 </GlassCard>
              </StaggerItem>
            </StaggerContainer>
          </section>

          {/* Colors Section */}
          <section id="colors" className="scroll-mt-20">
            <FadeIn><h2 className="text-2xl font-semibold mb-6 font-heading">Color Palette</h2></FadeIn>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StaggerItem className="space-y-2">
                <div className="h-24 rounded-xl bg-background border shadow-sm flex items-end p-3"><span className="text-xs font-mono">Background</span></div>
              </StaggerItem>
              <StaggerItem className="space-y-2">
                <div className="h-24 rounded-xl bg-foreground flex items-end p-3"><span className="text-xs font-mono text-background">Foreground</span></div>
              </StaggerItem>
              <StaggerItem className="space-y-2">
                <div className="h-24 rounded-xl bg-primary flex items-end p-3"><span className="text-xs font-mono text-primary-foreground">Primary</span></div>
              </StaggerItem>
              <StaggerItem className="space-y-2">
                <div className="h-24 rounded-xl bg-secondary flex items-end p-3"><span className="text-xs font-mono text-secondary-foreground">Secondary</span></div>
              </StaggerItem>
               <StaggerItem className="space-y-2">
                <div className="h-24 rounded-xl bg-muted flex items-end p-3"><span className="text-xs font-mono text-muted-foreground">Muted</span></div>
              </StaggerItem>
              <StaggerItem className="space-y-2">
                <div className="h-24 rounded-xl bg-accent flex items-end p-3"><span className="text-xs font-mono text-accent-foreground">Accent</span></div>
              </StaggerItem>
              <StaggerItem className="space-y-2">
                <div className="h-24 rounded-xl bg-destructive flex items-end p-3"><span className="text-xs font-mono text-destructive-foreground">Destructive</span></div>
              </StaggerItem>
              <StaggerItem className="space-y-2">
                <div className="h-24 rounded-xl bg-border flex items-end p-3"><span className="text-xs font-mono text-foreground">Border</span></div>
              </StaggerItem>
            </StaggerContainer>
          </section>

          {/* Buttons Section */}
          <section id="buttons" className="scroll-mt-20">
            <FadeIn><h2 className="text-2xl font-semibold mb-6 font-heading">Buttons</h2></FadeIn>
            <div className="grid gap-6">
              <ComponentWrapper title="Variants" description="Standard button styles for different actions.">
                <div className="flex flex-wrap gap-4 justify-center">
                    {['Default', 'Secondary', 'Destructive', 'Outline', 'Ghost', 'Link'].map((variant, i) => (
                         <motion.div key={variant} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant={variant.toLowerCase() as any}>{variant}</Button>
                         </motion.div>
                    ))}
                </div>
              </ComponentWrapper>
              
              <ComponentWrapper title="Sizes" description="Buttons come in multiple sizes for different contexts.">
                 <div className="flex flex-wrap items-center gap-4 justify-center">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon"><ChevronRight className="h-4 w-4" /></Button>
                </div>
              </ComponentWrapper>

              <ComponentWrapper title="With Icons" description="Enhance actions with iconography.">
                 <div className="flex flex-wrap gap-4 justify-center">
                  <Button>
                    <Mail className="mr-2 h-4 w-4" /> Login with Email
                  </Button>
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                  </Button>
                </div>
              </ComponentWrapper>
            </div>
          </section>

          {/* Inputs Section */}
          <section id="inputs" className="scroll-mt-20">
            <FadeIn><h2 className="text-2xl font-semibold mb-6 font-heading">Inputs & Forms</h2></FadeIn>
            <div className="grid gap-6">
              <ComponentWrapper title="Text Fields" description="Common input types for text data.">
                <div className="w-full max-w-sm space-y-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" className="bg-background/50 transition-all focus:scale-[1.01]" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Password" className="bg-background/50 transition-all focus:scale-[1.01]" />
                  </div>
                </div>
              </ComponentWrapper>

              <ComponentWrapper title="Selection Controls" description="Checkboxes, radios, and switches.">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">Option Two</Label>
                    </div>
                  </RadioGroup>

                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                </div>
              </ComponentWrapper>

               <ComponentWrapper title="Advanced Inputs" description="Selects, sliders, and textareas.">
                <div className="w-full max-w-sm space-y-6">
                   <Select>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select a timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                      <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                      <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                      <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="space-y-3">
                     <Label>Volume</Label>
                     <Slider defaultValue={[50]} max={100} step={1} />
                  </div>

                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea placeholder="Type your message here." id="message" className="bg-background/50 transition-all focus:scale-[1.01]" />
                  </div>
                </div>
              </ComponentWrapper>
            </div>
          </section>

          {/* Cards Section */}
          <section id="cards" className="scroll-mt-20">
            <FadeIn><h2 className="text-2xl font-semibold mb-6 font-heading">Cards & Display</h2></FadeIn>
            <div className="grid gap-6">
              <ComponentWrapper title="Card Component" description="Container for related content and actions.">
                 <Card className="w-[350px] bg-background/60 backdrop-blur-sm transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Name of your project" className="bg-background/50" />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                  </CardFooter>
                </Card>
              </ComponentWrapper>

              <ComponentWrapper title="Tabs" description="Organize content into separate views.">
                <Tabs defaultValue="account" className="w-[400px]">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="bg-background/60 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                            Make changes to your account here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Pedro Duarte" className="bg-background/50" />
                            </div>
                            <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="@peduarte" className="bg-background/50" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                        </Card>
                    </motion.div>
                  </TabsContent>
                  <TabsContent value="password">
                     <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="bg-background/60 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" className="bg-background/50" />
                            </div>
                            <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" className="bg-background/50" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                        </Card>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </ComponentWrapper>
            </div>
          </section>

          {/* Data Section */}
          <section id="data" className="scroll-mt-20">
             <FadeIn><h2 className="text-2xl font-semibold mb-6 font-heading">Data & Layout</h2></FadeIn>
             <div className="grid gap-6">
                <ComponentWrapper title="Accordion" description="Vertically stacked interactive headings.">
                   <Accordion type="single" collapsible className="w-full max-w-md">
                    <AccordionItem value="item-1" className="border-b border-border/50">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b border-border/50">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components' aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b border-border/50">
                      <AccordionTrigger>Is it animated?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It's animated by default, but you can disable it if you
                        prefer.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </ComponentWrapper>

                <ComponentWrapper title="Table" description="Responsive data grid.">
                  <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                      <TableRow className="hover:bg-muted/50 border-border/50">
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-muted/50 border-border/50 transition-colors">
                        <TableCell className="font-medium">INV-001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/50 border-border/50 transition-colors">
                        <TableCell className="font-medium">INV-002</TableCell>
                        <TableCell>Pending</TableCell>
                        <TableCell>PayPal</TableCell>
                        <TableCell className="text-right">$120.00</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/50 border-border/50 transition-colors">
                        <TableCell className="font-medium">INV-003</TableCell>
                        <TableCell>Unpaid</TableCell>
                        <TableCell>Bank Transfer</TableCell>
                        <TableCell className="text-right">$350.00</TableCell>
                      </TableRow>
                       <TableRow className="hover:bg-muted/50 border-border/50 transition-colors">
                        <TableCell className="font-medium">INV-004</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$450.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ComponentWrapper>
             </div>
          </section>

          {/* Navigation Section */}
           <section id="navigation" className="scroll-mt-20">
             <FadeIn><h2 className="text-2xl font-semibold mb-6 font-heading">Navigation</h2></FadeIn>
             <div className="grid gap-6">
                <ComponentWrapper title="Dropdown Menu" description="Displays a list of actions or options.">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-background/80 backdrop-blur-xl border-border/50">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-border/50" />
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Keyboard className="mr-2 h-4 w-4" />
                        <span>Keyboard shortcuts</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-border/50" />
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Team</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-border/50" />
                      <DropdownMenuItem>
                        <Plus className="mr-2 h-4 w-4" />
                        <span>New Team</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </ComponentWrapper>
             </div>
           </section>

          {/* Feedback Section */}
          <section id="feedback" className="scroll-mt-20 pb-20">
             <FadeIn><h2 className="text-2xl font-semibold mb-6 font-heading">Feedback & Overlays</h2></FadeIn>
             <div className="grid gap-6">
                <ComponentWrapper title="Alerts" description="Callout messages for user attention.">
                  <div className="w-full max-w-md space-y-4">
                     <Alert className="bg-background/60 backdrop-blur-sm">
                      <Terminal className="h-4 w-4" />
                      <AlertTitle>Heads up!</AlertTitle>
                      <AlertDescription>
                        You can add components to your app using the cli.
                      </AlertDescription>
                    </Alert>
                    <Alert variant="destructive" className="bg-destructive/5 border-destructive/20">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        Your session has expired. Please log in again.
                      </AlertDescription>
                    </Alert>
                  </div>
                </ComponentWrapper>

                <ComponentWrapper title="Dialog" description="Modal windows for critical information or actions.">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Edit Profile</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-background/90 backdrop-blur-xl border-border/50">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input id="name" value="Pedro Duarte" className="col-span-3 bg-background/50" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input id="username" value="@peduarte" className="col-span-3 bg-background/50" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </ComponentWrapper>
             </div>
          </section>

        </div>
      </motion.main>
    </div>
  );
}
