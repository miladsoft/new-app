import { Section } from "./ui/section";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
  className?: string;
}

function CategoryCard({ name, description, imageUrl, href, className }: CategoryCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-lg h-[300px] md:h-[350px] transition-all",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-sm text-white/80 mb-4 max-w-xs">{description}</p>
        <span className="inline-flex items-center text-white font-medium">
          Browse Collection
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}

const categories = [
  {
    name: "Living Room",
    description: "Create a welcoming space with our stylish sofas, coffee tables, and accent pieces.",
    imageUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60",
    href: "#living-room"
  },
  {
    name: "Bedroom",
    description: "Transform your bedroom into a peaceful retreat with our elegant beds and storage solutions.",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&auto=format&fit=crop&q=60",
    href: "#bedroom"
  },
  {
    name: "Dining Room",
    description: "Elevate your dining experience with our beautifully crafted tables and chairs.",
    imageUrl: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?w=500&auto=format&fit=crop&q=60",
    href: "#dining-room"
  },
  {
    name: "Office",
    description: "Design a productive workspace with our ergonomic and stylish office furniture.",
    imageUrl: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&auto=format&fit=crop&q=60",
    href: "#office"
  },
  {
    name: "Outdoor",
    description: "Extend your living space outdoors with our weather-resistant and comfortable furniture.",
    imageUrl: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&auto=format&fit=crop&q=60",
    href: "#outdoor"
  },
  {
    name: "Accessories",
    description: "Complete your spaces with our carefully selected home accessories and decor pieces.",
    imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60",
    href: "#accessories"
  }
];

interface CategoriesSectionProps {
  className?: string;
}

export function CategoriesSection({ className }: CategoriesSectionProps) {
  return (
    <Section 
      id="categories"
      title="Browse by Category" 
      subtitle="Explore our wide range of furniture collections for every room in your home."
      className={className}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            description={category.description}
            imageUrl={category.imageUrl}
            href={category.href}
          />
        ))}
      </div>
    </Section>
  );
}