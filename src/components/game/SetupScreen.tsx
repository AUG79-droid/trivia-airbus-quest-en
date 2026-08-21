import { useState } from 'react';
import { CATEGORY_COLORS, CATEGORY_SHORT_NAMES, PLAYER_COLORS } from '../../game/board';

interface SetupScreenProps {
  onStart: (names: string[]) => void;
}

export default function SetupScreen({ onStart }: SetupScreenProps) {
  const [count, setCount] = useState(1);
  const [names, setNames] = useState(['Participant 1', 'Participant 2', 'Participant 3', 'Participant 4']);

  const start = () => {
    const selectedNames = names
      .slice(0, count)
      .map((name, index) => name.trim() || `Participant ${index + 1}`);
    onStart(selectedNames);
  };

  return (
    <main className="setup-page">
      <section className="setup-hero">
        <div className="brand-mark" aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
        </div>
        <p className="eyebrow">LEARN · DECIDE · ADVANCE</p>
        <h1><span>TAS</span> Sustainability Quest</h1>
        <p className="setup-lead">
          Move across the board, apply sustainability criteria and collect all six mission badges.
        </p>

        <div className="mission-flow" aria-label="How to play">
          <div><strong>1</strong><span>Roll the die</span></div>
          <div><strong>2</strong><span>Choose your route</span></div>
          <div><strong>3</strong><span>Answer</span></div>
          <div><strong>4</strong><span>Earn badges</span></div>
          <div><strong>5</strong><span>Complete the final</span></div>
        </div>

        <div className="category-strip">
          {CATEGORY_SHORT_NAMES.map((name, index) => (
            <span key={name}><i style={{ backgroundColor: CATEGORY_COLORS[index] }} />{name}</span>
          ))}
        </div>
      </section>

      <section className="setup-card" aria-labelledby="setup-title">
        <div>
          <p className="eyebrow">SET UP THE GAME</p>
          <h2 id="setup-title">Who is playing?</h2>
          <p>Solo mode is designed for self-directed learning. Up to four people can also compete.</p>
        </div>

        <fieldset className="player-count">
          <legend>Number of participants</legend>
          <div>
            {[1, 2, 3, 4].map((number) => (
              <button
                type="button"
                key={number}
                onClick={() => setCount(number)}
                className={count === number ? 'selected' : ''}
                aria-pressed={count === number}
              >
                {number}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="player-inputs">
          {Array.from({ length: count }, (_, index) => (
            <label key={index}>
              <span className="player-color" style={{ backgroundColor: PLAYER_COLORS[index] }} />
              <span className="sr-only">Participant {index + 1} name</span>
              <input
                value={names[index]}
                maxLength={18}
                onChange={(event) => {
                  const next = [...names];
                  next[index] = event.target.value;
                  setNames(next);
                }}
              />
            </label>
          ))}
        </div>

        <button type="button" className="primary-button start-button" onClick={start}>Start mission</button>
        <p className="privacy-note">The game is stored only in this browser so that you can continue after reloading.</p>
      </section>
    </main>
  );
}
