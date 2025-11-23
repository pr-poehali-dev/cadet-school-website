import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Chevrons = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-primary/10"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          На главную
        </Button>

        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-3 text-center">
          Шевроны
        </h1>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Правила размещения и пришивания шевронов на форме
        </p>

        <Card className="mb-8 overflow-hidden border-2 shadow-xl">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
            <h2 className="text-2xl font-bold text-secondary flex items-center gap-3">
              <Icon name="Target" size={28} className="text-primary" />
              Схема размещения
            </h2>
          </div>
          <CardContent className="p-8">
            <img
              src="https://cdn.poehali.dev/projects/5ab1ca79-89ee-436c-8590-f09348eeba70/files/b59b200a-a341-482d-a0ec-e888adb6a4bb.jpg"
              alt="Схема размещения шевронов"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-6"
            />
            <p className="text-center text-muted-foreground text-base italic">
              Точное расположение шевронов на рукаве кителя
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Icon name="Ruler" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Расстояния от плеча
                </h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-semibold text-primary mb-1">Шеврон училища:</p>
                  <p className="text-2xl font-bold text-secondary">8 см</p>
                  <p className="text-sm text-muted-foreground">от плечевого шва</p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg">
                  <p className="font-semibold text-accent mb-1">Эмблема рода войск:</p>
                  <p className="text-2xl font-bold text-secondary">2 см</p>
                  <p className="text-sm text-muted-foreground">ниже шеврона училища</p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg">
                  <p className="font-semibold text-secondary mb-1">Курсовой шеврон:</p>
                  <p className="text-2xl font-bold text-secondary">2 см</p>
                  <p className="text-sm text-muted-foreground">выше локтевого сгиба</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Icon name="Scissors" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  Техника пришивания
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <p className="text-base">
                    Точно отмерьте расстояние от плечевого шва с помощью линейки
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <p className="text-base">
                    Приколите шеврон булавками для фиксации
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <p className="text-base">
                    Используйте нитки в тон шеврона (чёрные или синие)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">4</span>
                  </div>
                  <p className="text-base">
                    Пришивайте мелкими стежками по контуру шеврона
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">5</span>
                  </div>
                  <p className="text-base">
                    Следите за симметричностью на обоих рукавах
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-accent/30 bg-gradient-to-br from-orange-50 to-white">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name="AlertCircle" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Важные правила
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-accent mt-1 flex-shrink-0" />
                    <p className="text-base">
                      Шевроны располагаются строго на левом рукаве кителя
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-accent mt-1 flex-shrink-0" />
                    <p className="text-base">
                      Расстояния измеряются по внешнему шву рукава
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-accent mt-1 flex-shrink-0" />
                    <p className="text-base">
                      Все шевроны должны быть расположены строго вертикально
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-accent mt-1 flex-shrink-0" />
                    <p className="text-base">
                      Перед пришиванием обязательно проверьте правильность размещения
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chevrons;
