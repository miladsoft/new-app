import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ShoppingBag, Star, Heart, Award, TrendingUp } from "lucide-react";
import { products } from "./data/products";
import { useCart } from "@/contexts/cart-context";
import { Link } from "react-router-dom";

export function FeaturedProducts() {
  const { addItem } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  // Handle adding product to cart
  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addItem(product, 1);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/98 to-muted/20"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl -z-10"></div>
      
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Luxury section header */}
        <div className="relative mb-20 flex flex-col space-y-4 items-center text-center">
          <motion.span 
            className="text-sm font-medium uppercase tracking-wider text-primary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Curated Selection
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Masterpiece Collection
            </span>
          </motion.h2>
          
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-primary/80 to-primary rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="max-w-[800px] text-muted-foreground mt-4 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Each piece in our exclusive collection blends timeless elegance with modern craftsmanship, 
            creating the perfect balance of form and function for your sophisticated home
          </motion.p>
        </div>
        
        {/* Premium products showcase grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              whileHover={{ y: -10 }}
            >
              <Link 
                to={`/product/${product.id}`} 
                className="block h-full"
                aria-label={`View ${product.name} details`}
              >
                <div className="relative flex flex-col h-full overflow-hidden rounded-2xl border bg-card shadow-lg hover:shadow-xl transition-all duration-500">
                  {/* Fancy top design element */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
                  
                  {/* Product image with enhanced hover effects */}
                  <div className="aspect-[4/3] overflow-hidden bg-muted/20 relative">
                    <motion.img
                      src={product.imageSrc}
                      alt={product.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700"
                      animate={{ 
                        scale: hoveredProduct === product.id ? 1.1 : 1,
                        filter: hoveredProduct === product.id ? "brightness(0.95)" : "brightness(1)" 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Luxury product badges */}
                    <div className="absolute left-4 top-4 flex flex-col gap-2">
                      {product.isNew && (
                        <div className="flex items-center gap-1 rounded-full backdrop-blur-md bg-black/30 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                          <Award className="h-3 w-3 text-primary" />
                          <span>New Design</span>
                        </div>
                      )}
                      {product.originalPrice && (
                        <div className="flex items-center gap-1 rounded-full backdrop-blur-md bg-black/30 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                          <TrendingUp className="h-3 w-3 text-destructive" />
                          <span>Special Offer</span>
                        </div>
                      )}
                      {product.isFeatured && !product.isNew && !product.originalPrice && (
                        <div className="flex items-center gap-1 rounded-full backdrop-blur-md bg-black/30 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Elegant hover overlay with buttons */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                    >
                      <div className="flex gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <motion.button
                          className="rounded-full bg-white/90 p-3 text-foreground shadow-lg hover:bg-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Add to favorites"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Heart className="h-5 w-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Premium product info with enhanced styling */}
                  <div className="flex flex-col p-6 flex-grow">
                    {/* Product title and rating */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center bg-muted/40 rounded-full px-2 py-0.5">
                        <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500 mr-1" />
                        <span className="text-xs font-medium">4.9</span>
                      </div>
                    </div>
                    
                    {/* Category tag */}
                    <div className="mb-3">
                      <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary font-medium">
                        {product.category}
                      </span>
                    </div>
                    
                    {/* Product description */}
                    <p className="text-sm line-clamp-2 text-muted-foreground mb-4 flex-grow">
                      {product.description}
                    </p>
                    
                    {/* Price display */}
                    <div className="flex items-center justify-between mt-auto mb-4">
                      <div className="flex items-center">
                        <span className="font-bold text-lg">
                          ${product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="ml-2 text-sm text-muted-foreground line-through">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Enhanced Add to cart button */}
                    <Button 
                      onClick={(e) => handleAddToCart(product, e)}
                      className="w-full relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </span>
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Elegant bottom section flourish */}
        <motion.div 
          className="mt-24 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/40"></div>
          <div className="mx-4 text-primary/70 text-sm font-serif italic">Crafted with passion</div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/40"></div>
        </motion.div>
      </div>
    </section>
  );
}