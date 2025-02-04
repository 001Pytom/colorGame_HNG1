function ColorBox({ targetColor }) {
  return (
    <div
      data-testid="colorBox"
      style={{
        backgroundColor: targetColor,
      }}
      className="colorBox"
    ></div>
  );
}

export default ColorBox;
