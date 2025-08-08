import PrivilegeCard from '../components/PrivilegeCard';
import SocialLinks from '../components/SocialLinks';

const privileges = [
  {
    name: 'VIP',
    price: '199₽',
    color: 'border-green-500',
    description: 'Базовая VIP привилегия',
    features: [
      'Цветной ник в чате',
      'Приватный регион 50x50',
      'Доступ к VIP командам',
      '5 точек дома (/sethome)',
      'Полет в лобби'
    ],
    commands: [
      { name: 'fly', description: 'Включить/выключить полет в лобби' },
      { name: 'sethome [название]', description: 'Установить точку дома' },
      { name: 'home [название]', description: 'Телепорт к дому' },
      { name: 'kit vip', description: 'Получить VIP набор предметов' },
      { name: 'workbench', description: 'Открыть верстак' }
    ],
    icon: 'Star'
  },
  {
    name: 'PREMIUM',
    price: '399₽',
    color: 'border-blue-500',
    description: 'Премиум привилегия для продвинутых игроков',
    features: [
      'Все возможности VIP',
      'Приватный регион 100x100',
      'Неограниченные точки дома',
      'Доступ к Premium командам',
      'Полет в выживании',
      'Защита от взрывов'
    ],
    commands: [
      { name: 'fly', description: 'Полет везде' },
      { name: 'god', description: 'Режим бога (неуязвимость)' },
      { name: 'heal', description: 'Восстановить здоровье' },
      { name: 'feed', description: 'Утолить голод' },
      { name: 'kit premium', description: 'Получить Premium набор' },
      { name: 'back', description: 'Вернуться к месту смерти' },
      { name: 'enderchest', description: 'Открыть эндер-сундук' }
    ],
    icon: 'Crown'
  },
  {
    name: 'ELITE',
    price: '699₽',
    color: 'border-purple-500',
    description: 'Элитная привилегия для истинных фанатов',
    features: [
      'Все возможности Premium',
      'Приватный регион 200x200',
      'Доступ к Elite командам',
      'Телепорт к игрокам',
      'Создание варпов',
      'Смена погоды и времени'
    ],
    commands: [
      { name: 'tp [ник]', description: 'Телепорт к игроку' },
      { name: 'tphere [ник]', description: 'Телепорт игрока к себе' },
      { name: 'setwarp [название]', description: 'Создать варп' },
      { name: 'warp [название]', description: 'Телепорт к варпу' },
      { name: 'weather [sun/rain]', description: 'Изменить погоду' },
      { name: 'time [день/ночь]', description: 'Изменить время' },
      { name: 'kit elite', description: 'Получить Elite набор' }
    ],
    icon: 'Gem'
  },
  {
    name: 'LEGEND',
    price: '999₽',
    color: 'border-yellow-500',
    description: 'Легендарная привилегия для избранных',
    features: [
      'Все возможности Elite',
      'Приватный регион 500x500',
      'Админские команды',
      'Креативный режим',
      'Бессмертие',
      'Управление сервером'
    ],
    commands: [
      { name: 'gamemode [режим]', description: 'Смена игрового режима' },
      { name: 'vanish', description: 'Режим невидимости' },
      { name: 'noclip', description: 'Прохождение сквозь блоки' },
      { name: 'speed [скорость]', description: 'Изменить скорость' },
      { name: 'give [предмет] [кол-во]', description: 'Выдать предмет' },
      { name: 'enchant [зачарование]', description: 'Зачаровать предмет' },
      { name: 'kit legend', description: 'Получить Legend набор' }
    ],
    icon: 'Trophy'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black minecraft-background">
      {/* Header */}
      <header className="py-16 text-center border-b-4 border-yellow-500">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 minecraft-title mb-4">
            🎮 MINECRAFT ПРИВИЛЕГИИ
          </h1>
          <p className="text-xl text-gray-300 minecraft-text">
            Выбери свой путь в мире приключений!
          </p>
          <div className="mt-8">
            <div className="minecraft-info-panel bg-black/50 border-2 border-green-500 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-green-400 font-bold minecraft-text">
                ✨ Наведи на привилегию чтобы увидеть команды!
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Privileges Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privileges.map((privilege, index) => (
              <PrivilegeCard
                key={index}
                {...privilege}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <SocialLinks />

      {/* Footer */}
      <footer className="bg-black border-t-4 border-yellow-500 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 minecraft-text">
            © 2024 Minecraft Server. Все права защищены.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Сайт создан с ❤️ для лучшего игрового опыта
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;