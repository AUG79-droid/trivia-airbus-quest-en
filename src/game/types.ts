export type NodeType = 'center' | 'normal' | 'wedge' | 'rollAgain';

export interface BoardNode {
  id: number;
  type: NodeType;
  category: number | null;
  x: number;
  y: number;
}

export interface Player {
  id: number;
  name: string;
  color: string;
  position: number;
  wedges: boolean[];
  score: number;
  correctAnswers: number;
  totalAnswers: number;
}

export interface Question {
  id: number;
  category: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type GamePhase =
  | 'setup'
  | 'rolling'
  | 'selectingMove'
  | 'selectingCategory'
  | 'answering'
  | 'feedback'
  | 'victory';

export interface GameState {
  phase: GamePhase;
  players: Player[];
  currentPlayerIndex: number;
  dieValue: number | null;
  validDestinations: Record<number, number[]>;
  currentQuestion: Question | null;
  selectedCategory: number | null;
  lastAnswerCorrect: boolean | null;
  isFinalQuestion: boolean;
  usedQuestionIds: number[];
  statusMessage: string;
  turnNumber: number;
  newlyEarnedWedge: number | null;
}
