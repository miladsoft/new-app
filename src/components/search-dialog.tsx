import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { products } from "./data/products";
import { ProductProps } from "./ui/product-card";
import { Link } from "react-router-dom";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

// Extract unique categories for search suggestions
const categories = Array.from(new Set(products.map(product => product.category)));

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ProductProps[]>([]);

  // Handle escape key press to close dialog
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, onClose]);

  // Disable body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle search input changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Search in name, category, and description
    const results = products.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    setSearchResults(results);
  }, [searchQuery]);

  // Clear search when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setSearchResults([]);
    }
  }, [isOpen]);

  // Get filtered categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    
    return categories.filter(category => 
      category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-background border shadow-lg w-full max-w-3xl mt-20 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Search input */}
            <div className="p-4 border-b flex items-center">
              <Search className="h-5 w-5 text-muted-foreground mr-2" />              <input
                type="text"
                placeholder="Search for collections, products..."
                className="flex-1 bg-transparent border-none outline-none text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Search results */}
            <div className="max-h-[70vh] overflow-y-auto p-2">
              {searchQuery.trim() === "" ? (
                <div className="p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Browse Collections</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent/20 transition-colors"
                        onClick={onClose}
                      >
                        <Tag className="h-4 w-4 text-primary" />
                        <span>{category}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {/* Category results */}
                  {filteredCategories.length > 0 && (
                    <div className="p-4 border-b">
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Collections</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {filteredCategories.map((category) => (
                          <Link
                            key={category}
                            to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/20 transition-colors"
                            onClick={onClose}
                          >
                            <Tag className="h-4 w-4 text-primary" />
                            <span>{category}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Product results */}
                  {searchResults.length > 0 ? (
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-muted-foreground mb-3">Products</h3>
                      <div className="space-y-4">
                        {searchResults.slice(0, 5).map((product) => (
                          <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="flex items-center gap-4 p-2 hover:bg-accent/20 rounded-lg transition-colors"
                            onClick={onClose}
                          >
                            <div className="w-16 h-16 rounded bg-muted flex-shrink-0 overflow-hidden">
                              <img 
                                src={product.imageSrc} 
                                alt={product.name}
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium truncate">{product.name}</h4>
                              <p className="text-sm text-muted-foreground">{product.category}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          </Link>
                        ))}
                        
                        {searchResults.length > 5 && (
                          <p className="text-sm text-center text-muted-foreground pt-2 border-t">
                            + {searchResults.length - 5} more results
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <p className="text-muted-foreground">No products found matching "{searchQuery}"</p>
                    </div>
                  )}
                </>
              )}
            </div>
            
            {/* Quick search tips */}
            <div className="p-4 border-t bg-muted/30 text-sm text-muted-foreground">
              <p>
                Search tips: Try searching by product name, collection name, or material
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}