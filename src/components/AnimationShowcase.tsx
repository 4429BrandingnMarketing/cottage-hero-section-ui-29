 import { useState } from "react";
 import { cn } from "@/lib/utils";
 import { Button } from "@/components/ui/button";
 import { Play, RotateCcw, Sparkles, Zap, Heart, Star } from "lucide-react";
 
 const animations = [
   { name: "Fade In", class: "animate-fade-in", icon: Sparkles },
   { name: "Scale In", class: "animate-scale-in", icon: Zap },
   { name: "Slide Right", class: "animate-slide-in-right", icon: Star },
   { name: "Bounce", class: "animate-bounce", icon: Heart },
 ];
 
 const AnimationShowcase = () => {
   const [activeAnimation, setActiveAnimation] = useState<string | null>(null);
   const [key, setKey] = useState(0);
 
   const playAnimation = (animClass: string) => {
     setActiveAnimation(animClass);
     setKey(prev => prev + 1);
   };
 
   const resetAnimation = () => {
     setActiveAnimation(null);
     setKey(prev => prev + 1);
   };
 
   return (
     <div className="space-y-8">
       {/* Animation Controls */}
       <div className="flex flex-wrap gap-3 justify-center">
         {animations.map((anim) => {
           const Icon = anim.icon;
           return (
             <Button
               key={anim.name}
               variant={activeAnimation === anim.class ? "default" : "outline"}
               onClick={() => playAnimation(anim.class)}
               className="gap-2 transition-all duration-300 hover:scale-105"
             >
               <Icon className="w-4 h-4" />
               {anim.name}
             </Button>
           );
         })}
         <Button
           variant="ghost"
           onClick={resetAnimation}
           className="gap-2 text-muted-foreground hover:text-foreground"
         >
           <RotateCcw className="w-4 h-4" />
           Reset
         </Button>
       </div>
 
       {/* Animation Preview Area */}
       <div className="relative min-h-[200px] rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
         
         <div className="relative flex items-center justify-center h-[200px]">
           <div
             key={key}
             className={cn(
               "w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary/60 shadow-lg flex items-center justify-center text-primary-foreground",
               activeAnimation
             )}
           >
             <Play className="w-8 h-8" />
           </div>
         </div>
       </div>
 
       {/* Animation Cards */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {animations.map((anim) => {
           const Icon = anim.icon;
           return (
             <div
               key={anim.name}
               onClick={() => playAnimation(anim.class)}
               className={cn(
                 "group cursor-pointer p-4 rounded-xl border transition-all duration-300",
                 "hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1",
                 activeAnimation === anim.class
                   ? "border-primary bg-primary/10"
                   : "border-border bg-card"
               )}
             >
               <div className="flex flex-col items-center gap-3 text-center">
                 <div
                   className={cn(
                     "w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300",
                     activeAnimation === anim.class
                       ? "bg-primary text-primary-foreground"
                       : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                   )}
                 >
                   <Icon className="w-5 h-5" />
                 </div>
                 <span className="text-sm font-medium">{anim.name}</span>
               </div>
             </div>
           );
         })}
       </div>
     </div>
   );
 };
 
 export default AnimationShowcase;