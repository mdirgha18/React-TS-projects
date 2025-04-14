import React from "react";

interface PitchControlProps {
  pitch: number;
  setPitch: (pitch: number) => void;
}

const PitchControl: React.FC<PitchControlProps> = ({ pitch, setPitch }) => {
  return (
    <div className="pitch-control">
      <label>Pitch:</label>
      <input
        type="range"
        min="0"
        max="2"
        step="0.1"
        value={pitch}
        onChange={(e) => setPitch(parseFloat(e.target.value))}
      />
      <span>{pitch.toFixed(1)}</span>
    </div>
  );
};

export default PitchControl;
