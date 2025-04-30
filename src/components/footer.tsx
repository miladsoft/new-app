import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { cn } from "../lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();
  
  return (
    <footer className={cn(
      "w-full border-t bg-background px-4 py-12 mt-auto",
      className
    )}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Elegant Home</h3>
            <p className="text-muted-foreground mb-4">
              Discover unique and elegant furniture designs that transform your living spaces into sophisticated sanctuaries of comfort and style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Living Room</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Bedroom</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dining</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Office</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Outdoor</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Collections</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Design Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Delivery Information</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Furniture Street, Design District, 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <a href="tel:+12345678900" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-8900</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <a href="mailto:info@eleganthome.com" className="text-muted-foreground hover:text-primary transition-colors">info@eleganthome.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/70 mb-4 md:mb-0">
              &copy; {year} Elegant Home Furniture. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
