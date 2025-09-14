import React from 'react';
import { Player, BoardSpace } from '../types/game.ts';

interface BoardTileProps {
  space: BoardSpace;
  players: Player[];
  position: 'top' | 'right' | 'bottom' | 'left';
  index: number;
}

const BoardTile: React.FC<BoardTileProps> = ({ space, players, position }) => {
  const getTileClasses = () => {
    const baseClasses = "relative border border-gray-500 flex flex-col items-center justify-between p-2 text-xs font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105";
    
    if (position === 'top' || position === 'bottom') {
      return `${baseClasses} w-[60px] h-[80px]`;
    } else {
      return `${baseClasses} w-[80px] h-[60px] flex-row`;
    }
  };

  const getBackgroundColor = () => {
    if (space.category === 'special') return 'bg-gradient-to-br from-emerald-500 to-emerald-600';
    return `bg-gradient-to-br from-gray-700 to-gray-800 border-l-4`;
  };

  const getBorderColor = () => {
    switch (space.category) {
      case 'basics': return 'border-l-blue-500';
      case 'data-structures': return 'border-l-purple-500';
      case 'algorithms': return 'border-l-red-500';
      case 'oop': return 'border-l-yellow-500';
      case 'web-dev': return 'border-l-emerald-500';
      case 'backend': return 'border-l-orange-500';
      case 'tools': return 'border-l-indigo-500';
      case 'best-practices': return 'border-l-pink-500';
      default: return 'border-l-gray-500';
    }
  };

  const getTextRotation = () => {
    if (position === 'left') return 'rotate-90';
    if (position === 'right') return '-rotate-90';
    return '';
  };

  return (
    <div className={`${getTileClasses()} ${getBackgroundColor()} ${getBorderColor()}`}>
      {/* Space Name */}
      <div className={`text-center ${getTextRotation()}`}>
        <div className="font-bold text-[10px] leading-tight">
          {space.name}
        </div>
        {space.category !== 'special' && (
          <div className="text-[8px] text-gray-300 mt-1">
            {space.category.replace('-', ' ')}
          </div>
        )}
      </div>

      {/* Players on this space */}
      {players.length > 0 && (
        <div className="absolute -top-2 -right-2 flex space-x-1">
          {players.map(player => (
            <div
              key={player.id}
              className="w-4 h-4 rounded-full border-2 border-white shadow-lg animate-bounce"
              style={{ backgroundColor: player.color }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BoardTile;