
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Я свяжусь с вами в ближайшее время.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white to-purple/5">
      <div className="container">
        <h2 className="section-title">Связаться со мной</h2>
        <p className="section-subtitle">
          Готовы обсудить ваш проект? Заполните форму, и я свяжусь с вами в ближайшее время
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 font-montserrat">Оставить заявку</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Имя <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Введите ваш email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Введите ваш телефон"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Сообщение <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите о вашем проекте"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-purple hover:bg-purple/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6 font-montserrat">Контактная информация</h3>
            <p className="text-gray-600 mb-8">
              Вы можете связаться со мной любым удобным способом. Я готов ответить на все ваши вопросы и обсудить детали вашего проекта.
            </p>
            
            <div className="space-y-6">
              <div className="contact-info">
                <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center">
                  <Icon name="Mail" className="text-purple" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-darkgray">Email</h4>
                  <a href="mailto:contact@devpro.ru" className="text-gray-600 hover:text-purple">contact@devpro.ru</a>
                </div>
              </div>
              
              <div className="contact-info">
                <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center">
                  <Icon name="Phone" className="text-purple" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-darkgray">Телефон</h4>
                  <a href="tel:+79001234567" className="text-gray-600 hover:text-purple">+7 (900) 123-45-67</a>
                </div>
              </div>
              
              <div className="contact-info">
                <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center">
                  <Icon name="MessageCircle" className="text-purple" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-darkgray">Мессенджеры</h4>
                  <div className="flex gap-3 mt-1">
                    <a href="#" className="text-gray-600 hover:text-purple">
                      <Icon name="BrandTelegram" fallback="MessageCircle" size={24} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-purple">
                      <Icon name="BrandWhatsapp" fallback="MessageCircle" size={24} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-purple">
                      <Icon name="BrandVk" fallback="MessageCircle" size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-3 font-montserrat">График работы</h4>
              <p className="text-gray-600 mb-2">Понедельник - Пятница: 9:00 - 18:00</p>
              <p className="text-gray-600">Суббота - Воскресенье: Выходной</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
