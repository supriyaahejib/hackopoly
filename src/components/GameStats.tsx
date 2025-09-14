import React from 'react';
import { Brain, Trophy, User } from 'lucide-react';
import { Player } from '../types/game.ts';

interface GameStatsProps {
  player: Player;
}

const GameStats: React.FC<GameStatsProps> = ({ player }) => {
  return (
    <div className="absolute top-4 left-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-600 shadow-xl">
      <div className="flex items-center space-x-3 mb-3">
        <div 
          className="w-6 h-6 rounded-full border-2 border-white"
          style={{ backgroundColor: player.color }}
        />
        <div className="flex items-center space-x-2">
          <User size={18} className="text-gray-400" />
          <span className="text-white font-medium">{player.name}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Brain size={16} className="text-blue-400" />
          <span className="text-gray-300 text-sm">Knowledge Points:</span>
          <span className="text-white font-bold">{player.knowledgePoints}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Trophy size={16} className="text-yellow-400" />
          <span className="text-gray-300 text-sm">Position:</span>
          <span className="text-white font-bold">{player.position + 1}</span>
        </div>
      </div>
    </div>
  );
};

export default GameStats;