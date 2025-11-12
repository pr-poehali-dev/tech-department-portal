import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 pointer-events-none" />
      
      <nav className="relative border-b border-border/50 backdrop-blur-sm bg-card/30">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Cpu" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">TechPortal</span>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </Link>
            <Link to="/documentation" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Документация
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative">
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              <Icon name="Zap" size={16} />
              Внутренний портал
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Добро пожаловать в
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Технический Отдел
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Централизованный портал для доступа к документации, инструментам и ресурсам технического отдела
            </p>

            <div className="flex gap-4 justify-center pt-6">
              <Link
                to="/documentation"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                <Icon name="BookOpen" size={20} />
                Открыть документацию
              </Link>
              <button className="px-8 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all flex items-center gap-2">
                <Icon name="Settings" size={20} />
                Настройки
              </button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="FileText" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">База знаний</h3>
              <p className="text-muted-foreground">
                Полная техническая документация, руководства и best practices
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Code" size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">API Reference</h3>
              <p className="text-muted-foreground">
                Подробное описание всех API endpoints и интеграций
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Terminal" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Инструменты</h3>
              <p className="text-muted-foreground">
                Набор утилит и скриптов для автоматизации рабочих процессов
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Быстрый доступ</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#" className="p-4 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Database" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">База данных</h4>
                  <p className="text-sm text-muted-foreground">Схемы и миграции</p>
                </div>
              </a>

              <a href="#" className="p-4 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="GitBranch" size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Git Workflow</h4>
                  <p className="text-sm text-muted-foreground">Правила работы с Git</p>
                </div>
              </a>

              <a href="#" className="p-4 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Shield" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Безопасность</h4>
                  <p className="text-sm text-muted-foreground">Security guidelines</p>
                </div>
              </a>

              <a href="#" className="p-4 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="Rocket" size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Deployment</h4>
                  <p className="text-sm text-muted-foreground">CI/CD и деплой процессы</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-border/50 backdrop-blur-sm bg-card/30 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Cpu" size={20} className="text-primary" />
              <span className="text-muted-foreground">TechPortal © 2025</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
              <a href="#" className="hover:text-primary transition-colors">О портале</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
