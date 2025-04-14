import React from "react";
import Paragraph from "./components/Paragraph";
import ReadButton from "./components/ReadButton";

const App: React.FC = () => {
  // Predefined paragraph to be read aloud
  const paragraph = `Text-to-speech technology converts written text into spoken word using a computer-generated voice. 
                      This technology can be used for a wide range of applications, such as reading digital books, 
                      helping people with visual impairments, and even generating spoken content for virtual assistants.`;

  // Function to read the paragraph aloud
  const handleReadAloud = () => {
    const utterance = new SpeechSynthesisUtterance(paragraph);
    utterance.rate = 1; // Default speed
    utterance.pitch = 1; // Default pitch
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="app">
      <h1>Text-to-Speech App</h1>
      <Paragraph paragraph={paragraph} />
      <ReadButton onClick={handleReadAloud} />
    </div>
  );
};

export default App;
