import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  const features = [
    {
      icon: 'Coffee',
      title: 'Свежий кофе',
      description: 'Только лучшие сорта зёрен из разных уголков мира, обжаренные с мастерством'
    },
    {
      icon: 'Croissant',
      title: 'Свежая выпечка',
      description: 'Круассаны, торты и десерты, приготовленные нашими кондитерами каждое утро'
    },
    {
      icon: 'Armchair',
      title: 'Уютная атмосфера',
      description: 'Комфортные места для работы, встреч с друзьями или просто отдыха'
    },
    {
      icon: 'Wifi',
      title: 'Бесплатный Wi-Fi',
      description: 'Быстрый интернет для работы или общения с близкими'
    }
  ];

  const popularItems = [
    {
      name: 'Капучино классический',
      description: 'Эспрессо с молочной пеной',
      price: '250₽',
      emoji: '☕'
    },
    {
      name: 'Латте карамельный',
      description: 'Нежный кофе с карамельным сиропом',
      price: '290₽',
      emoji: '🥤'
    },
    {
      name: 'Круассан с миндалём',
      description: 'Слоёная выпечка с миндальным кремом',
      price: '180₽',
      emoji: '🥐'
    },
    {
      name: 'Чизкейк Нью-Йорк',
      description: 'Классический десерт с нежной текстурой',
      price: '320₽',
      emoji: '🍰'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative bg-gradient-to-b from-secondary to-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Место, где рождается уют
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                Насладитесь ароматным кофе и атмосферой тепла в самом сердце города
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="text-lg font-semibold px-8 h-14 w-full sm:w-auto">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Забронировать столик
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button size="lg" variant="outline" className="text-lg font-semibold px-8 h-14 w-full sm:w-auto">
                    <Icon name="BookOpen" size={20} className="mr-2" />
                    Посмотреть меню
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              Почему выбирают нас
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon name={feature.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Популярные позиции
              </h2>
              <p className="text-xl text-muted-foreground">
                Любимые напитки и десерты наших гостей
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {popularItems.map((item) => (
                <Card key={item.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-6xl mb-4 text-center">{item.emoji}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                    <p className="text-base text-muted-foreground mb-4 min-h-[3rem]">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                      <Button variant="outline" size="sm" className="font-semibold">
                        Заказать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link to="/menu">
                <Button size="lg" variant="outline" className="text-lg font-semibold px-8 h-14">
                  Полное меню
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Icon name="Calendar" size={48} className="mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Забронируйте столик прямо сейчас
              </h2>
              <p className="text-xl mb-10 opacity-90 leading-relaxed">
                Гарантируем вам лучшее место и тёплый приём. Бронирование займёт меньше минуты!
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg font-semibold px-10 h-14">
                  Забронировать столик
                  <Icon name="ArrowRight" size={20} className="ml-2" />
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

export default Index;
