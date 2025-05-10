import { useParams } from 'react-router-dom';
import { Section } from './ui/section';
import { ProductCard, ProductProps } from './ui/product-card';
import { products } from './data/products';
import { motion } from 'framer-motion';

export function CategoryPage() {
  const { categoryId } = useParams();
  
  // Filter products by the current category
  const categoryProducts = products.filter(
    product => product.category.toLowerCase().replace(/\s+/g, '-') === categoryId
  );
  
  // Get category name from the first product (if available)
  const categoryName = categoryProducts.length > 0 
    ? categoryProducts[0].category 
    : categoryId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

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
    <>
      <Section
        id="category-header"
        title={categoryName}
        subtitle={`Explore our beautiful collection of ${categoryName?.toLowerCase()} pieces`}
        className="pt-24 pb-10"
      >
        <div className="w-full h-64 md:h-80 lg:h-96 relative rounded-2xl overflow-hidden mb-10">
          {/* Hero image based on category */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${getCategoryHeroImage(categoryId)})`,
              opacity: 0.9
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center text-center p-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{categoryName} Collection</h1>
              <p className="text-lg text-white/90 max-w-2xl">
                Discover pieces that blend style, comfort, and functionality for your space
              </p>
            </div>
          </div>
        </div>

        {categoryProducts.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categoryProducts.map((product, index) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium mb-2">No products found in this category</h3>
            <p className="text-muted-foreground">Please check back later for new additions</p>
          </div>
        )}
      </Section>
    </>
  );
}

// Helper function to get a hero image for each category
function getCategoryHeroImage(categoryId: string | undefined): string {
  switch (categoryId) {
    case 'living-room':
      return 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&auto=format&fit=crop&q=80';
    case 'bedroom':
      return 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&auto=format&fit=crop&q=80';
    case 'dining-room':
      return 'https://images.unsplash.com/photo-1595526051245-4506e0005bd0?w=1200&auto=format&fit=crop&q=80';
    case 'office':
      return 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=1200&auto=format&fit=crop&q=80';
    case 'outdoor':
      return 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&auto=format&fit=crop&q=80';
    case 'accessories':
      return 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&auto=format&fit=crop&q=80';
    default:
      return 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&auto=format&fit=crop&q=80';
  }
}
