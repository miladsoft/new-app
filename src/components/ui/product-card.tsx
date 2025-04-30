import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useState } from "react";
import { useCart } from "@/contexts/cart-context";
import { Link } from "react-router-dom";

export interface ProductProps {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  imageSrc: string;
  isNew?: boolean;
  isFeatured?: boolean;
  description?: string;
}

interface ProductCardProps {
  product: ProductProps;
  className?: string;
  index?: number;
}

export function ProductCard({ product, className, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product link wrapper - entire card is clickable */}
      <Link 
        to={`/product/${product.id}`} 
        className="flex flex-col flex-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
        aria-label={`View ${product.name} details`}
      >
        {/* Product image with overlay */}
        <div className="aspect-square overflow-hidden bg-muted/30 relative">
          <motion.img
            src={product.imageSrc}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-500"
            animate={{ scale: isHovered ? 1.05 : 1 }}
          />
          
          {/* Quick add button */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 flex justify-center p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.3 }}
          >
            <Button 
              onClick={handleAddToCart}
              className="w-full max-w-[200px] rounded-full shadow-lg"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </motion.div>
          
          {/* Product badges */}
          <div className="absolute left-4 top-4 flex flex-col gap-1">
            {product.isNew && (
              <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                New
              </span>
            )}
            {product.originalPrice && (
              <span className="rounded-full bg-destructive px-2.5 py-1 text-xs font-semibold text-destructive-foreground">
                Sale
              </span>
            )}
          </div>
        </div>
        
        {/* Product info */}
        <div className="flex flex-col space-y-1.5 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">{product.name}</h3>
            
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="ml-1 text-sm">4.8</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">{product.category}</p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center">
              <span className="font-semibold">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Visual indicator that the entire card is clickable */}
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none rounded-lg"></div>
      </Link>
    </motion.div>
  );
}