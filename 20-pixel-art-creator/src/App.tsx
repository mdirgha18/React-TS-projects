import React, { useState } from "react";
import Pixel from "./components/Pixel"; // Import Pixel component
import ColorPicker from "./components/ColorPicker"; // Import ColorPicker component
import "./styles.css"; // Import CSS for styling

// Set a default grid size of 16x16
const DEFAULT_GRID_SIZE = 16;

const App: React.FC = () => {
  // State to manage the grid size, selected color, and the grid of pixels
  const [gridSize, setGridSize] = useState(DEFAULT_GRID_SIZE);
  const [selectedColor, setSelectedColor] = useState("#000000"); // Default color is black
  const [pixels, setPixels] = useState<string[]>(
    Array(gridSize * gridSize).fill("#ffffff") // Initialize the grid with all pixels as white
  );

  // Function to paint a pixel when clicked
  const paintPixel = (index: number) => {
    const newPixels = [...pixels]; // Create a copy of the pixels array
    newPixels[index] = selectedColor; // Set the color of the clicked pixel
    setPixels(newPixels); // Update the state with the new pixels
  };

  // Function to clear the grid by resetting all pixels to white
  const clearGrid = () => {
    setPixels(Array(gridSize * gridSize).fill("#ffffff"));
  };

  // Function to handle the change in grid size input
  const handleGridSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value); // Parse the new grid size from the input
    // Ensure the grid size is between 1 and 64 (inclusive)
    if (!isNaN(newSize) && newSize > 0 && newSize <= 64) {
      setGridSize(newSize); // Set the new grid size
      setPixels(Array(newSize * newSize).fill("#ffffff")); // Reset pixels to white for the new grid size
    }
  };

  return (
    <div className="app">
      <h2>🎨 Pixel Art Creator</h2>
      {/* ColorPicker to change the selected color */}
      <ColorPicker color={selectedColor} onColorChange={setSelectedColor} />

      <div style={{ margin: "10px 0" }}>
        {/* Input to change the grid size */}
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
        {/* Button to clear the grid */}
        <button onClick={clearGrid}>Clear</button>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`, // Create a grid with the specified number of columns
          gridTemplateRows: `repeat(${gridSize}, 1fr)`, // Create a grid with the specified number of rows
        }}
      >
        {/* Map over the pixels array and render a Pixel component for each */}
        {pixels.map((color, index) => (
          <Pixel key={index} color={color} onClick={() => paintPixel(index)} />
        ))}
      </div>
    </div>
  );
};

export default App;
