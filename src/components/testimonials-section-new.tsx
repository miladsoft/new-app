import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  author: string;
  position?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  imageSrc?: string;
}

function Testimonial({ quote, author, position, rating, imageSrc }: TestimonialProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 border border-[#176c91]/10 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#176c91]/5 to-transparent -z-10"></div>
      <div className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full bg-[#ea252b]/5 -z-10"></div>
      
      {/* Quote marks */}
      <div className="absolute top-4 right-4 text-4xl leading-none text-[#176c91]/10 font-serif">"</div>
      
      {/* Stars */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4 mr-1",
              i < rating ? "text-[#ea252b] fill-[#ea252b]" : "text-gray-200"
            )}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="mb-6 text-gray-700 relative z-10">
        "{quote}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center border-t border-gray-100 pt-4 mt-auto">
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={author}
            className="h-12 w-12 rounded-full object-cover mr-3 border-2 border-white shadow-sm"
          />
        )}
        <div>
          <div className="font-semibold text-[#176c91]">{author}</div>
          {position && <div className="text-sm text-gray-500">{position}</div>}
        </div>
      </div>
    </motion.div>
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
    <section 
      id="testimonials" 
      className={cn("py-16 md:py-24 bg-gradient-to-b from-white to-[#f8f9fb] relative overflow-hidden", className)}
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-[#176c91]/5 -z-10"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-[#ea252b]/5 -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            className="inline-block mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-[#ea252b] px-5 py-1.5 rounded-full text-white text-sm font-semibold">
              Customer Stories
            </span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Our <span className="text-[#ea252b]">Customers</span> Say
          </motion.h2>
          
          <motion.div
            className="h-1.5 w-20 bg-[#176c91] rounded-full mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Hear from our satisfied customers who have transformed their spaces with our furniture collections.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index} 
              {...testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
