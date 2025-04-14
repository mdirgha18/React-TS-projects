import React from "react";

interface VoiceSelectorProps {
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  setSelectedVoice: (voice: SpeechSynthesisVoice | null) => void;
}

const VoiceSelector: React.FC<VoiceSelectorProps> = ({
  voices,
  selectedVoice,
  setSelectedVoice,
}) => {
  return (
    <div className="voice-selector">
      <label>Choose Voice:</label>
      <select
        onChange={(e) =>
          setSelectedVoice(
            voices.find((voice) => voice.name === e.target.value) || null
          )
        }
        value={selectedVoice?.name || ""}
      >
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
