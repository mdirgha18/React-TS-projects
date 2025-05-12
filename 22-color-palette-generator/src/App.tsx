// Importing necessary dependencies from React
import React, { useState } from "react";
import "./styles.css"; // Importing CSS file for styling

// Type alias for Color, which is a string representing a hex color code
type Color = string;

// Function to generate a random hex color code
const generateRandomHexColor = (): Color => {
  // Generating a random number and converting it to a hex string
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  // Ensuring the hex string is always 6 characters long
  return `#${hex.padStart(6, "0")}`;
};

// Function to generate an array of random colors (default is 5 colors)
const generatePalette = (count: number = 5): Color[] => {
  return Array.from({ length: count }, () => generateRandomHexColor());
};

const App: React.FC = () => {
  // State to hold the color palette
  const [palette, setPalette] = useState<Color[]>(generatePalette());

  // Handler to regenerate the color palette
  const handleGenerate = () => {
    setPalette(generatePalette());
  };

  // Function to copy the selected color to the clipboard and show an alert
  const copyToClipboard = (color: string) => {
    // Writing the color value to clipboard
    navigator.clipboard.writeText(color);
    // Alerting the user that the color has been copied
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <div className="App">
      <h1>🎨 Color Palette Generator</h1>
      {/* Displaying the color palette */}
      <div className="palette">
        {/* Mapping over each color in the palette array */}
        {palette.map((color, index) => (
          <div
            key={index} // Using the index as the key for each color box
            className="color-box"
            style={{ backgroundColor: color }} // Setting the background color of the color box
            onClick={() => copyToClipboard(color)} // Copy the color to clipboard on click
            title="Click to copy" // Tooltip to inform users they can click to copy
          >
            <span>{color}</span> {/* Displaying the color code text */}
          </div>
        ))}
      </div>
      {/* Button to regenerate the color palette */}
      <button className="generate-btn" onClick={handleGenerate}>
        Generate New Palette
      </button>
    </div>
  );
};

export default App; // Exporting the App component for use in other parts of the application
