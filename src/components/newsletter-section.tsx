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
      className={cn("bg-primary/5", className)}
      containerClassName="max-w-4xl"
    >
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Collections</h2>
        <p className="text-muted-foreground mb-8 max-w-lg">
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
                className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button type="submit" className="whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          
          {submitted && (
            <p className="mt-3 text-sm text-primary">
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