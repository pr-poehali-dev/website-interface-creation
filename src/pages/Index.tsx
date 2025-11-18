import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Бронь отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения.",
    });
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      message: ""
    });
  };

  const menuItems = [
    {
      name: "Капучино",
      description: "Классический кофейный напиток с молочной пенкой",
      price: "220 ₽",
      icon: "Coffee"
    },
    {
      name: "Латте",
      description: "Нежный кофе с большим количеством молока",
      price: "240 ₽",
      icon: "Coffee"
    },
    {
      name: "Эспрессо",
      description: "Крепкий чёрный кофе для истинных ценителей",
      price: "180 ₽",
      icon: "Coffee"
    },
    {
      name: "Круассан",
      description: "Свежий французский круассан с хрустящей корочкой",
      price: "150 ₽",
      icon: "Croissant"
    },
    {
      name: "Чизкейк",
      description: "Нежный творожный десерт с ягодным соусом",
      price: "280 ₽",
      icon: "Cake"
    },
    {
      name: "Панкейки",
      description: "Американские блинчики с кленовым сиропом",
      price: "320 ₽",
      icon: "CakeSlice"
    }
  ];

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-card/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Coffee" size={32} className="text-primary" />
            <h1 className="text-3xl font-bold text-primary">CoffeeLove</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors font-medium">
              Меню
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              О нас
            </a>
            <a href="#booking" className="text-foreground hover:text-primary transition-colors font-medium">
              Бронь
            </a>
          </nav>
          <Button onClick={scrollToBooking} className="hidden md:flex">
            Забронировать столик
          </Button>
        </div>
      </header>

      <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Уютная кофейня в сердце города
              </h2>
              <p className="text-xl text-muted-foreground">
                Ароматный кофе, свежая выпечка и атмосфера, которая располагает к приятным встречам
              </p>
              <div className="flex gap-4">
                <Button onClick={scrollToBooking} size="lg" className="text-lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать столик
                </Button>
                <Button variant="outline" size="lg" className="text-lg" onClick={() => {
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Смотреть меню
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="Coffee" size={120} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наше меню</h2>
            <p className="text-xl text-muted-foreground">
              Только свежие продукты и авторские рецепты
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/30 rounded-xl">
                      <Icon name={item.icon as any} size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                      <p className="text-2xl font-bold text-primary">{item.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                <Icon name="Heart" size={100} className="text-primary/40" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">О нас</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CoffeeLove — это не просто кофейня. Это место, где каждая чашка кофе приготовлена с любовью, 
                а каждый гость становится частью нашей уютной семьи.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы открылись в 2020 году с мечтой создать пространство, где можно насладиться качественным кофе, 
                свежей выпечкой и приятной атмосферой. Наши бариста — настоящие профессионалы своего дела, 
                которые постоянно совершенствуют своё мастерство.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Видов кофе</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Гостей в день</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">4</p>
                  <p className="text-sm text-muted-foreground">Года работы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Забронировать столик</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами для подтверждения
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Время *</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Гостей *</Label>
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        max="20"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      placeholder="Особые пожелания или вопросы..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Coffee" size={32} className="text-primary" />
                <h3 className="text-2xl font-bold text-primary">CoffeeLove</h3>
              </div>
              <p className="text-muted-foreground">
                Уютная кофейня с душой, где каждая чашка приготовлена с любовью
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={20} />
                  <span>г. Москва, ул. Кофейная, д. 15</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Phone" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Clock" size={20} />
                  <span>Пн-Вс: 08:00 - 22:00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="p-2 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="p-2 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
              </div>
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.3986419774956!2d37.6156!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzYnNTYuMiJF!5e0!3m2!1sru!2sru!4v1234567890123"
                  width="100%"
                  height="150"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen
                  loading="lazy"
                  title="Карта расположения кофейни"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 CoffeeLove. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
