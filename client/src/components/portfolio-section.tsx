import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Films", "Animation", "Commercials"];

  const portfolioItems = [
    {
      title: "The Last Symphony",
      description: "Award-winning drama about a composer's final masterpiece",
      category: "Films",
      image: "https://images.unsplash.com/photo-1489599735946-957e3ab41adf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Magic Realms",
      description: "3D animated series exploring mystical worlds",
      category: "Animation",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Luxury Brand Campaign",
      description: "High-end commercial series for premium automotive brand",
      category: "Commercials",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Untold Stories",
      description: "Documentary series exploring hidden histories",
      category: "Films",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Dreamscape",
      description: "Artistic animated short exploring human consciousness",
      category: "Animation",
      image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Rhythm & Light",
      description: "Music video series blending visual artistry with sound",
      category: "Commercials",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-deep-black" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            <span className="cinema-gold">Featured</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of our most celebrated projects that demonstrate our commitment to storytelling excellence and technical innovation.
          </p>
          
          {/* Portfolio Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
                variant={activeFilter === filter ? "default" : "outline"}
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>
        
        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl hover-lift cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category.slice(0, -1)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
