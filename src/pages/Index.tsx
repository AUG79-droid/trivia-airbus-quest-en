import GameScreen from '../components/game/GameScreen';
import SetupScreen from '../components/game/SetupScreen';
import VictoryScreen from '../components/game/VictoryScreen';
import { useGameState } from '../hooks/useGameState';

export default function Index() {
  const game = useGameState();

  if (game.state.phase === 'setup') {
    return <SetupScreen onStart={game.startGame} />;
  }

  if (game.state.phase === 'victory') {
    const winner = game.state.players[game.state.currentPlayerIndex];
    return <VictoryScreen winner={winner} players={game.state.players} onPlayAgain={game.resetGame} />;
  }

  return (
    <GameScreen
      state={game.state}
      rollDie={game.rollDie}
      selectDestination={game.selectDestination}
      selectCategory={game.selectCategory}
      startFinal={game.startFinal}
      answerQuestion={game.answerQuestion}
      dismissFeedback={game.dismissFeedback}
      resetGame={game.resetGame}
    />
  );
}
