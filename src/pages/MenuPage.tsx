import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MenuPage = () => {
  const coffeeMenu = [
    { name: 'Эспрессо', description: 'Классический крепкий кофе', price: '150₽', icon: '☕' },
    { name: 'Американо', description: 'Эспрессо с горячей водой', price: '180₽', icon: '☕' },
    { name: 'Капучино', description: 'С молочной пенкой', price: '250₽', icon: '☕' },
    { name: 'Латте', description: 'Нежный кофе с молоком', price: '280₽', icon: '☕' },
    { name: 'Флэт Уайт', description: 'Двойной эспрессо с молоком', price: '290₽', icon: '☕' },
    { name: 'Раф', description: 'Со сливками и ванилью', price: '320₽', icon: '☕' },
  ];

  const dessertsMenu = [
    { name: 'Круассан', description: 'Классический французский', price: '180₽', icon: '🥐' },
    { name: 'Чизкейк', description: 'Нежный творожный', price: '320₽', icon: '🍰' },
    { name: 'Брауни', description: 'Шоколадный с орехами', price: '280₽', icon: '🍫' },
    { name: 'Тирамису', description: 'Итальянский десерт', price: '350₽', icon: '🍰' },
    { name: 'Эклер', description: 'С ванильным кремом', price: '220₽', icon: '🥖' },
    { name: 'Макаронс', description: '3 штуки ассорти', price: '250₽', icon: '🍪' },
  ];

  const drinksMenu = [
    { name: 'Апельсиновый фреш', description: 'Свежевыжатый сок', price: '280₽', icon: '🍊' },
    { name: 'Лимонад', description: 'Домашний освежающий', price: '220₽', icon: '🍋' },
    { name: 'Чай', description: 'Черный/Зеленый/Травяной', price: '200₽', icon: '🍵' },
    { name: 'Какао', description: 'С маршмеллоу', price: '250₽', icon: '☕' },
    { name: 'Смузи', description: 'Ягодный микс', price: '300₽', icon: '🥤' },
    { name: 'Милкшейк', description: 'Шоколадный/Ванильный', price: '320₽', icon: '🥛' },
  ];

  const MenuItem = ({ item }: { item: typeof coffeeMenu[0] }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-xl font-semibold">{item.name}</h3>
            </div>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
          <div className="text-2xl font-bold text-primary whitespace-nowrap">
            {item.price}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Наше меню
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый напиток и десерт приготовлен с любовью
            </p>
          </div>

          <Tabs defaultValue="coffee" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1">
              <TabsTrigger value="coffee" className="text-lg py-3">
                Кофе
              </TabsTrigger>
              <TabsTrigger value="desserts" className="text-lg py-3">
                Десерты
              </TabsTrigger>
              <TabsTrigger value="drinks" className="text-lg py-3">
                Напитки
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coffee" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Кофейная карта</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {coffeeMenu.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="desserts" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Десерты и выпечка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {dessertsMenu.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="drinks" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Другие напитки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {drinksMenu.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
