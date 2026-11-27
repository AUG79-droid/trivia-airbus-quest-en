import { useState } from 'react';
import { CATEGORY_COLORS, CATEGORY_SHORT_NAMES, PLAYER_COLORS } from '../../game/board';

import { CLIMATE_MODE } from '../../game/climate';

interface SetupScreenProps {
  onStart: (names: string[]) => void;
}

export default function SetupScreen({ onStart }: SetupScreenProps) {
  const track = new URLSearchParams(window.location.search).get('track');
  const hasSelectedMode = track === 'general' || track === 'climate';
  const [startError, setStartError] = useState(false);
  const [count, setCount] = useState(1);
  const [names, setNames] = useState(['Participant 1', 'Participant 2', 'Participant 3', 'Participant 4']);

  const start = () => {
    const selectedNames = names
      .slice(0, count)
      .map((name, index) => name.trim() || `Participant ${index + 1}`);
    if (!hasSelectedMode) return;
    const handled = !document.dispatchEvent(new CustomEvent('sn-pilot:quest-start', {
      cancelable: true, detail: { start: () => onStart(selectedNames) }
    }));
    setStartError(!handled);
  };

  return (
    <main className="setup-page">
      <section className="setup-hero">
        <div className="brand-mark" aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
        </div>
        <p className="eyebrow">LEARN · DECIDE · ADVANCE</p>
        <h1><span>{CLIMATE_MODE ? "Climate Adaptation" : "Sustainability"}</span> Quest</h1>
        <p className="setup-lead">{CLIMATE_MODE ? "Practise hypothetical aerospace decisions about physical risks, product vulnerability, design, operations, extreme events and evidence. The game does not authorise technical or operational changes." : "Explore eco-design, operations, circularity, supply chain, governance and risk management through a six-category decision board. Earn all six learning badges."}</p>
        <section className="quest-mode-picker" aria-labelledby="mode-title">
          <h2 id="mode-title">1. Choose your game mode</h2>
          <p>Select one of the two games. Each has its own questions and assessments.</p>
          <div className="quest-mode-grid">
            <a data-testid="mode-general" href="?track=general" className={'quest-mode-option' + (track === 'general' ? ' active' : '')} aria-current={track === 'general' ? 'true' : undefined}>
              <span className="quest-mode-label">MODE 1</span>
              <strong>General sustainability</strong>
              <span>Eco-design, operations, circularity, supply, governance and risk.</span>
              <span className="quest-mode-cta">{track === 'general' ? '✓ Selected' : 'Choose this mode →'}</span>
            </a>
            <a data-testid="mode-climate" href="?track=climate" className={'quest-mode-option climate' + (track === 'climate' ? ' active' : '')} aria-current={track === 'climate' ? 'true' : undefined}>
              <span className="quest-mode-label">MODE 2</span>
              <strong>Climate adaptation</strong>
              <span>Physical risks, product resilience, design, operations and extreme events.</span>
              <span className="quest-mode-cta">{track === 'climate' ? '✓ Selected' : 'Choose this mode →'}</span>
            </a>
          </div>
          <p className="quest-mode-hint">180 questions per mode · 6 categories · 3 levels</p>
        </section>

        <div className="mission-flow" aria-label="How to play">
          <div><strong>1</strong><span>Roll the die</span></div>
          <div><strong>2</strong><span>Choose your route</span></div>
          <div><strong>3</strong><span>Answer</span></div>
          <div><strong>4</strong><span>Earn badges</span></div>
          <div><strong>5</strong><span>Complete the final</span></div>
        </div>

        <p className="setup-lead">180 questions · 30 per category · three levels. The game prioritises questions not yet answered in this browser and shuffles answer positions. Repetition occurs only when a category is exhausted in a game.</p>
        <div className="category-strip">
          {CATEGORY_SHORT_NAMES.map((name, index) => (
            <span key={name}><i style={{ backgroundColor: CATEGORY_COLORS[index] }} />{name}</span>
          ))}
        </div>
      </section>

      <section className="setup-card" aria-labelledby="setup-title">
        <div>
          <p className="eyebrow">2. SET UP THE GAME</p>
          <h2 id="setup-title">Who is playing?</h2>
          <p>Choose one to four participants. For individual learning measurement, play solo; with several players the assessment is shared.</p>
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

        <div className="quest-assessment-step">
          <p className="eyebrow">3. INITIAL ASSESSMENT</p>
          <h3>Before playing: 4 questions</h3>
          <p>Answer, review the corrections and start the game. At the end you will take a final assessment.</p>
          <button type="button" className="primary-button start-button" disabled={!hasSelectedMode} onClick={start}>Take initial assessment →</button>
          {!hasSelectedMode && <p className="quest-mode-hint">First select a game mode in step 1.</p>}
          {startError && <p role="alert">The assessment is unavailable. Reload the page and try again.</p>}
        </div>
        <p className="privacy-note">The game is stored only in this browser so that you can continue after reloading.</p>
      </section>
    </main>
  );
}
