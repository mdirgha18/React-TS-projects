import React from "react";

// Interface for the PitchControl component props
interface PitchControlProps {
  pitch: number; // The current pitch value
  setPitch: (pitch: number) => void; // Function to update the pitch value
}

const PitchControl: React.FC<PitchControlProps> = ({ pitch, setPitch }) => {
  return (
    <div className="pitch-control"> {/* Wrapper div for the pitch control UI */}
      <label>Pitch:</label> {/* Label for the pitch control */}
      <input
        type="range" // Range input to control pitch
        min="0" // Minimum value of the range (lowest pitch)
        max="2" // Maximum value of the range (highest pitch)
        step="0.1" // Step size for fine control
        value={pitch} // The current value of the pitch (controlled)
        onChange={(e) => setPitch(parseFloat(e.target.value))} // Update the pitch value when the slider is changed
      />
      <span>{pitch.toFixed(1)}</span> {/* Display the current pitch value with one decimal place */}
    </div>
  );
};

export default PitchControl;
