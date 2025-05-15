import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className }: AboutSectionProps) {  const features = [
    "Premium B2B furniture solutions",
    "Expert project management team",
    "Custom design & manufacturing",
    "On-time delivery guarantee",
    "After-sales support & maintenance",
    "Commercial-grade quality assurance"
  ];
  return (
    <Section
      id="about"
      className={className}
      containerClassName="px-4"
    >
      <div className="text-center mb-12">
        <div className="inline-block mb-3">          <span className="bg-gradient-to-r from-[#176c91] to-[#176c91] px-5 py-1.5 rounded-full text-white text-sm font-semibold">
            About Al Jassar
          </span>
        </div>
        <h2 className="text-4xl font-bold">Our <span className="text-[#176c91]">Company</span></h2>
        <div className="h-1.5 w-16 bg-[#ea252b] rounded-full mx-auto mt-4"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column: Image */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">          <img
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200"
            alt="Al Jassar corporate office project"
            className="w-full h-full object-cover"
          />
          
          {/* Floating stats */}          <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-xl p-6 w-56 border border-[#176c91]/10">
            <div className="mb-3">
              <div className="text-4xl font-bold text-[#176c91]">18+</div>
              <div className="text-sm text-gray-600">Years in Oman</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ea252b]">250+</div>
              <div className="text-sm text-gray-600">B2B Projects</div>
            </div>
          </div>
        </div>
        
        {/* Right column: Content */}
        <div className="flex flex-col justify-center">          <h3 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
            B2B Furnishing Excellence <span className="text-[#ea252b]">Since 2005</span>
          </h3>
          
          <p className="text-gray-600 mb-6 text-lg">
            Al Jassar Furnishing is Oman's premier provider of B2B furniture solutions. With a legacy dating back to 2005, we've built a reputation for delivering exceptional commercial furniture solutions across Muscat and beyond.
          </p>
          
          <p className="text-gray-600 mb-8">
            We specialize in comprehensive furnishing solutions for corporate offices, hotels, government facilities, educational institutions, and healthcare environments. Our team of experts works closely with clients to understand their specific requirements, delivering tailored solutions that combine functionality, durability, and aesthetic appeal.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-[#176c91]/10">
                <div className="rounded-full bg-[#176c91]/10 p-1.5">
                  <Check className="h-4 w-4 text-[#176c91]" />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
            <Button className="w-fit bg-gradient-to-r from-[#176c91] to-[#176c91]/90 hover:from-[#176c91]/90 hover:to-[#176c91] text-white px-8 py-2.5 rounded-lg shadow-md">
            View Our Corporate Profile
          </Button>
        </div>
      </div>
    </Section>
  );
}