import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'ar';

// Create context for language
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Common elements
    "site.name": "Al Jassar Furnishing",
    "site.tagline": "Premium B2B Furnishing Solutions",
    
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us", 
    "nav.products": "Products",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.quote": "Request a Quote",
    
    // Home page
    "home.hero.title": "Premium B2B Furnishing Solutions",
    "home.hero.subtitle": "Transforming commercial spaces across Oman with quality and elegance",
    "home.hero.cta": "Explore Solutions",
    
    // Categories
    "categories.title": "Business Solutions",
    "categories.subtitle": "Explore our premium B2B furniture solutions designed for corporate, hospitality, and commercial environments across Oman",
    
    // About
    "about.title": "Our Story",
    "about.subtitle": "Leading commercial furnishing in Oman since 2005",    
    
    // Products
    "products.title": "Our Products",
    "products.viewDetails": "View Details",
    "products.category": "Category",
    "products.search": "Search",
    "products.viewAll": "View All Products",
    
    // Projects
    "projects.title": "B2B Projects",
    "projects.subtitle": "Our successful commercial furnishing projects across Oman",
    "projects.viewAll": "View All Projects",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Have questions? We're here to help",
    "contact.address": "Al Jassar Building, Muscat, Oman",
    "contact.phone": "+968 2412 5678",
    "contact.email": "info@aljassar.com",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    
    // Quote form
    "quote.title": "Request a Quote",
    "quote.subtitle": "Tell us about your project for a custom solution",
    "quote.form.company": "Company Name",
    "quote.form.project": "Project Type",
    "quote.form.timeline": "Project Timeline",
    "quote.form.budget": "Budget Range",
    "quote.form.requirements": "Requirements",
    "quote.form.submit": "Request Quote",
    
    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.services": "Our Services",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  ar: {
    // Common elements
    "site.name": "الجسار للمفروشات",
    "site.tagline": "حلول مفروشات متميزة للشركات",
    
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.products": "المنتجات",
    "nav.projects": "المشاريع",
    "nav.contact": "اتصل بنا",
    "nav.quote": "طلب عرض سعر",
    
    // Home page
    "home.hero.title": "حلول مفروشات متميزة للشركات",
    "home.hero.subtitle": "تحويل المساحات التجارية في جميع أنحاء عمان بالجودة والأناقة",
    "home.hero.cta": "استكشف الحلول",
    
    // Categories
    "categories.title": "حلول الأعمال",
    "categories.subtitle": "استكشف حلول الأثاث المتميزة للشركات والفنادق والبيئات التجارية في جميع أنحاء عمان",
    
    // About
    "about.title": "قصتنا",
    "about.subtitle": "رواد المفروشات التجارية في عمان منذ 2005",
      // Products
    "products.title": "منتجاتنا",
    "products.viewDetails": "عرض التفاصيل",
    "products.category": "الفئة",
    "products.search": "بحث",
    "products.viewAll": "عرض جميع المنتجات",
    
    // Projects
    "projects.title": "مشاريع الشركات",
    "projects.subtitle": "مشاريع المفروشات التجارية الناجحة في جميع أنحاء عمان",
    "projects.viewAll": "عرض جميع المشاريع",
    
    // Contact
    "contact.title": "اتصل بنا",
    "contact.subtitle": "هل لديك أسئلة؟ نحن هنا للمساعدة",
    "contact.address": "مبنى الجسار، مسقط، عمان",
    "contact.phone": "+968 2412 5678",
    "contact.email": "info@aljassar.com",
    "contact.form.name": "اسمك",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.message": "الرسالة",
    "contact.form.submit": "إرسال الرسالة",
    
    // Quote form
    "quote.title": "طلب عرض سعر",
    "quote.subtitle": "أخبرنا عن مشروعك للحصول على حل مخصص",
    "quote.form.company": "اسم الشركة",
    "quote.form.project": "نوع المشروع",
    "quote.form.timeline": "الجدول الزمني للمشروع",
    "quote.form.budget": "نطاق الميزانية",
    "quote.form.requirements": "المتطلبات",
    "quote.form.submit": "طلب عرض سعر",
    
    // Footer
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.services": "خدماتنا",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Initialize from localStorage or default to English
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      return saved === "ar" ? "ar" : "en";
    }
    return "en";
  });

  // Update document direction when language changes
  useEffect(() => {
    if (language === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
      document.body.classList.add("font-arabic");
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
      document.body.classList.remove("font-arabic");
    }
    
    localStorage.setItem("language", language);
  }, [language]);

  // Function to set language
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for using language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
