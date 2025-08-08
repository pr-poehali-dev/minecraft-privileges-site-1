import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface Privilege {
  id: string;
  name: string;
  price: number;
  color: string;
  features: string[];
  commands: string[];
  popular?: boolean;
}

const privileges: Privilege[] = [
  {
    id: 'vip',
    name: 'VIP',
    price: 99,
    color: 'from-yellow-400 to-yellow-600',
    features: ['Приватные регионы', 'Телепортация /home', 'Цветной ник', 'Kit VIP каждый день'],
    commands: ['/home', '/sethome', '/kit vip', '/region claim', '/nick'],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 199,
    color: 'from-purple-400 to-purple-600',
    features: ['Полёт в лобби', 'Больше домов (5)', 'Приоритетный вход', 'Kit Premium', 'Доступ к /workbench'],
    commands: ['/fly', '/homes', '/kit premium', '/wb', '/priority'],
    popular: true,
  },
  {
    id: 'deluxe',
    name: 'Deluxe',
    price: 299,
    color: 'from-red-400 to-red-600',
    features: ['Полёт на выживании', 'Неограниченные дома', 'Креативный инвентарь', 'Kit Deluxe', 'Доступ к /god'],
    commands: ['/fly survival', '/sethome unlimited', '/ci', '/kit deluxe', '/god'],
  },
];

const socialLinks = [
  { name: 'Discord', icon: 'MessageCircle', url: '#', color: 'from-indigo-500 to-purple-600' },
  { name: 'VKontakte', icon: 'Users', url: '#', color: 'from-blue-500 to-blue-700' },
  { name: 'Telegram', icon: 'Send', url: '#', color: 'from-cyan-400 to-blue-500' },
];

const Index = () => {
  const [hoveredPrivilege, setHoveredPrivilege] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center">
            <h1 className="text-6xl font-black text-white mb-4 animate-float" style={{ fontFamily: 'Orbitron' }}>
              🎮 MINECRAFT ПРИВИЛЕГИИ
            </h1>
            <p className="text-xl text-green-300 mb-8 max-w-2xl mx-auto">
              Получи доступ к уникальным командам и возможностям на нашем сервере!
              Выбери свою привилегию и стань частью элитного сообщества игроков.
            </p>
          </div>
        </div>
      </header>

      {/* Privileges Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12" style={{ fontFamily: 'Orbitron' }}>
            ⭐ Выбери свою привилегию
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {privileges.map((privilege) => (
              <Card
                key={privilege.id}
                className={`privilege-card cursor-pointer ${
                  hoveredPrivilege === privilege.id ? 'ring-4 ring-green-400' : ''
                }`}
                onMouseEnter={() => setHoveredPrivilege(privilege.id)}
                onMouseLeave={() => setHoveredPrivilege(null)}
              >
                <CardHeader className="text-center relative">
                  {privilege.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold">
                      🔥 ПОПУЛЯРНОЕ
                    </Badge>
                  )}
                  
                  <div className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-r ${privilege.color} flex items-center justify-center mb-4 animate-float`}>
                    <Icon name="Crown" size={32} className="text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Orbitron' }}>
                    {privilege.name}
                  </CardTitle>
                  
                  <div className="text-3xl font-black text-green-400 mb-4">
                    {privilege.price} ₽
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-green-300 uppercase mb-3">Возможности:</h4>
                      <ul className="space-y-2">
                        {privilege.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <Icon name="Check" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {hoveredPrivilege === privilege.id && (
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/30 animate-accordion-down">
                        <h4 className="text-sm font-bold text-green-300 uppercase mb-3">Команды:</h4>
                        <div className="grid gap-1">
                          {privilege.commands.map((command, index) => (
                            <code key={index} className="bg-slate-900/80 px-2 py-1 rounded text-green-400 text-xs font-mono">
                              {command}
                            </code>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button className="w-full minecraft-button">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить привилегию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Networks */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12" style={{ fontFamily: 'Orbitron' }}>
            🌐 Присоединяйся к сообществу
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social) => (
              <Card key={social.name} className="bg-gradient-to-br from-slate-700 to-slate-900 border-slate-600 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                    <Icon name={social.icon as any} size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Orbitron' }}>
                    {social.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    Общайся с игроками, получай новости и участвуй в конкурсах
                  </p>
                  
                  <Button variant="outline" className="minecraft-button bg-transparent border-2">
                    Присоединиться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Icon name="Gamepad2" size={24} className="text-green-400" />
            <span className="text-white font-bold text-lg" style={{ fontFamily: 'Orbitron' }}>
              MinecraftServer.ru
            </span>
          </div>
          
          <p className="text-gray-400 text-sm">
            © 2024 Все права защищены. IP сервера: play.minecraftserver.ru
          </p>
          
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Правила</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Поддержка</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Донат</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;