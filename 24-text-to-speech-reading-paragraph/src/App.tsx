// Importing necessary dependencies and components
import React from "react";
import Paragraph from "./components/Paragraph"; // Importing the Paragraph component
import ReadButton from "./components/ReadButton"; // Importing the ReadButton component

// Main functional component of the app
const App: React.FC = () => {
  // Predefined paragraph to be read aloud
  const paragraph = `Text-to-speech technology converts written text into spoken word using a computer-generated voice. 
                      This technology can be used for a wide range of applications, such as reading digital books, 
                      helping people with visual impairments, and even generating spoken content for virtual assistants.`;

  // Function to trigger the speech synthesis and read the paragraph aloud
  const handleReadAloud = () => {
    // Creating a new instance of SpeechSynthesisUtterance with the paragraph text
    const utterance = new SpeechSynthesisUtterance(paragraph);
    
    // Setting the speed of the speech (1 is the default speed)
    utterance.rate = 1;
    
    // Setting the pitch of the speech (1 is the default pitch)
    utterance.pitch = 1;
    
    // Using the speechSynthesis API to speak the utterance
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="app"> {/* Main app container */}
      <h1>Text-to-Speech App</h1> {/* Title of the app */}
      <Paragraph paragraph={paragraph} /> {/* Display the paragraph */}
      {/* Button to trigger the speech synthesis */}
      <ReadButton onClick={handleReadAloud} />
    </div>
  );
};

// Exporting the App component to be used in the root of the application
export default App;
