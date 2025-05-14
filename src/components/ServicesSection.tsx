
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Globe",
    title: "Разработка веб-сайтов",
    description: "Создание современных адаптивных веб-сайтов с уникальным дизайном и оптимальной производительностью.",
    features: ["Лендинги", "Корпоративные сайты", "Интернет-магазины", "Порталы"]
  },
  {
    icon: "Smartphone",
    title: "Мобильные приложения",
    description: "Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android.",
    features: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"]
  },
  {
    icon: "Bot",
    title: "Чат-боты",
    description: "Автоматизация бизнес-процессов с помощью интеллектуальных ботов для мессенджеров и социальных сетей.",
    features: ["Telegram", "WhatsApp", "VK", "Viber"]
  },
  {
    icon: "Code2",
    title: "Веб-приложения",
    description: "Создание многофункциональных веб-приложений с использованием современных технологий и фреймворков.",
    features: ["React", "Vue", "Angular", "Node.js"]
  },
  {
    icon: "Settings",
    title: "CRM и ERP системы",
    description: "Разработка и внедрение систем управления бизнесом, автоматизация бизнес-процессов.",
    features: ["Учет продаж", "Управление проектами", "Аналитика", "Интеграции"]
  },
  {
    icon: "LineChart",
    title: "SEO оптимизация",
    description: "Улучшение позиций вашего сайта в поисковых системах, настройка контекстной рекламы.",
    features: ["Техническая оптимизация", "Контент-маркетинг", "Анализ конкурентов", "Аудит сайта"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="section-title">Мои услуги</h2>
        <p className="section-subtitle">
          Предлагаю полный спектр услуг по разработке цифровых решений для вашего бизнеса
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-none bg-white shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-purple" size={24} />
                </div>
                <CardTitle className="text-xl font-montserrat">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">{service.description}</CardDescription>
                <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-1 text-sm">
                      <Icon name="Check" className="text-purple" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
