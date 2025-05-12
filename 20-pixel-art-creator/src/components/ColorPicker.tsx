import React from "react";

// Define the Props type to specify the expected properties for the ColorPicker component
type Props = {
  color: string; // The current selected color passed as a prop
  onColorChange: (color: string) => void; // A callback function that will handle color changes
};

// ColorPicker functional component that receives color and onColorChange as props
const ColorPicker: React.FC<Props> = ({ color, onColorChange }) => {
  return (
    <div>
      {/* Label for the color picker */}
      <label>
        Select Color:{" "}
        {/* Color input field that allows the user to pick a color */}
        <input
          type="color" // HTML input of type color
          value={color} // The current selected color
          onChange={(e) => onColorChange(e.target.value)} // Trigger the onColorChange callback when the color is changed
        />
      </label>
    </div>
  );
};

// Export the ColorPicker component for use in other parts of the app
export default ColorPicker;
