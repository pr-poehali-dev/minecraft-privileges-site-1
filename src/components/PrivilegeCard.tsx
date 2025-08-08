import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Command {
  name: string;
  description: string;
}

interface PrivilegeCardProps {
  name: string;
  price: string;
  color: string;
  description: string;
  features: string[];
  commands: Command[];
  icon: string;
}

export default function PrivilegeCard({
  name,
  price,
  color,
  description,
  features,
  commands,
  icon
}: PrivilegeCardProps) {
  const [showCommands, setShowCommands] = useState(false);

  return (
    <Card 
      className={`minecraft-card bg-gradient-to-b from-gray-800 to-gray-900 border-2 hover:scale-105 transition-all duration-300 cursor-pointer ${color}`}
      onMouseEnter={() => setShowCommands(true)}
      onMouseLeave={() => setShowCommands(false)}
    >
      <CardHeader className="text-center relative">
        <div className="minecraft-icon mb-4 mx-auto w-16 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center border-2 border-yellow-300">
          <Icon name={icon as any} size={32} className="text-yellow-900" />
        </div>
        <CardTitle className="text-2xl font-bold text-white minecraft-text">
          {name}
        </CardTitle>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
        <Badge className={`minecraft-badge text-xl font-bold py-1 px-4 ${color}`}>
          {price}
        </Badge>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-semibold text-green-400 minecraft-text">Возможности:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <Icon name="Check" size={16} className="text-green-400 mt-1 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {showCommands && (
          <div className="space-y-2 bg-black/50 p-3 rounded border border-green-500 minecraft-commands-panel">
            <h4 className="font-semibold text-yellow-400 minecraft-text flex items-center gap-2">
              <Icon name="Terminal" size={16} />
              Команды:
            </h4>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {commands.map((command, index) => (
                <div key={index} className="text-xs">
                  <code className="text-green-300 font-mono">/{command.name}</code>
                  <p className="text-gray-400 ml-2">{command.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <button className="minecraft-button w-full mt-4">
          КУПИТЬ ПРИВИЛЕГИЮ
        </button>
      </CardContent>
    </Card>
  );
}