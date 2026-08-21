import { CATEGORY_COLORS } from '../../game/board';
import { Player } from '../../game/types';

interface VictoryScreenProps {
  winner: Player;
  players: Player[];
  onPlayAgain: () => void;
}

function BadgeWheel({ wedges, size = 116 }: { wedges: boolean[]; size?: number }) {
  const radius = size / 2 - 5;
  const center = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label="All six badges completed">
      {wedges.map((earned, index) => {
        const first = ((index * 60 - 90) * Math.PI) / 180;
        const second = (((index + 1) * 60 - 90) * Math.PI) / 180;
        return (
          <path
            key={index}
            d={`M${center},${center} L${center + radius * Math.cos(first)},${center + radius * Math.sin(first)} A${radius},${radius} 0 0,1 ${center + radius * Math.cos(second)},${center + radius * Math.sin(second)} Z`}
            fill={earned ? CATEGORY_COLORS[index] : '#193149'}
            stroke="#eaf6ff"
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
}

export default function VictoryScreen({ winner, players, onPlayAgain }: VictoryScreenProps) {
  const accuracy = winner.totalAnswers > 0
    ? Math.round((winner.correctAnswers / winner.totalAnswers) * 100)
    : 0;
  const ranking = [...players].sort((a, b) => b.wedges.filter(Boolean).length - a.wedges.filter(Boolean).length || b.score - a.score);

  return (
    <main className="victory-page">
      <section className="victory-card">
        <p className="eyebrow">MISSION COMPLETED</p>
        <div className="victory-icon">✓</div>
        <h1>{winner.name} has reached the centre</h1>
        <p>All six badges have been collected and the final applied-sustainability challenge has been completed.</p>
        <div className="victory-wheel"><BadgeWheel wedges={winner.wedges} /></div>

        <div className="victory-stats">
          <div><strong>{winner.score}</strong><span>points</span></div>
          <div><strong>{accuracy}%</strong><span>accuracy</span></div>
          <div><strong>{winner.correctAnswers}</strong><span>correct answers</span></div>
        </div>

        {players.length > 1 && (
          <div className="final-ranking">
            <h2>Final ranking</h2>
            {ranking.map((player, index) => (
              <div key={player.id}>
                <span>{index + 1}</span>
                <i style={{ backgroundColor: player.color }} />
                <strong>{player.name}</strong>
                <small>{player.wedges.filter(Boolean).length}/6 · {player.score} pts</small>
              </div>
            ))}
          </div>
        )}

        <button type="button" className="primary-button" onClick={onPlayAgain}>Play again</button>
      </section>
    </main>
  );
}
