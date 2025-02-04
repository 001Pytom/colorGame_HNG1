import NewGame from "./NewGame";

function GameStatus({ score, status, resetGame }) {
  const statusClass =
    status === "Correct!"
      ? "correct"
      : status === "Wrong! Try Again."
      ? "wrong"
      : "";
  return (
    <div>
      <p data-testid="gameStatus" className={statusClass}>
        {status}
      </p>

      {status === "Wrong! Try Again." && <NewGame resetGame={resetGame} />}

      <p data-testid="score">score:{score}</p>
    </div>
  );
}

export default GameStatus;
