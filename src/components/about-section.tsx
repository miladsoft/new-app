import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className }: AboutSectionProps) {
  const features = [
    "Sustainably sourced materials",
    "Handcrafted by skilled artisans",
    "10-year quality guarantee",
    "Free design consultation",
    "Premium customer support",
    "Easy returns and exchanges"
  ];

  return (
    <Section
      id="about"
      className={className}
      containerClassName="px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column: Image */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200"
            alt="Furniture workshop"
            className="w-full h-full object-cover"
          />
          
          {/* Floating stats */}
          <div className="absolute -bottom-6 -right-6 bg-card shadow-lg rounded-lg p-6 w-48 border">
            <div className="mb-2">
              <div className="text-4xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">5k+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>
        
        {/* Right column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Crafting Excellence Since 1999</h2>
          <p className="text-muted-foreground mb-6">
            At Elegant Home, we've been dedicated to the art of fine furniture making for over two decades. Our passion for quality craftsmanship and timeless design drives everything we create.
          </p>
          <p className="text-muted-foreground mb-8">
            Each piece in our collection is thoughtfully designed and meticulously crafted using premium materials that are responsibly sourced. We believe that beautiful furniture should not only enhance your space but also stand the test of time.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button className="w-fit">Learn More About Us</Button>
        </div>
      </div>
    </Section>
  );
}