import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BoardSpace } from '../types/game';

interface FlashcardProps {
  space: BoardSpace;
  onClose: (answeredCorrectly: boolean) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ space, onClose }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCorrect = () => {
    onClose(true);
  };

  const handleIncorrect = () => {
    onClose(false);
  };

  const getCategoryColor = () => {
    switch (space.category) {
      case 'basics': return 'from-blue-500 to-blue-600';
      case 'data-structures': return 'from-purple-500 to-purple-600';
      case 'algorithms': return 'from-red-500 to-red-600';
      case 'oop': return 'from-yellow-500 to-yellow-600';
      case 'web-dev': return 'from-emerald-500 to-emerald-600';
      case 'backend': return 'from-orange-500 to-orange-600';
      case 'tools': return 'from-indigo-500 to-indigo-600';
      case 'best-practices': return 'from-pink-500 to-pink-600';
      case 'special': return 'from-emerald-500 to-emerald-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-r ${getCategoryColor()} p-4 text-white relative`}>
          <button
            onClick={() => onClose(false)}
            className="absolute top-2 right-2 p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl font-bold">{space.name}</h2>
          <p className="text-sm opacity-90 capitalize">
            {space.category.replace('-', ' ')}
          </p>
        </div>

        {/* Flashcard Content */}
        <div 
          className="relative h-64 cursor-pointer group"
          onClick={handleFlip}
          style={{ perspective: '1000px' }}
        >
          <div 
            className={`absolute inset-0 w-full h-full transition-transform duration-700 preserve-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front of card (Question) */}
            <div className="absolute inset-0 w-full h-full bg-gray-50 p-6 flex flex-col justify-center items-center text-center backface-hidden">
              <div className="mb-4">
                <span className="text-sm text-gray-500 font-medium">QUESTION</span>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                {space.question}
              </p>
              <div className="mt-6 text-sm text-gray-500">
                Click to reveal answer
              </div>
            </div>

            {/* Back of card (Answer) */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 p-6 flex flex-col justify-center items-center text-center backface-hidden rotate-y-180">
              <div className="mb-4">
                <span className="text-sm text-gray-500 font-medium">ANSWER</span>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                {space.answer}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {isFlipped && (
          <div className="p-4 bg-gray-50 flex space-x-3">
            <button
              onClick={handleIncorrect}
              className="flex-1 py-2 px-4 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg font-medium transition-colors"
            >
              Need More Study
            </button>
            <button
              onClick={handleCorrect}
              className="flex-1 py-2 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-lg font-medium transition-colors"
            >
              Got It! (+10 KP)
            </button>
          </div>
        )}
      </div>

      {/* ✅ Removed `jsx` from style */}
      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Flashcard;
