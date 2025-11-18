import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Menu = () => {
  const categories = {
    coffee: [
      { name: 'Эспрессо', description: 'Классический крепкий кофе', price: '150₽', emoji: '☕' },
      { name: 'Американо', description: 'Эспрессо с горячей водой', price: '180₽', emoji: '☕' },
      { name: 'Капучино', description: 'Эспрессо с молочной пеной', price: '250₽', emoji: '☕' },
      { name: 'Латте', description: 'Кофе с молоком и лёгкой пеной', price: '270₽', emoji: '🥤' },
      { name: 'Флэт уайт', description: 'Двойной эспрессо с бархатной пеной', price: '280₽', emoji: '☕' },
      { name: 'Мокко', description: 'Кофе с шоколадом и взбитыми сливками', price: '320₽', emoji: '🍫' },
      { name: 'Раф кофе', description: 'Нежный кофе со сливками и ванилью', price: '290₽', emoji: '🥤' },
      { name: 'Айс латте', description: 'Холодный кофе с молоком и льдом', price: '290₽', emoji: '🧊' }
    ],
    desserts: [
      { name: 'Круассан классический', description: 'Свежая слоёная выпечка', price: '150₽', emoji: '🥐' },
      { name: 'Круассан с миндалём', description: 'С миндальным кремом внутри', price: '180₽', emoji: '🥐' },
      { name: 'Чизкейк Нью-Йорк', description: 'Классический сырный торт', price: '320₽', emoji: '🍰' },
      { name: 'Тирамису', description: 'Итальянский десерт с маскарпоне', price: '350₽', emoji: '🍰' },
      { name: 'Брауни', description: 'Шоколадный пирог с орехами', price: '280₽', emoji: '🍫' },
      { name: 'Макаруны', description: 'Французское миндальное печенье (3 шт)', price: '250₽', emoji: '🍪' },
      { name: 'Эклер', description: 'Заварное пирожное с кремом', price: '200₽', emoji: '🥖' },
      { name: 'Штрудель', description: 'Яблочный пирог с корицей', price: '230₽', emoji: '🥧' }
    ],
    tea: [
      { name: 'Чёрный чай', description: 'Ассам, Цейлон, Эрл Грей', price: '180₽', emoji: '🫖' },
      { name: 'Зелёный чай', description: 'Сенча, Жасминовый', price: '200₽', emoji: '🍵' },
      { name: 'Травяной чай', description: 'Ромашка, мята, чабрец', price: '220₽', emoji: '🌿' },
      { name: 'Фруктовый чай', description: 'Ягодный микс с цитрусом', price: '250₽', emoji: '🍓' },
      { name: 'Матча латте', description: 'Японский зелёный чай с молоком', price: '320₽', emoji: '🍵' },
      { name: 'Какао', description: 'Горячий шоколад на молоке', price: '280₽', emoji: '🍫' }
    ],
    food: [
      { name: 'Сэндвич с курицей', description: 'Гриль курица, салат, томат, соус', price: '380₽', emoji: '🥪' },
      { name: 'Сэндвич с лососем', description: 'Слабосолёный лосось, крем-сыр', price: '450₽', emoji: '🥪' },
      { name: 'Киш Лорен', description: 'Открытый пирог с беконом', price: '320₽', emoji: '🥧' },
      { name: 'Салат Цезарь', description: 'Курица, пармезан, соус, гренки', price: '420₽', emoji: '🥗' },
      { name: 'Паста Карбонара', description: 'С беконом и сливочным соусом', price: '480₽', emoji: '🍝' },
      { name: 'Брускетта', description: 'Томаты, базилик, моцарелла (2 шт)', price: '290₽', emoji: '🥖' }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Наше меню
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свежие напитки, десерты и закуски, приготовленные с любовью
            </p>
          </div>

          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-auto mb-12">
              <TabsTrigger value="coffee" className="text-base font-semibold py-3">
                Кофе
              </TabsTrigger>
              <TabsTrigger value="desserts" className="text-base font-semibold py-3">
                Десерты
              </TabsTrigger>
              <TabsTrigger value="tea" className="text-base font-semibold py-3">
                Напитки
              </TabsTrigger>
              <TabsTrigger value="food" className="text-base font-semibold py-3">
                Еда
              </TabsTrigger>
            </TabsList>

            {Object.entries(categories).map(([key, items]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map((item) => (
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
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-20 text-center bg-secondary rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Готовы посетить нас?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Забронируйте столик и насладитесь нашим меню в уютной атмосфере
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg font-semibold px-8 h-14">
                Забронировать столик
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
