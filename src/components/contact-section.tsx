import { useState } from "react";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Send, FileText, Building2, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'contact' | 'quote'>('contact');
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  // Quote request form state
  const [quoteData, setQuoteData] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    budget: "",
    requirements: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  
  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote Request submitted:", quoteData);
    setSubmitted(true);
    // Reset form
    setQuoteData({
      company: "",
      contactName: "",
      email: "",
      phone: "",
      projectType: "",
      timeline: "",
      budget: "",
      requirements: "",
    });
    // Reset the submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Section
      id="contact"
      title={t("contact.title")}
      subtitle={t("contact.subtitle")}
      className={className}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column: Contact Info */}
        <div className="space-y-8">
          <p className="text-gray-600">
            Our B2B support team is available to assist with project inquiries and furniture solutions for your business.
          </p>
          
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-[#176c91]/10 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#176c91]/10 to-[#ea252b]/5 rounded-bl-xl"></div>
              <div className="flex-shrink-0 h-14 w-14 rounded-full bg-[#176c91]/10 flex items-center justify-center mr-4 group-hover:bg-[#176c91]/20 transition-colors duration-300">
                <MapPin className="h-6 w-6 text-[#176c91]" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-gray-800">Visit Our Showroom</h3>
                <p className="text-gray-600">Al Jassar Building, Muscat, Oman</p>
                <p className="text-gray-500 mt-1">Sunday - Thursday: 9AM - 6PM</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-[#ea252b]/10 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#ea252b]/10 to-[#176c91]/5 rounded-bl-xl"></div>
              <div className="flex-shrink-0 h-14 w-14 rounded-full bg-[#ea252b]/10 flex items-center justify-center mr-4 group-hover:bg-[#ea252b]/20 transition-colors duration-300">
                <Phone className="h-6 w-6 text-[#ea252b]" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-gray-800">Call Us</h3>
                <a href="tel:+96824125678" className="text-[#176c91] font-medium hover:text-[#176c91]/80 transition-colors">+968 2412 5678</a>
                <p className="text-gray-500 mt-1">Business Hours: 9AM - 6PM</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-[#176c91]/10 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#176c91]/10 to-[#ea252b]/5 rounded-bl-xl"></div>
              <div className="flex-shrink-0 h-14 w-14 rounded-full bg-[#176c91]/10 flex items-center justify-center mr-4 group-hover:bg-[#176c91]/20 transition-colors duration-300">
                <Mail className="h-6 w-6 text-[#176c91]" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-gray-800">Email Us</h3>
                <a href="mailto:info@aljassar.com" className="text-[#ea252b] font-medium hover:text-[#ea252b]/80 transition-colors">info@aljassar.com</a>
                <p className="text-gray-500 mt-1">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder - In a real implementation, replace with actual map component */}
          <div className="rounded-xl overflow-hidden border border-[#176c91]/10 h-[220px] bg-white relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#176c91]/5 to-[#ea252b]/5 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-sm">
                <p className="text-gray-700 font-medium">Al Jassar Showroom Location</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right column: Forms with Tabs */}
        <div className="bg-white rounded-xl p-8 border border-[#176c91]/10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#176c91]/5 to-[#ea252b]/5 rounded-bl-full -z-10"></div>
          
          {/* Tab Navigation */}
          <div className="flex mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('contact')}
              className={`flex items-center pb-4 px-6 border-b-2 ${
                activeTab === 'contact' 
                  ? 'border-[#176c91] text-[#176c91] font-medium' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              } transition-colors`}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              className={`flex items-center pb-4 px-6 border-b-2 ${
                activeTab === 'quote' 
                  ? 'border-[#ea252b] text-[#ea252b] font-medium' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              } transition-colors`}
            >
              <FileText className="mr-2 h-5 w-5" />
              Request a Quote
            </button>
          </div>
          
          {submitted ? (
            <div className="bg-[#176c91]/10 p-8 rounded-xl text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#176c91]/20 mb-4">
                <Send className="h-7 w-7 text-[#176c91]" />
              </div>
              <h4 className="text-xl font-medium mb-3 text-gray-800">Thank You!</h4>
              <p className="text-gray-600">
                {activeTab === 'contact'
                  ? "Your message has been sent successfully. We'll get back to you as soon as possible."
                  : "Your quote request has been submitted successfully. Our team will prepare a custom quote for your project."
                }
              </p>
            </div>
          ) : (
            <>
              {/* Contact Form */}
              {activeTab === 'contact' && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#176c91] focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#176c91] focus:border-transparent transition-all duration-200"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5 text-gray-700">
                      Phone Number <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#176c91] focus:border-transparent transition-all duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#176c91] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#176c91] to-[#176c91]/90 hover:from-[#176c91]/90 hover:to-[#176c91] text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
              
              {/* Quote Request Form */}
              {activeTab === 'quote' && (
                <form onSubmit={handleQuoteSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1.5 text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={quoteData.company}
                      onChange={handleQuoteChange}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea252b] focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium mb-1.5 text-gray-700">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={quoteData.contactName}
                        onChange={handleQuoteChange}
                        required
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea252b] focus:border-transparent transition-all duration-200"
                        placeholder="Contact name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={quoteData.email}
                        onChange={handleQuoteChange}
                        required
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea252b] focus:border-transparent transition-all duration-200"
                        placeholder="Business email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={quoteData.phone}
                      onChange={handleQuoteChange}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea252b] focus:border-transparent transition-all duration-200"
                      placeholder="Business phone"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-1.5 text-gray-700">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={quoteData.projectType}
                      onChange={handleQuoteChange}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea252b] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a project type</option>
                      <option value="office">Office Furnishing</option>
                      <option value="hotel">Hotel/Hospitality</option>
                      <option value="restaurant">Restaurant/Café</option>
                      <option value="educational">Educational Institution</option>
                      <option value="healthcare">Healthcare Facility</option>
                      <option value="government">Government Project</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-1.5 text-gray-700">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={quoteData.timeline}
                        onChange={handleQuoteChange}
                        required
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea252b] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (1-2 weeks)</option>
                        <option value="1month">Within 1 month</option>
                        <option value="3months">1-3 months</option>
                        <option value="6months">3-6 months</option>
                        <option value="planning">Planning phase</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-1.5 text-gray-700">
                        Budget Range (OMR)
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={quoteData.budget}
                        onChange={handleQuoteChange}
                        required
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea252b] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="under5k">Under 5,000</option>
                        <option value="5k-15k">5,000 - 15,000</option>
                        <option value="15k-50k">15,000 - 50,000</option>
                        <option value="50k-100k">50,000 - 100,000</option>
                        <option value="over100k">Over 100,000</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium mb-1.5 text-gray-700">
                      Project Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={quoteData.requirements}
                      onChange={handleQuoteChange}
                      required
                      rows={4}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea252b] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Describe your project needs, space details, and specific requirements"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#ea252b] to-[#ea252b]/90 hover:from-[#ea252b]/90 hover:to-[#ea252b] text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Request Quote
                  </Button>
                </form>
              )}
              
              <p className="text-xs text-gray-500 mt-6 text-center">
                By submitting this form, you agree to our Privacy Policy and consent to be contacted regarding your inquiry.
              </p>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}