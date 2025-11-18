import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: 'Heart',
      title: 'Любовь к кофе',
      description: 'Каждая чашка готовится с душой и вниманием к деталям'
    },
    {
      icon: 'Users',
      title: 'Гостеприимство',
      description: 'Мы создаём место, где каждый чувствует себя как дома'
    },
    {
      icon: 'Sparkles',
      title: 'Качество',
      description: 'Используем только лучшие ингредиенты и проверенных поставщиков'
    },
    {
      icon: 'Leaf',
      title: 'Экологичность',
      description: 'Заботимся об окружающей среде и используем экологичную упаковку'
    }
  ];

  const team = [
    {
      name: 'Анна Петрова',
      role: 'Основатель и главный бариста',
      emoji: '👩‍💼'
    },
    {
      name: 'Михаил Соколов',
      role: 'Шеф-кондитер',
      emoji: '👨‍🍳'
    },
    {
      name: 'Елена Волкова',
      role: 'Старший бариста',
      emoji: '👩‍💼'
    },
    {
      name: 'Дмитрий Орлов',
      role: 'Бариста',
      emoji: '👨‍💼'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                О нашей кофейне
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                История о том, как страсть к кофе превратилась в любимое место для тысяч гостей
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <div className="text-8xl mb-6">☕</div>
                  <h2 className="text-4xl font-bold text-foreground mb-6">Наша история</h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      «Уютная чашка» появилась в 2020 году из мечты создать место, где каждый человек 
                      сможет найти свой идеальный кофе и почувствовать себя как дома.
                    </p>
                    <p>
                      Мы начали с маленькой точки и большой любви к кофе. Сегодня нас выбирают 
                      сотни гостей каждый день, ценя качество напитков и атмосферу тепла.
                    </p>
                    <p>
                      Каждое зёрнышко мы выбираем вручную, каждый рецепт создаём с любовью, 
                      а каждого гостя встречаем с улыбкой.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="aspect-square flex items-center justify-center bg-primary/5">
                    <CardContent className="text-center pt-6">
                      <div className="text-5xl font-bold text-primary mb-2">2020</div>
                      <div className="text-base text-muted-foreground">Год основания</div>
                    </CardContent>
                  </Card>
                  <Card className="aspect-square flex items-center justify-center bg-accent/10">
                    <CardContent className="text-center pt-6">
                      <div className="text-5xl font-bold text-accent mb-2">500+</div>
                      <div className="text-base text-muted-foreground">Гостей в день</div>
                    </CardContent>
                  </Card>
                  <Card className="aspect-square flex items-center justify-center bg-accent/10">
                    <CardContent className="text-center pt-6">
                      <div className="text-5xl font-bold text-accent mb-2">50+</div>
                      <div className="text-base text-muted-foreground">Позиций меню</div>
                    </CardContent>
                  </Card>
                  <Card className="aspect-square flex items-center justify-center bg-primary/5">
                    <CardContent className="text-center pt-6">
                      <div className="text-5xl font-bold text-primary mb-2">4.9</div>
                      <div className="text-base text-muted-foreground">Рейтинг гостей</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Наши ценности
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Принципы, которыми мы руководствуемся каждый день
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon name={value.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Наша команда
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Профессионалы, которые создают магию в каждой чашке
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {team.map((member) => (
                <Card key={member.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 text-center">
                    <div className="text-7xl mb-4">{member.emoji}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-base text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Приходите к нам в гости
              </h2>
              <p className="text-xl mb-10 opacity-90 leading-relaxed">
                Мы будем рады видеть вас в нашей кофейне. Забронируйте столик и познакомьтесь 
                с нашей командой лично!
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg font-semibold px-10 h-14">
                  Забронировать столик
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
