
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkgray text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">Dev<span className="text-purple">Pro</span></h3>
            <p className="text-gray-300 mb-4">
              Создаю современные цифровые решения для роста вашего бизнеса.
              Индивидуальный подход и высокое качество работы.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-purple transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple transition-colors">
                <Icon name="BrandTelegram" fallback="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple transition-colors">
                <Icon name="BrandVk" fallback="MessageCircle" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple transition-colors">Разработка веб-сайтов</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple transition-colors">Мобильные приложения</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple transition-colors">Чат-боты</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple transition-colors">Веб-приложения</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple transition-colors">CRM и ERP системы</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-purple" />
                <a href="mailto:contact@devpro.ru" className="text-gray-300 hover:text-purple transition-colors">
                  contact@devpro.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-purple" />
                <a href="tel:+79001234567" className="text-gray-300 hover:text-purple transition-colors">
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-purple" />
                <span className="text-gray-300">Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} DevPro. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
