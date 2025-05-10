import { useState } from "react";
import { Menu, X, Search, Grid2X2 } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { SearchDialog } from "./search-dialog";
import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

const categories = [
  { name: "Living Room", href: "/category/living-room" },
  { name: "Bedroom", href: "/category/bedroom" },
  { name: "Dining Room", href: "/category/dining-room" },
  { name: "Office", href: "/category/office" },
  { name: "Outdoor", href: "/category/outdoor" },
  { name: "Accessories", href: "/category/accessories" },
];

export function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);

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
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold tracking-tight text-primary">Elegant Home</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 lg:w-1/3">
            <Link to="/" className="font-medium text-foreground hover:text-primary transition-colors duration-200">Home</Link>
            
            {/* Categories dropdown */}
            <div className="relative">
              <button 
                onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
                className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                Collections
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`transition-transform duration-200 ${categoryMenuOpen ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              
              {categoryMenuOpen && (
                <div className="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-background border">
                  <div className="py-2" role="menu" aria-orientation="vertical">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors duration-200"
                        role="menuitem"
                        onClick={() => setCategoryMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <a href="#about" className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200">About</a>
            <a href="#contact" className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200">Contact</a>
          </nav>
          
          {/* Header Actions */}
          <div className="flex items-center justify-end space-x-4 lg:w-1/3">
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Browse all categories"
              asChild
            >
              <Link to="/#categories">
                <Grid2X2 className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50">
            <div className="flex flex-col py-4 px-4 space-y-4">
              <Link to="/" className="font-medium text-foreground hover:text-primary transition-colors duration-200 py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              
              <div className="py-2 border-t border-b">
                <p className="font-medium text-foreground mb-2">Collections</p>
                <div className="pl-4 space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="block font-medium text-foreground/80 hover:text-primary transition-colors duration-200 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <a href="#about" className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200 py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200 py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>
      
      {/* Search Dialog */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
