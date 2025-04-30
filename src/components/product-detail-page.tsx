import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { 
  ShoppingBag, 
  Heart, 
  Share, 
  Check, 
  Truck, 
  Package, 
  RefreshCw, 
  Star,
  Plus,
  Minus,
  ArrowLeft
} from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "./data/products";
import { useCart } from "@/contexts/cart-context";
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
  const { addItem } = useCart();
  
  // Find the product based on the ID from URL params
  const product = products.find(p => p.id === productId);
  
  const [quantity, setQuantity] = useState(1);
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
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </a>
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
    { name: "Ebony", value: "#252323" },
    { name: "White Oak", value: "#D9CABC" },
  ];
  
  const variants: ProductVariant[] = [
    {
      name: "Size",
      options: ["Small", "Medium", "Large"],
    }
  ];
  
  const features = [
    "Sustainably sourced materials",
    "Hand-crafted by skilled artisans",
    "Water-resistant finish",
    "10-year warranty",
  ];
  
  const specs = [
    { name: "Dimensions", value: "W: 80cm × H: 75cm × D: 80cm" },
    { name: "Material", value: "Solid oak wood, Premium fabric" },
    { name: "Weight", value: "32kg" },
    { name: "Care", value: "Wipe with a damp cloth and mild soap" },
  ];
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      // You could add a notification here
      setQuantity(1); // Reset quantity
    }
  };
  
  // Loading skeleton
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Image skeleton */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg"></div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg"></div>
              ))}
            </div>
          </div>
          
          {/* Right column - Content skeleton */}
          <div className="space-y-4">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-6 bg-muted rounded w-1/4"></div>
            <div className="h-6 bg-muted rounded w-1/2"></div>
            <div className="space-y-2 pt-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </div>
            <div className="space-y-2 pt-4">
              <div className="h-8 bg-muted rounded w-1/3"></div>
              <div className="flex space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-muted"></div>
                ))}
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <div className="h-8 bg-muted rounded w-1/3"></div>
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-10 w-20 rounded bg-muted"></div>
                ))}
              </div>
            </div>
            <div className="h-12 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-background">
      {/* Back link */}
      <div className="container mx-auto px-4 py-4">
        <Button variant="ghost" size="sm" asChild>
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Collection
          </a>
        </Button>
      </div>
      
      {/* Product details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column - Product images */}
          <div className="space-y-4">
            {/* Main image */}
            <motion.div 
              className="aspect-square bg-muted/30 rounded-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={productImages[activeImage].src}
                alt={productImages[activeImage].alt}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    "aspect-square rounded-md overflow-hidden border-2",
                    activeImage === index 
                      ? "border-primary ring-2 ring-primary/10" 
                      : "border-transparent hover:border-muted-foreground/30"
                  )}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Right column - Product info */}
          <div className="space-y-6">
            {/* Category and name */}
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-2">
                {product?.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                {product?.name}
              </h1>
              
              {/* Reviews */}
              <div className="flex items-center mt-2">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "h-4 w-4 mr-0.5",
                        i < 4 ? "text-yellow-500 fill-yellow-500" : "text-muted"
                      )} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  4.2 (126 reviews)
                </span>
              </div>
            </div>
            
            {/* Price */}
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-3">
                ${product?.price.toLocaleString()}
              </span>
              {product?.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product?.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-muted-foreground">
              {product?.description || "No description available."}
              {/* Extended description */}
              {" "}Crafted from the finest materials, this piece combines timeless design with exceptional comfort and durability. Perfect for both modern and traditional interiors, it will add elegance to any space.
            </p>
            
            {/* Color selection */}
            <div className="space-y-3">
              <h3 className="font-medium">Color</h3>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center border-2",
                      selectedColor === color.name 
                        ? "border-primary ring-2 ring-primary/20" 
                        : "border-muted-foreground/20",
                    )}
                    title={color.name}
                    style={{ backgroundColor: color.value }}
                  >
                    {selectedColor === color.name && (
                      <Check className="h-5 w-5 text-white drop-shadow-sm" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Variants */}
            {variants.map((variant) => (
              <div key={variant.name} className="space-y-3">
                <h3 className="font-medium">{variant.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {variant.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedVariant(option)}
                      className={cn(
                        "px-4 py-2 rounded-md border",
                        selectedVariant === option
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-muted-foreground/20 hover:border-muted-foreground/50"
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Quantity selector */}
            <div className="space-y-3">
              <h3 className="font-medium">Quantity</h3>
              <div className="flex items-center w-32 border rounded-md">
                <button
                  onClick={decrementQuantity}
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Add to cart and wishlist */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                onClick={handleAddToCart} 
                size="lg" 
                className="flex-1"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="sm:w-12 h-12 px-0 flex items-center justify-center"
              >
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to Wishlist</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="sm:w-12 h-12 px-0 flex items-center justify-center"
              >
                <Share className="h-5 w-5" />
                <span className="sr-only">Share Product</span>
              </Button>
            </div>
            
            {/* Shipping and returns info */}
            <div className="border-t pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Truck className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm text-muted-foreground">For orders over $200</p>
                </div>
              </div>
              <div className="flex items-start">
                <Package className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h4 className="font-medium">White-Glove Delivery</h4>
                  <p className="text-sm text-muted-foreground">Assembly included</p>
                </div>
              </div>
              <div className="flex items-start">
                <RefreshCw className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h4 className="font-medium">30-Day Returns</h4>
                  <p className="text-sm text-muted-foreground">Hassle-free returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product details tabs */}
        <div className="mt-16 border-t pt-10">
          <div className="space-y-8">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-4 w-4 mr-3 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {specs.map((spec, i) => (
                  <div key={i} className="flex justify-between border-b pb-2">
                    <span className="font-medium">{spec.name}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t pt-10">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct: ProductProps, index) => (
                <ProductCard 
                  key={relatedProduct.id} 
                  product={relatedProduct}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}