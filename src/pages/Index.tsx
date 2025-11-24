import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Target',
      title: 'Стратегическое консультирование',
      description: 'Разработка долгосрочных стратегий развития бизнеса с учетом рыночных трендов и конкурентной среды'
    },
    {
      icon: 'TrendingUp',
      title: 'Оптимизация процессов',
      description: 'Анализ и улучшение бизнес-процессов для повышения эффективности и снижения операционных расходов'
    },
    {
      icon: 'Users',
      title: 'Управление изменениями',
      description: 'Сопровождение организационных трансформаций и внедрение новых управленческих практик'
    },
    {
      icon: 'BarChart3',
      title: 'Финансовый анализ',
      description: 'Глубокий анализ финансовых показателей и разработка стратегий оптимизации капитала'
    },
    {
      icon: 'Shield',
      title: 'Управление рисками',
      description: 'Идентификация, оценка и минимизация бизнес-рисков для защиты интересов компании'
    },
    {
      icon: 'Lightbulb',
      title: 'Инновационное развитие',
      description: 'Внедрение инновационных решений и цифровых технологий для конкурентного преимущества'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Технокодер</div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-foreground hover:text-accent transition-colors">О компании</a>
              <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:block">
              Связаться с нами
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Стратегические решения для вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Мы знаем, как решить ваши задачи с помощью самых передовых информационных технологий и методов
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-4xl font-bold text-primary">10+</div>
                  <div className="text-muted-foreground">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">10+</div>
                  <div className="text-muted-foreground">Регионов России</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">100+</div>
                  <div className="text-muted-foreground">Успешных проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">20М+</div>
                  <div className="text-muted-foreground">Пользователей</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/6be9cf27-7f01-4b4b-98b6-4cff434f62be/files/cc5143d6-c63f-4e28-9fbd-0dea1178116a.jpg"
                alt="Corporate building"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/6be9cf27-7f01-4b4b-98b6-4cff434f62be/files/4eed2cd7-e4e3-4f6a-a254-e2dd17920e20.jpg"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">О компании</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы — команда профессионалов с глубокой экспертизой в области стратегического управления и бизнес-консалтинга. За 15 лет работы мы помогли сотням компаний оптимизировать процессы, увеличить прибыль и достичь устойчивого роста.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наш подход основан на глубоком анализе, проверенных методологиях и индивидуальном подходе к каждому клиенту. Мы не предлагаем шаблонные решения — мы создаем стратегии, которые работают именно для вашего бизнеса.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <Icon name="Award" className="text-accent" size={32} />
                  <h3 className="font-semibold text-lg">Экспертность</h3>
                  <p className="text-muted-foreground">Команда сертифицированных специалистов</p>
                </div>
                <div className="space-y-2">
                  <Icon name="Zap" className="text-accent" size={32} />
                  <h3 className="font-semibold text-lg">Результативность</h3>
                  <p className="text-muted-foreground">Измеримые результаты по KPI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-primary">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для развития вашего бизнеса на всех уровнях управления
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-accent" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Почему выбирают нас</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Индивидуальный подход</h3>
                    <p className="text-primary-foreground/80">Каждое решение разрабатывается с учетом специфики вашего бизнеса</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Прозрачность процессов</h3>
                    <p className="text-primary-foreground/80">Полная отчетность и контроль на каждом этапе сотрудничества</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Долгосрочное партнерство</h3>
                    <p className="text-primary-foreground/80">Мы остаемся с вами и после завершения проекта</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/6be9cf27-7f01-4b4b-98b6-4cff434f62be/files/f61bdbd7-639b-4471-80fb-2b79b09d06c3.jpg"
                alt="Innovation"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-primary">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму, и наш специалист свяжется с вами в течение рабочего дня
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя *</label>
                    <Input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Петров"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Компания *</label>
                    <Input 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="ООО Компания"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <Input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@company.ru"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон *</label>
                    <Input 
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашей задаче..."
                    rows={6}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-2">
              <Icon name="Mail" className="text-accent mx-auto" size={32} />
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground">info@biznesskonsalt.ru</p>
            </div>
            <div className="text-center space-y-2">
              <Icon name="Phone" className="text-accent mx-auto" size={32} />
              <h3 className="font-semibold">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center space-y-2">
              <Icon name="MapPin" className="text-accent mx-auto" size={32} />
              <h3 className="font-semibold">Адрес</h3>
              <p className="text-muted-foreground">Москва, ул. Тверская, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Технокодер</h3>
              <p className="text-primary-foreground/80">Мы знаем, как решить ваши задачи с помощью самых передовых информационных технологий и методов</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Компания</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div><a href="#about" className="hover:text-accent transition-colors">О нас</a></div>
                <div><a href="#services" className="hover:text-accent transition-colors">Услуги</a></div>
                <div><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Услуги</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div>Стратегическое консультирование</div>
                <div>Оптимизация процессов</div>
                <div>Управление изменениями</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div>+7 (495) 123-45-67</div>
                <div>info@biznesskonsalt.ru</div>
                <div>Москва, ул. Тверская, 1</div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            © 2024 Технокодер. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;