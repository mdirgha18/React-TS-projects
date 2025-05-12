import React, { useState } from "react";

// Functional component for recording voice and transcribing it
const VoiceRecorder: React.FC<{ onSave: (note: string) => void }> = ({
  onSave, // Callback function to save the transcribed text
}) => {
  // State to store the transcribed text from the voice input
  const [transcribedText, setTranscribedText] = useState<string>("");

  // State to track if recording is ongoing
  const [isRecording, setIsRecording] = useState<boolean>(false);

  // State to hold the SpeechRecognition instance
  const [recognition, setRecognition] = useState<any>(null);

  // Initialize the Speech Recognition API when the component mounts
  React.useEffect(() => {
    // Check for the available SpeechRecognition API (cross-browser support)
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    
    // Create an instance of SpeechRecognition
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.lang = "en-US"; // Set the language to English (US)
    recognitionInstance.interimResults = true; // Get results while speaking
    recognitionInstance.maxAlternatives = 1; // Limit alternatives to 1 for simplicity

    // Event handler when results are returned from the speech recognition service
    recognitionInstance.onresult = (event: any) => {
      // Get the transcript of the speech and update the state
      const currentTranscript = event.results[0][0].transcript;
      setTranscribedText(currentTranscript);
    };

    // Store the recognition instance in state
    setRecognition(recognitionInstance);
  }, []);

  // Function to start the recording
  const startRecording = () => {
    if (recognition) {
      recognition.start(); // Start the speech recognition
      setIsRecording(true); // Set the recording state to true
    }
  };

  // Function to stop the recording
  const stopRecording = () => {
    if (recognition) {
      recognition.stop(); // Stop the speech recognition
      setIsRecording(false); // Set the recording state to false
      onSave(transcribedText); // Save the transcribed text after stopping
    }
  };

  return (
    <div>
      {/* Button to toggle between starting and stopping the recording */}
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"} {/* Button text changes based on recording state */}
      </button>
      <div>
        {/* Displaying the transcribed text */}
        <p>Transcribed Text: {transcribedText}</p>
      </div>
    </div>
  );
};

export default VoiceRecorder;
