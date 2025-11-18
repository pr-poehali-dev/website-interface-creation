import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Icon name="Coffee" className="text-primary-foreground" size={20} />
              </div>
              <span className="text-xl font-bold">Coffeehouse</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Уютная кофейня в центре города, где каждый найдет свой идеальный вкус
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" size={20} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  г. Москва, ул. Кофейная, д. 15
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="flex-shrink-0" />
                <a href="tel:+74951234567" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="flex-shrink-0" />
                <a href="mailto:info@coffeehouse.ru" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  info@coffeehouse.ru
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="VK"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-primary-foreground/80 mb-2">Режим работы:</p>
              <p className="text-sm font-medium">Пн-Вс: 08:00 - 23:00</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Coffeehouse. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
