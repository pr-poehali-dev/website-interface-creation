import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Home = () => {
  const features = [
    {
      icon: 'Coffee',
      title: 'Качественный кофе',
      description: 'Используем только свежеобжаренные зёрна арабики премиум класса',
    },
    {
      icon: 'Heart',
      title: 'Уютная атмосфера',
      description: 'Комфортное пространство для работы, встреч и отдыха',
    },
    {
      icon: 'Utensils',
      title: 'Свежая выпечка',
      description: 'Домашние круассаны, пироги и десерты каждый день',
    },
  ];

  const popularDrinks = [
    {
      name: 'Капучино',
      description: 'Классический итальянский напиток с молочной пенкой',
      price: '250 ₽',
      emoji: '☕',
    },
    {
      name: 'Латте',
      description: 'Нежный кофе с большим количеством молока',
      price: '280 ₽',
      emoji: '🥛',
    },
    {
      name: 'Эспрессо',
      description: 'Крепкий насыщенный кофе для ценителей',
      price: '180 ₽',
      emoji: '☕',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Добро пожаловать в CoffeeHome
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10">
              Место, где каждая чашка кофе — это маленькое произведение искусства
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button size="lg" className="text-xl px-8 py-6 h-auto">
                  Посмотреть меню
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="text-xl px-8 py-6 h-auto">
                  Забронировать столик
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={feature.icon as any} size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-lg text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Популярные напитки
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Попробуйте наши фирменные предложения
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {popularDrinks.map((drink, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-accent/20 to-primary/10 h-48 flex items-center justify-center">
                  <span className="text-8xl">{drink.emoji}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold">{drink.name}</h3>
                    <span className="text-2xl font-bold text-accent">{drink.price}</span>
                  </div>
                  <p className="text-lg text-muted-foreground">{drink.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" variant="outline" className="text-xl px-8 py-6 h-auto">
                Смотреть полное меню
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 md:p-20 text-center text-primary-foreground">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы к визиту?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Забронируйте столик прямо сейчас и получите комплимент от заведения
            </p>
            <Link to="/contacts">
              <Button
                size="lg"
                variant="secondary"
                className="text-xl px-10 py-6 h-auto"
              >
                Забронировать столик
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
