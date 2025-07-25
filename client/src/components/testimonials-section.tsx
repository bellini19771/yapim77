import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      quote: "77 Yapım transformed our vision into a cinematic masterpiece. Their attention to detail and creative approach exceeded all expectations.",
      author: "Michael Chen",
      position: "Creative Director, Luna Studios",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    },
    {
      quote: "The animation quality and storytelling prowess of 77 Yapım is unmatched. They brought our characters to life beautifully.",
      author: "Sarah Johnson",
      position: "Producer, Dreamworks Animation",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    },
    {
      quote: "Professional, innovative, and incredibly talented. 77 Yapım delivered a commercial campaign that drove exceptional results.",
      author: "David Rodriguez",
      position: "Marketing Director, Global Brands Inc.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    },
  ];

  return (
    <section className="py-20 bg-deep-black" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            What <span className="cinema-gold">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and clients have to say about working with 77 Yapım.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="flex cinema-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <blockquote className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
