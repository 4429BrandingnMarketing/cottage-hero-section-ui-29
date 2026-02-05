 import { cn } from "@/lib/utils";
 import { ReactNode } from "react";
 
 interface GlassCardProps {
   title: string;
   description: string;
   icon?: ReactNode;
   className?: string;
 }
 
 const GlassCard = ({ title, description, icon, className }: GlassCardProps) => {
   return (
     <div
       className={cn(
         "group relative overflow-hidden rounded-2xl p-6 transition-all duration-500",
         "bg-white/10 backdrop-blur-xl border border-white/20",
         "hover:bg-white/20 hover:border-white/40 hover:shadow-2xl",
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