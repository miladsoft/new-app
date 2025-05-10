import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { 
  Heart, 
  Share, 
  Check, 
  ArrowLeft,
  ArrowRight,
  Star,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "./data/products";
import { ProductProps, ProductCard } from "./ui/product-card";

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductColor {
  name: string;
  value: string;
}

interface ProductVariant {
  name: string;
  options: string[];
}

export function ProductDetailPage() {
  const { productId } = useParams();
  
  // Find the product based on the ID from URL params
  const product = products.find(p => p.id === productId);
  
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<ProductProps[]>([]);

  // Simulate loading state for better UX
  useEffect(() => {
    setIsLoading(true);
    // Simulate a network request
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [productId]);
  
  // Find related products
  useEffect(() => {
    if (product) {
      // Find products in the same category, excluding the current product
      const related = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [product]);
  
  // If product not found
  if (!product && !isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The product you are looking for does not exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    );
  }
  
  // Mock data for product details that would typically come from a database
  const productImages: ProductImage[] = product ? [
    { src: product.imageSrc, alt: product.name },
    { src: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=800&auto=format&fit=crop", alt: `${product.name} - Angle 2` },
    { src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop", alt: `${product.name} - Angle 3` },
    { src: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=800&auto=format&fit=crop", alt: `${product.name} - Detail` },
  ] : [];
  
  const colors: ProductColor[] = [
    { name: "Natural", value: "#E0C7A7" },
    { name: "Walnut", value: "#5E4C3E" },
    { name: "Ebony", value: "#2C2C2C" },
    { name: "White Oak", value: "#D4C8B7" },
  ];
  
  const variants: ProductVariant[] = [
    { name: "Size", options: ["Small", "Medium", "Large"] },
    { name: "Material", options: ["Premium Fabric", "Leather", "Velvet"] }
  ];
  
  const features = [
    "Handcrafted with premium materials",
    "Designed for comfort and durability",
    "Timeless aesthetic that complements any décor",
    "Sustainably sourced materials"
  ];

  if (isLoading) {
    return (
      <div className="container mx-auto py-20 px-4 flex justify-center items-center min-h-[60vh]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-muted-foreground">Loading product information...</p>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return null; // This shouldn't happen due to the earlier check, but TypeScript needs it
  }

  // Get back link based on product category
  const getCategoryLink = () => {
    const categorySlug = product.category.toLowerCase().replace(/\s+/g, '-');
    return `/category/${categorySlug}`;
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-2 text-sm mb-8 text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link to={getCategoryLink()} className="hover:text-foreground transition-colors">{product.category}</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      {/* Product detail layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product images */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* Main image */}
          <div className="aspect-square rounded-xl overflow-hidden bg-muted/20">
            <img
              src={productImages[activeImage].src}
              alt={productImages[activeImage].alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Image thumbnails */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={cn(
                  "relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2",
                  activeImage === index ? "border-primary" : "border-transparent"
                )}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover object-center" 
                />
                {activeImage === index && (
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <Link 
                to={getCategoryLink()}
                className="text-sm font-medium text-primary hover:underline"
              >
                {product.category}
              </Link>
              
              <div className="flex gap-3">
                {product.isNew && (
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                    New Arrival
                  </span>
                )}
                {product.isFeatured && (
                  <span className="bg-accent/50 text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                    Featured
                  </span>
                )}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="h-4 w-4" 
                    fill={star <= 4 ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.0 (12 reviews)</span>
            </div>
            
            <p className="text-muted-foreground mb-8">
              {product.description || "A beautifully crafted piece that combines functionality with timeless design. This item will complement any interior with its elegant presence."}
            </p>
          </div>
          
          {/* Color selection */}
          <div className="mb-8">
            <h3 className="text-base font-semibold mb-3">Color Options</h3>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={cn(
                    "relative w-12 h-12 rounded-full flex items-center justify-center",
                    "border-2",
                    selectedColor === color.name ? "border-primary" : "border-border"
                  )}
                  title={color.name}
                >
                  <span 
                    className="w-8 h-8 rounded-full block" 
                    style={{ backgroundColor: color.value }}
                  ></span>
                  {selectedColor === color.name && (
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                  )}
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Selected: {selectedColor || "None selected"}
            </p>
          </div>
          
          {/* Variants selection */}
          {variants.map((variant) => (
            <div key={variant.name} className="mb-8">
              <h3 className="text-base font-semibold mb-3">{variant.name}</h3>
              <div className="flex flex-wrap gap-2">
                {variant.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedVariant(option)}
                    className={cn(
                      "px-4 py-2 rounded-md border",
                      selectedVariant === option 
                        ? "border-primary bg-primary/5 text-primary" 
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          
          {/* Product features */}
          <div className="mb-8">
            <h3 className="text-base font-semibold mb-3">Features</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Actions */}
          <div className="flex gap-4 mt-auto">
            <Button className="flex-1 rounded-full">
              <ArrowRight className="mr-2 h-4 w-4" />
              View in Showroom
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              title="Add to favorites"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              title="Share"
            >
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-24">
          <h2 className="text-2xl font-bold mb-8">More from this collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <ProductCard 
                key={relatedProduct.id} 
                product={relatedProduct}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Back to category */}
      <div className="mt-16 text-center">
        <Button variant="outline" asChild>
          <Link to={getCategoryLink()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {product.category} Collection
          </Link>
        </Button>
      </div>
    </div>
  );
}