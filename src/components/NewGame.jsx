function NewGame({ resetGame }) {
  return (
    <button
      data-testid="newGameButton"
      onClick={resetGame}
      className="newGameButton"
      style={{ marginTop: "20px" }}
    >
      New Game
    </button>
  );
}

export default NewGame;
