import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения бронирования.',
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Контакты и бронирование
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами или забронируйте столик онлайн
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl">Забронировать столик</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-semibold">
                        Ваше имя *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Иван Иванов"
                        className="mt-2 h-12 text-base"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-base font-semibold">
                        Телефон *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (999) 123-45-67"
                        className="mt-2 h-12 text-base"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base font-semibold">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.ru"
                        className="mt-2 h-12 text-base"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date" className="text-base font-semibold">
                          Дата *
                        </Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="mt-2 h-12 text-base"
                        />
                      </div>
                      <div>
                        <Label htmlFor="time" className="text-base font-semibold">
                          Время *
                        </Label>
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="mt-2 h-12 text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="guests" className="text-base font-semibold">
                        Количество гостей *
                      </Label>
                      <select
                        id="guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="mt-2 w-full h-12 px-3 rounded-md border border-input bg-background text-base"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'гость' : num < 5 ? 'гостя' : 'гостей'}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-semibold">
                        Пожелания
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Особые пожелания или комментарии..."
                        className="mt-2 min-h-[120px] text-base"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg font-semibold h-14">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Забронировать
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Адрес</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        ул. Пушкина, д. 10<br />
                        Москва, 101000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Режим работы</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Пн-Пт: 08:00 - 22:00<br />
                        Сб-Вс: 09:00 - 23:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Телефон</h3>
                      <a href="tel:+74951234567" className="text-base text-muted-foreground hover:text-primary transition-colors">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                      <a href="mailto:info@cozy-cup.ru" className="text-base text-muted-foreground hover:text-primary transition-colors">
                        info@cozy-cup.ru
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3A64d6bb933fe7f9c27a696e5c6c0c7f39e0f370c1e8c7c6c5c6c5c6c5c6c5c6c5"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Карта"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                    Мы в социальных сетях
                  </h3>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Instagram"
                    >
                      <Icon name="Instagram" size={24} />
                    </a>
                    <a
                      href="https://vk.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="VK"
                    >
                      <Icon name="Share2" size={24} />
                    </a>
                    <a
                      href="https://telegram.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Telegram"
                    >
                      <Icon name="Send" size={24} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
