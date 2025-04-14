import React from "react";

type Props = {
  color: string;
  onColorChange: (color: string) => void;
};

const ColorPicker: React.FC<Props> = ({ color, onColorChange }) => {
  return (
    <div>
      <label>
        Select Color:{" "}
        <input
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default ColorPicker;
