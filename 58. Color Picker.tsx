
import React, { useState } from "react";

const App: React.FC = () => {
  // State to hold the selected color, default is black
  const [color, setColor] = useState<string>("#000000");

  // Handle color input change
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  // Style for the color display box
  const boxStyle: React.CSSProperties = {
    width: "200px",
    height: "100px",
    backgroundColor: color,
    marginTop: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Pick a color:</h2>
      <input type="color" value={color} onChange={handleColorChange} />
      <div style={boxStyle}></div>
      <p>Selected Color: {color}</p>
    </div>
  );
};

export default App;
