import { useState, useEffect } from "react";
import { Menu, X, Search, Grid2X2, Phone, Languages } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { SearchDialog } from "./search-dialog";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/language-context";

interface HeaderProps {
  className?: string;
}

const categories = [
  { name: "Office Furniture", href: "/category/office-furniture" },
  { name: "Conference Solutions", href: "/category/conference-solutions" },
  { name: "Hospitality Furniture", href: "/category/hospitality-furniture" },
  { name: "Lounge & Common Areas", href: "/category/lounge-common-areas" },
  { name: "Outdoor Commercial", href: "/category/outdoor-commercial" },
  { name: "Lighting Solutions", href: "/category/lighting-solutions" },
];

export function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  // Close category menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (categoryMenuOpen && !target.closest('[data-category-menu]')) {
        setCategoryMenuOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [categoryMenuOpen]);

  return (    <>
      <header className={cn(
        "w-full border-b border-[#176c91]/10 dark:border-[#176c91]/30 bg-background px-4 py-3 sticky top-0 z-40 shadow-sm",
        className
      )}>
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center lg:w-1/3">
            <button 
              className="lg:hidden pr-4 text-[#176c91]" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="flex items-center">
              <div className="flex items-center">              <div className="h-8 w-8 bg-[#176c91] text-white rounded-full flex items-center justify-center font-bold mr-2">
                AJ
              </div>
              <span className="text-xl font-bold tracking-tight text-[#176c91]">{t("site.name")}</span>
              </div>
            </Link>
          </div>          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center lg:w-1/3">
            <div className="flex items-center space-x-6">
              <Link to="/" className="font-medium text-gray-700 hover:text-[#ea252b] transition-colors duration-200">{t("nav.home")}</Link>
              
              {/* Categories dropdown */}
              <div className="relative" data-category-menu>
                <button 
                  onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
                  className="font-medium text-gray-700 hover:text-[#176c91] transition-colors duration-200 flex items-center gap-1"
                  aria-expanded={categoryMenuOpen}
                  aria-haspopup="true"
                >
                  {t("nav.products")}
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
                  <div className="absolute z-50 mt-2 w-56 rounded-xl shadow-lg bg-white border border-[#176c91]/10">
                    <div className="p-2" role="menu" aria-orientation="vertical">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-[#176c91] hover:bg-[#176c91]/5 rounded-lg transition-colors duration-200"
                          role="menuitem"
                          onClick={() => setCategoryMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                    <div className="p-2 border-t border-[#176c91]/10">
                      <Link
                        to="/categories"
                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white bg-[#ea252b] rounded-lg hover:bg-[#ea252b]/90 transition-colors"
                        onClick={() => setCategoryMenuOpen(false)}
                      >
                        <Grid2X2 size={16} />
                        {t("products.viewAll")}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/projects" className="font-medium text-gray-700 hover:text-[#ea252b] transition-colors duration-200">{t("nav.projects")}</Link>
              <a href="#about" className="font-medium text-gray-700 hover:text-[#ea252b] transition-colors duration-200">{t("nav.about")}</a>
              <a href="#contact" className="font-medium text-gray-700 hover:text-[#176c91] transition-colors duration-200">{t("nav.contact")}</a>
            </div>
          </nav>            {/* Header Actions */}
          <div className="flex items-center justify-end space-x-3 lg:w-1/3">
            <Button 
              variant="outline"
              size="icon" 
              aria-label="Browse all categories"
              className="border-[#176c91]/20 text-[#176c91] hover:bg-[#176c91]/10 hover:text-[#176c91]"
              asChild
            >
              <Link to="/#categories">
                <Grid2X2 className="h-[18px] w-[18px]" />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="icon" 
              aria-label="Search"
              className="border-[#ea252b]/20 text-[#ea252b] hover:bg-[#ea252b]/10 hover:text-[#ea252b]"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-[18px] w-[18px]" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="border-[#176c91]/20 hover:bg-[#176c91]/10"
              onClick={() => {
                const langToggle = document.querySelector('[data-lang-toggle]');
                if (langToggle) {
                  (langToggle as HTMLButtonElement).click();
                }
              }}
              aria-label="Toggle language"
            >
              <Languages className="h-[18px] w-[18px]" />
            </Button>
            
            <ThemeToggle />
            
            <Button 
              variant="default"
              size="sm" 
              className="hidden md:flex items-center gap-2 bg-[#ea252b] text-white hover:bg-[#ea252b]/90"
              asChild
            >
              <a href="#contact">
                <Phone className="h-4 w-4" />
                <span>{t("nav.quote")}</span>
              </a>
            </Button>
          </div>
        </div>          {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-[#176c91]/10 shadow-lg z-50">
            <div className="flex flex-col py-4 px-6 space-y-3">
              <Link to="/" 
                className="font-medium text-gray-800 dark:text-gray-200 hover:text-[#ea252b] transition-colors duration-200 py-2 flex items-center" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#ea252b] mr-2"></span>
                {t("nav.home")}
              </Link>
              
              <div className="py-2 border-t border-b border-[#176c91]/10 dark:border-[#176c91]/30">
                <div className="flex items-center mb-3">
                  <span className="h-6 w-1 bg-[#176c91] rounded-full mr-2"></span>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">{t("nav.products")}</p>
                </div>
                <div className="pl-4 space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="block font-medium text-gray-600 dark:text-gray-300 hover:text-[#176c91] transition-colors duration-200 py-1.5 border-l-2 border-[#176c91]/10 dark:border-[#176c91]/30 pl-3 hover:border-[#176c91]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link to="/projects" 
                className="font-medium text-gray-800 dark:text-gray-200 hover:text-[#ea252b] transition-colors duration-200 py-2 flex items-center" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#ea252b] mr-2"></span>
                {t("nav.projects")}
              </Link>
              
              <a href="#about" 
                className="font-medium text-gray-800 dark:text-gray-200 hover:text-[#ea252b] transition-colors duration-200 py-2 flex items-center" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#ea252b] mr-2"></span>
                {t("nav.about")}
              </a>
              
              <a href="#contact" 
                className="font-medium text-gray-800 dark:text-gray-200 hover:text-[#176c91] transition-colors duration-200 py-2 flex items-center" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#176c91] mr-2"></span>
                {t("nav.contact")}
              </a>
              
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Button
                  className="bg-[#176c91] text-white hover:bg-[#176c91]/90"
                  onClick={() => {
                    setSearchOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  <Search className="h-4 w-4 mr-2" />
                  {t("products.search")}
                </Button>
                
                <Button
                  className="bg-[#ea252b] text-white hover:bg-[#ea252b]/90"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {t("nav.quote")}
                </Button>
              </div>            </div>
          </div>
        )}
      </header>
      
      {/* Search Dialog */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
