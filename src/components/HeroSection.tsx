
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-white to-purple/5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-montserrat">
              Разработка <span className="text-purple">цифровых решений</span> для вашего бизнеса
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Создаю современные веб-сайты, мобильные приложения и программные решения, 
              которые помогают бизнесу расти и развиваться в цифровом мире.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-purple hover:bg-purple/90 text-white">
                Заказать проект
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
              <Button 
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline" 
                size="lg">
                Узнать больше
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-12">
              <div className="flex -space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=faces" 
                  alt="Клиент" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces" 
                  alt="Клиент" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=faces" 
                  alt="Клиент" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                </div>
                <p className="text-sm text-muted-foreground">Более 50+ довольных клиентов</p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple/20 rounded-full filter blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1573495612937-f01934eeaaa7?w=600&h=700&fit=crop" 
              alt="Разработка сайтов и приложений" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
