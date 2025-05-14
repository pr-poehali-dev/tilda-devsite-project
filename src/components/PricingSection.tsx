
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Базовый",
    price: "от 30 000 ₽",
    description: "Идеально для малого бизнеса и стартапов",
    features: [
      "Одностраничный сайт",
      "Адаптивный дизайн",
      "До 5 секций",
      "Базовое SEO",
      "Форма обратной связи",
      "Поддержка 2 недели"
    ],
    popular: false
  },
  {
    name: "Стандарт",
    price: "от 70 000 ₽",
    description: "Оптимальное решение для развивающегося бизнеса",
    features: [
      "Многостраничный сайт",
      "Уникальный дизайн",
      "До 10 страниц",
      "Расширенное SEO",
      "Интеграция с CRM",
      "Админ-панель",
      "Поддержка 1 месяц"
    ],
    popular: true
  },
  {
    name: "Премиум",
    price: "от 150 000 ₽",
    description: "Полный комплекс услуг для крупных проектов",
    features: [
      "Комплексная веб-платформа",
      "Индивидуальный UX/UI дизайн",
      "Неограниченное количество страниц",
      "Полная SEO оптимизация",
      "Интеграция с бизнес-системами",
      "Расширенный функционал",
      "Техническая поддержка 3 месяца"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="section-title">Стоимость услуг</h2>
        <p className="section-subtitle">
          Прозрачное ценообразование и гибкие тарифы для проектов любой сложности
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden ${plan.popular ? 'border-purple shadow-lg' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-purple text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Популярный
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-montserrat">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold font-montserrat text-darkgray">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-purple hover:bg-purple/90' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Заказать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-6 rounded-lg shadow border border-gray-100">
          <h3 className="text-xl font-bold mb-4 font-montserrat">Индивидуальный расчет стоимости</h3>
          <p className="text-gray-600 mb-6">
            Каждый проект уникален, поэтому финальная стоимость рассчитывается индивидуально на основе требований, сроков и сложности. 
            Оставьте заявку, и я подготовлю для вас детальное коммерческое предложение.
          </p>
          <Button 
            className="bg-purple hover:bg-purple/90"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Получить индивидуальное предложение
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
