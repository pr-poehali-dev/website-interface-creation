import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения брони.',
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'г. Москва, ул. Кофейная, д. 15',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@coffeehouse.ru',
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Вс: 08:00 - 23:00',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Контакты и бронирование
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Забронируйте столик или свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Забронировать столик</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (900) 123-45-67"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.ru"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата *</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Время *</Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Количество гостей *</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="2"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Особые пожелания..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Забронировать
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={info.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Мы на карте</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="MapPin" size={48} className="text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        г. Москва, ул. Кофейная, д. 15
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Социальные сети</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="lg" className="w-full">
                        <Icon name="Instagram" size={20} className="mr-2" />
                        Instagram
                      </Button>
                    </a>
                    <a
                      href="https://t.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="lg" className="w-full">
                        <Icon name="Send" size={20} className="mr-2" />
                        Telegram
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactsPage;
