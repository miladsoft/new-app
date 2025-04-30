import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PromoBannerProps {
  className?: string;
}

export function PromoBanner({ className }: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div className={cn(
      "bg-primary text-primary-foreground py-2 px-4 text-center relative",
      className
    )}>
      <div className="container mx-auto">
        <p className="text-sm font-medium">
          Spring Sale: Enjoy 25% off all living room furniture until May 15th. Use code <span className="font-bold">SPRING25</span>
        </p>
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground"
          aria-label="Close promotion banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}