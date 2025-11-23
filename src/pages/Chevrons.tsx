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

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="overflow-hidden border-2 shadow-xl">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
              <h2 className="text-xl font-bold text-secondary flex items-center gap-3">
                <Icon name="ShieldCheck" size={24} className="text-primary" />
                Шеврон ФСО
              </h2>
            </div>
            <CardContent className="p-6">
              <div className="rounded-lg overflow-hidden h-64 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/088a15b5-9338-4afb-96ff-50e9270dd3e3.jpg" 
                  alt="Шеврон ФСО" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center text-base font-semibold text-secondary mb-2">
                Левое плечо
              </p>
              <p className="text-center text-muted-foreground text-sm">
                Шеврон Федеральной службы охраны Российской Федерации
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2 shadow-xl">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6">
              <h2 className="text-xl font-bold text-secondary flex items-center gap-3">
                <Icon name="School" size={24} className="text-accent" />
                Школьный шеврон
              </h2>
            </div>
            <CardContent className="p-6">
              <div className="rounded-lg overflow-hidden h-64 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/3bfa9cc2-db75-42ee-80a9-1ab0d2e645bb.jpg" 
                  alt="Шеврон школы №145" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center text-base font-semibold text-secondary mb-2">
                Правое плечо
              </p>
              <p className="text-center text-muted-foreground text-sm">
                Шеврон школы №145
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 border-2 hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Icon name="Ruler" size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary">
                Расстояния от плеча
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
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