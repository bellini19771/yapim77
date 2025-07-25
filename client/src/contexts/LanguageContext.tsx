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
    "hero.subtitle": "We transform ideas into powerful visual narratives through cutting-edge animation, compelling films, and innovative commercial productions.",
    "hero.getStarted": "Get Started",
    "hero.viewWork": "View Our Work",
    
    // Services Section
    "services.title": "Our",
    "services.titleHighlight": "Services",
    "services.subtitle": "From concept to completion, we offer comprehensive production services that bring your vision to life with cinematic excellence.",
    "services.animation.title": "3D Animation",
    "services.animation.desc": "Cutting-edge 3D animation and visual effects that captivate audiences and bring characters to life.",
    "services.film.title": "Film Production",
    "services.film.desc": "Full-service film production from pre-production planning to post-production finishing.",
    "services.commercial.title": "Commercial Videos",
    "services.commercial.desc": "High-impact commercial and promotional videos that drive engagement and results.",
    "services.documentary.title": "Documentaries",
    "services.documentary.desc": "Compelling documentary storytelling that informs, inspires, and creates lasting impact.",
    
    // Portfolio Section
    "portfolio.title": "Featured",
    "portfolio.titleHighlight": "Projects",
    "portfolio.subtitle": "Explore our diverse portfolio of award-winning films, animations, and commercial productions that showcase our creative excellence.",
    
    // About Section
    "about.title": "About",
    "about.titleHighlight": "77 Yapım",
    "about.subtitle": "Founded in Istanbul, 77 Yapım has been at the forefront of Turkish cinema and animation for over a decade.",
    "about.description": "Our passion for storytelling drives us to create visual experiences that resonate with audiences worldwide. From feature films to commercial campaigns, we combine artistic vision with technical expertise to deliver exceptional results.",
    "about.experience": "Years of Experience",
    "about.projects": "Projects Completed",
    "about.awards": "Awards Won",
    "about.clients": "Happy Clients",
    
    // Team Section
    "team.title": "Our",
    "team.titleHighlight": "Team",
    "team.subtitle": "Meet the creative minds behind 77 Yapım. Our talented team of directors, animators, and cinematographers bring years of expertise to every project.",
    "team.ahmet.name": "Ahmet Kaya",
    "team.ahmet.position": "Creative Director & Founder",
    "team.ahmet.specialty": "Cinematic Storytelling",
    "team.ahmet.bio": "With over 15 years in film production, Ahmet leads our creative vision and ensures every project tells a compelling story.",
    "team.zeynep.name": "Zeynep Demir",
    "team.zeynep.position": "Lead Animator",
    "team.zeynep.specialty": "3D Animation & VFX",
    "team.zeynep.bio": "A master of bringing characters to life, Zeynep's animations have won multiple international awards for their artistic excellence.",
    "team.emre.name": "Emre Özkan",
    "team.emre.position": "Director of Photography",
    "team.emre.specialty": "Cinematography & Lighting",
    "team.emre.bio": "Emre's keen eye for visual composition and mastery of light creates the stunning cinematography that defines our productions.",
    
    // Contact Section
    "contact.title": "Get In",
    "contact.titleHighlight": "Touch",
    "contact.subtitle": "Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.project": "Project Type",
    "contact.form.budget": "Budget Range",
    "contact.form.message": "Tell us about your project",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.info.address": "Istanbul, Turkey",
    "contact.info.phone": "+90 (212) 555-0123",
    "contact.info.email": "hello@77yapim.com",
    
    // Footer
    "footer.services.title": "Services",
    "footer.company.title": "Company",
    "footer.company.about": "About Us",
    "footer.company.careers": "Careers",
    "footer.company.news": "News",
    "footer.company.contact": "Contact",
    "footer.rights": "All rights reserved.",
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
    "hero.subtitle": "Fikirleri, son teknoloji animasyon, etkileyici filmler ve yenilikçi ticari yapımlar aracılığıyla güçlü görsel anlatılara dönüştürüyoruz.",
    "hero.getStarted": "Başlayalım",
    "hero.viewWork": "Çalışmalarımızı İncele",
    
    // Services Section
    "services.title": "Hizmet",
    "services.titleHighlight": "lerimiz",
    "services.subtitle": "Konseptten tamamlanmaya kadar, vizyonunuzu sinematik mükemmellikle hayata geçiren kapsamlı prodüksiyon hizmetleri sunuyoruz.",
    "services.animation.title": "3D Animasyon",
    "services.animation.desc": "İzleyicileri büyüleyen ve karakterleri hayata geçiren son teknoloji 3D animasyon ve görsel efektler.",
    "services.film.title": "Film Prodüksiyonu",
    "services.film.desc": "Ön prodüksiyon planlamasından post prodüksiyon bitişine kadar tam hizmet film prodüksiyonu.",
    "services.commercial.title": "Reklam Videoları",
    "services.commercial.desc": "Etkileşim ve sonuç odaklı yüksek etkili reklam ve tanıtım videoları.",
    "services.documentary.title": "Belgeseller",
    "services.documentary.desc": "Bilgilendiren, ilham veren ve kalıcı etki yaratan etkileyici belgesel hikaye anlatımı.",
    
    // Portfolio Section
    "portfolio.title": "Öne Çıkan",
    "portfolio.titleHighlight": "Projeler",
    "portfolio.subtitle": "Yaratıcı mükemmelliğimizi sergileyen ödüllü filmler, animasyonlar ve ticari yapımlardan oluşan çeşitli portföyümüzü keşfedin.",
    
    // About Section
    "about.title": "77 Yapım",
    "about.titleHighlight": "Hakkında",
    "about.subtitle": "İstanbul'da kurulan 77 Yapım, on yılı aşkın süredir Türk sineması ve animasyonunun öncüsü olmuştur.",
    "about.description": "Hikaye anlatma tutkumuz, dünya çapında izleyicilerle rezonansa giren görsel deneyimler yaratma konusunda bizi yönlendiriyor. Uzun metrajlı filmlerden reklam kampanyalarına kadar, artistik vizyonu teknik uzmanlıkla birleştirerek olağanüstü sonuçlar sunuyoruz.",
    "about.experience": "Yıllık Deneyim",
    "about.projects": "Tamamlanan Proje",
    "about.awards": "Kazanılan Ödül",
    "about.clients": "Mutlu Müşteri",
    
    // Team Section
    "team.title": "Ekibimiz",
    "team.titleHighlight": "",
    "team.subtitle": "77 Yapım'ın arkasındaki yaratıcı zihinlerle tanışın. Yetenekli yönetmen, animatör ve sinematograf ekibimiz her projeye yıllarca deneyim katıyor.",
    "team.ahmet.name": "Ahmet Kaya",
    "team.ahmet.position": "Kreatif Direktör & Kurucu",
    "team.ahmet.specialty": "Sinematik Hikaye Anlatımı",
    "team.ahmet.bio": "Film prodüksiyonunda 15 yılı aşkın deneyimiyle Ahmet, yaratıcı vizyonumuzu yönetiyor ve her projenin etkileyici bir hikaye anlatmasını sağlıyor.",
    "team.zeynep.name": "Zeynep Demir",
    "team.zeynep.position": "Baş Animatör",
    "team.zeynep.specialty": "3D Animasyon & VFX",
    "team.zeynep.bio": "Karakterleri hayata geçirme ustası olan Zeynep'in animasyonları artistik mükemmelliği için birçok uluslararası ödül kazanmıştır.",
    "team.emre.name": "Emre Özkan",
    "team.emre.position": "Görüntü Yönetmeni",
    "team.emre.specialty": "Sinematografi & Işık",
    "team.emre.bio": "Emre'nin görsel kompozisyona olan keskin bakışı ve ışık ustalığı, yapımlarımızı tanımlayan çarpıcı sinematografiyi yaratıyor.",
    
    // Contact Section
    "contact.title": "İletişime",
    "contact.titleHighlight": "Geçin",
    "contact.subtitle": "Vizyonunuzu hayata geçirmeye hazır mısınız? Projenizi konuşalım ve birlikte olağanüstü bir şey yaratalım.",
    "contact.form.name": "Ad Soyad",
    "contact.form.email": "E-posta Adresi",
    "contact.form.project": "Proje Türü",
    "contact.form.budget": "Bütçe Aralığı",
    "contact.form.message": "Projeniz hakkında bize anlatın",
    "contact.form.submit": "Mesaj Gönder",
    "contact.form.sending": "Gönderiliyor...",
    "contact.info.address": "İstanbul, Türkiye",
    "contact.info.phone": "+90 (212) 555-0123",
    "contact.info.email": "merhaba@77yapim.com",
    
    // Footer
    "footer.services.title": "Hizmetler",
    "footer.company.title": "Şirket",
    "footer.company.about": "Hakkımızda",
    "footer.company.careers": "Kariyer",
    "footer.company.news": "Haberler",
    "footer.company.contact": "İletişim",
    "footer.rights": "Tüm hakları saklıdır.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

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