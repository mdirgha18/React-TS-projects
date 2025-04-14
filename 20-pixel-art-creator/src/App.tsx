import React, { useState } from "react";
import Pixel from "./components/Pixel";
import ColorPicker from "./components/ColorPicker";
import "./styles.css";

const DEFAULT_GRID_SIZE = 16;

const App: React.FC = () => {
  const [gridSize, setGridSize] = useState(DEFAULT_GRID_SIZE);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [pixels, setPixels] = useState<string[]>(
    Array(gridSize * gridSize).fill("#ffffff")
  );

  const paintPixel = (index: number) => {
    const newPixels = [...pixels];
    newPixels[index] = selectedColor;
    setPixels(newPixels);
  };

  const clearGrid = () => {
    setPixels(Array(gridSize * gridSize).fill("#ffffff"));
  };

  const handleGridSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value);
    if (!isNaN(newSize) && newSize > 0 && newSize <= 64) {
      setGridSize(newSize);
      setPixels(Array(newSize * newSize).fill("#ffffff"));
    }
  };

  return (
    <div className="app">
      <h2>🎨 Pixel Art Creator</h2>
      <ColorPicker color={selectedColor} onColorChange={setSelectedColor} />

      <div style={{ margin: "10px 0" }}>
        <label>
          Grid Size:{" "}
          <input
            type="number"
            value={gridSize}
            onChange={handleGridSizeChange}
            min={1}
            max={64}
          />
        </label>
        <button onClick={clearGrid}>Clear</button>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {pixels.map((color, index) => (
          <Pixel key={index} color={color} onClick={() => paintPixel(index)} />
        ))}
      </div>
    </div>
  );
};

export default App;
