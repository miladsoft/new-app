import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { products } from "./data/products";
import { ProductProps } from "./ui/product-card";
import { useCart } from "@/contexts/cart-context";
import { Link } from "react-router-dom";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ProductProps[]>([]);
  const { addItem } = useCart();

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

    // Search in product names, descriptions, and categories
    const results = products.filter((product) => {
      const query = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(query) ||
        (product.description && product.description.toLowerCase().includes(query)) ||
        product.category.toLowerCase().includes(query)
      );
    });

    setSearchResults(results);
  }, [searchQuery]);

  // Clear search when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setSearchResults([]);
    }
  }, [isOpen]);

  // Handle adding item to cart
  const handleAddToCart = (product: ProductProps, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    // Optional: show confirmation or keep search dialog open
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            className="fixed top-[10%] z-50 flex w-full max-w-3xl flex-col rounded-lg border bg-background shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search header */}
            <div className="flex items-center border-b px-4 py-3">
              <Search className="mr-2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                className="flex-1 border-0 bg-transparent text-lg focus:outline-none focus:ring-0"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="ml-2 h-8 w-8 p-0"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Search results */}
            <div className="max-h-[70vh] overflow-y-auto p-4">
              {searchResults.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="mb-4 font-medium text-muted-foreground">
                    {searchResults.length} result{searchResults.length !== 1 && "s"} found
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {searchResults.map((product) => (
                      <motion.div
                        key={product.id}
                        className="group overflow-hidden rounded-md border transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link 
                          to={`/product/${product.id}`}
                          className="flex overflow-hidden"
                          onClick={onClose}
                        >
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden">
                            <img
                              src={product.imageSrc}
                              alt={product.name}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between p-3">
                            <div>
                              <h4 className="font-medium group-hover:text-primary transition-colors duration-200">{product.name}</h4>
                              <p className="text-sm text-muted-foreground">{product.category}</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-semibold">
                                ${product.price.toLocaleString()}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8"
                                onClick={(e) => handleAddToCart(product, e)}
                              >
                                Add to cart
                              </Button>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : searchQuery.trim() !== "" ? (
                <div className="py-12 text-center">
                  <h3 className="mb-2 text-lg font-semibold">No products found</h3>
                  <p className="text-muted-foreground">
                    We couldn't find any products matching "{searchQuery}"
                  </p>
                </div>
              ) : (
                <div className="py-12 text-center">
                  <Search className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-semibold">Search our collection</h3>
                  <p className="text-muted-foreground">
                    Start typing to find furniture by name, category, or description
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}