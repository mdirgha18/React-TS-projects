import React from "react";

// Props interface for the VoiceSelector component
interface VoiceSelectorProps {
  voices: SpeechSynthesisVoice[]; // Array of available speech synthesis voices
  selectedVoice: SpeechSynthesisVoice | null; // Currently selected voice
  setSelectedVoice: (voice: SpeechSynthesisVoice | null) => void; // Function to update selected voice
}

const VoiceSelector: React.FC<VoiceSelectorProps> = ({
  voices,
  selectedVoice,
  setSelectedVoice,
}) => {
  return (
    <div className="voice-selector"> {/* Container for the voice selector */}
      <label>Choose Voice:</label>
      <select
        // When the selected option changes, update the selected voice
        onChange={(e) =>
          setSelectedVoice(
            voices.find((voice) => voice.name === e.target.value) || null
          )
        }
        // Set the currently selected voice (or empty string if none)
        value={selectedVoice?.name || ""}
      >
        {/* Map through each voice and create a dropdown option */}
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
    </div>
  );
};

export default VoiceSelector;
