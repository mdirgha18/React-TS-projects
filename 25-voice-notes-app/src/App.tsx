import React, { useState } from "react";
import VoiceRecorder from "./components/VoiceRecorder";
import NoteList from "./components/NoteList";
import "./styles.css";

const App: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);

  const handleSaveNote = (note: string) => {
    setNotes([...notes, note]);
  };

  const handleDeleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Voice Notes App</h1>
      <VoiceRecorder onSave={handleSaveNote} />
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
};

export default App;
