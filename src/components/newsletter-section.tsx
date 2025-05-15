import { useState } from "react";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterSectionProps {
  className?: string;
}

export function NewsletterSection({ className }: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the submission to your email service
    console.log("Subscribed with:", email);
    setSubmitted(true);
    setEmail("");
    // Reset the submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };
  return (
    <Section
      className={cn("bg-[#176c91] relative overflow-hidden", className)}
      containerClassName="max-w-4xl relative z-10"
    >
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea252b]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white mb-6 shadow-lg">
          <Mail className="h-7 w-7 text-[#ea252b]" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stay Updated with Our Collections</h2>
        <p className="text-white/80 mb-8 max-w-lg">
          Subscribe to our newsletter to receive updates on new arrivals, special offers, and exclusive design tips for your home.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#ea252b] focus:border-transparent"
              />            </div>
            <Button 
              type="submit" 
              className="whitespace-nowrap bg-[#ea252b] hover:bg-[#ea252b]/90 text-white border-none px-6 py-3 font-medium shadow-lg"
            >
              Subscribe Now
            </Button>
          </div>
          
          {submitted && (
            <p className="mt-3 text-sm text-white bg-[#ea252b]/20 px-4 py-2 rounded-lg">
              Thank you for subscribing! You'll receive our updates soon.
            </p>
          )}
          
          <p className="mt-3 text-xs text-muted-foreground">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </form>
      </div>
    </Section>
  );
}