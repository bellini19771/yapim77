import { createContext, useContext, useState, ReactNode } from "react";

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.portfolio": "Portfolio",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.crafting": "Crafting",
    "hero.cinematic": "Cinematic",
    "hero.stories": "Stories",
    "hero.subtitle": "We transform ideas into compelling visual narratives through animations, films, and creative advertising projects.",
    "hero.getStarted": "Get Started",
    "hero.viewWork": "View Our Work",
    
    // Services Section
    "services.title": "Our",
    "services.titleHighlight": "Services",
    "services.subtitle": "From concept to completion, we offer comprehensive production services that bring your vision to life with cinematic excellence.",
    "services.sectionTitle": "Our Expertise",
    "services.sectionDesc": "We specialize in bringing visions to life through comprehensive film and animation production services that exceed industry standards.",
    "services.animation.title": "3D Animation",
    "services.animation.desc": "Cutting-edge 3D animation and visual effects that captivate audiences and bring characters to life.",
    "services.film.title": "Production",
    "services.film.desc": "Full-service film production from pre-production planning to post-production finishing.",
    "services.commercial.title": "Commercial Videos",
    "services.commercial.desc": "High-impact commercial and promotional videos that drive engagement and results.",
    "services.documentary.title": "Documentaries",
    "services.documentary.desc": "Compelling documentary storytelling that informs, inspires, and creates lasting impact.",
    
    // Portfolio Section
    "portfolio.title": "Projects",
    "portfolio.titleHighlight": "That Our Team is Part of",
    "portfolio.subtitle": "Explore our portfolio of productions and commercial works that showcase our creative excellence.",
    
    // About Section
    "about.title": "About",
    "about.titleHighlight": "77 Yapım",
    "about.subtitle": "Although founded recently and based in Ankara, 77 Yapım is a young production company composed of professionals with over 20 years of experience in film and production, who are highly skilled in their fields and deeply passionate about their craft.",
    "about.description": "Our deep passion for storytelling guides us in creating original and impactful visual experiences that resonate with audiences around the world. From feature films to creative advertising campaigns, we combine artistic vision with technical expertise to deliver striking and lasting results in every project.",
    "about.experience": "Years of Experience",
    "about.projects": "Projects Completed",
    "about.awards": "Awards Won",
    "about.clients": "Happy Clients",
    
    // Team Section
    "team.title": "Our",
    "team.titleHighlight": "Team",
    "team.subtitle": "Meet the creative minds behind 77 Yapım. Our talented team of directors, animators, and cinematographers bring years of expertise to every project.",
    "team.producer.name": "Belin Çelebi",
    "Yapımcı": "Creative Director & Founder",
    "team.Belin.specialty": "Cinematic Storytelling",
    "team.Belin.bio": "With over 15 years in film production, Belin leads our creative vision and ensures every project tells a compelling story.",
    "team.Ekip1.name": "Ekip1 ",
    "team.Ekip1.position": "Lead Animator",
    "team.Ekip1.specialty": "3D Animation & VFX",
    "team.Ekip1.bio": "A master of bringing characters to life, Ekip1's animations have won multiple international awards for their artistic excellence.",
    "team.Ekip2.name": "Ekip2 ",
    "team.Ekip2.position": "Director of Photography",
    "team.Ekip2.specialty": "Cinematography & Lighting",
    "team.Ekip2.bio": "Ekip2's keen eye for visual composition and mastery of light creates the stunning cinematography that defines our productions.",
    
    // Contact Section
    "contact.title": "Get In",
    "contact.titleHighlight": "Touch",
    "contact.subtitle": "Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.",
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.email": "Email Address",
        "contact.form.projectType": "Project Type",
    "contact.form.projectTypePlaceholder": "Select project type",
    "contact.form.projectTypes.film": "Production",
    "contact.form.projectTypes.commercial": "Commercial Video",
    "contact.form.projectTypes.music": "Music Video",
    "contact.form.projectTypes.other": "Other",
    "contact.form.message": "Project Details",
    "contact.form.messagePlaceholder": "Tell us about your project vision, timeline, and any specific requirements...",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "Next Level Loft Ofis NO:4 KAT:27 İÇ KAPI NO:72 Çankaya/ANKARA": "Next Level Loft Ofis NO:4 KAT:27 İÇ KAPI NO:72 Çankaya/ANKARA",
    "contact.info.phone": "+90 (312) 949 03 20",
    "contact.info.email": "info@77yapim.com",
    
    // Footer
    "footer.description": "Crafting cinematic stories that captivate audiences and inspire emotions through film and animation excellence.",
    "footer.services.title": "Services",
    "footer.company.title": "Company",
    "footer.company.about": "About Us",
    "footer.company.careers": "Careers",
    "footer.company.news": "News",
    "footer.company.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  tr: {
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.portfolio": "Portföy",
    "nav.services": "Hizmetler",
    "nav.about": "Hakkımızda",
    "nav.contact": "İletişim",
    
    // Hero Section
    "hero.crafting": "Sinematik",
    "hero.cinematic": "Hikayeler",
    "hero.stories": "Yaratıyoruz",
    "hero.subtitle": "Fikirleri,  animasyonlar, filmler ve yaratıcı reklam projeleri aracılığıyla etkileyici görsel anlatılara dönüştürüyoruz.",
    "hero.getStarted": "Başlayalım",
    "hero.viewWork": "Çalışmalarımızı İncele",
    
    // Services Section
    "services.title": "Hizmet",
    "services.titleHighlight": "lerimiz",
    "services.subtitle": "Konseptten tamamlanmaya kadar, vizyonunuzu sinematik mükemmellikle hayata geçiren kapsamlı prodüksiyon hizmetleri sunuyoruz.",
    "services.sectionTitle": "Uzmanlık Alanlarımız",
    "services.sectionDesc": "Hayallerinizi gerçeğe dönüştüren, sektörde standartları aşan kapsamlı film ve animasyon prodüksiyon hizmetlerinde uzmanız.",
    "services.animation.title": "3D Animasyon",
    "services.animation.desc": "İzleyicileri büyüleyen ve karakterleri hayata geçiren son teknoloji 3D animasyon ve görsel efektler.",
    "services.film.title": "Prodüksiyon",
    "services.film.desc": "Ön prodüksiyon planlamasından post prodüksiyon bitişine kadar tam hizmet film prodüksiyonu.",
    "services.commercial.title": "Reklam Videoları",
    "services.commercial.desc": "Etkileşim ve sonuç odaklı yüksek etkili reklam ve tanıtım videoları.",
    "services.documentary.title": "Belgeseller",
    "services.documentary.desc": "Bilgilendiren, ilham veren ve kalıcı etki yaratan etkileyici belgesel hikaye anlatımı.",
    
    // Portfolio Section
    "portfolio.title": "Ekibimizin Dahil Olduğu",
    "portfolio.titleHighlight": "Projeler",
    "portfolio.subtitle": "Yaratıcı mükemmelliğimizi sergileyen prodüksiyonlar ve ticari yapımlardan oluşan portföyümüzü keşfedin.",
    
    // About Section
    "about.title": "77 Yapım",
    "about.titleHighlight": "Hakkında",
    "about.subtitle": "Ankara merkezli olarak kurulan 77 Yapım, genç bir oluşum olmasına rağmen, ekibimiz sinema ve prodüksiyon alanında 20 yılı aşkın deneyime sahip, kendi alanlarında son derece uzman ve işlerine tutkuyla bağlı profesyonellerden oluşmaktadır. ",
    "about.description": "Hikaye anlatma konusundaki derin tutkumuz, dünya genelindeki izleyicilerle bağ kuran özgün ve etkileyici görsel deneyimler yaratmamıza yön veriyor. Uzun metrajlı filmlerden yaratıcı reklam kampanyalarına kadar geniş bir yelpazede, sanatsal vizyonumuzu teknik ustalıkla harmanlayarak her projede çarpıcı ve kalıcı sonuçlara imza atıyoruz.",
    "about.experience": "Yıllık Deneyim",
    "about.projects": "Tamamlanan Proje",
    "about.clients": "Mutlu Müşteri",
    
    // Team Section
    "team.title": "Ekibimiz",
    "team.titleHighlight": "",
    "team.subtitle": "77 Yapım'ın arkasındaki yaratıcı zihinlerle tanışın. Yetenekli yönetmen, animatör ve sinematograf ekibimiz her projeye yıllarca deneyim katıyor.",
    "team.producer.name": "Belin Çelebi",
    "Yapımcı": "Kreatif Direktör & Kurucu",
    "team.belin.specialty": "Sinematik Hikaye Anlatımı",
    "team.belin.bio": "Prodüksiyon ve yapım işlerinde 20 yılı aşkın deneyimiyle, yaratıcı vizyonumuzu yönetiyor ve her projenin etkileyici bir hikaye anlatmasını sağlıyor.",
    "team.Ekip1.name": "Ekip1 ",
    "team.Ekip1.position": "Baş Animatör",
    "team.Ekip1.specialty": "3D Animasyon & VFX",
    "team.Ekip1.bio": "Karakterleri hayata geçirme ustası olan Ekip1'in animasyonları artistik mükemmelliği için birçok uluslararası ödül kazanmıştır.",
    "team.Ekip2.name": "Ekip2 ",
    "team.Ekip2.position": "Görüntü Yönetmeni",
    "team.Ekip2.specialty": "Sinematografi & Işık",
    "team.Ekip2.bio": "Ekip2'nin görsel kompozisyona olan keskin bakışı ve ışık ustalığı, yapımlarımızı tanımlayan çarpıcı sinematografiyi yaratıyor.",
    
    // Contact Section
    "contact.title": "İletişime",
    "contact.titleHighlight": "Geçin",
    "contact.subtitle": "Vizyonunuzu hayata geçirmeye hazır mısınız? Projenizi konuşalım ve birlikte olağanüstü bir şey yaratalım.",
    "contact.form.firstName": "Ad",
    "contact.form.lastName": "Soyad",
    "contact.form.email": "E-posta Adresi",
    "contact.form.projectType": "Proje Türü",
    "contact.form.projectTypePlaceholder": "Proje türü seçin",
    "contact.form.projectTypes.film": "Prodüksiyonu",
    "contact.form.projectTypes.commercial": "Reklam Filmi",
    "contact.form.projectTypes.music": "Müzik Klibi",
    "contact.form.projectTypes.other": "Diğer",
    "contact.form.message": "Proje Detayları",
    "contact.form.messagePlaceholder": "Lütfen proje vizyonunuz, zaman çizelgeniz ve özel gereksinimleriniz hakkında bilgi verin...",
    "contact.form.submit": "Mesaj Gönder",
    "contact.form.sending": "Gönderiliyor...",
        "contact.address": "İstanbul, Türkiye",
    "contact.phone": "Telefon",
    "contact.email": "E-posta",
    
    // Footer
    "footer.description": "Film ve animasyon alanındaki mükemmellik ile izleyicileri büyüleyen ve duyguları harekete geçiren sinematik hikayeler üretiyoruz.",
    "footer.services.title": "Hizmetler",
    "footer.company.title": "Şirket",
    "footer.company.about": "Hakkımızda",
    "footer.company.careers": "Kariyer",
    "footer.company.news": "Haberler",
    "footer.company.contact": "İletişim",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.privacy": "Gizlilik Politikası",
    "footer.terms": "Hizmet Şartları",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}