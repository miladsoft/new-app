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
  // No longer need these animation variants as we're using direct component animations
  return (
    <>
      <Section
        id="category-header"
        className="pt-24 pb-10"
      >
        <div className="w-full h-72 md:h-96 lg:h-[500px] relative rounded-2xl overflow-hidden mb-16 shadow-xl">
          {/* Hero image based on category */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${getCategoryHeroImage(categoryId)})`,
              opacity: 0.9
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#176c91]/90 to-[#ea252b]/70" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-center p-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block bg-white/90 text-[#ea252b] px-4 py-1 rounded-full text-sm font-bold mb-4 shadow-lg">
                Our Collection
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{categoryName}</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light">
                Discover pieces that blend style, comfort, and functionality to create the perfect atmosphere for your space
              </p>
              <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
            </motion.div>
          </div>
        </div>        <div className="mb-12">
          <div className="flex items-center justify-between mb-10">
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Collection</h2>
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#ea252b]"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{categoryProducts.length} Products</span>
              <div className="h-4 w-[1px] bg-gray-300"></div>
              <span className="text-sm text-[#176c91] font-medium">Filter by</span>
            </div>
          </div>
        </div>
        
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-xl border border-[#176c91]/10 bg-gradient-to-r from-[#176c91]/5 to-[#ea252b]/5">
            <div className="w-16 h-16 bg-[#176c91]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#176c91]">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2 text-gray-800">No products found in this category</h3>
            <p className="text-gray-500">Please check back later for new additions to our collection</p>
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
