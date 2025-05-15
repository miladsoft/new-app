import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface ProductProps {
  id: string;
  name: string;
  category: string;
  price: number; // Kept for data structure compatibility
  originalPrice?: number; // Kept for data structure compatibility
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
  const [isHovered, setIsHovered] = useState(false);
  
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
        "group relative flex flex-col overflow-hidden rounded-xl border border-[#176c91]/10 bg-background shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product link wrapper - entire card is clickable */}
      <Link 
        to={`/product/${product.id}`} 
        className="flex flex-col flex-1 focus:outline-none focus:ring-2 focus:ring-[#176c91] focus:ring-offset-2 rounded-xl"
        aria-label={`View ${product.name} details`}
      >
        {/* Product image with overlay */}
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#176c91]/5 to-[#ea252b]/5 relative">
          <motion.img
            src={product.imageSrc}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-500"
            animate={{ scale: isHovered ? 1.05 : 1 }}
          />
            {/* View details button */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 flex justify-center p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="bg-[#176c91] text-white font-medium px-6 py-2 rounded-full shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              View Details
              <ArrowRight className="h-4 w-4" />
            </div>
          </motion.div>
            {/* Product badges */}
          <div className="absolute left-4 top-4 flex flex-col gap-1">
            {product.isNew && (
              <span className="rounded-full bg-[#ea252b] px-2.5 py-1 text-xs font-semibold text-white shadow-md">
                New
              </span>
            )}
            {product.isFeatured && (
              <span className="rounded-full bg-[#176c91] px-2.5 py-1 text-xs font-semibold text-white shadow-md">
                Featured
              </span>
            )}
          </div>
        </div>
        
        {/* Product info */}
        <div className="flex flex-col space-y-1.5 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold group-hover:text-[#176c91] transition-colors duration-300">{product.name}</h3>
            
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-[#ea252b] text-[#ea252b]" />
              <span className="ml-1 text-sm">4.8</span>
            </div>
          </div>
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#176c91]/10 text-[#176c91] text-xs font-medium">
            {product.category}
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description?.substring(0, 80)}
              {product.description && product.description.length > 80 ? "..." : ""}
            </p>
          </div>
        </div>

        {/* Visual indicator that the entire card is clickable */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#176c91] to-[#ea252b] opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none rounded-xl"></div>
      </Link>
    </motion.div>
  );
}