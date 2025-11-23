import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Uniforms = () => {
  const navigate = useNavigate();

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
          Форма одежды кадетов
        </h1>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Правила ношения повседневной и парадной формы
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-secondary">
                  Повседневная форма
                </h2>
              </div>
            </div>
            <CardContent className="p-6">
              <img
                src="https://cdn.poehali.dev/projects/5ab1ca79-89ee-436c-8590-f09348eeba70/files/ac8bcd04-01db-4642-ab4e-724fc8315b4b.jpg"
                alt="Повседневная форма"
                className="w-full h-80 object-cover rounded-lg mb-6 shadow-lg"
              />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Китель повседневный:</span> тёмно-синего
                    цвета с погонами курса, нагрудными карманами
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Брюки:</span> прямого кроя, тёмно-синие,
                    с отглаженными стрелками
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Рубашка:</span> белая или голубая
                    с длинным рукавом, воротник застёгнут
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Обувь:</span> полуботинки чёрные,
                    начищенные до блеска
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Пояс:</span> чёрный кожаный с латунной
                    пряжкой
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-secondary">Парадная форма</h2>
              </div>
            </div>
            <CardContent className="p-6">
              <img
                src="https://cdn.poehali.dev/projects/5ab1ca79-89ee-436c-8590-f09348eeba70/files/80b517f2-b670-4100-8a64-26409f8d6796.jpg"
                alt="Парадная форма"
                className="w-full h-80 object-cover rounded-lg mb-6 shadow-lg"
              />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Китель парадный:</span> тёмно-синий
                    с золотыми пуговицами, погонами со звёздами
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Аксельбанты:</span> золотого цвета,
                    носятся на правом плече
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Рубашка:</span> белоснежная с длинным
                    рукавом, галстук тёмно-синий
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Брюки:</span> с лампасами золотого
                    цвета по боковым швам
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Обувь:</span> хромовые сапоги или
                    парадные туфли, идеально начищенные
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Фуражка:</span> парадная с кокардой
                    и золотым шнуром
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-primary/20 bg-gradient-to-r from-blue-50 to-orange-50">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Info" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Правила ношения формы
                </h3>
                <ul className="space-y-2 text-base">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Форма должна быть всегда чистой и отглаженной
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Пуговицы застёгнуты, погоны закреплены правильно
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Обувь начищена до зеркального блеска
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Причёска соответствует уставу (короткая стрижка)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Uniforms;
