import { Section } from "./ui/section";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  position?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  imageSrc?: string;
}

function Testimonial({ quote, author, position, rating, imageSrc }: TestimonialProps) {
  return (
    <div className="bg-card rounded-lg p-6 border shadow-sm">
      {/* Stars */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4 mr-1",
              i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
            )}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="mb-4 text-foreground">
        "{quote}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center">
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={author}
            className="h-10 w-10 rounded-full object-cover mr-3"
          />
        )}
        <div>
          <div className="font-semibold">{author}</div>
          {position && <div className="text-sm text-muted-foreground">{position}</div>}
        </div>
      </div>
    </div>
  );
}

const testimonials: TestimonialProps[] = [
  {
    quote: "The quality of the furniture exceeded my expectations. Each piece is beautifully crafted and adds so much character to our home.",
    author: "Sarah Johnson",
    position: "Interior Designer",
    rating: 5,
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60"
  },
  {
    quote: "We purchased the Copenhagen sofa and Vienna dining set. Both are not only stunning to look at but incredibly comfortable and durable.",
    author: "Michael Chen",
    position: "Homeowner",
    rating: 5,
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60"
  },
  {
    quote: "Their design consultation service was incredibly helpful. The team listened to our needs and suggested pieces that perfectly fit our space.",
    author: "Emily Rodriguez",
    position: "Real Estate Agent",
    rating: 5,
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=60"
  },
  {
    quote: "I was hesitant to order furniture online, but the quality and craftsmanship of my Barcelona coffee table is exceptional. Highly recommend!",
    author: "David Thomson",
    position: "Architect",
    rating: 4,
    imageSrc: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&auto=format&fit=crop&q=60"
  }
];

interface TestimonialsSectionProps {
  className?: string;
}

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  return (
    <Section
      id="testimonials"
      title="What Our Customers Say"
      subtitle="Hear from our satisfied customers who have transformed their spaces with our furniture."
      className={cn("bg-muted/30", className)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </Section>
  );
}