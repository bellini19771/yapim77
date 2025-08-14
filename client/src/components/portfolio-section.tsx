import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import siradisiPastalar from "@/assets/siradisi_pastalar(800 x 600 px).png";
import dunyaMutfaklarindan from "@/assets/dunya_mutfaklarindan(800x600px).png";

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState("All");
  const { t, language } = useLanguage();

  const filters = [
    { en: "All", tr: "Tümü" },
    { en: "TV Productions", tr: "TV Yapımları" },
    { en: "Public Service Announcement", tr: "Kamu Spotu" },
    { en: "Commercials", tr: "Reklamlar" },
    { en: "Narration", tr: "Seslendirme" },
    { en: "Event hosting", tr: "Sunuculuk" },
  ];

  const portfolioItems = [
    {
      title: language === 'tr' ? "Dünya Mutfaklarından" : "From World Cuisines",
      description: language === 'tr' 
        ? "Sevilen TV Serisi: Ünlü Şeflerle Dünya Mutfaklarından Özgün Lezzeteler" 
        : "The beloved TV series: Authentic Flavors from World Cuisines with Famous Chefs.",
      category: "TV Productions",
      image: dunyaMutfaklarindan,
      },
    {
      title: language === 'tr' ? "Sıradışı Pastalar" : "Extraordinary Cakes",
      description: language === 'tr'
        ? "Ünlü Pasta Şefleri İle Yaratıcı Pasta Tasarımları"
        : "Creative Cake Designs with Famous Pastry Chefs",
      category: "TV Productions",
      image: siradisiPastalar,
    },
    {
      title: language === 'tr' ? "Göçmen Destekleme Projesi" : "Immigrant Support Project",
      description: language === 'tr'
        ? "Premium otomotiv markası için yüksek kaliteli reklam serisi"
        : "High-end commercial series for premium automotive brand",
      category: "Public Service",
      image: "",
    },
    {
      title: language === 'tr' ? "Gizli Hikayeler" : "Untold Stories",
      description: language === 'tr'
        ? "Saklı tarihleri keşfeden belgesel serisi"
        : "Documentary series exploring hidden histories",
      category: "Films",
      image: "",
    },
    {
      title: language === 'tr' ? "Rüya Manzarası" : "Dreamscape",
      description: language === 'tr'
        ? "İnsan bilincini keşfeden sanatsal kısa animasyon"
        : "Artistic animated short exploring human consciousness",
      category: "Animation",
      image: siradisiPastalar,
    },
    {
      title: language === 'tr' ? "Ritim & Işık" : "Rhythm & Light",
      description: language === 'tr'
        ? "Görsel sanatı sesle harmanlayan müzik video serisi"
        : "Music video series blending visual artistry with sound",
      category: "Commercials",
      image: "",
    },
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-deep-black" ref={ref}>
      <div className="container mx-auto px-6 bg-deep-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            <span className="cinema-gold">{t("portfolio.title")}</span> {t("portfolio.titleHighlight")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t("portfolio.subtitle")}
          </p>
          
          {/* Portfolio Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter[language === 'tr' ? 'tr' : 'en']}
                onClick={() => setActiveFilter(filter.en)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === filter.en
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
                variant={activeFilter === filter.en ? "default" : "outline"}
              >
                {filter[language === 'tr' ? 'tr' : 'en']}
              </Button>
            ))}
          </div>
        </motion.div>
        
        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-deep-black"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl hover-lift cursor-pointer aspect-[4/3] bg-deep-black"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-deep-black"
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
