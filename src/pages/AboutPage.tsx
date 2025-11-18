import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const values = [
    {
      icon: 'Heart',
      title: 'Качество',
      description: 'Используем только отборные зерна и свежие ингредиенты',
    },
    {
      icon: 'Users',
      title: 'Гостеприимство',
      description: 'Каждый гость для нас важен и особенен',
    },
    {
      icon: 'Sparkles',
      title: 'Атмосфера',
      description: 'Создаем пространство для вдохновения и отдыха',
    },
    {
      icon: 'Award',
      title: 'Профессионализм',
      description: 'Наши бариста — настоящие мастера своего дела',
    },
  ];

  const team = [
    { name: 'Анна Петрова', role: 'Основатель и управляющая', emoji: '👩‍💼' },
    { name: 'Дмитрий Смирнов', role: 'Главный бариста', emoji: '👨‍🍳' },
    { name: 'Мария Иванова', role: 'Шеф-кондитер', emoji: '👩‍🍳' },
    { name: 'Александр Козлов', role: 'Старший бариста', emoji: '👨‍💼' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-center">
              О нас
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <Card className="mb-8">
                <CardContent className="p-8 md:p-12">
                  <p className="text-xl leading-relaxed text-foreground mb-6">
                    <strong className="text-primary">Coffeehouse</strong> — это больше чем просто кофейня. 
                    Это место, где встречаются люди, рождаются идеи, и каждая чашка кофе 
                    становится маленьким праздником.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Мы открылись в 2020 году с простой целью: создать уютное пространство, 
                    где можно насладиться по-настоящему вкусным кофе в приятной атмосфере. 
                    За эти годы мы собрали команду профессионалов, влюбленных в свое дело.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Наши зерна поставляются напрямую от проверенных фермеров, 
                    выпечка готовится каждое утро, а каждый напиток создается с заботой и вниманием.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Наши ценности
            </h2>
            <p className="text-lg text-muted-foreground">
              То, что делает нас особенными
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Наша команда
            </h2>
            <p className="text-lg text-muted-foreground">
              Люди, которые создают магию каждый день
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-7xl mb-4">{member.emoji}</div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Приходите в гости!
            </h2>
            <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
              Мы работаем каждый день с 8:00 до 23:00
            </p>
            <p className="text-lg text-primary-foreground/80">
              Ждем вас по адресу: г. Москва, ул. Кофейная, д. 15
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
