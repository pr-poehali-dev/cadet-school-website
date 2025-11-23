import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Форма одежды",
      description: "Повседневная и парадная форма кадетов",
      icon: "Shirt",
      color: "from-blue-500 to-blue-700",
      path: "/uniforms",
      gradient: "hover:from-blue-600 hover:to-blue-800",
    },
    {
      title: "Шевроны",
      description: "Правила размещения и пришивания",
      icon: "Badge",
      color: "from-purple-500 to-purple-700",
      path: "/chevrons",
      gradient: "hover:from-purple-600 hover:to-purple-800",
    },
    {
      title: "Курсовки",
      description: "Система курсов: 1-7 курс (5-11 класс)",
      icon: "GraduationCap",
      color: "from-green-500 to-green-700",
      path: "/courses",
      gradient: "hover:from-green-600 hover:to-green-800",
    },
    {
      title: "Звания",
      description: "От вице-ефрейтора до старшего вице-сержанта",
      icon: "Award",
      color: "from-orange-500 to-orange-700",
      path: "/ranks",
      gradient: "hover:from-orange-600 hover:to-orange-800",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/360005a5-c2bf-4011-a79b-831b4c0f8aec.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
      </div>
      <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
              <Icon name="School" size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4 leading-tight">
            Кадетская школа
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Информационный портал для кадетов: форма, шевроны, курсовки и звания
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <Card
              key={index}
              onClick={() => navigate(section.path)}
              className="border-2 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`bg-gradient-to-br ${section.color} ${section.gradient} p-8 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
                
                <div className="relative flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform">
                      {section.title}
                    </h2>
                    <p className="text-white/90 text-lg">{section.description}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={section.icon} size={32} className="text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-muted-foreground">
                    Перейти к разделу
                  </span>
                  <Icon
                    name="ArrowRight"
                    size={20}
                    className="text-muted-foreground group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 max-w-5xl mx-auto border-2 border-primary/20 bg-gradient-to-r from-blue-50 to-orange-50 animate-fade-in">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Icon name="Info" size={24} className="text-primary" />
                <h3 className="text-2xl font-bold text-secondary">
                  О портале
                </h3>
              </div>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Этот информационный портал создан для помощи кадетам в освоении 
                правил ношения формы, размещения знаков отличия и понимания системы 
                званий и курсов. Здесь вы найдёте подробные инструкции, схемы 
                и иллюстрации для каждого аспекта кадетской жизни.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Кадетская школа. Все права защищены.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;