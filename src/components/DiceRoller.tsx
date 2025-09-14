import React, { useState } from 'react';

interface DiceRollerProps {
  onRoll: (total: number) => void;
  onStartRolling: () => void;
  disabled: boolean;
  isRolling: boolean;
}

const DiceRoller: React.FC<DiceRollerProps> = ({ onRoll, onStartRolling, disabled, isRolling }) => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const rollDice = () => {
    if (disabled) return;
    
    onStartRolling();
    
    // Animate dice rolling
    const rollAnimation = setInterval(() => {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
    }, 100);

    // Stop after 1 second and set final values
    setTimeout(() => {
      clearInterval(rollAnimation);
      const finalDice1 = Math.floor(Math.random() * 6) + 1;
      const finalDice2 = Math.floor(Math.random() * 6) + 1;
      setDice1(finalDice1);
      setDice2(finalDice2);
      onRoll(finalDice1 + finalDice2);
    }, 1000);
  };

  const getDiceFace = (value: number) => {
    const faces = {
      1: '⚀', 2: '⚁', 3: '⚂', 4: '⚃', 5: '⚄', 6: '⚅'
    };
    return faces[value as keyof typeof faces];
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-xl font-bold text-white mb-2">Roll to Move</h3>
      
      {/* Dice Container */}
      <div className="flex space-x-4">
        {/* Dice 1 */}
        <div 
          className={`w-16 h-16 bg-gradient-to-br from-white to-gray-200 rounded-lg border-2 border-gray-300 shadow-xl flex items-center justify-center text-3xl text-gray-800 transition-all duration-300 ${
            isRolling ? 'animate-spin' : 'hover:shadow-2xl'
          }`}
          style={{
            transform: 'perspective(800px) rotateX(25deg) rotateY(-15deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {getDiceFace(dice1)}
        </div>

        {/* Dice 2 */}
        <div 
          className={`w-16 h-16 bg-gradient-to-br from-white to-gray-200 rounded-lg border-2 border-gray-300 shadow-xl flex items-center justify-center text-3xl text-gray-800 transition-all duration-300 ${
            isRolling ? 'animate-spin' : 'hover:shadow-2xl'
          }`}
          style={{
            transform: 'perspective(800px) rotateX(25deg) rotateY(15deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {getDiceFace(dice2)}
        </div>
      </div>

      {/* Roll Button */}
      <button
        onClick={rollDice}
        disabled={disabled}
        className={`px-8 py-3 rounded-xl font-bold text-white transition-all duration-300 shadow-lg ${
          disabled 
            ? 'bg-gray-600 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:scale-105 active:scale-95'
        }`}
      >
        {isRolling ? 'Rolling...' : 'Roll Dice'}
      </button>

      {/* Last Roll Display */}
      {!isRolling && (dice1 !== 1 || dice2 !== 1) && (
        <div className="text-center">
          <p className="text-gray-300 text-sm">Last Roll:</p>
          <p className="text-white text-lg font-bold">{dice1 + dice2}</p>
        </div>
      )}
    </div>
  );
};

export default DiceRoller;