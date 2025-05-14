import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const portfolioCategories = ["Все проекты", "Веб-сайты", "Приложения", "Боты"];

const portfolioItems = [
  {
    title: "Интернет-магазин электроники",
    description:
      "Разработка современного интернет-магазина с интеграцией платежных систем",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop",
    category: "Веб-сайты",
  },
  {
    title: "Приложение для доставки еды",
    description: "Мобильное приложение для заказа и доставки еды из ресторанов",
    image:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=500&h=350&fit=crop",
    category: "Приложения",
  },
  {
    title: "Корпоративный сайт строительной компании",
    description:
      "Создание презентационного сайта с каталогом услуг и портфолио проектов",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=350&fit=crop",
    category: "Веб-сайты",
  },
  {
    title: "Бот для автоматизации записи на прием",
    description: "Telegram-бот для записи клиентов в салон красоты",
    image:
      "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=500&h=350&fit=crop",
    category: "Боты",
  },
  {
    title: "Сайт образовательной платформы",
    description:
      "Онлайн-платформа для обучения с личным кабинетом и системой тестирования",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=350&fit=crop",
    category: "Веб-сайты",
  },
  {
    title: "Мобильное приложение для фитнеса",
    description:
      "Приложение с тренировками, отслеживанием прогресса и планом питания",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=350&fit=crop",
    category: "Приложения",
  },
];

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("Все проекты");

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <h2 className="section-title">Портфолио проектов</h2>
        <p className="section-subtitle">
          Познакомьтесь с моими лучшими работами и проектами, реализованными для
          клиентов
        </p>

        <Tabs
          defaultValue="Все проекты"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              {portfolioCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={`${activeTab === category ? "text-purple" : ""}`}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {portfolioCategories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems
                  .filter(
                    (item) =>
                      category === "Все проекты" || item.category === category,
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="portfolio-item rounded-lg overflow-hidden shadow-md"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="portfolio-overlay">
                        <h3 className="text-xl font-bold mb-2 font-montserrat">
                          {item.title}
                        </h3>
                        <p className="text-sm text-center mb-4">
                          {item.description}
                        </p>
                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-purple"
                        >
                          Подробнее
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PortfolioSection;
