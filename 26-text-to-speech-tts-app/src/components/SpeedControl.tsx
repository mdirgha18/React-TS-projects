import React from "react";

interface SpeedControlProps {
  rate: number;
  setRate: (rate: number) => void;
}

const SpeedControl: React.FC<SpeedControlProps> = ({ rate, setRate }) => {
  return (
    <div className="speed-control">
      <label>Speed:</label>
      <input
        type="range"
        min="0.1"
        max="2"
        step="0.1"
        value={rate}
        onChange={(e) => setRate(parseFloat(e.target.value))}
      />
      <span>{rate.toFixed(1)}</span>
    </div>
  );
};

export default SpeedControl;
