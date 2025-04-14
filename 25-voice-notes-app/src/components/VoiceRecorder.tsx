import React, { useState } from "react";

const VoiceRecorder: React.FC<{ onSave: (note: string) => void }> = ({
  onSave,
}) => {
  const [transcribedText, setTranscribedText] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recognition, setRecognition] = useState<any>(null);

  // Initialize Speech Recognition
  React.useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.lang = "en-US";
    recognitionInstance.interimResults = true;
    recognitionInstance.maxAlternatives = 1;

    recognitionInstance.onresult = (event: any) => {
      const currentTranscript = event.results[0][0].transcript;
      setTranscribedText(currentTranscript);
    };

    setRecognition(recognitionInstance);
  }, []);

  // Start recording
  const startRecording = () => {
    if (recognition) {
      recognition.start();
      setIsRecording(true);
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
      onSave(transcribedText); // Save the note after stopping
    }
  };

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <div>
        <p>Transcribed Text: {transcribedText}</p>
      </div>
    </div>
  );
};

export default VoiceRecorder;
