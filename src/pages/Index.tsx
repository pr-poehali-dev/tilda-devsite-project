
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  // Функция для анимации элементов при скролле
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    };
    
    // Инициализация анимации при загрузке страницы
    setTimeout(animateOnScroll, 100);
    
    // Обработчик события прокрутки
    window.addEventListener('scroll', animateOnScroll);
    
    // Очистка обработчика при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
