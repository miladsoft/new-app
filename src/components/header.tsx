import { useState } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/cart-context";
import { SearchDialog } from "./search-dialog";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { setIsCartOpen, getItemsCount } = useCart();
  
  const itemsCount = getItemsCount();

  return (
    <>
      <header className={cn(
        "w-full border-b bg-background px-4 py-3 sticky top-0 z-40 shadow-sm",
        className
      )}>
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center lg:w-1/3">
            <button 
              className="lg:hidden pr-4" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold tracking-tight text-primary">Elegant Home</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 lg:w-1/3">
            <a href="/" className="font-medium text-foreground hover:text-primary transition-colors duration-200">Home</a>
            <a href="#products" className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200">Collection</a>
            <a href="#categories" className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200">Categories</a>
            <a href="#about" className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200">About</a>
            <a href="#contact" className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200">Contact</a>
          </nav>
          
          {/* Header Actions */}
          <div className="flex items-center justify-end space-x-4 lg:w-1/3">
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Your cart"
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {itemsCount}
                </span>
              )}
            </Button>
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50">
            <div className="flex flex-col py-4 px-4 space-y-4">
              <a href="/" className="font-medium text-foreground hover:text-primary transition-colors duration-200 py-2">Home</a>
              <a href="#products" className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200 py-2">Collection</a>
              <a href="#categories" className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200 py-2">Categories</a>
              <a href="#about" className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200 py-2">About</a>
              <a href="#contact" className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200 py-2">Contact</a>
            </div>
          </div>
        )}
      </header>
      
      {/* Search Dialog */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
