import React from "react";
import { Link } from "wouter";
import { ComponentWrapper } from "@/components/ui-kit/ComponentWrapper";
import { ModeToggle } from "@/components/mode-toggle";

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

import { Terminal, Waves, AlertCircle, Check, ChevronRight, Mail, Loader2, BellRing, MoreHorizontal, Plus, User, CreditCard, Settings, Keyboard, Users } from "lucide-react";

export default function UIKit() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex">
      {/* Sidebar */}
      <aside className="w-64 fixed inset-y-0 left-0 z-50 border-r bg-sidebar hidden lg:block">
        <div className="h-full flex flex-col">
          <div className="h-14 flex items-center px-6 border-b border-sidebar-border">
            <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
                <Waves className="w-4 h-4" />
              </div>
              <span>Structura</span>
            </div>
          </div>
          <ScrollArea className="flex-1 py-4">
            <div className="px-4 space-y-6">
              <div>
                <h4 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Foundation</h4>
                <div className="space-y-1">
                  <a href="#typography" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors">Typography</a>
                  <a href="#colors" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors">Colors</a>
                </div>
              </div>
              <div>
                <h4 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Components</h4>
                <div className="space-y-1">
                  <a href="#buttons" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors">Buttons</a>
                  <a href="#inputs" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors">Inputs & Forms</a>
                  <a href="#cards" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors">Cards & Display</a>
                  <a href="#data" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors">Data & Layout</a>
                  <a href="#navigation" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors">Navigation</a>
                  <a href="#feedback" className="block px-2 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors">Feedback</a>
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="p-4 border-t border-sidebar-border">
             <div className="flex items-center gap-3 px-2">
                <Avatar className="h-8 w-8 border border-border">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>UI</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Design Engineer</span>
                  <span className="text-xs text-muted-foreground">v1.0.0</span>
                </div>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64">
        <div className="max-w-4xl mx-auto p-8 lg:p-12 space-y-16">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold font-heading tracking-tight">Structura UI Kit</h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                A comprehensive design system focused on utility, precision, and industrial aesthetics. 
                Built with Tailwind CSS and Radix UI primitives.
              </p>
              <div className="flex gap-4 pt-4">
                <Button>Get Started</Button>
                <Button variant="outline">Documentation</Button>
              </div>
            </div>
            <ModeToggle />
          </div>

          <Separator />

          {/* Typography Section */}
          <section id="typography" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-6 font-heading">Typography</h2>
            <div className="grid gap-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-mono">Display • Space Grotesk</p>
                <div className="space-y-4 p-6 border rounded-lg bg-card">
                  <h1 className="text-4xl font-bold tracking-tight">The quick brown fox jumps over the lazy dog</h1>
                  <h2 className="text-3xl font-semibold tracking-tight">The quick brown fox jumps over the lazy dog</h2>
                  <h3 className="text-2xl font-medium tracking-tight">The quick brown fox jumps over the lazy dog</h3>
                </div>
              </div>
              <div className="space-y-2">
                 <p className="text-sm text-muted-foreground font-mono">Body • Inter</p>
                 <div className="p-6 border rounded-lg bg-card">
                  <p className="leading-7">
                    Loreum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                 </div>
              </div>
            </div>
          </section>

          {/* Colors Section */}
          <section id="colors" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-6 font-heading">Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-background border shadow-sm flex items-end p-2"><span className="text-xs font-mono">Background</span></div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-foreground flex items-end p-2"><span className="text-xs font-mono text-background">Foreground</span></div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-primary flex items-end p-2"><span className="text-xs font-mono text-primary-foreground">Primary</span></div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-secondary flex items-end p-2"><span className="text-xs font-mono text-secondary-foreground">Secondary</span></div>
              </div>
               <div className="space-y-2">
                <div className="h-24 rounded-lg bg-muted flex items-end p-2"><span className="text-xs font-mono text-muted-foreground">Muted</span></div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-accent flex items-end p-2"><span className="text-xs font-mono text-accent-foreground">Accent</span></div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-destructive flex items-end p-2"><span className="text-xs font-mono text-destructive-foreground">Destructive</span></div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-border flex items-end p-2"><span className="text-xs font-mono text-foreground">Border</span></div>
              </div>
            </div>
          </section>

          {/* Buttons Section */}
          <section id="buttons" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-6 font-heading">Buttons</h2>
            <div className="grid gap-6">
              <ComponentWrapper title="Variants" description="Standard button styles for different actions.">
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
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
            <h2 className="text-2xl font-semibold mb-6 font-heading">Inputs & Forms</h2>
            <div className="grid gap-6">
              <ComponentWrapper title="Text Fields" description="Common input types for text data.">
                <div className="w-full max-w-sm space-y-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Password" />
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
                    <SelectTrigger>
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
                    <Textarea placeholder="Type your message here." id="message" />
                  </div>
                </div>
              </ComponentWrapper>
            </div>
          </section>

          {/* Cards Section */}
          <section id="cards" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-6 font-heading">Cards & Display</h2>
            <div className="grid gap-6">
              <ComponentWrapper title="Card Component" description="Container for related content and actions.">
                 <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Name of your project" />
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
                    <Card>
                      <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                          Make changes to your account here. Click save when you're done.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="username">Username</Label>
                          <Input id="username" defaultValue="@peduarte" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Save changes</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="password">
                    <Card>
                      <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                          Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="current">Current password</Label>
                          <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="new">New password</Label>
                          <Input id="new" type="password" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Save password</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </ComponentWrapper>
            </div>
          </section>

          {/* Data Section */}
          <section id="data" className="scroll-mt-20">
             <h2 className="text-2xl font-semibold mb-6 font-heading">Data & Layout</h2>
             <div className="grid gap-6">
                <ComponentWrapper title="Accordion" description="Vertically stacked interactive headings.">
                   <Accordion type="single" collapsible className="w-full max-w-md">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components' aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
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
                      <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">INV-001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV-002</TableCell>
                        <TableCell>Pending</TableCell>
                        <TableCell>PayPal</TableCell>
                        <TableCell className="text-right">$120.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV-003</TableCell>
                        <TableCell>Unpaid</TableCell>
                        <TableCell>Bank Transfer</TableCell>
                        <TableCell className="text-right">$350.00</TableCell>
                      </TableRow>
                       <TableRow>
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
             <h2 className="text-2xl font-semibold mb-6 font-heading">Navigation</h2>
             <div className="grid gap-6">
                <ComponentWrapper title="Dropdown Menu" description="Displays a list of actions or options.">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
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
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Team</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
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
             <h2 className="text-2xl font-semibold mb-6 font-heading">Feedback & Overlays</h2>
             <div className="grid gap-6">
                <ComponentWrapper title="Alerts" description="Callout messages for user attention.">
                  <div className="w-full max-w-md space-y-4">
                     <Alert>
                      <Terminal className="h-4 w-4" />
                      <AlertTitle>Heads up!</AlertTitle>
                      <AlertDescription>
                        You can add components to your app using the cli.
                      </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
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
                    <DialogContent className="sm:max-w-[425px]">
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
                          <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input id="username" value="@peduarte" className="col-span-3" />
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
      </main>
    </div>
  );
}
