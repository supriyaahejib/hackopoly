import React from 'react';
import BoardTile from './BoardTile';
import { Player, BoardSpace } from '../types/game.ts';

interface GameBoardProps {
  players: Player[];
  boardSpaces: BoardSpace[];
}

const GameBoard: React.FC<GameBoardProps> = ({ players, boardSpaces }) => {
  return (
    <div className="relative">
      {/* 3D Board Container */}
      <div 
        className="w-[600px] h-[600px] relative bg-gradient-to-br from-gray-900 to-gray-800 border-4 border-gray-600 shadow-2xl"
        style={{
          transform: 'perspective(1200px) rotateX(15deg) rotateY(-5deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border-2 border-gray-600 shadow-xl">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-2">
              HACKOPOLY
            </h1>
            <p className="text-gray-300 text-sm">Learn • Code • Conquer</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="absolute bottom-0 left-0 right-0 flex">
          {boardSpaces.slice(0, 10).map((space, index) => (
            <BoardTile
              key={space.id}
              space={space}
              players={players.filter(p => p.position === space.id)}
              position="bottom"
              index={index}
            />
          ))}
        </div>

        {/* Right Side */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col">
          {boardSpaces.slice(10, 20).map((space, index) => (
            <BoardTile
              key={space.id}
              space={space}
              players={players.filter(p => p.position === space.id)}
              position="right"
              index={index}
            />
          ))}
        </div>

        {/* Top Row */}
        <div className="absolute top-0 left-0 right-0 flex flex-row-reverse">
          {boardSpaces.slice(20, 30).map((space, index) => (
            <BoardTile
              key={space.id}
              space={space}
              players={players.filter(p => p.position === space.id)}
              position="top"
              index={index}
            />
          ))}
        </div>

        {/* Left Side */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col-reverse">
          {boardSpaces.slice(30, 40).map((space, index) => (
            <BoardTile
              key={space.id}
              space={space}
              players={players.filter(p => p.position === space.id)}
              position="left"
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;