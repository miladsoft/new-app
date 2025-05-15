import { Section } from "./ui/section";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CategoryCardProps {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
  className?: string;
  index?: number;
}

function CategoryCard({ name, description, imageUrl, href, className, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        to={href}
        className={cn(
          "group relative block overflow-hidden rounded-xl h-[300px] md:h-[350px] transition-all shadow-lg border border-[#176c91]/10",
          className
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#176c91]/90 via-[#176c91]/40 to-transparent group-hover:opacity-95 transition-opacity" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity">            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#ea252b] text-white text-xs font-semibold">
              <Sparkles className="w-3 h-3 mr-1" /> B2B Solution
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{name}</h3>
          <p className="text-sm text-white/90 mb-4 max-w-xs transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{description}</p>
          <motion.span 
            className="inline-flex items-center text-white font-medium bg-[#ea252b] px-4 py-2 rounded-lg"
            whileHover={{ x: 5 }}
          >            View Solutions
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
}

const categories = [
  {
    name: "Office Furniture",
    description: "Complete office solutions including executive desks, ergonomic chairs, and modular workstations for modern corporate environments.",
    imageUrl: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&auto=format&fit=crop&q=80",
    href: "/category/office-furniture"
  },
  {
    name: "Conference Solutions",
    description: "Professional meeting and conference room furniture with integrated technology options for effective collaboration.",
    imageUrl: "https://images.unsplash.com/photo-1462826303085-329426d1aef5?w=800&auto=format&fit=crop&q=80",
    href: "/category/conference-solutions"
  },
  {
    name: "Hospitality Furniture",
    description: "Premium-quality furniture solutions for hotels, restaurants, and hospitality venues with customizable options.",
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop&q=80",
    href: "/category/hospitality-furniture"
  },
  {
    name: "Lounge & Common Areas",
    description: "Create inviting common spaces with our commercial-grade lounge furniture designed for high-traffic environments.",
    imageUrl: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=800&auto=format&fit=crop&q=80",
    href: "/category/lounge-common-areas"
  },
  {
    name: "Outdoor Commercial",
    description: "Weather-resistant outdoor furniture for commercial spaces, designed to withstand Oman's climate while maintaining elegance.",
    imageUrl: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=800&auto=format&fit=crop&q=80",
    href: "/category/outdoor-commercial"
  },
  {
    name: "Lighting Solutions",
    description: "Professional lighting options to enhance workplace productivity and ambiance in commercial and hospitality spaces.",
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80",
    href: "/category/lighting-solutions"
  }
];

interface CategoriesSectionProps {
  className?: string;
  isHomepage?: boolean;
}

export function CategoriesSection({ className, isHomepage = true }: CategoriesSectionProps) {
  return (
    <Section 
      id="categories"
      className={className}
    >
      <div className="text-center mb-12 relative">
        {isHomepage && (
          <>
            <div className="inline-block mb-3">              <span className="bg-gradient-to-r from-[#176c91] to-[#ea252b] px-4 py-1 rounded-full text-white text-sm font-semibold">
                B2B Solutions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
              Business Solutions
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ea252b]"></div>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore our premium B2B furniture solutions designed for corporate, hospitality, and commercial environments across Oman. Quality and functionality for your business needs.
            </p>
          </>
        )}
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            description={category.description}
            imageUrl={category.imageUrl}
            href={category.href}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}