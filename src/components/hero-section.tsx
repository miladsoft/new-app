import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80')"
          }}
        ></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#176c91]/90 to-[#000000]/70"></div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="md:flex items-center">
          <div className="max-w-3xl md:w-3/5">
            <motion.div
              className="inline-block mb-4 px-4 py-2 bg-white text-[#ea252b] rounded-full shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >                <span className="font-semibold text-sm">B2B Furniture Solutions</span>
            </motion.div>
          
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Premium <span className="text-[#ea252b]">B2B Furnishing</span> Solutions
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-8 max-w-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Transforming commercial spaces across Oman with quality furnishing solutions for corporate, hospitality, and institutional environments.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link 
                to="/category/living-room" 
                className="bg-[#ea252b] text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-[#ea252b]/90 transition-colors shadow-lg"
              >
                Explore Solutions
                <ArrowRight className="h-5 w-5" />
              </Link>              <a 
                href="#about" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          </div>
          
          <div className="md:w-2/5 mt-12 md:mt-0">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#176c91] text-white flex items-center justify-center font-bold">
                  EH
                </div>
                <h3 className="ml-3 font-semibold text-white">Featured Collection</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=300&auto=format&fit=crop" 
                    alt="Living room furniture" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=300&auto=format&fit=crop" 
                    alt="Dining room furniture" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=300&auto=format&fit=crop" 
                    alt="Bedroom furniture" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=300&auto=format&fit=crop" 
                    alt="Office furniture" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm">Explore our latest additions</p>
                </div>
                <Link
                  to="/category/living-room"
                  className="flex items-center gap-1 text-[#ea252b] bg-white rounded-full px-3 py-1 text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  View all
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}