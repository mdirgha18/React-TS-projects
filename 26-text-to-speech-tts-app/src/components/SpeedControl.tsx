import React from "react";

// Interface for the SpeedControl component props
interface SpeedControlProps {
  rate: number; // The current rate (speed) value
  setRate: (rate: number) => void; // Function to update the rate value
}

const SpeedControl: React.FC<SpeedControlProps> = ({ rate, setRate }) => {
  return (
    <div className="speed-control"> {/* Wrapper div for the speed control UI */}
      <label>Speed:</label> {/* Label for the speed control */}
      <input
        type="range" // Range input to control the speed (rate)
        min="0.1" // Minimum value of the range (lowest speed)
        max="2" // Maximum value of the range (highest speed)
        step="0.1" // Step size for fine control of the speed
        value={rate} // The current value of the speed (controlled)
        onChange={(e) => setRate(parseFloat(e.target.value))} // Update the speed value when the slider is changed
      />
      <span>{rate.toFixed(1)}</span> {/* Display the current speed value with one decimal place */}
    </div>
  );
};

export default SpeedControl;
