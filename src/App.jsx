import { useState } from "react";
import GameStatus from "./components/GameStatus";
import ColorBox from "./components/ColorBox";
import ColorOptions from "./components/colorOptions";
import NewGame from "./components/NewGame";

const colors = ["red", "blue", "green", "yellow", "black", "purple"];

function App() {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("");

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function handleGuess(color) {
    if (color === targetColor) {
      setStatus("Correct!");
      setScore(score + 1);
      setTargetColor(getRandomColor());
    } else {
      setStatus("Wrong! Try Again.");
    }
  }

  function resetGame() {
    setTargetColor(getRandomColor());
    setStatus("");
    setScore(0);
  }

  return (
    <div className="container">
      <p data-testid="gameInstructions" className="guess">
        Guess The Correct Color!🤔
      </p>
      <GameStatus score={score} status={status} resetGame={resetGame} />

      <ColorBox targetColor={targetColor} />

      <ColorOptions onGuess={handleGuess} colors={colors} />
      <NewGame resetGame={resetGame} />
    </div>
  );
}

export default App;
