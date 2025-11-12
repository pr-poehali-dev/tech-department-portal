import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("projects");

  const sections = [
    { id: "projects", title: "Проекты", icon: "FolderGit2" },
    { id: "getting-started", title: "Начало работы", icon: "Rocket" },
    { id: "architecture", title: "Архитектура", icon: "Box" },
    { id: "api", title: "API Reference", icon: "Code" },
    { id: "deployment", title: "Deployment", icon: "Server" },
    { id: "security", title: "Безопасность", icon: "Shield" },
    { id: "troubleshooting", title: "Решение проблем", icon: "Wrench" },
  ];

  const projects = [
    { 
      name: "WebPortal", 
      status: "active", 
      tech: "React, Node.js, PostgreSQL",
      description: "Основной веб-портал компании",
      team: "5 разработчиков"
    },
    { 
      name: "MobileApp", 
      status: "active", 
      tech: "React Native, Firebase",
      description: "Мобильное приложение для клиентов",
      team: "3 разработчика"
    },
    { 
      name: "Analytics Dashboard", 
      status: "active", 
      tech: "Vue.js, Python, ClickHouse",
      description: "Система аналитики и отчетности",
      team: "4 разработчика"
    },
    { 
      name: "API Gateway", 
      status: "maintenance", 
      tech: "Go, Redis, Kubernetes",
      description: "Единая точка входа для всех API",
      team: "2 разработчика"
    },
    { 
      name: "Legacy System", 
      status: "deprecated", 
      tech: "PHP, MySQL",
      description: "Старая система (планируется миграция)",
      team: "1 разработчик"
    },
    { 
      name: "ML Pipeline", 
      status: "development", 
      tech: "Python, TensorFlow, Airflow",
      description: "Система машинного обучения",
      team: "3 разработчика"
    }
  ];

  const content: Record<string, { title: string; description: string; items: string[] }> = {
    "projects": {
      title: "Список проектов",
      description: "Все текущие проекты технического отдела",
      items: []
    },
    "getting-started": {
      title: "Начало работы",
      description: "Быстрый старт для новых членов технического отдела",
      items: [
        "Настройка рабочего окружения",
        "Установка необходимых инструментов",
        "Первый запуск проекта",
        "Структура кодовой базы",
        "Основные команды и workflow"
      ]
    },
    "architecture": {
      title: "Архитектура системы",
      description: "Обзор технической архитектуры и компонентов",
      items: [
        "Микросервисная архитектура",
        "Схема взаимодействия сервисов",
        "База данных и модели данных",
        "Кэширование и производительность",
        "Масштабирование системы"
      ]
    },
    "api": {
      title: "API Reference",
      description: "Полное описание всех API endpoints",
      items: [
        "Аутентификация и авторизация",
        "REST API endpoints",
        "GraphQL схема",
        "WebSocket соединения",
        "Примеры запросов и ответов"
      ]
    },
    "deployment": {
      title: "Deployment",
      description: "Процессы развертывания и CI/CD",
      items: [
        "CI/CD pipeline",
        "Staging и Production окружения",
        "Процесс релиза",
        "Rollback стратегия",
        "Мониторинг после деплоя"
      ]
    },
    "security": {
      title: "Безопасность",
      description: "Правила и best practices по безопасности",
      items: [
        "Аутентификация пользователей",
        "Управление секретами",
        "HTTPS и сертификаты",
        "Защита от OWASP Top 10",
        "Аудит безопасности"
      ]
    },
    "troubleshooting": {
      title: "Решение проблем",
      description: "Частые проблемы и способы их решения",
      items: [
        "Отладка производительности",
        "Логирование и мониторинг",
        "Частые ошибки и их решения",
        "Контакты для поддержки",
        "База знаний проблем"
      ]
    }
  };

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
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Главная
            </Link>
            <Link to="/documentation" className="text-foreground hover:text-primary transition-colors font-medium">
              Документация
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative flex">
        <aside className="w-64 border-r border-border/50 backdrop-blur-sm bg-card/30 h-[calc(100vh-73px)] sticky top-[73px] overflow-y-auto">
          <div className="p-6">
            <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
              Разделы
            </h2>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon name={section.icon as any} size={18} />
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-4">
                <Icon name="BookOpen" size={14} />
                Документация
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-3">
                {content[activeSection].title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {content[activeSection].description}
              </p>
            </div>

            {activeSection === "projects" ? (
              <div className="space-y-4">
                {projects.map((project, index) => {
                  const statusColors = {
                    active: "bg-primary/20 text-primary border-primary/30",
                    maintenance: "bg-accent/20 text-accent border-accent/30",
                    deprecated: "bg-muted/50 text-muted-foreground border-border",
                    development: "bg-secondary/20 text-secondary border-secondary/30"
                  };
                  const statusLabels = {
                    active: "Активный",
                    maintenance: "Поддержка",
                    deprecated: "Устарел",
                    development: "Разработка"
                  };
                  return (
                    <div
                      key={index}
                      className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon name="FolderGit2" size={20} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {project.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{project.tech}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status as keyof typeof statusColors]}`}>
                          {statusLabels[project.status as keyof typeof statusLabels]}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">{project.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="Users" size={16} />
                          <span>{project.team}</span>
                        </div>
                        <button className="ml-auto px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-all flex items-center gap-2">
                          <Icon name="ExternalLink" size={14} />
                          Открыть
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-4">
                {content[activeSection].items.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {item}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Подробная информация и инструкции по теме "{item.toLowerCase()}". 
                          Включает примеры кода, схемы и практические рекомендации.
                        </p>
                      </div>
                      <Icon name="ChevronRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 p-6 rounded-xl border border-accent/30 bg-accent/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Нужна помощь?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Если у вас возникли вопросы или вы не нашли нужную информацию, обратитесь в службу поддержки или к старшим разработчикам.
                  </p>
                  <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all flex items-center gap-2">
                    <Icon name="MessageCircle" size={16} />
                    Связаться с поддержкой
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Documentation;