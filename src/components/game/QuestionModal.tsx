import { CATEGORY_COLORS, CATEGORY_NAMES } from '../../game/board';
import { Question } from '../../game/types';

interface QuestionModalProps {
  question: Question;
  category: number;
  isFinal: boolean;
  onAnswer: (index: number) => void;
}

export default function QuestionModal({ question, category, isFinal, onAnswer }: QuestionModalProps) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="question-title">
      <div className="modal-card question-card">
        <div className="question-meta">
          <span className="category-dot" style={{ backgroundColor: CATEGORY_COLORS[category] }} />
          <span>{CATEGORY_NAMES[category]}</span>
          {isFinal && <strong>Final challenge</strong>}
        </div>
        <h2 id="question-title">{question.text}</h2>
        <p className="question-instruction">Select one answer. You will then see the explanation.</p>
        <div className="answer-list">
          {question.options.map((option, index) => (
            <button key={option} type="button" onClick={() => onAnswer(index)} className="answer-button">
              <span>{String.fromCharCode(65 + index)}</span>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
