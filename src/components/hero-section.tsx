import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      {/* Background image - you could replace this with an actual image */}
      <div className="absolute inset-0 bg-muted/30">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80')",
            opacity: 0.3
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h5 className="text-primary font-medium mb-4 tracking-wide">Premium Furniture Collection</h5>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Transform Your Space with Elegant Design
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Discover our curated collection of beautifully crafted furniture 
            pieces that blend style, comfort, and functionality for every room in your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="px-8">
              Shop Collection
            </Button>
            <Button size="lg" variant="outline" className="group">
              View Catalog
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}