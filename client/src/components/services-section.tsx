import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Palette, Scissors } from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Video,
      title: "Film Production",
      description: "Complete film production from pre-production planning to post-production magic. We handle everything from script development to final cut.",
      image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Palette,
      title: "Animation",
      description: "Cutting-edge 2D and 3D animation that breathes life into characters and stories. From concept art to final animation sequences.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Scissors,
      title: "Post-Production",
      description: "Professional editing, color grading, sound design, and visual effects that transform raw footage into cinematic masterpieces.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-deep-black to-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            <span className="cinema-gold">Our</span> Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialize in bringing visions to life through comprehensive film and animation production services that exceed industry standards.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group hover-lift bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700"
            >
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} service`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <service.icon className="cinema-gold text-4xl mb-4 mx-auto" />
                <h3 className="font-playfair text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
