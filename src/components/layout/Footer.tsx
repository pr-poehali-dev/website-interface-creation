import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Coffee" size={28} />
              <span className="text-xl font-bold">Уютная кофейня</span>
            </div>
            <p className="text-primary-foreground/80 text-lg">
              Лучший кофе в городе в теплой атмосфере
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3 text-lg">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                <span className="text-primary-foreground/80">ул. Примерная, 123</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={20} />
                <span className="text-primary-foreground/80">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} />
                <span className="text-primary-foreground/80">Пн-Вс: 8:00 - 22:00</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Instagram" size={28} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Facebook" size={28} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Twitter" size={28} />
              </a>
            </div>
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5150123456!2d37.61777631592896!3d55.75399998055555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzE0LjQiTiAzN8KwMzcnMDQuMCJF!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '0.5rem' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-lg">
            © 2024 Уютная кофейня. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
