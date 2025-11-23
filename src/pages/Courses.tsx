import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Courses = () => {
  const navigate = useNavigate();

  const renderChevrons = (count: number) => {
    return (
      <div className="flex flex-col gap-[2px] items-center">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="relative w-10 h-3"
            style={{
              clipPath: 'polygon(0 0, 50% 100%, 100% 0, 85% 0, 50% 70%, 15% 0)'
            }}
          >
            <div className="absolute inset-0 bg-yellow-400" />
            <div
              className="absolute inset-0 bg-blue-900"
              style={{
                clipPath: 'polygon(5% 10%, 50% 85%, 95% 10%, 85% 10%, 50% 65%, 15% 10%)'
              }}
            />
          </div>
        ))}
      </div>
    );
  };

  const courses = [
    {
      number: 1,
      grade: "5 класс",
      color: "from-green-400 to-green-600",
      description: "Младший курс. Начало кадетского пути",
      duties: ["Изучение устава", "Строевая подготовка", "Знакомство с традициями"],
      icon: "Sprout",
      image: "https://cdn.poehali.dev/projects/5ab1ca79-89ee-436c-8590-f09348eeba70/files/5beba552-4ec1-4a35-867c-748a5bb97f48.jpg",
    },
    {
      number: 2,
      grade: "6 класс",
      color: "from-blue-400 to-blue-600",
      description: "Младший курс. Начало кадетского пути",
      duties: ["Изучение устава", "Строевая подготовка", "Знакомство с традициями"],
      icon: "Sprout",
      image: "https://cdn.poehali.dev/projects/5ab1ca79-89ee-436c-8590-f09348eeba70/files/fa428800-82e6-4bbf-8d94-654cfd908e9f.jpg",
    },
    {
      number: 3,
      grade: "7 класс",
      color: "from-purple-400 to-purple-600",
      description: "Освоение базовых навыков",
      duties: ["Огневая подготовка", "Физическая подготовка", "Дисциплина"],
      icon: "Target",
      image: "https://cdn.poehali.dev/projects/5ab1ca79-89ee-436c-8590-f09348eeba70/files/5cad0ae1-ae49-4f95-8cb1-f4643cea90b6.jpg",
    },
    {
      number: 4,
      grade: "8 класс",
      color: "from-orange-400 to-orange-600",
      description: "Развитие лидерских качеств",
      duties: ["Командная работа", "Тактическая подготовка", "Наставничество младших"],
      icon: "Users",
      image: "https://cdn.poehali.dev/projects/5ab1ca79-89ee-436c-8590-f09348eeba70/files/351690b0-70c8-400d-b516-c539246ee5fd.jpg",
    },
    {
      number: 5,
      grade: "9 класс",
      color: "from-indigo-400 to-indigo-600",
      description: "Углублённая подготовка",
      duties: ["Военная топография", "Участие в школьных мероприятиях", "Подготовка к экзаменам"],
      icon: "Map",
      image: "https://cdn.poehali.dev/projects/5ab1ca79-89ee-436c-8590-f09348eeba70/files/f3a38c13-cfde-45e3-89d0-e8ad258db8f3.jpg",
    },
    {
      number: 6,
      grade: "10 класс",
      color: "from-amber-400 to-amber-600",
      description: "Предвыпускной курс",
      duties: ["Полевые учения", "Профориентация"],
      icon: "GraduationCap",
      image: "https://cdn.poehali.dev/projects/5ab1ca79-89ee-436c-8590-f09348eeba70/files/0f0aa8c7-f8f5-4c6d-a072-1de599f3c61a.jpg",
    },
    {
      number: 7,
      grade: "11 класс",
      color: "from-red-400 to-red-600",
      description: "Старший курс. Выпускники",
      duties: ["Итоговая аттестация", "Выбор военного ВУЗа", "Передача традиций"],
      icon: "Award",
      image: "https://cdn.poehali.dev/projects/5ab1ca79-89ee-436c-8590-f09348eeba70/files/6801e97d-452c-4ea1-b673-74da35cedaac.jpg",
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
          Курсовки
        </h1>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Система курсов кадетской школы: от 1 курса (5 класс) до 7 курса (11 класс)
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.number}
              className="border-2 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={`${course.number} курс`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-6xl font-bold mb-1 opacity-90">
                    {course.number}
                  </div>
                  <div className="text-xl font-semibold">{course.grade}</div>
                </div>
                <div className="absolute top-4 right-4">
                  {renderChevrons(course.number)}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-secondary mb-3">
                  {course.description}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    Основные задачи:
                  </p>
                  {course.duties.map((duty, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Icon
                        name="ChevronRight"
                        size={16}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <p className="text-sm">{duty}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 border-2 border-primary/20 bg-gradient-to-r from-blue-50 to-white">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Info" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  Система курсов
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-primary mb-2">Младшие курсы (1-2):</p>
                    <p className="text-sm text-muted-foreground">
                      Освоение базовых дисциплин, формирование кадетского духа,
                      строевая подготовка
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Средние курсы (3-4):</p>
                    <p className="text-sm text-muted-foreground">
                      Развитие лидерских качеств, углублённое изучение военных дисциплин
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Старшие курсы (5-7):</p>
                    <p className="text-sm text-muted-foreground">
                      Подготовка к поступлению в военные ВУЗы, наставничество младших курсов
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Курсовые знаки отличия:</p>
                    <p className="text-sm text-muted-foreground">
                      На погонах размещаются полоски, обозначающие номер курса
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

export default Courses;