 import { cn } from "@/lib/utils";
 import { ReactNode } from "react";
 
 interface GlassCardProps {
   title: string;
   description: string;
   icon?: ReactNode;
   className?: string;
   variant?: 'default' | 'light' | 'heavy' | 'gradient' | 'neon' | 'subtle';
 }
 
  const variantStyles = {
   default: {
     bg: "bg-white/10 backdrop-blur-xl",
     border: "border-white/20",
     hoverBg: "hover:bg-white/20",
     hoverBorder: "hover:border-white/40",
   },
   light: {
     bg: "bg-white/5 backdrop-blur-sm",
     border: "border-white/10",
     hoverBg: "hover:bg-white/10",
     hoverBorder: "hover:border-white/20",
   },
   heavy: {
     bg: "bg-white/20 backdrop-blur-2xl",
     border: "border-white/30",
     hoverBg: "hover:bg-white/30",
     hoverBorder: "hover:border-white/50",
   },
   gradient: {
     bg: "bg-gradient-to-br from-white/15 via-white/5 to-transparent backdrop-blur-xl",
     border: "border-white/25",
     hoverBg: "hover:from-white/25 hover:via-white/10",
     hoverBorder: "hover:border-white/50",
   },
   neon: {
     bg: "bg-white/10 backdrop-blur-xl",
     border: "border-purple-500/30",
     hoverBg: "hover:bg-white/15",
     hoverBorder: "hover:border-purple-400/60 hover:shadow-purple-500/25",
   },
   subtle: {
     bg: "bg-white/[0.03] backdrop-blur-md",
     border: "border-white/[0.08]",
     hoverBg: "hover:bg-white/[0.08]",
     hoverBorder: "hover:border-white/20",
   },
 };
 
 const GlassCard = ({ title, description, icon, className, variant = 'default' }: GlassCardProps) => {
   const styles = variantStyles[variant];
 
   return (
     <div
       className={cn(
         "group relative overflow-hidden rounded-2xl p-6 transition-all duration-500",
         styles.bg,
         "border",
         styles.border,
         styles.hoverBg,
         styles.hoverBorder,
         "hover:shadow-2xl",
         "hover:scale-[1.02] hover:-translate-y-1",
         className
       )}
     >
       {/* Gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
       
       {/* Shine effect */}
       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
         <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
       </div>
       
       <div className="relative z-10">
         {icon && (
           <div className="mb-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
             {icon}
           </div>
         )}
         <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
           {title}
         </h3>
         <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
           {description}
         </p>
       </div>
     </div>
   );
 };
 
 export default GlassCard;