import React, { useState } from 'react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

interface Space {
  id: number;
  name: string;
  topic: string;
  color: string;
}

interface ClaudeQuestion {
  question: string;
  answer: string;
}

interface GameState {
  playerPosition: number;
  knowledgePoints: number;
  isRolling: boolean;
  showFlashcard: boolean;
  currentQuestion: ClaudeQuestion | null;
  dice1Value: number;
  dice2Value: number;
}

const spaces: Space[] = [
  { id: 0, name: "START", topic: "Begin Journey", color: "bg-green-500" },
  { id: 1, name: "Algorithms", topic: "Data Structures", color: "bg-blue-500" },
  { id: 2, name: "Variables", topic: "Programming Basics", color: "bg-purple-500" },
  // Add remaining spaces...
];

const Board3D: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    playerPosition: 0,
    knowledgePoints: 100,
    isRolling: false,
    showFlashcard: false,
    currentQuestion: null,
    dice1Value: 1,
    dice2Value: 1
  });

  const rollDice = async () => {
    if (gameState.isRolling) return;

    setGameState(prev => ({ ...prev, isRolling: true }));

    // Animate dice (optional)
    const rollDuration = 1500;
    const rollInterval = 100;
    const steps = rollDuration / rollInterval;

    for (let i = 0; i < steps; i++) {
      await new Promise(res => setTimeout(res, rollInterval));
      setGameState(prev => ({
        ...prev,
        dice1Value: Math.floor(Math.random() * 6) + 1,
        dice2Value: Math.floor(Math.random() * 6) + 1
      }));
    }

    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const totalMove = dice1 + dice2;
    const newPosition = (gameState.playerPosition + totalMove) % spaces.length;

    setGameState(prev => ({
      ...prev,
      isRolling: false,
      dice1Value: dice1,
      dice2Value: dice2,
      playerPosition: newPosition
    }));

    // Fetch Claude question for the new space
    fetchClaudeQuestion(spaces[newPosition].topic);
  };

  const fetchClaudeQuestion = async (topic: string) => {
    try {
      const res = await fetch(`http://localhost:4000/api/claude`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic })
      });
      const data: ClaudeQuestion = await res.json();
      setGameState(prev => ({
        ...prev,
        currentQuestion: data,
        showFlashcard: true
      }));
    } catch (err) {
      console.error("Failed to fetch Claude question:", err);
    }
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setGameState(prev => ({ ...prev, knowledgePoints: prev.knowledgePoints + 10 }));
    }
    setTimeout(() => setGameState(prev => ({ ...prev, showFlashcard: false, currentQuestion: null })), 800);
  };

  const getDiceIcon = (value: number) => [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6][value - 1];

  const getPositionStyle = (index: number) => {
    const spaceSize = 60;
    if (index <= 9) return { bottom: 0, left: `${index * spaceSize}px`, width: `${spaceSize}px`, height: `${spaceSize}px` };
    if (index <= 14) return { left: 0, bottom: `${(index - 9) * spaceSize}px`, width: `${spaceSize}px`, height: `${spaceSize}px` };
    if (index <= 18) return { top: 0, left: `${(index - 14) * spaceSize + spaceSize}px`, width: `${spaceSize}px`, height: `${spaceSize}px` };
    return { right: 0, top: `${(index - 18) * spaceSize}px`, width: `${spaceSize}px`, height: `${spaceSize}px` };
  };

  const getPlayerStyle = () => ({
    ...getPositionStyle(gameState.playerPosition),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100
  });

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 text-white w-full max-w-3xl">
        <div className="text-lg">Knowledge Points: <span className="font-bold text-green-400">{gameState.knowledgePoints}</span></div>
        <div className="text-lg">Position: <span className="font-bold">{spaces[gameState.playerPosition].name}</span></div>
      </div>

      {/* Board & Dice */}
      <div className="flex space-x-12">
        <div className="relative w-[600px] h-[600px] bg-gray-900 rounded-lg border-4 border-white/20 shadow-inner">
          {spaces.map(space => (
            <div key={space.id} className="absolute border-2 border-white/30 cursor-pointer flex flex-col justify-between p-1 text-xs"
                 style={getPositionStyle(space.id)}>
              <div className={`${space.color} h-3 rounded mb-1`}></div>
              <div className="font-bold text-center text-white">{space.name}</div>
            </div>
          ))}

          {/* Player token */}
          <div style={getPlayerStyle()} className="absolute transition-all duration-1000 ease-in-out">
            <div className="w-10 h-10 bg-red-600 rounded-full border-2 border-white shadow-lg"></div>
          </div>
        </div>

        {/* Dice */}
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={rollDice}
            disabled={gameState.isRolling}
            className="bg-gradient-to-r from-blue-700 to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-800 hover:to-purple-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {gameState.isRolling ? 'Rolling...' : 'Roll Dice'}
          </button>

          <div className="flex space-x-6">
            {[gameState.dice1Value, gameState.dice2Value].map((value, i) => {
              const DiceIcon = getDiceIcon(value);
              return (
                <div key={i} className="w-20 h-20 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <DiceIcon size={32} className="text-gray-800" />
                </div>
              );
            })}
          </div>

          <div className="text-white text-center text-xl font-bold">
            Total: {gameState.dice1Value + gameState.dice2Value}
          </div>
        </div>
      </div>

      {/* Flashcard Modal */}
      {gameState.showFlashcard && gameState.currentQuestion && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-center mb-4">{spaces[gameState.playerPosition].topic}</h3>
            <p className="text-center mb-4">{gameState.currentQuestion.question}</p>
            <div className="flex space-x-3">
              <button onClick={() => handleAnswer(true)} className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">Correct (+10)</button>
              <button onClick={() => handleAnswer(false)} className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">Incorrect</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Board3D;
