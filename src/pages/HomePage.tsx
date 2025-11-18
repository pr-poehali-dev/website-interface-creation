import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HomePage = () => {
  const features = [
    {
      icon: 'Coffee',
      title: 'Свежий кофе',
      description: 'Зерна обжариваются каждую неделю специально для наших гостей',
    },
    {
      icon: 'Croissant',
      title: 'Домашняя выпечка',
      description: 'Круассаны, пироги и десерты готовятся нашими кондитерами',
    },
    {
      icon: 'Wifi',
      title: 'Быстрый Wi-Fi',
      description: 'Работайте или учитесь в комфортной атмосфере',
    },
    {
      icon: 'Heart',
      title: 'Уютная атмосфера',
      description: 'Место, куда хочется возвращаться снова и снова',
    },
  ];

  const popularItems = [
    { name: 'Капучино', price: '250₽', emoji: '☕' },
    { name: 'Круассан', price: '180₽', emoji: '🥐' },
    { name: 'Чизкейк', price: '320₽', emoji: '🍰' },
    { name: 'Латте', price: '280₽', emoji: '☕' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Место, где рождается <span className="text-primary">вдохновение</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Приходите за кофе, оставайтесь ради атмосферы
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/contacts">Забронировать столик</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/menu">Посмотреть меню</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Почему мы?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Всё для вашего комфорта и удовольствия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              Популярное в меню
            </h2>
            <p className="text-lg text-muted-foreground">
              То, что заказывают чаще всего
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {popularItems.map((item) => (
              <Card key={item.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-3">{item.emoji}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <Link to="/menu">Полное меню</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы к вкусному визиту?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Забронируйте столик и насладитесь атмосферой нашей кофейни
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link to="/contacts">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать столик
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
