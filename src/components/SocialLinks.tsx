import Icon from '@/components/ui/icon';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Discord',
    url: 'https://discord.gg/yourserver',
    icon: 'MessageCircle',
    color: 'hover:bg-purple-600'
  },
  {
    name: 'VK',
    url: 'https://vk.com/yourgroup',
    icon: 'Users',
    color: 'hover:bg-blue-600'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/yourchannel',
    icon: 'Send',
    color: 'hover:bg-blue-500'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@yourchannel',
    icon: 'Play',
    color: 'hover:bg-red-600'
  }
];

export default function SocialLinks() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white minecraft-text mb-4">
            🎮 НАШЕ СООБЩЕСТВО
          </h2>
          <p className="text-gray-400 text-lg">
            Присоединяйся к нашему дружному сообществу игроков!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`minecraft-social-card bg-gradient-to-b from-gray-700 to-gray-800 border-2 border-gray-600 rounded-lg p-6 text-center transition-all duration-300 hover:scale-105 ${social.color} group`}
            >
              <div className="minecraft-icon mb-4 mx-auto w-16 h-16 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center border-2 border-emerald-300">
                <Icon name={social.icon as any} size={32} className="text-emerald-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-white font-bold minecraft-text group-hover:text-yellow-300 transition-colors">
                {social.name}
              </h3>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="minecraft-info-panel bg-black/50 border-2 border-yellow-500 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-yellow-400 font-bold minecraft-text text-xl mb-4">
              📢 ВАЖНАЯ ИНФОРМАЦИЯ
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>🔹 IP сервера: <code className="text-green-400 font-mono">play.yourserver.com</code></p>
              <p>🔹 Версия: <code className="text-green-400 font-mono">1.20.x</code></p>
              <p>🔹 Онлайн: <span className="text-yellow-400 font-bold">24/7</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}