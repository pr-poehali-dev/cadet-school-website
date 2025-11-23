import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Ranks = () => {
  const navigate = useNavigate();

  const ranks = [
    {
      title: "Вице-ефрейтор",
      stripes: 1,
      color: "from-slate-400 to-slate-600",
      requirements: [
        "Безупречная дисциплина",
        "Отличная успеваемость",
        "Выполнение обязанностей дневального",
      ],
      icon: "User",
    },
    {
      title: "Младший вице-сержант",
      stripes: 2,
      color: "from-blue-400 to-blue-600",
      requirements: [
        "Отличная строевая подготовка",
        "Знание уставов",
      ],
      icon: "Users",
    },
    {
      title: "Вице-сержант",
      stripes: 3,
      color: "from-purple-400 to-purple-600",
      requirements: [
        "Лидерские качества",
        "Участие в соревнованиях",
      ],
      icon: "Shield",
    },
    {
      title: "Старший вице-сержант",
      stripes: 4,
      color: "from-amber-400 to-amber-600",
      requirements: [
        "Выдающиеся достижения в учёбе и службе",
        "Опыт командования",
        "Рекомендация командования",
      ],
      icon: "Crown",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-primary/10"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          На главную
        </Button>

        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-3 text-center">
          Звания кадетов
        </h1>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Система званий и требования для их получения
        </p>

        <div className="space-y-6">
          {ranks.map((rank, index) => (
            <Card
              key={index}
              className="border-2 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="grid md:grid-cols-3 gap-0">
                <div
                  className={`bg-gradient-to-br ${rank.color} p-8 flex flex-col items-center justify-center text-white relative`}
                >
                  <div className="absolute top-4 right-4">
                    <Icon name={rank.icon} size={40} className="text-white/30" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">{rank.title}</h3>
                    <div className="flex gap-2 justify-center mb-2">
                      {Array.from({ length: rank.stripes }).map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-12 bg-white/90 rounded-sm shadow-lg"
                        />
                      ))}
                    </div>
                    <p className="text-sm opacity-90 mt-2">
                      {rank.stripes} {rank.stripes === 1 ? "лычка" : "лычки"}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6 md:col-span-2">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="ClipboardCheck" size={20} className="text-primary" />
                      <h4 className="font-bold text-lg text-secondary">
                        Требования
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {rank.requirements.map((req, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Icon
                            name="CheckCircle2"
                            size={16}
                            className="text-primary mt-1 flex-shrink-0"
                          />
                          <p className="text-sm">{req}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Порядок присвоения
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="text-primary flex-shrink-0" />
                  Звания присваиваются приказом директора школы
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="text-primary flex-shrink-0" />
                  Церемония проводится в торжественной обстановке
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="text-primary flex-shrink-0" />
                  Погоны с новым званием вручаются лично
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="text-primary flex-shrink-0" />
                  Звание может быть понижено за нарушения
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 bg-gradient-to-br from-orange-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Medal" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Знаки отличия
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="text-accent flex-shrink-0" />
                  Лычки размещаются на погонах симметрично
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="text-accent flex-shrink-0" />
                  Расстояние от края погона до первой лычки — 4,5 см
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="text-accent flex-shrink-0" />
                  Лычки золотистого цвета для сержантов
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="text-accent flex-shrink-0" />
                  Погоны содержат также эмблему училища
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Ranks;