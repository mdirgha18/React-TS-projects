import React, { useState, useEffect } from "react";
import TextInput from "./components/TextInput";
import VoiceSelector from "./components/VoiceSelector";
import SpeedControl from "./components/SpeedControl";
import PitchControl from "./components/PitchControl";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);
  const [rate, setRate] = useState<number>(1); // Speech speed
  const [pitch, setPitch] = useState<number>(1); // Speech pitch

  const voices = speechSynthesis.getVoices();

  const handleReadAloud = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice || voices[0]; // Use selected voice or default
    utterance.rate = rate;
    utterance.pitch = pitch;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="app">
      <h1>Text to Speech App</h1>
      <TextInput text={text} setText={setText} />
      <VoiceSelector
        voices={voices}
        selectedVoice={selectedVoice}
        setSelectedVoice={setSelectedVoice}
      />
      <SpeedControl rate={rate} setRate={setRate} />
      <PitchControl pitch={pitch} setPitch={setPitch} />
      <button onClick={handleReadAloud} disabled={!text}>
        Read Aloud
      </button>
    </div>
  );
};

export default App;
