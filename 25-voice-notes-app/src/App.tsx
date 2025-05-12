import React, { useState } from "react";
import VoiceRecorder from "./components/VoiceRecorder"; // Importing the VoiceRecorder component to handle voice input
import NoteList from "./components/NoteList"; // Importing the NoteList component to display saved notes
import "./styles.css"; // Importing the CSS styles

const App: React.FC = () => {
  // State to store an array of saved notes
  const [notes, setNotes] = useState<string[]>([]);

  // Function to save a new note (received from VoiceRecorder component)
  const handleSaveNote = (note: string) => {
    // Adding the new note to the existing notes array
    setNotes([...notes, note]);
  };

  // Function to delete a note by its index
  const handleDeleteNote = (index: number) => {
    // Filtering out the note to be deleted and updating the notes state
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Voice Notes App</h1> {/* Heading for the app */}
      <VoiceRecorder onSave={handleSaveNote} /> {/* VoiceRecorder component to record and transcribe voice notes */}
      <NoteList notes={notes} onDelete={handleDeleteNote} /> {/* NoteList component to display and delete saved notes */}
    </div>
  );
};

export default App;
