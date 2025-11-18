import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Coffee" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CoffeeHome</span>
            </div>
            <p className="text-muted-foreground text-lg">
              Уютная кофейня в центре города. Приходите за атмосферой и вкусным кофе!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={20} className="text-accent mt-1" />
                <p className="text-lg text-muted-foreground">
                  ул. Центральная, 25<br />Москва, 123456
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={20} className="text-accent" />
                <p className="text-lg text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={20} className="text-accent" />
                <p className="text-lg text-muted-foreground">info@coffeehome.ru</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Часы работы</h3>
            <div className="space-y-2 text-lg text-muted-foreground">
              <p>Пн-Пт: 8:00 - 22:00</p>
              <p>Сб-Вс: 9:00 - 23:00</p>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon name="Instagram" size={20} />
                </a>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon name="Facebook" size={20} />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-muted-foreground text-lg">
            © 2024 CoffeeHome. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
