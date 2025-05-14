
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-purple font-montserrat">Dev<span className="text-darkgray">Pro</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection("services")}
            className="font-medium text-darkgray hover:text-purple transition-colors"
          >
            Услуги
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="font-medium text-darkgray hover:text-purple transition-colors"
          >
            Портфолио
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="font-medium text-darkgray hover:text-purple transition-colors"
          >
            Цены
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-medium text-darkgray hover:text-purple transition-colors"
          >
            Контакты
          </button>
          <Button onClick={() => scrollToSection("contact")} variant="default" className="bg-purple hover:bg-purple/90">
            Заказать проект
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-darkgray" onClick={toggleMobileMenu}>
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 absolute top-full left-0 w-full">
          <div className="container flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="font-medium text-darkgray hover:text-purple py-2 transition-colors text-left"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="font-medium text-darkgray hover:text-purple py-2 transition-colors text-left"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="font-medium text-darkgray hover:text-purple py-2 transition-colors text-left"
            >
              Цены
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-medium text-darkgray hover:text-purple py-2 transition-colors text-left"
            >
              Контакты
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="default" className="bg-purple hover:bg-purple/90 w-full">
              Заказать проект
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
