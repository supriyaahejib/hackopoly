export interface Player {
  id: number;
  position: number;
  knowledgePoints: number;
  name: string;
  color: string;
}

export interface BoardSpace {
  id: number;
  name: string;
  category: string;
  color: string;
  question: string;
  answer: string;
}

export interface GameState {
  currentPlayer: number;
  players: Player[];
  isRolling: boolean;
  showFlashcard: boolean;
  currentSpace: BoardSpace | null;
}