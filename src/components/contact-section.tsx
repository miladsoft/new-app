import { useState } from "react";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    // Reset the submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Section
      id="contact"
      title="Contact Us"
      subtitle="Have questions about our products or need assistance? We're here to help."
      className={className}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column: Contact Info */}
        <div className="space-y-8">
          <p className="text-muted-foreground">
            Our customer service team is available to assist you with any inquiries, from product specifications to order tracking and design services.
          </p>
          
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Visit Our Showroom</h3>
                <p className="text-muted-foreground">123 Furniture Street, Design District, 90210</p>
                <p className="text-muted-foreground">Monday - Saturday: 10AM - 7PM</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Call Us</h3>
                <a href="tel:+12345678900" className="text-primary hover:underline">+1 (234) 567-8900</a>
                <p className="text-muted-foreground">Customer Support Hours: 9AM - 9PM</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email Us</h3>
                <a href="mailto:info@eleganthome.com" className="text-primary hover:underline">info@eleganthome.com</a>
                <p className="text-muted-foreground">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder - In a real implementation, replace with actual map component */}
          <div className="rounded-lg overflow-hidden border h-[200px] bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Interactive Map Would Appear Here</p>
          </div>
        </div>
        
        {/* Right column: Contact Form */}
        <div className="bg-card rounded-lg p-6 border shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          
          {submitted ? (
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-medium mb-2">Thank You!</h4>
              <p className="text-muted-foreground">
                Your message has been sent successfully. We'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number <span className="text-muted-foreground">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
              
              <p className="text-xs text-muted-foreground mt-4">
                By submitting this form, you agree to our Privacy Policy and consent to be contacted regarding your inquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}