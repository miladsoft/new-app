import { useState } from "react";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";

// Types for project data
export interface ProjectProps {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  location: string;
  year: string;
  images: string[];
  featured: boolean;
}

// Sample project data
const projects: ProjectProps[] = [
  {
    id: "grand-hyatt-muscat",
    title: "Grand Hyatt Muscat Renovation",
    client: "Grand Hyatt Hotels",
    category: "Hospitality Furniture",
    description: "Complete renovation of guest rooms and lobby areas with premium custom furniture.",
    challenge: "Update the hotel's furniture while maintaining the distinct Arabic-inspired aesthetic and improving functionality for modern travelers.",
    solution: "Custom-designed furniture pieces combining traditional Omani motifs with contemporary ergonomics and materials.",
    result: "Enhanced guest experience with furniture that maintains cultural authenticity while providing modern comfort and durability.",
    location: "Muscat, Oman",
    year: "2024",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=80"
    ],
    featured: true
  },
  {
    id: "oman-oil-headquarters",
    title: "Oman Oil Corporate Headquarters",
    client: "Oman Oil Company",
    category: "Office Furniture",
    description: "Full-scale office furnishing project for a 12-floor corporate headquarters.",
    challenge: "Create a cohesive, professional environment across multiple departments with varying needs while projecting corporate prestige.",
    solution: "Modular workstations with custom finishes, executive suites with locally-inspired design elements, and flexible meeting spaces.",
    result: "Improved workflow efficiency and employee satisfaction, with furniture that reinforces the company's position as an industry leader.",
    location: "Muscat, Oman",
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&auto=format&fit=crop&q=80"
    ],
    featured: true
  },
  {
    id: "muscat-international-airport-lounges",
    title: "Muscat International Airport VIP Lounges",
    client: "Oman Airports Management Company",
    category: "Lounge & Common Areas",
    description: "Premium lounge furniture for first and business class passenger areas.",
    challenge: "Design furniture that offers comfort for long waiting periods while withstanding heavy daily use and projecting Omani hospitality.",
    solution: "Custom seating with integrated power solutions, privacy elements, and materials selected for both luxury and durability.",
    result: "Elevated passenger experience with furniture that enhances the airport's reputation for luxury and comfort.",
    location: "Muscat, Oman",
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573168710865-2e4c680d921a?w=800&auto=format&fit=crop&q=80"
    ],
    featured: false
  },
  {
    id: "bank-muscat-branches",
    title: "Bank Muscat Branch Modernization",
    client: "Bank Muscat",
    category: "Office Furniture",
    description: "Standardized furniture solution for 25 bank branches across Oman.",
    challenge: "Create a consistent brand experience across multiple locations while accommodating different spatial constraints and regional considerations.",
    solution: "Developed a modular furniture system that could be adapted to various branch sizes while maintaining visual consistency.",
    result: "Enhanced brand recognition and improved operational efficiency across all locations with 30% reduction in furniture procurement costs.",
    location: "Nationwide, Oman",
    year: "2022",
    images: [
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603039078583-13468e35b7b0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596566435991-b05446e245af?w=800&auto=format&fit=crop&q=80"
    ],
    featured: false
  },
  {
    id: "kempinski-muscat",
    title: "Kempinski Hotel Muscat",
    client: "Kempinski Hotels",
    category: "Hospitality Furniture",
    description: "Complete furniture package for luxury beachfront resort including guest rooms, restaurants, and public areas.",
    challenge: "Blend European luxury standards with Omani culture while ensuring durability in a coastal environment.",
    solution: "Custom designs using marine-grade materials with traditional Omani patterns and European manufacturing standards.",
    result: "Furniture that enhances the hotel's five-star rating and has maintained quality despite high occupancy and coastal conditions.",
    location: "Muscat, Oman",
    year: "2022",
    images: [
      "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80"
    ],
    featured: true
  },
  {
    id: "salalah-mall",
    title: "Salalah Grand Mall",
    client: "Majid Al Futtaim",
    category: "Commercial Spaces",
    description: "Public seating and furniture solutions for major shopping center.",
    challenge: "Create comfortable and durable public furniture that could withstand extremely high traffic while enhancing the shopping experience.",
    solution: "Developed specialized seating zones with different configurations to serve various shopper needs, using highly durable materials with easy maintenance.",
    result: "Increased visitor dwell time in the mall and positive customer feedback on comfort and accessibility.",
    location: "Salalah, Oman",
    year: "2021",
    images: [
      "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555529771-7888783a18d3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500586652594-c9ff9dcd3cbc?w=800&auto=format&fit=crop&q=80"
    ],
    featured: false
  }
];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter categories
  const categories = Array.from(new Set(projects.map(project => project.category)));
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory 
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  return (
    <div>
      {/* Hero section */}
      <Section
        className="pt-24 pb-10"
      >
        <div className="w-full h-72 md:h-96 lg:h-[400px] relative rounded-2xl overflow-hidden mb-16 shadow-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&auto=format&fit=crop&q=80')",
              backgroundPosition: "center" 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#176c91]/90 to-[#176c91]/70" />
          <div className="absolute inset-0 flex items-center justify-center text-center p-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block bg-white/90 text-[#ea252b] px-4 py-1 rounded-full text-sm font-bold mb-4 shadow-lg">
                Our Portfolio
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">B2B Projects</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light">
                Discover our successful commercial furnishing projects across Oman, delivered with expertise and precision
              </p>
              <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Category filter */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button 
              variant="outline"
              className={`rounded-full px-6 py-2 transition-all
                ${selectedCategory === null 
                  ? "bg-[#176c91] text-white border-[#176c91]" 
                  : "hover:bg-[#176c91]/5"}`}
              onClick={() => setSelectedCategory(null)}
            >
              All Projects
            </Button>
            {categories.map(category => (
              <Button 
                key={category}
                variant="outline"
                className={`rounded-full px-6 py-2 transition-all
                  ${selectedCategory === category 
                    ? "bg-[#176c91] text-white border-[#176c91]" 
                    : "hover:bg-[#176c91]/5"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Projects</h2>
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#ea252b]"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{filteredProjects.length} Projects</span>
              <div className="h-4 w-[1px] bg-gray-300"></div>
              <div className="flex items-center text-sm text-[#176c91] font-medium">
                <Filter className="w-4 h-4 mr-1" />
                <span>Filter by category</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-[#176c91]/10 bg-white shadow-md hover:shadow-xl cursor-pointer transition-all duration-300"
              onClick={() => {
                setActiveProject(project);
                setIsModalOpen(true);
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {project.featured && (
                  <span className="absolute top-3 left-3 bg-[#ea252b] text-white text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-lg">
                    Featured
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="sm" 
                    className="bg-white text-[#176c91] hover:bg-white/90 rounded-full px-4 py-2"
                  >
                    View Case Study <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col p-5">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#176c91]/10 text-[#176c91] text-xs font-medium">
                    {project.category}
                  </span>
                  <span className="ml-auto text-sm text-gray-500">{project.year}</span>
                </div>
                <h3 className="text-lg font-bold mb-1 text-gray-800 group-hover:text-[#176c91] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-auto pt-2 border-t border-gray-100 text-sm text-gray-500">
                  <span>{project.client} • {project.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Case Study Modal */}
      {isModalOpen && activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img 
                  src={activeProject.images[0]}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <Button 
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 rounded-full bg-white/80 hover:bg-white border-0"
                  onClick={() => setIsModalOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </Button>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#176c91]/10 text-[#176c91] text-sm font-medium">
                    {activeProject.category}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                    {activeProject.year}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                    {activeProject.location}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold mb-1 text-gray-800">{activeProject.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{activeProject.client}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
                  <div className="md:col-span-4 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#176c91]">The Challenge</h3>
                      <p className="text-gray-700">{activeProject.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#ea252b]">Our Solution</h3>
                      <p className="text-gray-700">{activeProject.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-green-600">The Result</h3>
                      <p className="text-gray-700">{activeProject.result}</p>
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <div className="grid grid-cols-2 gap-4">
                      {activeProject.images.slice(1).map((image, index) => (
                        <div key={index} className="aspect-square rounded-lg overflow-hidden">
                          <img 
                            src={image}
                            alt={`${activeProject.title} - Image ${index + 2}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end pt-6 border-t border-gray-100">
                  <Button 
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                    className="mr-4"
                  >
                    Close
                  </Button>
                  <Button 
                    className="bg-[#176c91] hover:bg-[#176c91]/90 text-white"
                  >
                    Similar Projects <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
