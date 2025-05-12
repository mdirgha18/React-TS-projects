import React, { useState, useEffect } from "react";
import TextInput from "./components/TextInput";
import VoiceSelector from "./components/VoiceSelector";
import SpeedControl from "./components/SpeedControl";
import PitchControl from "./components/PitchControl";

const App: React.FC = () => {
  // State to hold the input text
  const [text, setText] = useState<string>("");

  // State to hold the selected voice
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

  // State to control the speech rate (speed)
  const [rate, setRate] = useState<number>(1);

  // State to control the pitch of the voice
  const [pitch, setPitch] = useState<number>(1);

  // State to hold the list of available voices
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // useEffect ensures voices are loaded asynchronously when the component mounts
  useEffect(() => {
    const loadVoices = () => {
      const loadedVoices = speechSynthesis.getVoices();
      setVoices(loadedVoices);
      // Set the default voice if none selected
      if (!selectedVoice && loadedVoices.length > 0) {
        setSelectedVoice(loadedVoices[0]);
      }
    };

    // Some browsers load voices asynchronously
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }

    loadVoices(); // Initial call in case voices are already available
  }, [selectedVoice]);

  // Function to read the input text aloud
  const handleReadAloud = () => {
    const utterance = new SpeechSynthesisUtterance(text); // Create a new utterance from text
    utterance.voice = selectedVoice || voices[0]; // Set the selected or default voice
    utterance.rate = rate; // Apply the chosen speed
    utterance.pitch = pitch; // Apply the chosen pitch
    speechSynthesis.speak(utterance); // Speak the text
  };

  return (
    <div className="app">
      <h1>Text to Speech App</h1>
      {/* Input field for the user to enter text */}
      <TextInput text={text} setText={setText} />

      {/* Dropdown to select a voice */}
      <VoiceSelector
        voices={voices}
        selectedVoice={selectedVoice}
        setSelectedVoice={setSelectedVoice}
      />

      {/* Slider to control speed */}
      <SpeedControl rate={rate} setRate={setRate} />

      {/* Slider to control pitch */}
      <PitchControl pitch={pitch} setPitch={setPitch} />

      {/* Button to trigger speech synthesis */}
      <button onClick={handleReadAloud} disabled={!text}>
        Read Aloud
      </button>
    </div>
  );
};

export default App;
