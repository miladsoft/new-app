import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/language-context";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className={cn(
      "w-full bg-[#1a2942] text-white px-4 py-16 mt-auto relative overflow-hidden",
      className
    )}>
      {/* Pattern overlay for visual interest */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Footer top with logo and newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 pb-12 border-b border-white/10">
          <div className="mb-8 lg:mb-0 lg:max-w-sm">            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-[#ea252b] flex items-center justify-center mr-3">
                <span className="font-bold text-white">AJ</span>
              </div>
              <h2 className="text-xl font-bold text-white">{t("site.name")}</h2>
            </div>
            <p className="text-white/80 mb-6">
              Al Jassar Furnishing provides premium B2B furniture solutions for businesses across Oman. From office spaces to hospitality venues, we deliver quality and elegance to every commercial project.
            </p>            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full" aria-label="Facebook">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full" aria-label="Instagram">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full" aria-label="Linkedin">
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-auto">            <h3 className="text-white font-semibold mb-4">Business Newsletter</h3>
            <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Your business email" 
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#176c91] w-full md:w-64"
              />
              <button className="bg-[#ea252b] hover:bg-[#ea252b]/90 text-white px-6 py-3 rounded-lg flex items-center justify-center whitespace-nowrap transition-colors">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white flex items-center">              <span className="h-5 w-1 bg-[#ea252b] rounded-full mr-2"></span>
              Business Solutions
            </h3>
            <ul className="space-y-3">
              <li><Link to="/category/office-furniture" className="text-white/70 hover:text-[#ea252b] transition-colors flex items-center">
                <span className="mr-2 text-[#ea252b]">•</span>Office Furniture
              </Link></li>
              <li><Link to="/category/conference-solutions" className="text-white/70 hover:text-[#ea252b] transition-colors flex items-center">
                <span className="mr-2 text-[#ea252b]">•</span>Conference Solutions
              </Link></li>
              <li><Link to="/category/hospitality-furniture" className="text-white/70 hover:text-[#ea252b] transition-colors flex items-center">
                <span className="mr-2 text-[#ea252b]">•</span>Hospitality Furniture
              </Link></li>
              <li><Link to="/category/lounge-common-areas" className="text-white/70 hover:text-[#ea252b] transition-colors flex items-center">
                <span className="mr-2 text-[#ea252b]">•</span>Lounge & Common Areas
              </Link></li>
              <li><Link to="/category/outdoor-commercial" className="text-white/70 hover:text-[#ea252b] transition-colors flex items-center">
                <span className="mr-2 text-[#ea252b]">•</span>Outdoor Commercial
              </Link></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white flex items-center">
              <span className="h-5 w-1 bg-[#176c91] rounded-full mr-2"></span>
              Company
            </h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-[#176c91] transition-colors flex items-center">
                <span className="mr-2 text-[#176c91]">•</span>About Us
              </a></li>
              <li><a href="#" className="text-white/70 hover:text-[#176c91] transition-colors flex items-center">
                <span className="mr-2 text-[#176c91]">•</span>Design Services
              </a></li>
              <li><a href="#" className="text-white/70 hover:text-[#176c91] transition-colors flex items-center">
                <span className="mr-2 text-[#176c91]">•</span>Careers
              </a></li>
              <li><a href="#" className="text-white/70 hover:text-[#176c91] transition-colors flex items-center">
                <span className="mr-2 text-[#176c91]">•</span>Sustainability
              </a></li>
              <li><a href="#" className="text-white/70 hover:text-[#176c91] transition-colors flex items-center">
                <span className="mr-2 text-[#176c91]">•</span>Press
              </a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white flex items-center">
              <span className="h-5 w-1 bg-[#ea252b] rounded-full mr-2"></span>
              Support
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-[#ea252b] transition-colors flex items-center">
                <span className="mr-2 text-[#ea252b]">•</span>Help Center
              </a></li>
              <li><a href="#" className="text-white/70 hover:text-[#ea252b] transition-colors flex items-center">
                <span className="mr-2 text-[#ea252b]">•</span>Delivery Information
              </a></li>
              <li><a href="#" className="text-white/70 hover:text-[#ea252b] transition-colors flex items-center">
                <span className="mr-2 text-[#ea252b]">•</span>Return Policy
              </a></li>
              <li><a href="#" className="text-white/70 hover:text-[#ea252b] transition-colors flex items-center">
                <span className="mr-2 text-[#ea252b]">•</span>FAQs
              </a></li>
              <li><a href="#" className="text-white/70 hover:text-[#ea252b] transition-colors flex items-center">
                <span className="mr-2 text-[#ea252b]">•</span>Contact Us
              </a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white flex items-center">
              <span className="h-5 w-1 bg-[#176c91] rounded-full mr-2"></span>
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">                <MapPin className="mr-3 h-5 w-5 text-[#ea252b] shrink-0 mt-0.5" />
                <span className="text-white/70">Al Jassar Building, Muscat, Oman</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-[#ea252b]" />
                <a href="tel:+96824125678" className="text-white/70 hover:text-white transition-colors">+968 2412 5678</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-[#ea252b]" />
                <a href="mailto:info@aljassar.com" className="text-white/70 hover:text-white transition-colors">info@aljassar.com</a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center text-white mt-2 bg-[#176c91]/20 px-4 py-2 rounded-lg hover:bg-[#176c91]/40 transition-all">
                  <MapPin className="mr-2 h-4 w-4 text-[#176c91]" />
                  View on Map
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">            <p className="text-sm text-white/50 mb-4 md:mb-0">
              &copy; {year} Al Jassar Furnishing L.L.C. {t("footer.rights")}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              <a href="#" className="text-white/50 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors duration-200 text-sm">
                Cookie Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors duration-200 text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
