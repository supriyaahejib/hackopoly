import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import DiceRoller from './components/DiceRoller';
import Flashcard from './components/Flashcard';
import GameStats from './components/GameStats.tsx';
import { GameState, Player } from './types/game';
import { boardSpaces } from './data/boardSpaces';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentPlayer: 0,
    players: [
      { id: 1, position: 0, knowledgePoints: 100, name: 'Player 1', color: '#3B82F6' }
    ],
    isRolling: false,
    showFlashcard: false,
    currentSpace: null
  });

  const handleDiceRoll = (total: number) => {
    const currentPlayer = gameState.players[gameState.currentPlayer];
    const newPosition = (currentPlayer.position + total) % 40;
    const spaceData = boardSpaces[newPosition];

    setGameState(prev => ({
      ...prev,
      players: prev.players.map((player, index) => 
        index === prev.currentPlayer 
          ? { ...player, position: newPosition }
          : player
      ),
      showFlashcard: true,
      currentSpace: spaceData,
      isRolling: false
    }));
  };

  const handleFlashcardClose = (answeredCorrectly: boolean) => {
    if (answeredCorrectly) {
      setGameState(prev => ({
        ...prev,
        players: prev.players.map((player, index) =>
          index === prev.currentPlayer
            ? { ...player, knowledgePoints: player.knowledgePoints + 10 }
            : player
        ),
        showFlashcard: false,
        currentSpace: null
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        showFlashcard: false,
        currentSpace: null
      }));
    }
  };

  const handleStartRolling = () => {
    setGameState(prev => ({ ...prev, isRolling: true }));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="relative w-full h-screen flex items-center justify-center p-4">
        {/* Game Stats */}
        <GameStats player={gameState.players[gameState.currentPlayer]} />
        
        {/* Main Game Board */}
        <div className="relative">
          <GameBoard 
            players={gameState.players} 
            boardSpaces={boardSpaces}
          />
          
          {/* Dice Roller */}
          <div className="absolute -right-48 top-1/2 transform -translate-y-1/2">
            <DiceRoller
              onRoll={handleDiceRoll}
              onStartRolling={handleStartRolling}
              disabled={gameState.isRolling || gameState.showFlashcard}
              isRolling={gameState.isRolling}
            />
          </div>
        </div>

        {/* Flashcard Modal */}
        {gameState.showFlashcard && gameState.currentSpace && (
          <Flashcard
            space={gameState.currentSpace}
            onClose={handleFlashcardClose}
          />
        )}
      </div>
    </div>
  );
}

export default App;
