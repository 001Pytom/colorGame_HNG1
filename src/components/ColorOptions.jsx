function ColorOptions({ onGuess, colors }) {
  return (
    <div className="colorOptions">
      {colors
        .sort(() => Math.random() - 0.5)
        .map((color) => (
          <button
            key={color}
            data-testid="colorOption"
            style={{
              backgroundColor: color,
            }}
            className="colorOption"
            onClick={() => onGuess(color)}
          ></button>
        ))}
    </div>
  );
}

export default ColorOptions;
