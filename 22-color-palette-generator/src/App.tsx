import React, { useState } from "react";
import "./styles.css";

type Color = string;

const generateRandomHexColor = (): Color => {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, "0")}`;
};

const generatePalette = (count: number = 5): Color[] => {
  return Array.from({ length: count }, () => generateRandomHexColor());
};

const App: React.FC = () => {
  const [palette, setPalette] = useState<Color[]>(generatePalette());

  const handleGenerate = () => {
    setPalette(generatePalette());
  };

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <div className="App">
      <h1>🎨 Color Palette Generator</h1>
      <div className="palette">
        {palette.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => copyToClipboard(color)}
            title="Click to copy"
          >
            <span>{color}</span>
          </div>
        ))}
      </div>
      <button className="generate-btn" onClick={handleGenerate}>
        Generate New Palette
      </button>
    </div>
  );
};

export default App;
