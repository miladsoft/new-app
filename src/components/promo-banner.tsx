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
          New Collection Showcase — Explore our latest additions to each category
          <a href="/category/living-room" className="underline underline-offset-2 ml-2 font-semibold">
            View Now
          </a>
        </p>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}