import React, { useState, useEffect } from "react";

// Define a type for the color format: either "hex" or "rgb"
type ColorType = "hex" | "rgb";

const RandomColorGenerator: React.FC = () => {
  // State to track the selected color format, default is "hex"
  const [ColorType, setColorType] = useState<ColorType>("hex");

  // State to track the current color value, default is black (#000000)
  const [color, setColor] = useState<string>("#000000");

  // Utility function to generate a random integer from 0 to max - 1
  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  // Function to generate a random HEX color code
  const GenerateHexColor = (): string => {
    const hexValues = "0123456789ABCDEF"; // Characters allowed in HEX color code
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += hexValues[getRandomInt(16)]; // Select random hex value for each character
    }
    return hex;
  };

  // Function to generate a random RGB color value
  const generateRgbColor = (): string => {
    const r = getRandomInt(256); // Random value between 0 and 255 for Red
    const g = getRandomInt(256); // Random value between 0 and 255 for Green
    const b = getRandomInt(256); // Random value between 0 and 255 for Blue
    return `rgb(${r}, ${g}, ${b})`; // Return formatted RGB string
  };

  // Function to generate a color based on the selected format (HEX or RGB)
  const generateColor = () => {
    // Generate color based on the current color type
    const newColor =
      ColorType === "hex" ? GenerateHexColor() : generateRgbColor();
    setColor(newColor); // Update the state with the new color
  };

  // Hook to regenerate the color whenever the ColorType changes
  useEffect(() => {
    generateColor();
  }, [ColorType]); // Dependency array ensures this runs when ColorType changes

  return (
    <div
      style={{
        height: "100vh", // Full screen height
        backgroundColor: color, // Set background color based on the current color
        color: "#fff", // Set text color to white for better contrast
        display: "flex", // Use flexbox for centering content
        flexDirection: "column", // Stack items vertically
        alignItems: "center", // Center content horizontally
        justifyContent: "center", // Center content vertically
        gap: "20px", // Space between elements
      }}
    >
      {/* Display the current color type (HEX or RGB) */}
      <h1>{ColorType === "hex" ? "HEX Color" : "RGB Color"}</h1>

      {/* Display the current color value */}
      <h2>{color}</h2>

      {/* Buttons to switch between HEX and RGB color modes */}
      <div>
        <button
          onClick={() => setColorType("hex")} // Set the color type to HEX
          style={{ marginRight: "10px" }}
        >
          HEX
        </button>

        <button onClick={() => setColorType("rgb")}>RGB</button>
      </div>

      {/* Button to generate a new random color */}
      <button onClick={generateColor} style={{ marginTop: "10px" }}>
        Generate Random Color
      </button>
    </div>
  );
};

export default RandomColorGenerator;
